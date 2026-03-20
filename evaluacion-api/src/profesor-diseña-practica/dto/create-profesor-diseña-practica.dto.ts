import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProfesorDiseñaPracticaDto {
  @IsInt()
  @IsNotEmpty()
  id_profesor: number;

  @IsInt()
  @IsNotEmpty()
  id_practica: number;
}
