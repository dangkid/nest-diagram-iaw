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
exports.AlumnoHaceExamenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumno_hace_examen_entity_1 = require("./alumno-hace-examen.entity");
const alumno_service_1 = require("../alumno/alumno.service");
const examen_teorico_service_1 = require("../examen-teorico/examen-teorico.service");
let AlumnoHaceExamenService = class AlumnoHaceExamenService {
    repository;
    alumnoService;
    examenService;
    constructor(repository, alumnoService, examenService) {
        this.repository = repository;
        this.alumnoService = alumnoService;
        this.examenService = examenService;
    }
    async create(dto) {
        await this.alumnoService.findOne(dto.id_alumno);
        await this.examenService.findOne(dto.id_examen_teorico);
        const registro = this.repository.create(dto);
        return this.repository.save(registro);
    }
    async findAll() {
        return this.repository.find({ relations: ['alumno', 'examen_teorico'] });
    }
    async findOne(id) {
        const registro = await this.repository.findOne({
            where: { id },
            relations: ['alumno', 'examen_teorico'],
        });
        if (!registro) {
            throw new common_1.NotFoundException(`Registro no encontrado`);
        }
        return registro;
    }
    async update(id, dto) {
        const registro = await this.findOne(id);
        this.repository.merge(registro, dto);
        return this.repository.save(registro);
    }
    async remove(id) {
        const registro = await this.findOne(id);
        await this.repository.remove(registro);
        return { message: `Registro eliminado` };
    }
    async findByAlumno(id_alumno) {
        return this.repository.find({
            where: { id_alumno },
            relations: ['alumno', 'examen_teorico'],
        });
    }
    async findByExamen(id_examen_teorico) {
        return this.repository.find({
            where: { id_examen_teorico },
            relations: ['alumno', 'examen_teorico'],
        });
    }
};
exports.AlumnoHaceExamenService = AlumnoHaceExamenService;
exports.AlumnoHaceExamenService = AlumnoHaceExamenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_hace_examen_entity_1.AlumnoHaceExamenTeorico)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        alumno_service_1.AlumnoService,
        examen_teorico_service_1.ExamenTeoricoService])
], AlumnoHaceExamenService);
//# sourceMappingURL=alumno-hace-examen.service.js.map