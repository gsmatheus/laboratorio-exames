import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Exame } from '../exame/exame.entity';

@Entity()
@Unique(['nome'])
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  descricao;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Exame, (exame) => exame.categoria)
  exames: Exame[];
}
