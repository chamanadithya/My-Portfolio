import { TECHS } from "@/lib/data";

export default function Marquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <div className="chip" key={i}><span className="dot" />{t}</div>
        ))}
      </div>
    </div>
  );
}
