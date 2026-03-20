import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoHaceExamenTeorico } from './alumno-hace-examen.entity';
import { CreateAlumnoHaceExamenDto } from './dto/create-alumno-hace-examen.dto';
import { UpdateAlumnoHaceExamenDto } from './dto/update-alumno-hace-examen.dto';
import { AlumnoService } from '../alumno/alumno.service';
import { ExamenTeoricoService } from '../examen-teorico/examen-teorico.service';

@Injectable()
export class AlumnoHaceExamenService {
  constructor(
    @InjectRepository(AlumnoHaceExamenTeorico)
    private repository: Repository<AlumnoHaceExamenTeorico>,
    private alumnoService: AlumnoService,
    private examenService: ExamenTeoricoService,
  ) {}

  async create(dto: CreateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico> {
    await this.alumnoService.findOne(dto.id_alumno);
    await this.examenService.findOne(dto.id_examen_teorico);

    const registro = this.repository.create(dto);
    return this.repository.save(registro);
  }

  async findAll(): Promise<AlumnoHaceExamenTeorico[]> {
    return this.repository.find({ relations: ['alumno', 'examen_teorico'] });
  }

  async findOne(id: number): Promise<AlumnoHaceExamenTeorico> {
    const registro = await this.repository.findOne({
      where: { id },
      relations: ['alumno', 'examen_teorico'],
    });
    if (!registro) {
      throw new NotFoundException(`Registro no encontrado`);
    }
    return registro;
  }

  async update(id: number, dto: UpdateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico> {
    const registro = await this.findOne(id);
    this.repository.merge(registro, dto);
    return this.repository.save(registro);
  }

  async remove(id: number): Promise<{ message: string }> {
    const registro = await this.findOne(id);
    await this.repository.remove(registro);
    return { message: `Registro eliminado` };
  }

  async findByAlumno(id_alumno: number): Promise<AlumnoHaceExamenTeorico[]> {
    return this.repository.find({
      where: { id_alumno },
      relations: ['alumno', 'examen_teorico'],
    });
  }

  async findByExamen(id_examen_teorico: number): Promise<AlumnoHaceExamenTeorico[]> {
    return this.repository.find({
      where: { id_examen_teorico },
      relations: ['alumno', 'examen_teorico'],
    });
  }
}
