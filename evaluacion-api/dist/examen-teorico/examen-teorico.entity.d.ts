import { Profesor } from '../profesor/profesor.entity';
export declare class ExamenTeorico {
    id: number;
    titulo: string;
    numero_preguntas: number;
    fecha: Date;
    profesor: Profesor;
    id_profesor: number;
}
