import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { SongDto } from 'src/song/dtos/song.dto';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}
  @Serialize(UserDto)
  @Get('/')
  getUser(@CurrentUser() user: UserEntity) {
    return user;
  }
  @Serialize(SongDto)
  @Get('/songs')
  getSongs(@CurrentUser() user: UserEntity) {
    return this.userService.getUserSongs(user.email);
  }
  @UseGuards(AdminGuard)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
  @UseGuards(AdminGuard)
  @Get('/all')
  getAll(@CurrentUser() user: UserEntity) {
    return this.userService.getAll(user.email);
  }
}
