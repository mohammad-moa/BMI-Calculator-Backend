import {
  Column,
  Entity,
  Index,
} from 'typeorm';

import {
  BmiStatusEnum,
  GenderEnum,
  HeightEnum,
  WeightEnum,
} from '@modules/shared/enums';

import AbstractEntity from './abstract.entity';

@Entity({ name: 'bmi' })
export class BmiEntity extends AbstractEntity {
  @Column({
    name: 'gender',
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.MALE,
  })
  gender: GenderEnum;

  @Column({
    name: 'age',
    type: 'int2',
  })
  age: number;

  @Column({
    name: 'weight',
    type: 'float',
  })
  weight: number;

  @Column({
    name: 'weight_unit',
    type: 'enum',
    enum: WeightEnum,
    default: WeightEnum.KG,
  })
  weightUnit: WeightEnum;

  @Column({
    name: 'height',
    type: 'float',
  })
  height: number;

  @Column({
    name: 'height_unit',
    type: 'enum',
    enum: HeightEnum,
    default: HeightEnum.CM,
  })
  heightUnit: HeightEnum;

  @Column({
    name: 'bmi',
    type: 'float',
  })
  bmi: number;

  @Column({
    name: 'body_fat',
    type: 'float',
  })
  bodyFat: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: BmiStatusEnum,
    nullable: true,
  })
  status?: BmiStatusEnum;

  @Index()
  @Column({ name: 'guest_id', type: 'uuid' })
  guestId: string;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  userId?: string;
}
