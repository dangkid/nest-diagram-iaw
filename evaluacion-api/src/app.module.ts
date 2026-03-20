import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PracticaModule } from './practica/practica.module';
import { ExamenTeoricoModule } from './examen-teorico/examen-teorico.module';
import { AlumnoRealizaPracticaModule } from './alumno-realiza-practica/alumno-realiza-practica.module';
import { AlumnoHaceExamenModule } from './alumno-hace-examen/alumno-hace-examen.module';
import { ProfesorDiseñaPracticaModule } from './profesor-diseña-practica/profesor-diseña-practica.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '3306'),
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'evaluacion_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    AlumnoModule,
    ProfesorModule,
    PracticaModule,
    ExamenTeoricoModule,
    AlumnoRealizaPracticaModule,
    AlumnoHaceExamenModule,
    ProfesorDiseñaPracticaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
