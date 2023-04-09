import { Exclude, Expose, Type } from 'class-transformer';

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
  picture: string;

  @Expose()
  artist: string;
}
