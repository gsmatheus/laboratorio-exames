import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { Categoria } from '../categoria/categoria.entity';

@Entity()
export class Exame extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  url_pdf;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.exames)
  pessoa: Pessoa;

  @ManyToOne(() => Categoria, (categoria) => categoria.exames)
  categoria: Categoria;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
