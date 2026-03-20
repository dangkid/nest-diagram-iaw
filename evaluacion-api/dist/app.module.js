"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const alumno_module_1 = require("./alumno/alumno.module");
const profesor_module_1 = require("./profesor/profesor.module");
const practica_module_1 = require("./practica/practica.module");
const examen_teorico_module_1 = require("./examen-teorico/examen-teorico.module");
const alumno_realiza_practica_module_1 = require("./alumno-realiza-practica/alumno-realiza-practica.module");
const alumno_hace_examen_module_1 = require("./alumno-hace-examen/alumno-hace-examen.module");
const profesor_dise_a_practica_module_1 = require("./profesor-dise\u00F1a-practica/profesor-dise\u00F1a-practica.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
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
            alumno_module_1.AlumnoModule,
            profesor_module_1.ProfesorModule,
            practica_module_1.PracticaModule,
            examen_teorico_module_1.ExamenTeoricoModule,
            alumno_realiza_practica_module_1.AlumnoRealizaPracticaModule,
            alumno_hace_examen_module_1.AlumnoHaceExamenModule,
            profesor_dise_a_practica_module_1.ProfesorDiseñaPracticaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map