import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus
              className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
