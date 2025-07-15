import clsx from "clsx";

interface StackCardProps {
  name: string;
  icon: JSX.Element;
}

export default function StackCard({ name, icon }: StackCardProps) {
  return (
    <div className="px-2">
      <div
        className={clsx(
          "border border-red-200 bg-white/70 backdrop-blur-lg",
          "w-full px-6 py-3",
          "text-base font-bold text-red-700",
          "flex items-center gap-3",
          "rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-red-200",
        )}
      >
        {icon}
        {name}
      </div>
    </div>
  );
}
