import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno-realiza-practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno-realiza-practica.dto';
import { AlumnoService } from '../alumno/alumno.service';
import { PracticaService } from '../practica/practica.service';

@Injectable()
export class AlumnoRealizaPracticaService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica)
    private repository: Repository<AlumnoRealizaPractica>,
    private alumnoService: AlumnoService,
    private practicaService: PracticaService,
  ) {}

  async create(dto: CreateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica> {
    await this.alumnoService.findOne(dto.id_alumno);
    await this.practicaService.findOne(dto.id_practica);

    const registro = this.repository.create(dto);
    return this.repository.save(registro);
  }

  async findAll(): Promise<AlumnoRealizaPractica[]> {
    return this.repository.find({ relations: ['alumno', 'practica'] });
  }

  async findOne(id: number): Promise<AlumnoRealizaPractica> {
    const registro = await this.repository.findOne({
      where: { id },
      relations: ['alumno', 'practica'],
    });
    if (!registro) {
      throw new NotFoundException(`Registro no encontrado`);
    }
    return registro;
  }

  async update(id: number, dto: UpdateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica> {
    const registro = await this.findOne(id);
    this.repository.merge(registro, dto);
    return this.repository.save(registro);
  }

  async remove(id: number): Promise<{ message: string }> {
    const registro = await this.findOne(id);
    await this.repository.remove(registro);
    return { message: `Registro eliminado` };
  }

  async findByAlumno(id_alumno: number): Promise<AlumnoRealizaPractica[]> {
    return this.repository.find({
      where: { id_alumno },
      relations: ['alumno', 'practica'],
    });
  }

  async findByPractica(id_practica: number): Promise<AlumnoRealizaPractica[]> {
    return this.repository.find({
      where: { id_practica },
      relations: ['alumno', 'practica'],
    });
  }
}
