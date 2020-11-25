export function lab2lch(
  lab: [number, number, number]
): [number, number, number] {
  var l = lab[0],
    a = lab[1],
    b = lab[2],
    hr,
    h,
    c;

  hr = Math.atan2(b, a);
  h = (hr * 360) / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}
