import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ExamenTeoricoService } from './examen-teorico.service';
import { CreateExamenTeorico } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeorico } from './dto/update-examen-teorico.dto';
import { ExamenTeorico } from './examen-teorico.entity';

@Controller('examen-teorico')
export class ExamenTeoricoController {
  constructor(private readonly examenService: ExamenTeoricoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createExamenTeorico: CreateExamenTeorico): Promise<ExamenTeorico> {
    return this.examenService.create(createExamenTeorico);
  }

  @Get()
  async findAll(): Promise<ExamenTeorico[]> {
    return this.examenService.findAll();
  }

  @Get('profesor/:id_profesor')
  async findByProfesor(@Param('id_profesor', ParseIntPipe) id_profesor: number): Promise<ExamenTeorico[]> {
    return this.examenService.findByProfesor(id_profesor);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ExamenTeorico> {
    return this.examenService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExamenTeorico: UpdateExamenTeorico,
  ): Promise<ExamenTeorico> {
    return this.examenService.update(id, updateExamenTeorico);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.examenService.remove(id);
  }
}
