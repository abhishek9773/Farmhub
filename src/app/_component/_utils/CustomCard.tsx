import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
type CardProps = React.ComponentProps<typeof Card>;
type CustomCardPorps = CardProps & {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
};
const CustomCard: React.FC<CustomCardPorps> = ({
  className,
  cardHeader,
  cardContent,
  cardFooter,
  ...Props
}) => {
  return (
    <Card className={cn("w-[380px]", className)} {...Props}>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent className="grid gap-4">{cardContent}</CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
};

export default CustomCard;
