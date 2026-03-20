import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AlumnoHaceExamenService } from './alumno-hace-examen.service';
import { CreateAlumnoHaceExamenDto } from './dto/create-alumno-hace-examen.dto';
import { UpdateAlumnoHaceExamenDto } from './dto/update-alumno-hace-examen.dto';
import { AlumnoHaceExamenTeorico } from './alumno-hace-examen.entity';

@Controller('alumno-hace-examen')
export class AlumnoHaceExamenController {
  constructor(private readonly service: AlumnoHaceExamenService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateAlumnoHaceExamenDto): Promise<AlumnoHaceExamenTeorico> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<AlumnoHaceExamenTeorico[]> {
    return this.service.findAll();
  }

  @Get('alumno/:id_alumno')
  async findByAlumno(@Param('id_alumno', ParseIntPipe) id_alumno: number): Promise<AlumnoHaceExamenTeorico[]> {
    return this.service.findByAlumno(id_alumno);
  }

  @Get('examen/:id_examen_teorico')
  async findByExamen(@Param('id_examen_teorico', ParseIntPipe) id_examen_teorico: number): Promise<AlumnoHaceExamenTeorico[]> {
    return this.service.findByExamen(id_examen_teorico);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<AlumnoHaceExamenTeorico> {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAlumnoHaceExamenDto,
  ): Promise<AlumnoHaceExamenTeorico> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
  }
}
