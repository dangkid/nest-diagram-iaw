import { Repository } from 'typeorm';
import { AlumnoHaceExamenTeorico } from './alumno-hace-examen.entity';
import { CreateAlumnoHaceExamenDto } from './dto/create-alumno-hace-examen.dto';
import { UpdateAlumnoHaceExamenDto } from './dto/update-alumno-hace-examen.dto';
import { AlumnoService } from '../alumno/alumno.service';
import { ExamenTeoricoService } from '../examen-teorico/examen-teorico.service';
export declare class AlumnoHaceExamenService {
    private repository;
    private alumnoService;
    private examenService;
    constructor(repository: Repository<AlumnoHaceExamenTeorico>, alumnoService: AlumnoService, examenService: ExamenTeoricoService);
    create(dto: CreateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico>;
    findAll(): Promise<AlumnoHaceExamenTeorico[]>;
    findOne(id: number): Promise<AlumnoHaceExamenTeorico>;
    update(id: number, dto: UpdateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByAlumno(id_alumno: number): Promise<AlumnoHaceExamenTeorico[]>;
    findByExamen(id_examen_teorico: number): Promise<AlumnoHaceExamenTeorico[]>;
}
