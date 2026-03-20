import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenTeorico } from './create-examen-teorico.dto';

export class UpdateExamenTeorico extends PartialType(CreateExamenTeorico) {}
