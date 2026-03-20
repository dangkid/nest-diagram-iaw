import { Repository } from 'typeorm';
import { ExamenTeorico } from './examen-teorico.entity';
import { CreateExamenTeorico } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeorico } from './dto/update-examen-teorico.dto';
import { ProfesorService } from '../profesor/profesor.service';
export declare class ExamenTeoricoService {
    private examenRepository;
    private profesorService;
    constructor(examenRepository: Repository<ExamenTeorico>, profesorService: ProfesorService);
    create(createExamenTeorico: CreateExamenTeorico): Promise<ExamenTeorico>;
    findAll(): Promise<ExamenTeorico[]>;
    findOne(id: number): Promise<ExamenTeorico>;
    update(id: number, updateExamenTeorico: UpdateExamenTeorico): Promise<ExamenTeorico>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByProfesor(id_profesor: number): Promise<ExamenTeorico[]>;
}
