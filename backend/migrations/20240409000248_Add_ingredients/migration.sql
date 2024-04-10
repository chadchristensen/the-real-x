-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Household" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Household_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "preparationTime" INTEGER,
    "cookingTime" INTEGER,
    "servings" INTEGER,
    "difficultyLevel" TEXT NOT NULL DEFAULT 'MEDIUM',

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "notes" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "id" UUID NOT NULL,
    "ingredient" UUID,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unitOfMeasurement" TEXT NOT NULL,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeInstruction" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "stepNumber" INTEGER NOT NULL,

    CONSTRAINT "RecipeInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledMeal" (
    "id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "meal" UUID,

    CONSTRAINT "ScheduledMeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "collection" TEXT NOT NULL DEFAULT 'FOOD',

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Household_members" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Meal_tags" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Recipe_ingredients" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Recipe_instructions" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Recipe_tags" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "RecipeIngredient_ingredient_idx" ON "RecipeIngredient"("ingredient");

-- CreateIndex
CREATE INDEX "ScheduledMeal_meal_idx" ON "ScheduledMeal"("meal");

-- CreateIndex
CREATE UNIQUE INDEX "_Household_members_AB_unique" ON "_Household_members"("A", "B");

-- CreateIndex
CREATE INDEX "_Household_members_B_index" ON "_Household_members"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Meal_tags_AB_unique" ON "_Meal_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Meal_tags_B_index" ON "_Meal_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Recipe_ingredients_AB_unique" ON "_Recipe_ingredients"("A", "B");

-- CreateIndex
CREATE INDEX "_Recipe_ingredients_B_index" ON "_Recipe_ingredients"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Recipe_instructions_AB_unique" ON "_Recipe_instructions"("A", "B");

-- CreateIndex
CREATE INDEX "_Recipe_instructions_B_index" ON "_Recipe_instructions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Recipe_tags_AB_unique" ON "_Recipe_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Recipe_tags_B_index" ON "_Recipe_tags"("B");

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredient_fkey" FOREIGN KEY ("ingredient") REFERENCES "Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledMeal" ADD CONSTRAINT "ScheduledMeal_meal_fkey" FOREIGN KEY ("meal") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Household_members" ADD CONSTRAINT "_Household_members_A_fkey" FOREIGN KEY ("A") REFERENCES "Household"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Household_members" ADD CONSTRAINT "_Household_members_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Meal_tags" ADD CONSTRAINT "_Meal_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Meal_tags" ADD CONSTRAINT "_Meal_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_ingredients" ADD CONSTRAINT "_Recipe_ingredients_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_ingredients" ADD CONSTRAINT "_Recipe_ingredients_B_fkey" FOREIGN KEY ("B") REFERENCES "RecipeIngredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_instructions" ADD CONSTRAINT "_Recipe_instructions_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_instructions" ADD CONSTRAINT "_Recipe_instructions_B_fkey" FOREIGN KEY ("B") REFERENCES "RecipeInstruction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_tags" ADD CONSTRAINT "_Recipe_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Recipe_tags" ADD CONSTRAINT "_Recipe_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
