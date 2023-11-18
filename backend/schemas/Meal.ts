import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, integer, select, relationship } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Meal: Lists.Meal = list({
    access: allowAll,
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
        preparationTime: integer({
            validation: { min: 0 }
        }),
        cookingTime: integer({
            validation: { min: 0 }
        }),
        servings: integer({
            validation: { min: 0 }
        }),
        difficultyLevel: select({
            options: [
                { label: 'Easy', value: 'EASY' },
                { label: 'Medium', value: 'MEDIUM' },
                { label: 'Hard', value: 'HARD' },
            ],
            defaultValue: 'MEDIUM',
            validation: { isRequired: true },
        }),
        tags: relationship({
            ref: 'Tag',
            many: true
        })
    }
});