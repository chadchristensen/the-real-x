import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MealCard from '@/components/MealCard';

describe('MealCard', () => {
    it('should render a card with the meal name', () => {
        // Arrange
        const mealTitle = "Test Meal";
        const mealType = "default";

        // Act
        render(<MealCard mealTitle={mealTitle} mealType={mealType} />);

        // Assert
        expect(screen.getByText("Test Meal")).toBeInTheDocument();
    });

});