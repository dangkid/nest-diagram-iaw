import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAlumnoDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  nif: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  grupo: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  apellido1: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  apellido2: string;
}
