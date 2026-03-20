import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorService {
    private profesorRepository;
    constructor(profesorRepository: Repository<Profesor>);
    create(createProfesorDto: CreateProfesorDto): Promise<Profesor>;
    findAll(): Promise<Profesor[]>;
    findOne(id: number): Promise<Profesor>;
    update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<Profesor>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByNif(nif: string): Promise<Profesor | null>;
}
