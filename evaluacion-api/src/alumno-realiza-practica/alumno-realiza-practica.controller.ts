import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AlumnoRealizaPracticaService } from './alumno-realiza-practica.service';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno-realiza-practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno-realiza-practica.dto';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';

@Controller('alumno-realiza-practica')
export class AlumnoRealizaPracticaController {
  constructor(private readonly service: AlumnoRealizaPracticaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<AlumnoRealizaPractica[]> {
    return this.service.findAll();
  }

  @Get('alumno/:id_alumno')
  async findByAlumno(@Param('id_alumno', ParseIntPipe) id_alumno: number): Promise<AlumnoRealizaPractica[]> {
    return this.service.findByAlumno(id_alumno);
  }

  @Get('practica/:id_practica')
  async findByPractica(@Param('id_practica', ParseIntPipe) id_practica: number): Promise<AlumnoRealizaPractica[]> {
    return this.service.findByPractica(id_practica);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<AlumnoRealizaPractica> {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAlumnoRealizaPracticaDto,
  ): Promise<AlumnoRealizaPractica> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
  }
}
