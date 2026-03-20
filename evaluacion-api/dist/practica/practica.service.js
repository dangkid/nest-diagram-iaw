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
exports.PracticaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const practica_entity_1 = require("./practica.entity");
let PracticaService = class PracticaService {
    practicaRepository;
    constructor(practicaRepository) {
        this.practicaRepository = practicaRepository;
    }
    async create(createPracticaDto) {
        const practica = this.practicaRepository.create(createPracticaDto);
        return this.practicaRepository.save(practica);
    }
    async findAll() {
        return this.practicaRepository.find();
    }
    async findOne(id) {
        const practica = await this.practicaRepository.findOne({ where: { id } });
        if (!practica) {
            throw new common_1.NotFoundException(`Práctica con ID ${id} no encontrada`);
        }
        return practica;
    }
    async update(id, updatePracticaDto) {
        const practica = await this.findOne(id);
        this.practicaRepository.merge(practica, updatePracticaDto);
        return this.practicaRepository.save(practica);
    }
    async remove(id) {
        const practica = await this.findOne(id);
        await this.practicaRepository.remove(practica);
        return { message: `Práctica con ID ${id} eliminada` };
    }
    async findByDificultad(dificultad) {
        return this.practicaRepository.find({ where: { dificultad } });
    }
};
exports.PracticaService = PracticaService;
exports.PracticaService = PracticaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(practica_entity_1.Practica)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PracticaService);
//# sourceMappingURL=practica.service.js.map