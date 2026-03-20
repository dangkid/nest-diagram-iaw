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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorDiseñaPractica = void 0;
const typeorm_1 = require("typeorm");
const profesor_entity_1 = require("../profesor/profesor.entity");
const practica_entity_1 = require("../practica/practica.entity");
let ProfesorDiseñaPractica = class ProfesorDiseñaPractica {
    id;
    profesor;
    id_profesor;
    practica;
    id_practica;
    fecha;
};
exports.ProfesorDiseñaPractica = ProfesorDiseñaPractica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfesorDiseñaPractica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, { onDelete: 'CASCADE' }),
    __metadata("design:type", profesor_entity_1.Profesor)
], ProfesorDiseñaPractica.prototype, "profesor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProfesorDiseñaPractica.prototype, "id_profesor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => practica_entity_1.Practica, { onDelete: 'CASCADE' }),
    __metadata("design:type", practica_entity_1.Practica)
], ProfesorDiseñaPractica.prototype, "practica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProfesorDiseñaPractica.prototype, "id_practica", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProfesorDiseñaPractica.prototype, "fecha", void 0);
exports.ProfesorDiseñaPractica = ProfesorDiseñaPractica = __decorate([
    (0, typeorm_1.Entity)('profesor_diseña_practica')
], ProfesorDiseñaPractica);
//# sourceMappingURL=profesor-dise%C3%B1a-practica.entity.js.map