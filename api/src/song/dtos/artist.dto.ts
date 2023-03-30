import { Expose } from 'class-transformer';

export class ArtistDto {
  @Expose()
  name: string;
}
