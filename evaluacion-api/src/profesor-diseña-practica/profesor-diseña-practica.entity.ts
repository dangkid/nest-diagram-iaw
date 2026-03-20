import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Profesor } from '../profesor/profesor.entity';
import { Practica } from '../practica/practica.entity';

@Entity('profesor_diseña_practica')
export class ProfesorDiseñaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profesor, { onDelete: 'CASCADE' })
  profesor: Profesor;

  @Column()
  id_profesor: number;

  @ManyToOne(() => Practica, { onDelete: 'CASCADE' })
  practica: Practica;

  @Column()
  id_practica: number;

  @CreateDateColumn()
  fecha: Date;
}
