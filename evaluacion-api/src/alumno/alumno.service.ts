import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) {}

  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  async findAll(): Promise<Alumno[]> {
    return this.alumnoRepository.find();
  }

  async findOne(id: number): Promise<Alumno> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) {
      throw new NotFoundException(`Alumno con ID ${id} no encontrado`);
    }
    return alumno;
  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno> {
    const alumno = await this.findOne(id);
    this.alumnoRepository.merge(alumno, updateAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  async remove(id: number): Promise<{ message: string }> {
    const alumno = await this.findOne(id);
    await this.alumnoRepository.remove(alumno);
    return { message: `Alumno con ID ${id} eliminado` };
  }

  async findByNif(nif: string): Promise<Alumno | null> {
    return this.alumnoRepository.findOne({ where: { nif } });
  }

  async findByGrupo(grupo: string): Promise<Alumno[]> {
    return this.alumnoRepository.find({ where: { grupo } });
  }
}
