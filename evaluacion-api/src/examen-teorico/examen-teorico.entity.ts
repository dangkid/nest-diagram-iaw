import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ForeignKey } from 'typeorm';
import { Profesor } from '../profesor/profesor.entity';

@Entity('examenes_teoricos')
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  titulo: string;

  @Column({ type: 'int' })
  numero_preguntas: number;

  @Column({ type: 'datetime' })
  fecha: Date;

  @ManyToOne(() => Profesor, { onDelete: 'CASCADE' })
  profesor: Profesor;

  @Column()
  id_profesor: number;
}
