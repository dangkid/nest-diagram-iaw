import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alumnos')
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nif: string;

  @Column({ type: 'varchar', length: 50 })
  grupo: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido1: string;

  @Column({ type: 'varchar', length: 100 })
  apellido2: string;
}
