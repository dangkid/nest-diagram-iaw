import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './alumno.entity';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  async findAll(): Promise<Alumno[]> {
    return this.alumnoService.findAll();
  }

  @Get('nif/:nif')
  async findByNif(@Param('nif') nif: string): Promise<Alumno | null> {
    return this.alumnoService.findByNif(nif);
  }

  @Get('grupo/:grupo')
  async findByGrupo(@Param('grupo') grupo: string): Promise<Alumno[]> {
    return this.alumnoService.findByGrupo(grupo);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Alumno> {
    return this.alumnoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAlumnoDto: UpdateAlumnoDto,
  ): Promise<Alumno> {
    return this.alumnoService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.alumnoService.remove(id);
  }
}
