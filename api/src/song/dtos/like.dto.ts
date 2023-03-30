import { IsBoolean } from 'class-validator';

export class LikeDto {
  @IsBoolean()
  favorite: boolean;
}
