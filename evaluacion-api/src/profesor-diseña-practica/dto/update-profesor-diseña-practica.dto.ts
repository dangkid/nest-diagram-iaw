import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDiseñaPracticaDto } from './create-profesor-diseña-practica.dto';

export class UpdateProfesorDiseñaPracticaDto extends PartialType(CreateProfesorDiseñaPracticaDto) {}
