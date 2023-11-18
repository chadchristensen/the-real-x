import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Ingredient: Lists.Ingredient = list({
    access: allowAll,
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
    }
});