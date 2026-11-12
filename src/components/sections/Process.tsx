import { PROCESS } from "@/lib/site";

export default function Process() {
  return (
    <section className="relative py-12 md:py-24" aria-labelledby="process-title">
      <div className="wrap">
        <div className="glass rounded-3xl p-8 md:p-16">
          <h2 id="process-title" className="display h-lg text-bone max-w-[18ch]">
            From sketch <b>to shipment.</b>
          </h2>
          <p className="lede mt-6">
            Our in-house team turns hand-drawn concepts into production-ready samples in leather from our own facility.
          </p>
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="border-bone/15 border-t pt-6">
                <span className="display text-brass text-3xl">{i + 1}</span>
                <h3 className="text-bone mt-6 text-xl font-medium">{s.title}</h3>
                <p className="text-bone/70 mt-2 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
