import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoHaceExamenService } from './alumno-hace-examen.service';
import { AlumnoHaceExamenController } from './alumno-hace-examen.controller';
import { AlumnoHaceExamenTeorico } from './alumno-hace-examen.entity';
import { AlumnoModule } from '../alumno/alumno.module';
import { ExamenTeoricoModule } from '../examen-teorico/examen-teorico.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlumnoHaceExamenTeorico]),
    AlumnoModule,
    ExamenTeoricoModule,
  ],
  controllers: [AlumnoHaceExamenController],
  providers: [AlumnoHaceExamenService],
  exports: [AlumnoHaceExamenService],
})
export class AlumnoHaceExamenModule {}
