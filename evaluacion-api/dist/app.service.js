"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getInfo() {
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
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map