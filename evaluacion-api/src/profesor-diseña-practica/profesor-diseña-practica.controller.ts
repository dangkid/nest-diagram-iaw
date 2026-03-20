import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor-diseña-practica.service';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor-diseña-practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor-diseña-practica.dto';
import { ProfesorDiseñaPractica } from './profesor-diseña-practica.entity';

@Controller('profesor-diseña-practica')
export class ProfesorDiseñaPracticaController {
  constructor(private readonly service: ProfesorDiseñaPracticaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateProfesorDiseñaPracticaDto): Promise<ProfesorDiseñaPractica> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<ProfesorDiseñaPractica[]> {
    return this.service.findAll();
  }

  @Get('profesor/:id_profesor')
  async findByProfesor(@Param('id_profesor', ParseIntPipe) id_profesor: number): Promise<ProfesorDiseñaPractica[]> {
    return this.service.findByProfesor(id_profesor);
  }

  @Get('practica/:id_practica')
  async findByPractica(@Param('id_practica', ParseIntPipe) id_practica: number): Promise<ProfesorDiseñaPractica[]> {
    return this.service.findByPractica(id_practica);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProfesorDiseñaPractica> {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProfesorDiseñaPracticaDto,
  ): Promise<ProfesorDiseñaPractica> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
  }
}
