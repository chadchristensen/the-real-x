import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddMealForm } from "@/components/AddMealForm";

export default function AddMealPage() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Meal</CardTitle>
      </CardHeader>
      <CardContent>
        <AddMealForm />
      </CardContent>
    </Card>
  );
}
