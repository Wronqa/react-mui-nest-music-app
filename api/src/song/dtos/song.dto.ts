import { Exclude, Expose, Type } from 'class-transformer';
import { AlbumDto } from './album.dto';
import { ArtistDto } from './artist.dto';

export class SongDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  duration: number;

  @Expose()
  preview: string;

  @Expose()
  link: string;

  @Expose()
  @Type(() => ArtistDto)
  artist: ArtistDto;

  @Expose()
  @Type(() => AlbumDto)
  album: AlbumDto;
}
