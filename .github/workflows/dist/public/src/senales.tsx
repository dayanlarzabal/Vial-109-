import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SignFace } from "@/components/sign-face";
import { SIGN_GROUPS, SIGNS } from "@/lib/content/signs";
import type { SignGroup } from "@/lib/content/types";

export const Route = createFileRoute("/senales")({ component: SignsPage });

function SignsPage() {
  const [group, setGroup] = useState<SignGroup | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(SIGNS[0]?.id ?? "");
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SIGNS.filter((sign) => (group === "all" || sign.group === group) && (!q || `${sign.name} ${sign.meaning}`.toLowerCase().includes(q)));
  }, [group, query]);
  const current = list.find((sign) => sign.id === selected) ?? list[0];

  return (
    <div className="grid gap-4">
      <div>
        <h1 className="font-display text-3xl">Señales</h1>
        <p className="text-muted">{SIGNS.length} entre peligro, prioridad, prohibición, obligación, información y marcas.</p>
      </div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar señal"
        aria-label="Buscar señal"
        className="min-h-11 rounded-full border border-line bg-surface px-4"
      />
      <div className="chip-row">
        {SIGN_GROUPS.map((item) => (
          <button key={item.id} type="button" className={`chip ${group === item.id ? "is-on" : ""}`} onClick={() => setGroup(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      {current ? (
        <div className="card text-center">
          <div className="flex justify-center">
            <SignFace sign={current} size={140} />
          </div>
          <h2 className="mt-2 font-display text-2xl">{current.name}</h2>
          <p className="mt-1">{current.meaning}</p>
          {current.tip ? <p className="trap mt-3 text-left text-sm">{current.tip}</p> : null}
        </div>
      ) : (
        <p className="text-muted">Ninguna señal con ese texto.</p>
      )}
      <div className="sign-grid">
        {list.map((sign) => (
          <button key={sign.id} type="button" className={`sign-tile ${sign.id === current?.id ? "is-on" : ""}`} onClick={() => setSelected(sign.id)}>
            <SignFace sign={sign} size={72} />
            <span className="text-center text-sm font-semibold">{sign.name}</span>
          </button>
        ))}
      </div>
      <Link className="btn" to="/prueba/$mode" params={{ mode: "senales" }}>
        Quiz de señales
      </Link>
    </div>
  );
}
