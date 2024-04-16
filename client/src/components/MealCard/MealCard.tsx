import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const mealCardVariants = cva("", {
    variants: {
        variant: {
            default: "border-gray-400",
            breakfast:
                "border-yellow-400",
            lunch: "border-teal-400",
            dinner: "border-red-400",
            snack: "border-violet-400",
        },
    }
})

type MealCardProps = {
    mealTitle: string,
    mealType?: 'default' | 'breakfast' | 'lunch' | 'dinner' | 'snack',
}

export default function MealCard({ mealTitle, mealType = "default" }: MealCardProps) {
    return (
        <Card className={cn(mealCardVariants({ variant: mealType }), "w-full max-w-sm border-t-8")}>
            <CardHeader>
                <div className="p-2 grid gap-4">
                    <CardTitle className="text-lg">{mealTitle}</CardTitle>
                </div>
            </CardHeader>
        </Card>
    )
}