import { Expose } from 'class-transformer';

export class AlbumDto {
  @Expose()
  cover: string;
}
