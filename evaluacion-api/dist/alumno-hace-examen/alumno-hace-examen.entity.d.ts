import { Alumno } from '../alumno/alumno.entity';
import { ExamenTeorico } from '../examen-teorico/examen-teorico.entity';
export declare class AlumnoHaceExamenTeorico {
    id: number;
    alumno: Alumno;
    id_alumno: number;
    examen_teorico: ExamenTeorico;
    id_examen_teorico: number;
    fecha: Date;
    nota: number;
}
