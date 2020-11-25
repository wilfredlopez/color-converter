import {
  cmyk2rgb,
  hsl2hsv,
  hsl2rgb,
  hsl2string,
  hsv2hsl,
  hsv2rgb,
  hwb2rgb,
  lab2lch,
  lab2xyz,
  lch2lab,
  rgb2cmyk,
  rgb2grayscale,
  rgb2hex,
  rgb2hsl,
  rgb2hsv,
  rgb2hwb,
  rgb2lab,
  rgb2string,
  rgb2xyz,
  xyz2lab,
  xyz2rgb
} from "./all";

export const convert = {
  cmyk: {
    rgb: cmyk2rgb
  },
  hsl: {
    hsv: hsl2hsv,
    rgb: hsl2rgb,
    string: hsl2string
  },
  hsv: {
    hsl: hsv2hsl,
    rgb: hsv2rgb
  },
  hwb: {
    rgb: hwb2rgb
  },
  lab: {
    lch: lab2lch,
    xyz: lab2xyz
  },
  lch: {
    lab: lch2lab
  },
  rgb: {
    cmyk: rgb2cmyk,
    hex: rgb2hex,
    hsl: rgb2hsl,
    hsv: rgb2hsv,
    hwb: rgb2hwb,
    lab: rgb2lab,
    xyz: rgb2xyz,
    grayscale: rgb2grayscale,
    string: rgb2string
  },
  xyz: {
    lab: xyz2lab,
    rgb: xyz2rgb
  }
};
