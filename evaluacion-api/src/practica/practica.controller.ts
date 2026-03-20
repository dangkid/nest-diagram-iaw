import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './practica.entity';

@Controller('practica')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPracticaDto: CreatePracticaDto): Promise<Practica> {
    return this.practicaService.create(createPracticaDto);
  }

  @Get()
  async findAll(): Promise<Practica[]> {
    return this.practicaService.findAll();
  }

  @Get('dificultad/:dificultad')
  async findByDificultad(@Param('dificultad', ParseIntPipe) dificultad: number): Promise<Practica[]> {
    return this.practicaService.findByDificultad(dificultad);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Practica> {
    return this.practicaService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePracticaDto: UpdatePracticaDto,
  ): Promise<Practica> {
    return this.practicaService.update(id, updatePracticaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.practicaService.remove(id);
  }
}
