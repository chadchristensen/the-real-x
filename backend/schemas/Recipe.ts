import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, relationship, select } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Recipe: Lists.Recipe = list({
    access: allowAll,
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
        notes: text(), //? Does this need to be a document type for wsiwyg
        ingredients: relationship({
            ref: 'RecipeIngredient',
            many: true
        }),
        instructions: relationship({
            ref: 'RecipeInstruction',
            many: true
        }),
        tags: relationship({
            ref: 'Tag',
            many: true
        })
        // TODO: Add relationships for ingredients, instructions, and tags
    }
});