import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserEntity } from 'src/user/user.entity';
import { CreateSongDto } from './dtos/create-song.dto';
import { LikeDto } from './dtos/like.dto';
import { SongDto } from './dtos/song.dto';
import { SongService } from './song.service';

@UseGuards(AuthGuard)
@Controller('song')
export class SongController {
  constructor(private songService: SongService) {}
  @Serialize(SongDto)
  @Get('/find')
  getSong(@Query('name') name: string) {
    return this.songService.getSong(name.toString());
  }
  @Serialize(SongDto)
  @Post('/save')
  save(@Body() body: CreateSongDto, @CurrentUser() user: UserEntity) {
    return this.songService.save(body, user);
  }
  @Serialize(SongDto)
  @Patch('/like/:id')
  like(@Param('id') id: string, @Body() body: LikeDto) {
    return this.songService.like(id, body.favorite);
  }
  @Delete('/delete/:id')
  remove(@Param('id') id: string, @CurrentUser() user: UserEntity) {
    return this.songService.remove(id, user);
  }
}
