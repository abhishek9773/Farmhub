import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ProductCheckbox({ name }: { name: string }) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="block">
          {name}
        </Label>
      </div>
    </div>
  );
}
