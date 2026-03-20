import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): object {
    return {
      nombre: '✅ API de Evaluación Académica',
      version: '1.0.0',
      descripcion: 'Sistema de evaluación de alumnos, prácticas y exámenes teóricos',
      endpoints: {
        alumnos: 'GET /alumno',
        profesores: 'GET /profesor',
        practicas: 'GET /practica',
        examenes: 'GET /examen-teorico',
        alumnoRealizaPractica: 'GET /alumno-realiza-practica',
        alumnoHaceExamen: 'GET /alumno-hace-examen',
        profesorDiseñaPractica: 'GET /profesor-diseña-practica',
      },
      mensaje: 'Usa Thunder Client o Postman para probar los endpoints',
    };
  }
}
