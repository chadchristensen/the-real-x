import { ingredients } from './seed-data';
import type { Context } from '.keystone/types';

export async function insertSeedData(context: Context) {
    // Delete existing records for a clean seed
    await context.prisma.ingredient.deleteMany();
    console.log('Existing ingredients deleted');

    console.log(`🌱 Inserting Seed Data: ${ingredients.length} Ingredients`);
    for (const ingredient of ingredients) {
        console.log(`  🛍️ Adding Product: ${ingredient.name}`);
        await context.db.Ingredient.createOne({ data: ingredient });
    }
    console.log(`✅ Seed Data Inserted: ${ingredients.length} Ingredients`);
    console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
    process.exit();
}
