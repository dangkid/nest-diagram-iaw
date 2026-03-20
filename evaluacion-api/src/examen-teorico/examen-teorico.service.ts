import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenTeorico } from './examen-teorico.entity';
import { CreateExamenTeorico } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeorico } from './dto/update-examen-teorico.dto';
import { ProfesorService } from '../profesor/profesor.service';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico)
    private examenRepository: Repository<ExamenTeorico>,
    private profesorService: ProfesorService,
  ) {}

  async create(createExamenTeorico: CreateExamenTeorico): Promise<ExamenTeorico> {
    // Verificar que el profesor existe
    await this.profesorService.findOne(createExamenTeorico.id_profesor);
    
    const examen = this.examenRepository.create(createExamenTeorico);
    return this.examenRepository.save(examen);
  }

  async findAll(): Promise<ExamenTeorico[]> {
    return this.examenRepository.find({ relations: ['profesor'] });
  }

  async findOne(id: number): Promise<ExamenTeorico> {
    const examen = await this.examenRepository.findOne({ 
      where: { id },
      relations: ['profesor'],
    });
    if (!examen) {
      throw new NotFoundException(`Examen Teórico con ID ${id} no encontrado`);
    }
    return examen;
  }

  async update(id: number, updateExamenTeorico: UpdateExamenTeorico): Promise<ExamenTeorico> {
    const examen = await this.findOne(id);
    
    if (updateExamenTeorico && 'id_profesor' in updateExamenTeorico && updateExamenTeorico.id_profesor) {
      await this.profesorService.findOne(updateExamenTeorico.id_profesor);
    }
    
    this.examenRepository.merge(examen, updateExamenTeorico);
    return this.examenRepository.save(examen);
  }

  async remove(id: number): Promise<{ message: string }> {
    const examen = await this.findOne(id);
    await this.examenRepository.remove(examen);
    return { message: `Examen Teórico con ID ${id} eliminado` };
  }

  async findByProfesor(id_profesor: number): Promise<ExamenTeorico[]> {
    return this.examenRepository.find({ 
      where: { id_profesor },
      relations: ['profesor'],
    });
  }
}
