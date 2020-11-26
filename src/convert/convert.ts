import {
  cmyk2rgb,
  hsl2hsb,
  hsl2rgb,
  hsl2string,
  hsb2hsl,
  hsb2rgb,
  hwb2rgb,
  lab2lch,
  lab2xyz,
  lch2lab,
  rgb2cmyk,
  rgb2grayscale,
  rgb2hex,
  rgb2hsl,
  rgb2hsb,
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
    hsb: hsl2hsb,
    rgb: hsl2rgb,
    string: hsl2string
  },
  hsb: {
    hsl: hsb2hsl,
    rgb: hsb2rgb
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
    hsb: rgb2hsb,
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
