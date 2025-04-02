"use client";

import { Progress } from "@/components/ui/progress";
import { useFormStore } from "./useForm";

const ProgressBar = () => {
  const { step } = useFormStore();
  const progress = (step / 7) * 100;

    function cn(...classes: string[]): string {
        return classes.filter(Boolean).join(" ");
    }

  return (
    <div className="w-full flex items-center gap-2">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 flex-1 rounded transition-all duration-300",
            index < step ? "bg-blue-500" : "bg-gray-300"
          )}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
