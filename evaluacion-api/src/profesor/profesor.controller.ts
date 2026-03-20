import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './profesor.entity';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProfesorDto: CreateProfesorDto): Promise<Profesor> {
    return this.profesorService.create(createProfesorDto);
  }

  @Get()
  async findAll(): Promise<Profesor[]> {
    return this.profesorService.findAll();
  }

  @Get('nif/:nif')
  async findByNif(@Param('nif') nif: string): Promise<Profesor | null> {
    return this.profesorService.findByNif(nif);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Profesor> {
    return this.profesorService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfesorDto: UpdateProfesorDto,
  ): Promise<Profesor> {
    return this.profesorService.update(id, updateProfesorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.profesorService.remove(id);
  }
}
