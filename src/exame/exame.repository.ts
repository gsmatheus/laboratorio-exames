import { EntityRepository, Repository } from 'typeorm';
import { Exame } from './exame.entity';
import { CreateExameDto } from './dto/create-exame.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Exame)
export class ExameRepository extends Repository<Exame> {
  async createExame(createExameDto: CreateExameDto): Promise<Exame> {
    const { pessoa, categoria, url } = createExameDto;

    const exame = this.create();
    exame.pessoa = pessoa;
    exame.categoria = categoria;
    exame.url_pdf = url;

    try {
      await exame.save();

      delete exame.createdAt;
      delete exame.updatedAt;
      delete exame.pessoa.createdAt;
      delete exame.pessoa.status;
      delete exame.categoria.createdAt;

      return exame;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
