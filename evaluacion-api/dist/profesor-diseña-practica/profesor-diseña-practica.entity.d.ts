import { Profesor } from '../profesor/profesor.entity';
import { Practica } from '../practica/practica.entity';
export declare class ProfesorDiseñaPractica {
    id: number;
    profesor: Profesor;
    id_profesor: number;
    practica: Practica;
    id_practica: number;
    fecha: Date;
}
