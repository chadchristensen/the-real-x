import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, password, timestamp, relationship } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const User: Lists.User = list({
    access: allowAll,
    fields: {
        // by adding isRequired, we enforce that every User should have a name
        //   if no name is provided, an error will be displayed
        //?: Do I need to split out name into first / last?
        name: text({ validation: { isRequired: true } }),
        email: text({
            validation: { isRequired: true },
            // by adding isIndexed: 'unique', we're saying that no user can have the same
            // email as another user - this may or may not be a good idea for your project
            isIndexed: 'unique',
        }),
        password: password({ validation: { isRequired: true } }),
        createdAt: timestamp({
            // this sets the timestamp to Date.now() when the user is first created
            defaultValue: { kind: 'now' },
        }),
        households: relationship({
            ref: 'Household.members',
            many: true
        })
    },
})