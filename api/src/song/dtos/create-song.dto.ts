import { IsNumber, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  title: string;

  @IsNumber()
  duration: number;

  @IsString()
  preview: string;

  @IsString()
  artist: string;

  @IsString()
  picture: string;
}
