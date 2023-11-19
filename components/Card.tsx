import { twMerge } from "tailwind-merge";

export interface CardProps {
  title?: string;
  content?: string;
  id?: string;
  tags?: string[];
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  content,
  id,
  tags,
  children,
  className,
}: CardProps) {
  const handleCardClick = () => {
    window.open(`/posts/${id}`);
  };

  return (
    <div
      className={twMerge(
        className,
        "max-w-sm rounded overflow-hidden shadow-lg cursor-pointer accent-lime-200"
      )}
    >
      {children}
    </div>
  );
}

export function Title({ title }: CardProps) {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
    </div>
  );
}

export function Location({ content }: CardProps) {
  return (
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">{content}</p>
    </div>
  );
}

export function Date({ content }: CardProps) {
  return (
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">{content}</p>
    </div>
  );
}
