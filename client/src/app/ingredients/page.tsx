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
    <>
      <h1>Ingredients</h1>
      <ul>
        {data?.ingredients?.map((ingredient: Ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </>
  );
}
