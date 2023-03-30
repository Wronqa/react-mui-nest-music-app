import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { UserService } from 'src/user/user.service';
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { SignInDto } from './dtos/singin.dto';

const _scrypt = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signup(data: CreateUserDto) {
    const { email, username, password } = data;

    const users = await this.userService.findOne(email);

    if (users)
      throw new BadRequestException('This email adress is already in use');

    const salt = randomBytes(32).toString('hex');
    const hash = (await _scrypt(password, salt, 32)) as Buffer;

    const result = `${salt}.${hash.toString('hex')}`;

    const user = await this.userService.create({
      email,
      username,
      password: result,
    });

    return user;
  }
  async signin(email: string, password: string) {
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new NotFoundException('User Not found');
    }
    const [salt, savedPassword] = user.password.split('.');

    const hashedPassword = (await _scrypt(password, salt, 32)) as Buffer;

    if (savedPassword === hashedPassword.toString('hex')) return user;
    else throw new BadRequestException('Invalid username or password');
  }
}
