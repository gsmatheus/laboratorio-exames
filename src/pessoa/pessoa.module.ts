import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { PessoaService } from './pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaRepository])],
  providers: [PessoaService],
})
export class PessoaModule {}
