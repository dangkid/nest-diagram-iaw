import { AlumnoRealizaPracticaService } from './alumno-realiza-practica.service';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno-realiza-practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno-realiza-practica.dto';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';
export declare class AlumnoRealizaPracticaController {
    private readonly service;
    constructor(service: AlumnoRealizaPracticaService);
    create(dto: CreateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica>;
    findAll(): Promise<AlumnoRealizaPractica[]>;
    findByAlumno(id_alumno: number): Promise<AlumnoRealizaPractica[]>;
    findByPractica(id_practica: number): Promise<AlumnoRealizaPractica[]>;
    findOne(id: number): Promise<AlumnoRealizaPractica>;
    update(id: number, dto: UpdateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica>;
    remove(id: number): Promise<void>;
}
