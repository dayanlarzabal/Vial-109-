import { useMemo, useState } from 'react';
import { SIGNS } from '../data/signs';
import { SIGN_GROUPS } from '../data/catalog';
import { SignArt } from '../components/SignArt';
import { Link } from 'react-router-dom';

export function Senales() {
  const [group, setGroup] = useState('all');
  const [sel, setSel] = useState(SIGNS[0]?.id ?? '');

  const filtered = useMemo(
    () => (group === 'all' ? SIGNS : SIGNS.filter((s) => s.group === group)),
    [group],
  );
  const current = SIGNS.find((s) => s.id === sel) ?? filtered[0];

  return (
    <div>
      <h1>Señales</h1>
      <p className="muted">{SIGNS.length} señales · toca una para ver el significado</p>
      <div className="chip-row">
        {SIGN_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`chip${group === g.id ? ' active' : ''}`}
            onClick={() => setGroup(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="card" style={{ textAlign: 'center' }}>
          <SignArt id={current.id} size={88} />
          <div className="card-title" style={{ marginTop: 8 }}>
            {current.name}
          </div>
          <p className="muted">{current.meaning}</p>
          {current.tip && <p style={{ fontSize: 13 }}>💡 {current.tip}</p>}
          <span className="badge">{current.group}</span>
        </div>
      )}

      <div className="sign-grid">
        {filtered.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`sign-tile${s.id === current?.id ? ' selected' : ''}`}
            onClick={() => setSel(s.id)}
          >
            <SignArt id={s.id} size={56} />
            <div style={{ fontSize: 12, fontWeight: 600 }}>{s.name}</div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <Link className="btn" to="/prueba/senales">
          Quiz de señales
        </Link>
      </div>
    </div>
  );
}
