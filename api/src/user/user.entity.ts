import { SongEntity } from 'src/song/song.enitity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column()
  password: string;

  @ManyToMany(() => SongEntity)
  @JoinTable()
  songs: SongEntity[];
}
