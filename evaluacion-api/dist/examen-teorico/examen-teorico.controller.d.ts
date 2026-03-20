import { ExamenTeoricoService } from './examen-teorico.service';
import { CreateExamenTeorico } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeorico } from './dto/update-examen-teorico.dto';
import { ExamenTeorico } from './examen-teorico.entity';
export declare class ExamenTeoricoController {
    private readonly examenService;
    constructor(examenService: ExamenTeoricoService);
    create(createExamenTeorico: CreateExamenTeorico): Promise<ExamenTeorico>;
    findAll(): Promise<ExamenTeorico[]>;
    findByProfesor(id_profesor: number): Promise<ExamenTeorico[]>;
    findOne(id: number): Promise<ExamenTeorico>;
    update(id: number, updateExamenTeorico: UpdateExamenTeorico): Promise<ExamenTeorico>;
    remove(id: number): Promise<void>;
}
