import { IsString, IsNotEmpty, IsInt, IsDate, Min, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateExamenTeorico {
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  titulo: string;

  @IsInt()
  @Min(1)
  numero_preguntas: number;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsInt()
  @IsNotEmpty()
  id_profesor: number;
}
