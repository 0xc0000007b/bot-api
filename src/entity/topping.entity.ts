import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topping {
  constructor(name: string) {
    this.name = name;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
