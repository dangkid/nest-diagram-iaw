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
exports.ProfesorDiseñaPracticaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profesor_dise_a_practica_entity_1 = require("./profesor-dise\u00F1a-practica.entity");
const profesor_service_1 = require("../profesor/profesor.service");
const practica_service_1 = require("../practica/practica.service");
let ProfesorDiseñaPracticaService = class ProfesorDiseñaPracticaService {
    repository;
    profesorService;
    practicaService;
    constructor(repository, profesorService, practicaService) {
        this.repository = repository;
        this.profesorService = profesorService;
        this.practicaService = practicaService;
    }
    async create(dto) {
        await this.profesorService.findOne(dto.id_profesor);
        await this.practicaService.findOne(dto.id_practica);
        const registro = this.repository.create(dto);
        return this.repository.save(registro);
    }
    async findAll() {
        return this.repository.find({ relations: ['profesor', 'practica'] });
    }
    async findOne(id) {
        const registro = await this.repository.findOne({
            where: { id },
            relations: ['profesor', 'practica'],
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
    async findByProfesor(id_profesor) {
        return this.repository.find({
            where: { id_profesor },
            relations: ['profesor', 'practica'],
        });
    }
    async findByPractica(id_practica) {
        return this.repository.find({
            where: { id_practica },
            relations: ['profesor', 'practica'],
        });
    }
};
exports.ProfesorDiseñaPracticaService = ProfesorDiseñaPracticaService;
exports.ProfesorDiseñaPracticaService = ProfesorDiseñaPracticaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profesor_dise_a_practica_entity_1.ProfesorDiseñaPractica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        profesor_service_1.ProfesorService,
        practica_service_1.PracticaService])
], ProfesorDiseñaPracticaService);
//# sourceMappingURL=profesor-dise%C3%B1a-practica.service.js.map