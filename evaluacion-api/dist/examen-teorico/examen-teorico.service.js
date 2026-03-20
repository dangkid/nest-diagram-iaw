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
exports.ExamenTeoricoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const examen_teorico_entity_1 = require("./examen-teorico.entity");
const profesor_service_1 = require("../profesor/profesor.service");
let ExamenTeoricoService = class ExamenTeoricoService {
    examenRepository;
    profesorService;
    constructor(examenRepository, profesorService) {
        this.examenRepository = examenRepository;
        this.profesorService = profesorService;
    }
    async create(createExamenTeorico) {
        await this.profesorService.findOne(createExamenTeorico.id_profesor);
        const examen = this.examenRepository.create(createExamenTeorico);
        return this.examenRepository.save(examen);
    }
    async findAll() {
        return this.examenRepository.find({ relations: ['profesor'] });
    }
    async findOne(id) {
        const examen = await this.examenRepository.findOne({
            where: { id },
            relations: ['profesor'],
        });
        if (!examen) {
            throw new common_1.NotFoundException(`Examen Teórico con ID ${id} no encontrado`);
        }
        return examen;
    }
    async update(id, updateExamenTeorico) {
        const examen = await this.findOne(id);
        if (updateExamenTeorico && 'id_profesor' in updateExamenTeorico && updateExamenTeorico.id_profesor) {
            await this.profesorService.findOne(updateExamenTeorico.id_profesor);
        }
        this.examenRepository.merge(examen, updateExamenTeorico);
        return this.examenRepository.save(examen);
    }
    async remove(id) {
        const examen = await this.findOne(id);
        await this.examenRepository.remove(examen);
        return { message: `Examen Teórico con ID ${id} eliminado` };
    }
    async findByProfesor(id_profesor) {
        return this.examenRepository.find({
            where: { id_profesor },
            relations: ['profesor'],
        });
    }
};
exports.ExamenTeoricoService = ExamenTeoricoService;
exports.ExamenTeoricoService = ExamenTeoricoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(examen_teorico_entity_1.ExamenTeorico)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        profesor_service_1.ProfesorService])
], ExamenTeoricoService);
//# sourceMappingURL=examen-teorico.service.js.map