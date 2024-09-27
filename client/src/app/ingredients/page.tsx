import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

type Ingredient = {
  id: string;
  name: string;
  category: string;
};

const query = gql`
  query Ingredients($orderBy: [IngredientOrderByInput!]!) {
    ingredients(orderBy: $orderBy) {
      id
      name
      category
    }
  }
`;

export default async function IngredientsListPage() {
  const client = getClient();

  const { data, error } = await client.query({
    query,
    variables: { orderBy: [{ name: "asc" }] },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Ingredients</h1>
      <ul>
        {data?.ingredients?.map((ingredient: Ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}
