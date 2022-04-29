import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExameRepository } from './exame.repository';
import { CreateExameDto } from './dto/create-exame.dto';
import { Exame } from './exame.entity';

@Injectable()
export class ExameService {
  constructor(
    @InjectRepository(ExameRepository)
    private exameRepository: ExameRepository,
  ) {}

  async createExame(createExameDto: CreateExameDto): Promise<Exame> {
    return this.exameRepository.createExame(createExameDto);
  }
}
