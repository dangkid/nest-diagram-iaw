import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './practica.entity';
export declare class PracticaController {
    private readonly practicaService;
    constructor(practicaService: PracticaService);
    create(createPracticaDto: CreatePracticaDto): Promise<Practica>;
    findAll(): Promise<Practica[]>;
    findByDificultad(dificultad: number): Promise<Practica[]>;
    findOne(id: number): Promise<Practica>;
    update(id: number, updatePracticaDto: UpdatePracticaDto): Promise<Practica>;
    remove(id: number): Promise<void>;
}
