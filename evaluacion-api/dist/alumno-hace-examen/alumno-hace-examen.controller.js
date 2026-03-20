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
exports.AlumnoHaceExamenController = void 0;
const common_1 = require("@nestjs/common");
const alumno_hace_examen_service_1 = require("./alumno-hace-examen.service");
const create_alumno_hace_examen_dto_1 = require("./dto/create-alumno-hace-examen.dto");
const update_alumno_hace_examen_dto_1 = require("./dto/update-alumno-hace-examen.dto");
let AlumnoHaceExamenController = class AlumnoHaceExamenController {
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
    async findByExamen(id_examen_teorico) {
        return this.service.findByExamen(id_examen_teorico);
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
exports.AlumnoHaceExamenController = AlumnoHaceExamenController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_hace_examen_dto_1.CreateAlumnoHaceExamenDto]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('alumno/:id_alumno'),
    __param(0, (0, common_1.Param)('id_alumno', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "findByAlumno", null);
__decorate([
    (0, common_1.Get)('examen/:id_examen_teorico'),
    __param(0, (0, common_1.Param)('id_examen_teorico', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "findByExamen", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_alumno_hace_examen_dto_1.UpdateAlumnoHaceExamenDto]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlumnoHaceExamenController.prototype, "remove", null);
exports.AlumnoHaceExamenController = AlumnoHaceExamenController = __decorate([
    (0, common_1.Controller)('alumno-hace-examen'),
    __metadata("design:paramtypes", [alumno_hace_examen_service_1.AlumnoHaceExamenService])
], AlumnoHaceExamenController);
//# sourceMappingURL=alumno-hace-examen.controller.js.map