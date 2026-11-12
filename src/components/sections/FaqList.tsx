type Item = { readonly q: string; readonly a: string };

/** Native <details>: keyboard accessible, no JS, and the answers stay in the HTML for crawlers. */
export default function FaqList({ items }: { items: readonly Item[] }) {
  return (
    <div className="border-bone/15 border-t">
      {items.map((f) => (
        <details key={f.q} className="faq border-bone/15 border-b">
          <summary className="flex items-center justify-between gap-6 py-7">
            <h3 className="display text-bone text-2xl md:text-3xl">{f.q}</h3>
            <span className="faq-plus border-bone/30 grid h-11 w-11 shrink-0 place-items-center rounded-full border" aria-hidden="true">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="faq-body">
            <div>
              <p className="text-bone/75 max-w-[62ch] pb-8 text-lg leading-relaxed">{f.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
