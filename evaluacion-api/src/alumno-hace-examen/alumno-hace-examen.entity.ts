import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Alumno } from '../alumno/alumno.entity';
import { ExamenTeorico } from '../examen-teorico/examen-teorico.entity';

@Entity('alumno_hace_examen_teorico')
export class AlumnoHaceExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno, { onDelete: 'CASCADE' })
  alumno: Alumno;

  @Column()
  id_alumno: number;

  @ManyToOne(() => ExamenTeorico, { onDelete: 'CASCADE' })
  examen_teorico: ExamenTeorico;

  @Column()
  id_examen_teorico: number;

  @CreateDateColumn()
  fecha: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  nota: number;
}
