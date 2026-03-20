"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenTeoricoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const examen_teorico_service_1 = require("./examen-teorico.service");
const examen_teorico_controller_1 = require("./examen-teorico.controller");
const examen_teorico_entity_1 = require("./examen-teorico.entity");
const profesor_module_1 = require("../profesor/profesor.module");
let ExamenTeoricoModule = class ExamenTeoricoModule {
};
exports.ExamenTeoricoModule = ExamenTeoricoModule;
exports.ExamenTeoricoModule = ExamenTeoricoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([examen_teorico_entity_1.ExamenTeorico]), profesor_module_1.ProfesorModule],
        controllers: [examen_teorico_controller_1.ExamenTeoricoController],
        providers: [examen_teorico_service_1.ExamenTeoricoService],
        exports: [examen_teorico_service_1.ExamenTeoricoService],
    })
], ExamenTeoricoModule);
//# sourceMappingURL=examen-teorico.module.js.map