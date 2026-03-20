import { IsInt, IsNotEmpty, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class CreateAlumnoRealizaPracticaDto {
  @IsInt()
  @IsNotEmpty()
  id_alumno: number;

  @IsInt()
  @IsNotEmpty()
  id_practica: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  nota?: number;
}
