"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenTeoricoController = void 0;
const common_1 = require("@nestjs/common");
const examen_teorico_service_1 = require("./examen-teorico.service");
const create_examen_teorico_dto_1 = require("./dto/create-examen-teorico.dto");
const update_examen_teorico_dto_1 = require("./dto/update-examen-teorico.dto");
let ExamenTeoricoController = class ExamenTeoricoController {
    examenService;
    constructor(examenService) {
        this.examenService = examenService;
    }
    async create(createExamenTeorico) {
        return this.examenService.create(createExamenTeorico);
    }
    async findAll() {
        return this.examenService.findAll();
    }
    async findByProfesor(id_profesor) {
        return this.examenService.findByProfesor(id_profesor);
    }
    async findOne(id) {
        return this.examenService.findOne(id);
    }
    async update(id, updateExamenTeorico) {
        return this.examenService.update(id, updateExamenTeorico);
    }
    async remove(id) {
        await this.examenService.remove(id);
    }
};
exports.ExamenTeoricoController = ExamenTeoricoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_examen_teorico_dto_1.CreateExamenTeorico]),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('profesor/:id_profesor'),
    __param(0, (0, common_1.Param)('id_profesor', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "findByProfesor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_examen_teorico_dto_1.UpdateExamenTeorico]),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExamenTeoricoController.prototype, "remove", null);
exports.ExamenTeoricoController = ExamenTeoricoController = __decorate([
    (0, common_1.Controller)('examen-teorico'),
    __metadata("design:paramtypes", [examen_teorico_service_1.ExamenTeoricoService])
], ExamenTeoricoController);
//# sourceMappingURL=examen-teorico.controller.js.map