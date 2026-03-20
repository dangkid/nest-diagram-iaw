import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorDiseñaPracticaService } from './profesor-diseña-practica.service';
import { ProfesorDiseñaPracticaController } from './profesor-diseña-practica.controller';
import { ProfesorDiseñaPractica } from './profesor-diseña-practica.entity';
import { ProfesorModule } from '../profesor/profesor.module';
import { PracticaModule } from '../practica/practica.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfesorDiseñaPractica]),
    ProfesorModule,
    PracticaModule,
  ],
  controllers: [ProfesorDiseñaPracticaController],
  providers: [ProfesorDiseñaPracticaService],
  exports: [ProfesorDiseñaPracticaService],
})
export class ProfesorDiseñaPracticaModule {}
