import { IsInt, IsNotEmpty, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class CreateAlumnoHaceExamenDto {
  @IsInt()
  @IsNotEmpty()
  id_alumno: number;

  @IsInt()
  @IsNotEmpty()
  id_examen_teorico: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  nota?: number;
}
