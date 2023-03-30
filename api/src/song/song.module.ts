import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { SongController } from './song.controller';
import { SongEntity } from './song.enitity';
import { SongService } from './song.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongEntity]), HttpModule, UserModule],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
