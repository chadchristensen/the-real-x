import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, select } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Tag: Lists.Tag = list({
    access: allowAll,
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
        collection: select({
            // As the app grows into other areas such as finance, I will add other tags and drop the default
            options: [
                { label: 'Food', value: 'FOOD' }
            ],
            defaultValue: 'FOOD',
            validation: { isRequired: true },
        })
        // TODO: May need to add a 'visibility' field, with options such as PUBLIC, HOUSEHOLD, or PRIVATE
    }
});