import { CATEGORY } from './CATEGORY.enum';

export interface Hero {
  id: number;
  name: string;
  type?: CATEGORY;
  age?: number;
}
