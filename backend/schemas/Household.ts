import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, relationship } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Household: Lists.Household = list({
    access: allowAll,
    fields: {
        name: text({
            validation: { isRequired: true }
        }),
        members: relationship({
            ref: 'User.households',
            many: true
        })
    }
});