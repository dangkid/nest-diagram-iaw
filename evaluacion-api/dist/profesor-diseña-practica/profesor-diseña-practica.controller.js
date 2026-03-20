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
exports.ProfesorDiseñaPracticaController = void 0;
const common_1 = require("@nestjs/common");
const profesor_dise_a_practica_service_1 = require("./profesor-dise\u00F1a-practica.service");
const create_profesor_dise_a_practica_dto_1 = require("./dto/create-profesor-dise\u00F1a-practica.dto");
const update_profesor_dise_a_practica_dto_1 = require("./dto/update-profesor-dise\u00F1a-practica.dto");
let ProfesorDiseñaPracticaController = class ProfesorDiseñaPracticaController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async findAll() {
        return this.service.findAll();
    }
    async findByProfesor(id_profesor) {
        return this.service.findByProfesor(id_profesor);
    }
    async findByPractica(id_practica) {
        return this.service.findByPractica(id_practica);
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async remove(id) {
        await this.service.remove(id);
    }
};
exports.ProfesorDiseñaPracticaController = ProfesorDiseñaPracticaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profesor_dise_a_practica_dto_1.CreateProfesorDiseñaPracticaDto]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('profesor/:id_profesor'),
    __param(0, (0, common_1.Param)('id_profesor', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "findByProfesor", null);
__decorate([
    (0, common_1.Get)('practica/:id_practica'),
    __param(0, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "findByPractica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_profesor_dise_a_practica_dto_1.UpdateProfesorDiseñaPracticaDto]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfesorDiseñaPracticaController.prototype, "remove", null);
exports.ProfesorDiseñaPracticaController = ProfesorDiseñaPracticaController = __decorate([
    (0, common_1.Controller)('profesor-diseña-practica'),
    __metadata("design:paramtypes", [profesor_dise_a_practica_service_1.ProfesorDiseñaPracticaService])
], ProfesorDiseñaPracticaController);
//# sourceMappingURL=profesor-dise%C3%B1a-practica.controller.js.map