import Link from "next/link";

export default function MealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Meals</h1>
      <Link href={"/meals/create"}>Create new meal</Link>
    </div>
  );
}
