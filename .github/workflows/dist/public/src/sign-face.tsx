import type { ReactNode } from "react";
import type { Sign } from "@/lib/content/types";

const RED = "#c1121f";
const BLUE = "#1d4e89";
const YELLOW = "#e2b304";
const INK = "#1a1a1a";
const PAPER = "#fffdf8";

const S = {
  fill: "none",
  stroke: INK,
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Glyph({ draw }: { draw: string }) {
  switch (draw) {
    case "curve-r":
      return <path {...S} d="M-14 16 C-14 0 0 -6 16 -16" />;
    case "curve-l":
      return <path {...S} d="M14 16 C14 0 0 -6 -16 -16" />;
    case "double-r":
      return <path {...S} d="M-16 16 C-8 8 -8 4 0 0 C8 -4 8 -8 16 -16" />;
    case "double-l":
      return <path {...S} d="M16 16 C8 8 8 4 0 0 C-8 -4 -8 -8 -16 -16" />;
    case "cross":
      return (
        <>
          <path {...S} d="M0 -16 V16 M-14 -2 H14" />
        </>
      );
    case "cross-pri":
      return (
        <>
          <path {...S} strokeWidth={7} d="M0 -16 V16" />
          <path {...S} d="M-14 -1 H14" />
        </>
      );
    case "tjoin":
      return <path {...S} d="M-16 -4 H16 M0 -4 V16" />;
    case "kids":
      return (
        <>
          <circle cx={-7} cy={-10} r={3.2} fill={INK} />
          <circle cx={7} cy={-8} r={3.6} fill={INK} />
          <path {...S} d="M-12 14 L-7 -4 L-2 4 L2 -2 L7 14 M2 -2 L12 -6" />
        </>
      );
    case "ped":
      return (
        <>
          <circle cx={0} cy={-12} r={3.4} fill={INK} />
          <path {...S} d="M0 -8 V4 M0 -2 L-8 2 M0 -2 L8 0 M0 4 L-6 16 M0 4 L6 16" />
        </>
      );
    case "bike":
      return (
        <>
          <circle {...S} cx={-8} cy={6} r={6} />
          <circle {...S} cx={9} cy={6} r={6} />
          <path {...S} d="M-8 6 H2 L8 -6 H2 M2 6 V-2" />
        </>
      );
    case "cow":
      return <path {...S} d="M-14 8 C-14 -6 -6 -8 -4 -2 L0 -12 L4 -2 C6 -8 14 -6 14 8 Z M-6 8 V14 M6 8 V14" />;
    case "deer":
      return (
        <path {...S} d="M-2 14 V2 L-10 -4 L-6 -14 M-2 2 L8 -2 L12 -12 M8 -2 L14 0 M-2 6 L6 10" />
      );
    case "works":
      return <path {...S} d="M-14 12 H14 L8 -12 H-4 Z M-2 -12 V-16 M-6 2 H6" />;
    case "slip":
      return (
        <>
          <path {...S} d="M-16 8 L0 -12 L16 10" />
          <path {...S} d="M-8 14 C-4 8 4 8 8 14" />
        </>
      );
    case "gravel":
      return (
        <>
          <path {...S} d="M-14 14 L0 -8 L8 14" />
          <circle cx={12} cy={-8} r={2} fill={INK} />
          <circle cx={-10} cy={-2} r={1.6} fill={INK} />
        </>
      );
    case "narrow":
      return <path {...S} d="M-16 -16 L-6 16 M16 -16 L6 16" />;
    case "narrow-r":
      return <path {...S} d="M-12 -16 V16 M16 -16 L6 16" />;
    case "bridge":
      return <path {...S} d="M-16 6 H16 M-16 6 C-8 -10 8 -10 16 6 M-6 6 V14 M6 6 V14" />;
    case "down":
      return <path {...S} d="M-16 -8 L16 10 M8 10 H16 V2" />;
    case "up":
      return <path {...S} d="M-16 10 L16 -8 M8 -8 H16 V0" />;
    case "wind":
      return <path {...S} d="M-16 -8 H10 M-16 0 H14 M-12 8 H8" />;
    case "bump":
      return <path {...S} d="M-16 8 H-6 C-6 8 0 -14 6 8 H16" />;
    case "twoway":
      return (
        <>
          <path {...S} d="M-6 -16 V12 M-6 -16 L-12 -8 M-6 -16 L0 -8" />
          <path {...S} d="M8 16 V-12 M8 16 L2 8 M8 16 L14 8" />
        </>
      );
    case "light":
      return (
        <>
          <rect x={-6} y={-16} width={12} height={28} rx={3} fill={INK} />
          <circle cx={0} cy={-9} r={2.2} fill={PAPER} />
          <circle cx={0} cy={-2} r={2.2} fill={PAPER} />
          <circle cx={0} cy={5} r={2.2} fill={PAPER} />
        </>
      );
    case "rail":
      return <path {...S} d="M-14 -4 H14 M-8 -4 V8 H8 V-4 M-14 12 H14 M-4 -14 V-4" />;
    case "rail-open":
      return <path {...S} d="M-12 4 L0 -14 L12 4 M-14 12 H14" />;
    case "andrew":
      return null;
    case "merge":
      return <path {...S} d="M-4 -16 V16 M14 16 L-2 -2" />;
    case "tunnel":
      return <path {...S} d="M-14 14 V-2 C-14 -14 14 -14 14 -2 V14" />;
    case "water":
      return <path {...S} d="M-16 0 C-10 -8 -6 -8 0 0 C6 8 10 8 16 0 M-16 10 C-10 2 -6 2 0 10 C6 18 10 18 16 10" />;
    case "plane":
      return <path {...S} d="M-16 2 H4 L14 -8 V0 L4 4 H-16 Z M-4 4 V12" />;
    case "round-warn":
      return (
        <>
          <circle {...S} cx={0} cy={0} r={10} />
          <path {...S} d="M4 -8 A10 10 0 0 1 8 4" />
        </>
      );
    case "no-pass":
      return (
        <>
          <path {...S} d="M-8 8 C-8 -6 -2 -8 2 -2 L6 -10" />
          <path {...S} d="M4 10 C10 10 12 4 8 -2" />
        </>
      );
    case "no-left":
      return <path {...S} d="M4 14 V-2 H-12 M-12 -2 L-4 -10 M-12 -2 L-4 6" />;
    case "no-right":
      return <path {...S} d="M-4 14 V-2 H12 M12 -2 L4 -10 M12 -2 L4 6" />;
    case "no-u":
      return <path {...S} d="M-8 14 V-4 C-8 -14 10 -14 10 -2 V6 M10 6 L4 0 M10 6 L16 0" />;
    case "no-horn":
      return <path {...S} d="M-12 2 H-4 L6 -8 V10 L-4 2 H-12 Z M10 -2 H14 M10 4 H16" />;
    case "no-ped":
      return (
        <>
          <circle cx={0} cy={-10} r={3.2} fill={INK} />
          <path {...S} d="M0 -6 V4 M-8 0 H8 M-6 14 L0 4 L6 14" />
        </>
      );
    case "no-bike":
      return (
        <>
          <circle {...S} cx={-8} cy={4} r={5} />
          <circle {...S} cx={8} cy={4} r={5} />
          <path {...S} d="M-8 4 H1 L6 -6" />
        </>
      );
    case "no-moto":
      return (
        <>
          <circle {...S} cx={-8} cy={6} r={5} />
          <circle {...S} cx={9} cy={6} r={5} />
          <path {...S} d="M-8 6 L-2 -4 H8 L12 6 M-2 -4 V2" />
        </>
      );
    case "no-truck":
      return <path {...S} d="M-14 8 V-6 H4 V-2 H12 L16 4 V8 H-14 M-8 8 a3 3 0 1 0 0.1 0 M10 8 a3 3 0 1 0 0.1 0" />;
    case "no-bus":
      return <path {...S} d="M-12 12 V-8 H12 V12 M-12 -2 H12 M-8 12 a2 2 0 1 0 .1 0 M8 12 a2 2 0 1 0 .1 0 M-8 -8 V-12 H8 V-8" />;
    case "no-animal":
      return <path {...S} d="M-8 14 V4 H8 V14 M-10 4 L-4 -8 H6 L10 4 M-2 -8 V-14" />;
    case "no-haz":
      return <path {...S} d="M0 -14 L12 8 H-12 Z" />;
    case "arrow-up":
      return <path {...SW} d="M0 -16 V14 M0 -16 L-8 -6 M0 -16 L8 -6" />;
    case "arrow-right":
      return <path {...SW} d="M-14 0 H14 M14 0 L6 -8 M14 0 L6 8" />;
    case "arrow-left":
      return <path {...SW} d="M14 0 H-14 M-14 0 L-6 -8 M-14 0 L-6 8" />;
    case "arrow-up-right":
      return (
        <>
          <path {...SW} d="M-6 14 V-8 M-6 -8 L-12 0 M-6 -8 L0 0" />
          <path {...SW} d="M-2 -2 H12 M12 -2 L6 -8 M12 -2 L6 4" />
        </>
      );
    case "round-must":
      return <path {...SW} d="M0 -12 A12 12 0 1 1 -8 8 M-8 8 L-14 2 M-8 8 L-2 4" />;
    case "keep-r":
      return <path {...SW} d="M-4 -16 V4 H12 M12 4 L6 -2 M12 4 L6 10" />;
    case "keep-l":
      return <path {...SW} d="M4 -16 V4 H-12 M-12 4 L-6 -2 M-12 4 L-6 10" />;
    case "bike-lane":
      return (
        <>
          <circle {...SW} cx={-7} cy={5} r={5} />
          <circle {...SW} cx={8} cy={5} r={5} />
          <path {...SW} d="M-7 5 H2 L7 -5" />
        </>
      );
    case "ped-lane":
      return (
        <>
          <circle cx={0} cy={-11} r={3.2} fill="#fff" />
          <path {...SW} d="M0 -7 V3 M-7 -1 H7 M-5 14 L0 3 L5 14" />
        </>
      );
    case "lights":
      return (
        <>
          <path {...SW} d="M-6 6 H8 L14 2 V-2 L8 -6 H-6 Z" />
          <path {...SW} d="M-14 -8 L-8 -2 M-14 8 L-8 2" />
        </>
      );
    default:
      return <circle cx={0} cy={0} r={4} fill={INK} />;
  }
}

const SW = { ...S, stroke: "#fff" };

function Warn({ draw, children }: { draw: string; children?: ReactNode }) {
  return (
    <>
      <polygon points="50,6 94,88 6,88" fill={PAPER} stroke={RED} strokeWidth={6} strokeLinejoin="round" />
      <g transform="translate(50 58)">
        {children ?? <Glyph draw={draw} />}
      </g>
    </>
  );
}

function Ban({ draw }: { draw: string }) {
  return (
    <>
      <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={7} />
      <g transform="translate(50 50)">
        <Glyph draw={draw} />
      </g>
      <line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" />
    </>
  );
}

function Must({ draw }: { draw: string }) {
  return (
    <>
      <circle cx={50} cy={50} r={40} fill={BLUE} />
      <g transform="translate(50 50)">
        <Glyph draw={draw} />
      </g>
    </>
  );
}

function Plate({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "white" }) {
  const fill = tone === "green" ? "#1f7a4d" : tone === "white" ? PAPER : BLUE;
  const color = tone === "white" ? INK : "#fff";
  return (
    <>
      <rect x={8} y={22} width={84} height={56} rx={6} fill={fill} stroke={tone === "white" ? INK : "none"} strokeWidth={3} />
      <g fill={color} stroke={color}>
        {children}
      </g>
    </>
  );
}

export function SignFace({ sign, size = 96 }: { sign: Sign; size?: number }) {
  const n = sign.mark ?? "";
  let body: ReactNode;
  switch (sign.draw) {
    case "pare":
      body = (
        <>
          <polygon points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30" fill={RED} stroke="#fff" strokeWidth={3} />
          <text x={50} y={56} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700} fontFamily="Outfit, sans-serif">
            PARE
          </text>
        </>
      );
      break;
    case "ceda":
      body = (
        <>
          <polygon points="50,8 94,88 6,88" fill={PAPER} stroke={RED} strokeWidth={7} strokeLinejoin="round" />
          <polygon points="50,22 80,78 20,78" fill={PAPER} />
          <text x={50} y={66} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily="Outfit, sans-serif">
            CEDA
          </text>
        </>
      );
      break;
    case "priority":
      body = <polygon points="50,6 94,50 50,94 6,50" fill={YELLOW} stroke="#fff" strokeWidth={6} />;
      break;
    case "end-priority":
      body = (
        <>
          <polygon points="50,6 94,50 50,94 6,50" fill={YELLOW} stroke="#fff" strokeWidth={6} />
          <line x1={22} y1={78} x2={78} y2={22} stroke={INK} strokeWidth={6} />
        </>
      );
      break;
    case "narrow-you":
      body = (
        <>
          <rect x={18} y={14} width={64} height={72} rx={4} fill={PAPER} stroke={INK} strokeWidth={3} />
          <path d="M50 24 V68 M50 24 L42 36 M50 24 L58 36" stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
          <path d="M62 30 V62" stroke={RED} strokeWidth={5} fill="none" strokeLinecap="round" />
        </>
      );
      break;
    case "narrow-them":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={7} />
          <path d="M42 28 V70 M42 70 L34 58 M42 70 L50 58" stroke={RED} strokeWidth={5} fill="none" strokeLinecap="round" />
          <path d="M58 30 V64" stroke={INK} strokeWidth={5} fill="none" />
        </>
      );
      break;
    case "andrew":
      body = (
        <>
          <path d="M18 18 L82 82 M82 18 L18 82" stroke={RED} strokeWidth={10} strokeLinecap="round" />
          <path d="M18 18 L82 82 M82 18 L18 82" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
        </>
      );
      break;
    case "no-entry":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={RED} />
          <rect x={22} y={42} width={56} height={16} rx={2} fill="#fff" />
        </>
      );
      break;
    case "no-all":
      body = <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={8} />;
      break;
    case "no-park":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={BLUE} stroke={RED} strokeWidth={7} />
          <line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={8} strokeLinecap="round" />
        </>
      );
      break;
    case "no-stop":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={BLUE} stroke={RED} strokeWidth={7} />
          <line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" />
          <line x1={76} y1={24} x2={24} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" />
        </>
      );
      break;
    case "speed":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={8} />
          <text x={50} y={58} textAnchor="middle" fill={INK} fontSize={n.length > 2 ? 22 : 28} fontWeight={700} fontFamily="Outfit, sans-serif">
            {n}
          </text>
        </>
      );
      break;
    case "end-speed":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={PAPER} stroke={INK} strokeWidth={6} />
          <line x1={22} y1={78} x2={78} y2={22} stroke={INK} strokeWidth={6} />
        </>
      );
      break;
    case "min-speed":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={BLUE} />
          <text x={50} y={58} textAnchor="middle" fill="#fff" fontSize={28} fontWeight={700} fontFamily="Outfit, sans-serif">
            {n}
          </text>
        </>
      );
      break;
    case "weight":
    case "height":
    case "width":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={7} />
          <text x={50} y={56} textAnchor="middle" fill={INK} fontSize={16} fontWeight={700} fontFamily="Outfit, sans-serif">
            {n}
          </text>
        </>
      );
      break;
    case "end-pass":
      body = (
        <>
          <circle cx={50} cy={50} r={40} fill={PAPER} stroke={INK} strokeWidth={5} />
          <g transform="translate(50 50) scale(0.75)">
            <Glyph draw="no-pass" />
          </g>
          <line x1={18} y1={82} x2={82} y2={18} stroke={INK} strokeWidth={6} />
        </>
      );
      break;
    case "hospital":
      body = (
        <Plate>
          <rect x={42} y={34} width={16} height={32} fill="#fff" stroke="none" />
          <rect x={34} y={42} width={32} height={16} fill="#fff" stroke="none" />
        </Plate>
      );
      break;
    case "aid":
      body = (
        <Plate>
          <rect x={44} y={34} width={12} height={32} fill="#fff" stroke="none" />
          <rect x={34} y={44} width={32} height={12} fill="#fff" stroke="none" />
        </Plate>
      );
      break;
    case "park":
      body = (
        <Plate tone="blue">
          <text x={50} y={60} textAnchor="middle" fontSize={32} fontWeight={700} fontFamily="Outfit, sans-serif" fill="#fff" stroke="none">
            P
          </text>
        </Plate>
      );
      break;
    case "phone":
      body = (
        <Plate>
          <path d="M38 36 H48 L52 44 L46 48 C50 58 56 62 62 58 L66 52 L74 56 V66 C74 70 70 72 66 70 C48 62 36 48 32 36 C30 32 34 30 38 32 Z" fill="#fff" stroke="none" transform="translate(0 0) scale(0.9) translate(6 4)" />
        </Plate>
      );
      break;
    case "wrench":
      body = (
        <Plate>
          <path d="M40 68 L62 40 A10 10 0 1 0 54 32 L36 54 Z" fill="#fff" stroke="none" />
        </Plate>
      );
      break;
    case "fuel":
      body = (
        <Plate>
          <rect x={36} y={34} width={20} height={32} rx={2} fill="#fff" stroke="none" />
          <path d="M56 42 H64 V58" stroke="#fff" strokeWidth={3} fill="none" />
        </Plate>
      );
      break;
    case "bus-stop":
      body = (
        <Plate>
          <rect x={34} y={36} width={32} height={22} rx={3} fill="#fff" stroke="none" />
          <path d="M40 58 V70 M60 58 V70" stroke="#fff" strokeWidth={3} />
        </Plate>
      );
      break;
    case "highway":
      body = (
        <Plate tone="green">
          <path d="M30 66 L42 36 H58 L70 66" fill="none" stroke="#fff" strokeWidth={4} />
          <path d="M50 40 V66" stroke="#fff" strokeWidth={3} strokeDasharray="3 3" />
        </Plate>
      );
      break;
    case "end-highway":
      body = (
        <Plate tone="green">
          <path d="M30 66 L42 36 H58 L70 66" fill="none" stroke="#fff" strokeWidth={4} />
          <line x1={32} y1={68} x2={68} y2={34} stroke={RED} strokeWidth={5} />
        </Plate>
      );
      break;
    case "exit":
      body = (
        <Plate tone="green">
          <path d="M34 64 V40 H66 M66 40 L56 32 M66 40 L56 48" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
        </Plate>
      );
      break;
    case "one-way":
      body = (
        <Plate>
          <path d="M28 50 H70 M70 50 L58 38 M70 50 L58 62" fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" />
        </Plate>
      );
      break;
    case "dead":
      body = (
        <Plate tone="white">
          <path d="M50 34 V58 M32 58 H68" fill="none" stroke={INK} strokeWidth={4} />
          <rect x={36} y={34} width={28} height={8} fill={RED} stroke="none" />
        </Plate>
      );
      break;
    case "km":
      body = (
        <Plate tone="white">
          <text x={50} y={58} textAnchor="middle" fill={INK} stroke="none" fontSize={22} fontWeight={700} fontFamily="Outfit, sans-serif">
            km {n}
          </text>
        </Plate>
      );
      break;
    case "zebra":
    case "solid":
    case "dashed":
    case "stop-line":
    case "bus-lane":
    case "edge":
    case "arrow-mark":
    case "hatch":
    case "yield-mark":
      body = <Road draw={sign.draw} />;
      break;
    default:
      if (
        ["arrow-up", "arrow-right", "arrow-left", "arrow-up-right", "round-must", "keep-r", "keep-l", "bike-lane", "ped-lane", "lights"].includes(
          sign.draw,
        )
      ) {
        body = <Must draw={sign.draw} />;
      } else if (sign.group === "prohibicion") {
        body = <Ban draw={sign.draw} />;
      } else {
        body = <Warn draw={sign.draw} />;
      }
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={sign.name}>
      <title>{sign.name}</title>
      {body}
    </svg>
  );
}

