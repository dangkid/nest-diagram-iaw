import { IsString, IsNotEmpty, IsInt, Min, Max, Length } from 'class-validator';

export class CreatePracticaDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  titulo: string;

  @IsInt()
  @Min(1)
  @Max(10)
  dificultad: number;
}
