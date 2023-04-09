import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dtos/create-song.dto';
import { SongEntity } from './song.enitity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SongService {
  constructor(
    private readonly httpService: HttpService,
    private userService: UserService,
    @InjectRepository(SongEntity) private songRepo: Repository<SongEntity>,
  ) {}
  async getSong(name: string) {
    return this.httpService.get(`https://api.deezer.com/search?q=${name}`).pipe(
      map((response) => {
        return {
          ...response.data.data[0],
          picture: response.data.data[0].album.cover,
          artist: response.data.data[0].artist.name,
        };
      }),
    );
  }

  async save(songDto: CreateSongDto, user: UserEntity) {
    const existingSongs = await this.userService.getUserSongs(user.email);
    const song = this.songRepo.create(songDto);

    await this.songRepo.save(song);

    user.songs = [...existingSongs, song];
    await this.userService.update(user);

    return song;
  }
  async remove(songId: string, user: UserEntity) {
    let existingSongs = await this.userService.getUserSongs(user.email);

    const songToDelete = existingSongs.find((song) => song.id === songId);
    if (!songToDelete) throw new NotFoundException('Song not found');
    existingSongs = existingSongs.filter((song) => song.id !== songId);

    await this.songRepo.remove(songToDelete);

    user.songs = existingSongs;

    await this.userService.update(user);
  }
  async like(id: string, favorite: boolean) {
    const song = await this.songRepo.findOneBy({ id });
    if (!song) throw new NotFoundException('Not found this song');
    song.favorite = favorite;

    return this.songRepo.save(song);
  }
}
