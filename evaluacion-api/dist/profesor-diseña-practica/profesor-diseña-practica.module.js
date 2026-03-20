"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorDiseñaPracticaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profesor_dise_a_practica_service_1 = require("./profesor-dise\u00F1a-practica.service");
const profesor_dise_a_practica_controller_1 = require("./profesor-dise\u00F1a-practica.controller");
const profesor_dise_a_practica_entity_1 = require("./profesor-dise\u00F1a-practica.entity");
const profesor_module_1 = require("../profesor/profesor.module");
const practica_module_1 = require("../practica/practica.module");
let ProfesorDiseñaPracticaModule = class ProfesorDiseñaPracticaModule {
};
exports.ProfesorDiseñaPracticaModule = ProfesorDiseñaPracticaModule;
exports.ProfesorDiseñaPracticaModule = ProfesorDiseñaPracticaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([profesor_dise_a_practica_entity_1.ProfesorDiseñaPractica]),
            profesor_module_1.ProfesorModule,
            practica_module_1.PracticaModule,
        ],
        controllers: [profesor_dise_a_practica_controller_1.ProfesorDiseñaPracticaController],
        providers: [profesor_dise_a_practica_service_1.ProfesorDiseñaPracticaService],
        exports: [profesor_dise_a_practica_service_1.ProfesorDiseñaPracticaService],
    })
], ProfesorDiseñaPracticaModule);
//# sourceMappingURL=profesor-dise%C3%B1a-practica.module.js.map