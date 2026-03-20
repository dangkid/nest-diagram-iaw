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
exports.AlumnoHaceExamenTeorico = void 0;
const typeorm_1 = require("typeorm");
const alumno_entity_1 = require("../alumno/alumno.entity");
const examen_teorico_entity_1 = require("../examen-teorico/examen-teorico.entity");
let AlumnoHaceExamenTeorico = class AlumnoHaceExamenTeorico {
    id;
    alumno;
    id_alumno;
    examen_teorico;
    id_examen_teorico;
    fecha;
    nota;
};
exports.AlumnoHaceExamenTeorico = AlumnoHaceExamenTeorico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AlumnoHaceExamenTeorico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_entity_1.Alumno, { onDelete: 'CASCADE' }),
    __metadata("design:type", alumno_entity_1.Alumno)
], AlumnoHaceExamenTeorico.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AlumnoHaceExamenTeorico.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => examen_teorico_entity_1.ExamenTeorico, { onDelete: 'CASCADE' }),
    __metadata("design:type", examen_teorico_entity_1.ExamenTeorico)
], AlumnoHaceExamenTeorico.prototype, "examen_teorico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AlumnoHaceExamenTeorico.prototype, "id_examen_teorico", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AlumnoHaceExamenTeorico.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], AlumnoHaceExamenTeorico.prototype, "nota", void 0);
exports.AlumnoHaceExamenTeorico = AlumnoHaceExamenTeorico = __decorate([
    (0, typeorm_1.Entity)('alumno_hace_examen_teorico')
], AlumnoHaceExamenTeorico);
//# sourceMappingURL=alumno-hace-examen.entity.js.map