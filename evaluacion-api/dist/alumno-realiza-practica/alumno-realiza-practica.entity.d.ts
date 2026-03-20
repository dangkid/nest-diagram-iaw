import { Alumno } from '../alumno/alumno.entity';
import { Practica } from '../practica/practica.entity';
export declare class AlumnoRealizaPractica {
    id: number;
    alumno: Alumno;
    id_alumno: number;
    practica: Practica;
    id_practica: number;
    fecha: Date;
    nota: number;
}
