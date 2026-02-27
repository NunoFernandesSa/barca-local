import { HowToAppearOnTheAppStepProps } from "@/types/how-to-appear-on-the-app-step-props";

export default function HowToAppearOnTheAppSteps({
  number,
  title,
  description,
}: HowToAppearOnTheAppStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
