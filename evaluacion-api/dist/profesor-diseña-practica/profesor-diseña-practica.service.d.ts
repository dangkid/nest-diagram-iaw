import { Repository } from 'typeorm';
import { ProfesorDiseñaPractica } from './profesor-diseña-practica.entity';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor-diseña-practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor-diseña-practica.dto';
import { ProfesorService } from '../profesor/profesor.service';
import { PracticaService } from '../practica/practica.service';
export declare class ProfesorDiseñaPracticaService {
    private repository;
    private profesorService;
    private practicaService;
    constructor(repository: Repository<ProfesorDiseñaPractica>, profesorService: ProfesorService, practicaService: PracticaService);
    create(dto: CreateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica>;
    findAll(): Promise<ProfesorDiseñaPractica[]>;
    findOne(id: number): Promise<ProfesorDiseñaPractica>;
    update(id: number, dto: UpdateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByProfesor(id_profesor: number): Promise<ProfesorDiseñaPractica[]>;
    findByPractica(id_practica: number): Promise<ProfesorDiseñaPractica[]>;
}
