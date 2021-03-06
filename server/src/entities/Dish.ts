import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Ingredient } from './Ingredient';

@Entity()
class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  recipe: string;

  @OneToMany(type => Ingredient, ingredient => ingredient.dish)
	ingredients: Ingredient[];
}

export { Dish };
