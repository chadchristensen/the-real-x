import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals</h1>
      <Link href={"/meals/create"}>Create new meal</Link>
    </>
  );
}
