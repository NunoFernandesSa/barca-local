import { CgLock } from "react-icons/cg";

// TODO: Add schedule information dynamically from producer

export default function ScheduleInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <CgLock className="w-5 h-5 text-primary" />
        Horário
      </h2>
      <div className="space-y-2 text-gray-600">
        <p className="flex justify-between">
          <span>Segunda - Sexta:</span>
          <span>09:00 - 18:00</span>
        </p>
        <p className="flex justify-between">
          <span>Sábado:</span>
          <span>09:00 - 13:00</span>
        </p>
        <p className="flex justify-between text-gray-400">
          <span>Domingo:</span>
          <span>Fechado</span>
        </p>
      </div>
    </div>
  );
}
