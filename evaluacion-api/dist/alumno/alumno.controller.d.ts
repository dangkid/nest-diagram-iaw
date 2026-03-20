import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './alumno.entity';
export declare class AlumnoController {
    private readonly alumnoService;
    constructor(alumnoService: AlumnoService);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findAll(): Promise<Alumno[]>;
    findByNif(nif: string): Promise<Alumno | null>;
    findByGrupo(grupo: string): Promise<Alumno[]>;
    findOne(id: number): Promise<Alumno>;
    update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno>;
    remove(id: number): Promise<void>;
}
