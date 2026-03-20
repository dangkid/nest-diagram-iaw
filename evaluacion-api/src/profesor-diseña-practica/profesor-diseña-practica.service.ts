import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorDiseñaPractica } from './profesor-diseña-practica.entity';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor-diseña-practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor-diseña-practica.dto';
import { ProfesorService } from '../profesor/profesor.service';
import { PracticaService } from '../practica/practica.service';

@Injectable()
export class ProfesorDiseñaPracticaService {
  constructor(
    @InjectRepository(ProfesorDiseñaPractica)
    private repository: Repository<ProfesorDiseñaPractica>,
    private profesorService: ProfesorService,
    private practicaService: PracticaService,
  ) {}

  async create(dto: CreateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica> {
    await this.profesorService.findOne(dto.id_profesor);
    await this.practicaService.findOne(dto.id_practica);

    const registro = this.repository.create(dto);
    return this.repository.save(registro);
  }

  async findAll(): Promise<ProfesorDiseñaPractica[]> {
    return this.repository.find({ relations: ['profesor', 'practica'] });
  }

  async findOne(id: number): Promise<ProfesorDiseñaPractica> {
    const registro = await this.repository.findOne({
      where: { id },
      relations: ['profesor', 'practica'],
    });
    if (!registro) {
      throw new NotFoundException(`Registro no encontrado`);
    }
    return registro;
  }

  async update(id: number, dto: UpdateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica> {
    const registro = await this.findOne(id);
    this.repository.merge(registro, dto);
    return this.repository.save(registro);
  }

  async remove(id: number): Promise<{ message: string }> {
    const registro = await this.findOne(id);
    await this.repository.remove(registro);
    return { message: `Registro eliminado` };
  }

  async findByProfesor(id_profesor: number): Promise<ProfesorDiseñaPractica[]> {
    return this.repository.find({
      where: { id_profesor },
      relations: ['profesor', 'practica'],
    });
  }

  async findByPractica(id_practica: number): Promise<ProfesorDiseñaPractica[]> {
    return this.repository.find({
      where: { id_practica },
      relations: ['profesor', 'practica'],
    });
  }
}
