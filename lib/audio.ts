let ctx: AudioContext | null = null;

function ac() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(
  c: AudioContext,
  freq: number,
  t: number,
  dur: number,
  type: OscillatorType,
  gain: number,
) {
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export type Sfx = "ok" | "bad" | "pass" | "fail" | "tick";

export function playSfx(kind: Sfx) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime;
  if (kind === "ok") {
    tone(c, 523, t, 0.1, "sine", 0.06);
    tone(c, 784, t + 0.08, 0.16, "sine", 0.05);
  } else if (kind === "bad") {
    tone(c, 196, t, 0.16, "triangle", 0.05);
    tone(c, 146, t + 0.1, 0.2, "triangle", 0.04);
  } else if (kind === "pass") {
    tone(c, 523, t, 0.12, "sine", 0.06);
    tone(c, 659, t + 0.1, 0.12, "sine", 0.06);
    tone(c, 784, t + 0.2, 0.22, "sine", 0.06);
  } else if (kind === "fail") {
    tone(c, 220, t, 0.18, "sine", 0.04);
    tone(c, 174, t + 0.16, 0.28, "sine", 0.04);
  } else {
    tone(c, 880, t, 0.05, "square", 0.02);
  }
}
