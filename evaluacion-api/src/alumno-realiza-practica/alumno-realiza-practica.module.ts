import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoRealizaPracticaService } from './alumno-realiza-practica.service';
import { AlumnoRealizaPracticaController } from './alumno-realiza-practica.controller';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';
import { AlumnoModule } from '../alumno/alumno.module';
import { PracticaModule } from '../practica/practica.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlumnoRealizaPractica]),
    AlumnoModule,
    PracticaModule,
  ],
  controllers: [AlumnoRealizaPracticaController],
  providers: [AlumnoRealizaPracticaService],
  exports: [AlumnoRealizaPracticaService],
})
export class AlumnoRealizaPracticaModule {}
