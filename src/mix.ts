import { parse } from "./parse";
import { hsl2rgb, rgb2hex, rgb2hsl } from "./convert";
import { RGBAType } from "./types";

function parseColor(color: string) {
  const res = parse(color);
  if (res === null) return null;
  if (res.type === "hsl") res.values = hsl2rgb(res.values);
  return res;
}

export function mix(color1: string, color2: string, percentage = 50) {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);

  if (!c1 || !c2) {
    throw new Error(`Unable to parse Color ${color1} or ${color2}`);
  }

  const p = Math.min(Math.max(0, percentage), 100) / 100.0;
  const w = p * 2 - 1;
  const a = c1.alpha - c2.alpha;
  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
  const w2 = 1 - w1;
  const [r, g, b] = c1.values.map((c, i) =>
    Math.round(c1.values[i] * w1 + c2.values[i] * w2)
  );
  const alpha = parseFloat((c1.alpha * p + c2.alpha * (1 - p)).toFixed(8));

  return {
    hex: rgb2hex([r, g, b]),
    hexa: rgb2hex([r, g, b, alpha]),
    rgba: [r, g, b, alpha] as RGBAType,
    hsla: [...rgb2hsl([r, g, b]).map(Math.round), alpha] as RGBAType
  };
}
