export  function hsl2string(hsl: [h:number, s:number, l:number, ...rest: number[]]) {
  let scheme = "hsl";

  if (hsl.length === 4) {
    scheme += "a";
  }

  hsl[0] = Math.round(hsl[0]);
  hsl[1] = Math.round(hsl[1]) + "%" as any;
  hsl[2] = Math.round(hsl[2]) + "%" as any;

  return scheme + "(" + hsl.join(",") + ")";
}
