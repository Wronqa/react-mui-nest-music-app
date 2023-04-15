import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SongEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  preview: string;

  @Column()
  artist: string;

  @Column()
  picture: string;

  @Column({ default: false })
  isFavorite: boolean;
}
