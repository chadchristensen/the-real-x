// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';
import { Household } from './Household';
import { Ingredient } from './Ingredient';
import { Meal } from './Meal';
import { Recipe } from './Recipe';
import { RecipeIngredient } from './RecipeIngredient';
import { RecipeInstruction } from './RecipeInstruction';
import { ScheduledMeal } from './ScheduledMeal';
import { Tag } from './Tag';
import { User } from './User';

export const lists: Lists = {
  User,
  Household,
  Ingredient,
  Meal,
  Recipe,
  RecipeIngredient,
  RecipeInstruction,
  ScheduledMeal,
  Tag,
};
