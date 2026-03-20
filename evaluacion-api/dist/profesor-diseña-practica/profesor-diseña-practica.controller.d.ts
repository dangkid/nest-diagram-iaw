import { ProfesorDiseñaPracticaService } from './profesor-diseña-practica.service';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor-diseña-practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor-diseña-practica.dto';
import { ProfesorDiseñaPractica } from './profesor-diseña-practica.entity';
export declare class ProfesorDiseñaPracticaController {
    private readonly service;
    constructor(service: ProfesorDiseñaPracticaService);
    create(dto: CreateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica>;
    findAll(): Promise<ProfesorDiseñaPractica[]>;
    findByProfesor(id_profesor: number): Promise<ProfesorDiseñaPractica[]>;
    findByPractica(id_practica: number): Promise<ProfesorDiseñaPractica[]>;
    findOne(id: number): Promise<ProfesorDiseñaPractica>;
    update(id: number, dto: UpdateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica>;
    remove(id: number): Promise<void>;
}
