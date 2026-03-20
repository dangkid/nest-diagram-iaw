import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('practicas')
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  titulo: string;

  @Column({ type: 'int' })
  dificultad: number;
}
