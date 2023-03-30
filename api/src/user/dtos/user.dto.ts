import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  @Exclude()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Exclude()
  role: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
