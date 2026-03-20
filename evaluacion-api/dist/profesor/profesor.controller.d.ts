import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './profesor.entity';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    create(createProfesorDto: CreateProfesorDto): Promise<Profesor>;
    findAll(): Promise<Profesor[]>;
    findByNif(nif: string): Promise<Profesor | null>;
    findOne(id: number): Promise<Profesor>;
    update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<Profesor>;
    remove(id: number): Promise<void>;
}
