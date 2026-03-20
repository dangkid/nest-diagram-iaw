import { AlumnoHaceExamenService } from './alumno-hace-examen.service';
import { CreateAlumnoHaceExamenDto } from './dto/create-alumno-hace-examen.dto';
import { UpdateAlumnoHaceExamenDto } from './dto/update-alumno-hace-examen.dto';
import { AlumnoHaceExamenTeorico } from './alumno-hace-examen.entity';
export declare class AlumnoHaceExamenController {
    private readonly service;
    constructor(service: AlumnoHaceExamenService);
    create(dto: CreateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico>;
    findAll(): Promise<AlumnoHaceExamenTeorico[]>;
    findByAlumno(id_alumno: number): Promise<AlumnoHaceExamenTeorico[]>;
    findByExamen(id_examen_teorico: number): Promise<AlumnoHaceExamenTeorico[]>;
    findOne(id: number): Promise<AlumnoHaceExamenTeorico>;
    update(id: number, dto: UpdateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico>;
    remove(id: number): Promise<void>;
}
