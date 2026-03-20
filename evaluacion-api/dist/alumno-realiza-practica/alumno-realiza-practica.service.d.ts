import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno-realiza-practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno-realiza-practica.dto';
import { AlumnoService } from '../alumno/alumno.service';
import { PracticaService } from '../practica/practica.service';
export declare class AlumnoRealizaPracticaService {
    private repository;
    private alumnoService;
    private practicaService;
    constructor(repository: Repository<AlumnoRealizaPractica>, alumnoService: AlumnoService, practicaService: PracticaService);
    create(dto: CreateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica>;
    findAll(): Promise<AlumnoRealizaPractica[]>;
    findOne(id: number): Promise<AlumnoRealizaPractica>;
    update(id: number, dto: UpdateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByAlumno(id_alumno: number): Promise<AlumnoRealizaPractica[]>;
    findByPractica(id_practica: number): Promise<AlumnoRealizaPractica[]>;
}
