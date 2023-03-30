import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/user/dtos/user.dto';
import { UserEntity } from 'src/user/user.entity';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/singin.dto';

@Serialize(UserDto)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  async signup(@Body() body: CreateUserDto): Promise<UserDto> {
    const user = await this.authService.signup(body);
    return new UserDto({ ...user });
  }
  @Post('signin')
  async signin(@Body() body: SignInDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.email = user.email;

    return user;
  }

  @Get('/whoami')
  whoami(@CurrentUser() user: UserEntity) {
    return user;
  }
  @Post('/signout')
  signout(@Session() session: any) {
    session.email = null;
  }
}
