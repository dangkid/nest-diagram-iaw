"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoRealizaPracticaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_realiza_practica_service_1 = require("./alumno-realiza-practica.service");
const alumno_realiza_practica_controller_1 = require("./alumno-realiza-practica.controller");
const alumno_realiza_practica_entity_1 = require("./alumno-realiza-practica.entity");
const alumno_module_1 = require("../alumno/alumno.module");
const practica_module_1 = require("../practica/practica.module");
let AlumnoRealizaPracticaModule = class AlumnoRealizaPracticaModule {
};
exports.AlumnoRealizaPracticaModule = AlumnoRealizaPracticaModule;
exports.AlumnoRealizaPracticaModule = AlumnoRealizaPracticaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([alumno_realiza_practica_entity_1.AlumnoRealizaPractica]),
            alumno_module_1.AlumnoModule,
            practica_module_1.PracticaModule,
        ],
        controllers: [alumno_realiza_practica_controller_1.AlumnoRealizaPracticaController],
        providers: [alumno_realiza_practica_service_1.AlumnoRealizaPracticaService],
        exports: [alumno_realiza_practica_service_1.AlumnoRealizaPracticaService],
    })
], AlumnoRealizaPracticaModule);
//# sourceMappingURL=alumno-realiza-practica.module.js.map