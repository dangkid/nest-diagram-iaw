"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoHaceExamenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_hace_examen_service_1 = require("./alumno-hace-examen.service");
const alumno_hace_examen_controller_1 = require("./alumno-hace-examen.controller");
const alumno_hace_examen_entity_1 = require("./alumno-hace-examen.entity");
const alumno_module_1 = require("../alumno/alumno.module");
const examen_teorico_module_1 = require("../examen-teorico/examen-teorico.module");
let AlumnoHaceExamenModule = class AlumnoHaceExamenModule {
};
exports.AlumnoHaceExamenModule = AlumnoHaceExamenModule;
exports.AlumnoHaceExamenModule = AlumnoHaceExamenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([alumno_hace_examen_entity_1.AlumnoHaceExamenTeorico]),
            alumno_module_1.AlumnoModule,
            examen_teorico_module_1.ExamenTeoricoModule,
        ],
        controllers: [alumno_hace_examen_controller_1.AlumnoHaceExamenController],
        providers: [alumno_hace_examen_service_1.AlumnoHaceExamenService],
        exports: [alumno_hace_examen_service_1.AlumnoHaceExamenService],
    })
], AlumnoHaceExamenModule);
//# sourceMappingURL=alumno-hace-examen.module.js.map