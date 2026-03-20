import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
export declare class AlumnoService {
    private alumnoRepository;
    constructor(alumnoRepository: Repository<Alumno>);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findAll(): Promise<Alumno[]>;
    findOne(id: number): Promise<Alumno>;
    update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByNif(nif: string): Promise<Alumno | null>;
    findByGrupo(grupo: string): Promise<Alumno[]>;
}
