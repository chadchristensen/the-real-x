import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, integer } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const RecipeInstruction: Lists.RecipeInstruction = list({
    access: allowAll,
    fields: {
        description: text({
            validation: { isRequired: true }
        }),
        stepNumber: integer({
            validation: { isRequired: true, min: 1 }
        })
    }
});