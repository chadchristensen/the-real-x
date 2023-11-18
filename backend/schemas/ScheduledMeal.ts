import type { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, calendarDay } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const ScheduledMeal: Lists.ScheduledMeal = list({
    access: allowAll,
    fields: {
        date: calendarDay({
            validation: { isRequired: true }
        }),
        meal: relationship({
            ref: 'Meal'
        }),
    }
});