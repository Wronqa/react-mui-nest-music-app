import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  create(data: CreateUserDto) {
    console.log(data);
    const user = this.userRepo.create({ ...data });

    return this.userRepo.save(user);
  }
  async findOne(email: string) {
    if (!email) return null;
    return this.userRepo.findOneBy({ email });
  }
  async getUserSongs(email: string) {
    const [user] = await this.userRepo.find({
      where: { email },
      relations: {
        songs: true,
      },
    });
    return user.songs;
  }
  update(user: UserEntity) {
    return this.userRepo.save(user);
  }
  async remove(id: string) {
    const user = await this.userRepo.findOneBy({ id });

    if (!user) throw new NotFoundException('User does not exist');

    await this.userRepo.remove(user);
  }
  getAll(email: string) {
    return this.userRepo.findBy({ email: Not(email) });
  }
}
