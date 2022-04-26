import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExameRepository } from './exame.repository';
import { ExameService } from './exame.service';
import { PessoaModule } from '../pessoa/pessoa.module';
import { ExameController } from './exame.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExameRepository]), PessoaModule],
  providers: [ExameService],
  controllers: [ExameController],
})
export class ExameModule {}