function Road({ draw }: { draw: string }) {
  return (
    <>
      <rect x={10} y={18} width={80} height={64} rx={8} fill="#3d4a3a" />
      {draw === "zebra" &&
        [0, 1, 2, 3, 4].map((i) => <rect key={i} x={22 + i * 12} y={36} width={7} height={28} fill="#fff" />)}
      {draw === "solid" && <line x1={50} y1={26} x2={50} y2={74} stroke="#fff" strokeWidth={4} />}
      {draw === "dashed" && <line x1={50} y1={26} x2={50} y2={74} stroke="#fff" strokeWidth={4} strokeDasharray="7 6" />}
      {draw === "stop-line" && <line x1={22} y1={62} x2={78} y2={62} stroke="#fff" strokeWidth={6} />}
      {draw === "bus-lane" && (
        <text x={50} y={56} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={700} fontFamily="Outfit, sans-serif">
          BUS
        </text>
      )}
      {draw === "edge" && <line x1={22} y1={26} x2={22} y2={74} stroke="#fff" strokeWidth={4} />}
      {draw === "arrow-mark" && <path d="M50 68 V34 M50 34 L40 46 M50 34 L60 46" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" />}
      {draw === "hatch" && (
        <>
          <line x1={28} y1={30} x2={72} y2={70} stroke="#fff" strokeWidth={3} />
          <line x1={40} y1={28} x2={76} y2={58} stroke="#fff" strokeWidth={3} />
          <line x1={24} y1={44} x2={58} y2={74} stroke="#fff" strokeWidth={3} />
        </>
      )}
      {draw === "yield-mark" && (
        <>
          <polygon points="34,62 42,44 50,62" fill="#fff" />
          <polygon points="50,62 58,44 66,62" fill="#fff" />
        </>
      )}
    </>
  );
}
