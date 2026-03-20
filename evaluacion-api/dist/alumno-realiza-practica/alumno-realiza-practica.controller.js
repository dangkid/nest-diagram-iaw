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
exports.AlumnoRealizaPracticaController = void 0;
const common_1 = require("@nestjs/common");
const alumno_realiza_practica_service_1 = require("./alumno-realiza-practica.service");
const create_alumno_realiza_practica_dto_1 = require("./dto/create-alumno-realiza-practica.dto");
const update_alumno_realiza_practica_dto_1 = require("./dto/update-alumno-realiza-practica.dto");
let AlumnoRealizaPracticaController = class AlumnoRealizaPracticaController {
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
    async findByAlumno(id_alumno) {
        return this.service.findByAlumno(id_alumno);
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
exports.AlumnoRealizaPracticaController = AlumnoRealizaPracticaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_realiza_practica_dto_1.CreateAlumnoRealizaPracticaDto]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('alumno/:id_alumno'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "findByAlumno", null);
__decorate([
    (0, common_1.Get)('practica/:id_practica'),
    __param(0, (0, common_1.Param)('id_practica', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "findByPractica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_alumno_realiza_practica_dto_1.UpdateAlumnoRealizaPracticaDto]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoRealizaPracticaController.prototype, "remove", null);
exports.AlumnoRealizaPracticaController = AlumnoRealizaPracticaController = __decorate([
    (0, common_1.Controller)('alumno-realiza-practica'),
    __metadata("design:paramtypes", [alumno_realiza_practica_service_1.AlumnoRealizaPracticaService])
], AlumnoRealizaPracticaController);
//# sourceMappingURL=alumno-realiza-practica.controller.js.map