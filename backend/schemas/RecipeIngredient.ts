import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, float, select } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const RecipeIngredient: Lists.RecipeIngredient = list({
    access: allowAll,
    fields: {
        ingredient: relationship({
            ref: 'Ingredient'
        }),
        quantity: float({ validation: { isRequired: true } }),
        unitOfMeasurement: select({
            options: [
                { label: 'Cup', value: 'CUP' },
                { label: 'Teaspoon', value: 'TEASPOON' },
                { label: 'Tablespoon', value: 'TABLESPOON' }
            ],
            validation: { isRequired: true }
        })
    }
});