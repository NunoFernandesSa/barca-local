type Step = {
  icon: string;
  title: string;
  desc: string;
};

type StepsCardProps = {
  index: number;
  step: Step;
};

export default function StepsCard({ step }: StepsCardProps) {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10 flex flex-col h-full w-full">
        {/* Icon with hover animation */}
        <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
          {step.icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {step.title}
        </h3>

        {/* La description prendra l'espace restant et s'alignera en bas */}
        <p className="text-gray-600 leading-relaxed flex items-center justify-center">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
