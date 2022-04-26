import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { PessoaModule } from './pessoa/pessoa.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ExameModule } from './exame/exame.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PessoaModule,
    CategoriaModule,
    ExameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
