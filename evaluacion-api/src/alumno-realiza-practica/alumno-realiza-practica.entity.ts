import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Alumno } from '../alumno/alumno.entity';
import { Practica } from '../practica/practica.entity';

@Entity('alumno_realiza_practica')
export class AlumnoRealizaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno, { onDelete: 'CASCADE' })
  alumno: Alumno;

  @Column()
  id_alumno: number;

  @ManyToOne(() => Practica, { onDelete: 'CASCADE' })
  practica: Practica;

  @Column()
  id_practica: number;

  @CreateDateColumn()
  fecha: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  nota: number;
}
