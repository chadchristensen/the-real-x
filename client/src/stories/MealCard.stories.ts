import type { Meta, StoryObj } from '@storybook/react';
import MealCard from '@/components/MealCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/MealCard',
    component: MealCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        mealTitle: { control: 'text' },
        mealType: { control: 'select', options: ['default', 'breakfast', 'lunch', 'dinner', 'snack'] },
    },
} satisfies Meta<typeof MealCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        mealTitle: 'Sweet and Sour Mushroom',
        mealType: 'dinner'
    },
};