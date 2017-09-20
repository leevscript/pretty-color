(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Color = mod.exports.default;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /**
   * Created by liw on 2017/9/19.
   */
  var rHex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  var rRgb = /^(rgba?)\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i;
  var colorDir = {
    maroon: '#800000',
    darkred: '#8B0000',
    brown: '#A52A2A',
    firebrick: '#B22222',
    crimson: '#DC143C',
    red: '#FF0000',
    mediumvioletred: '#C71585',
    palevioletred: '#D87093',
    deeppink: '#FF1493',
    fuchsia: '#FF00FF',
    magenta: '#FF00FF',
    hotpink: '#FF69B4',
    pink: '#FFC0CB',
    lightpink: '#FFB6C1',
    mistyrose: '#FFE4E1',
    lavenderblush: '#FFF0F5',
    indigo: '#4B0082',
    purple: '#800080',
    darkmagenta: '#8B008B',
    darkorchid: '#9932CC',
    blueviolet: '#8A2BE2',
    darkviolet: '#9400D3',
    slateblue: '#6A5ACD',
    mediumpurple: '#9370DB',
    mediumslateblue: '#7B68EE',
    mediumorchid: '#BA55D3',
    violet: '#EE82EE',
    plum: '#DDA0DD',
    thistle: '#D8BFD8',
    lavender: '#E6E6FA',
    saddlebrown: '#8B4513',
    sienna: '#A0522D',
    chocolate: '#D2691E',
    indianred: '#CD5C5C',
    rosybrown: '#BC8F8F',
    lightcorol: '#F08080',
    salmon: '#FA8072',
    lightsalmon: '#FFA07A',
    orangered: '#FF4500',
    tomato: '#FF6347',
    coral: '#FF7F50',
    darkorange: '#FF8C00',
    sandybrown: '#F4A460',
    peru: '#CD853F',
    tan: '#D2B48C',
    burlywood: '#DEB887',
    wheat: '#F5DEB3',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    peachpuff: '#FFDAB9',
    bisque: '#FFE4C4',
    antuquewhite: '#FAEBD7',
    papayawhip: '#FFEFD5',
    cornsilk: '#FFF8DC',
    oldlace: '#FDF5E6',
    linen: '#FAF0E6',
    seashell: '#FFF5EE',
    snow: '#FFFAFA',
    floralwhite: '#FFFAF0',
    ivory: '#FFFFF0',
    mintcream: '#F5FFFA',
    darkgoldenrod: '#B8860B',
    goldenrod: '#DAA520',
    gold: '#FFD700',
    yellow: '#FFFF00',
    darkkhaki: '#BDB76B',
    khaki: '#F0E68C',
    palegoldenrod: '#EEE8AA',
    beige: '#F5F5DC',
    lemonchiffon: '#FFFACD',
    lightgoldenrodyellow: '#FAFAD2',
    lightyellow: '#FFFFE0',
    darkslategray: '#2F4F4F',
    darkolivegreen: '#556B2F',
    olive: '#808000',
    darkgreen: '#006400',
    forestgreen: '#228B22',
    seagreen: '#2E8B57',
    green: '#008080',
    lightseagreen: '#20B2AA',
    madiumaquamarine: '#66CDAA',
    mediumseagreen: '#3CB371',
    darkseagreen: '#8FBC8F',
    yellowgreen: '#9ACD32',
    limegreen: '#32CD32',
    lime: '#00FF00',
    chartreuse: '#7FFF00',
    lawngreen: '#7CFC00',
    greenyellow: '#ADFF2F',
    mediumspringgreen: '#00FA9A',
    springgreen: '#00FF7F',
    lightgreen: '#90EE90',
    palegreen: '#98F898',
    aquamarine: '#7FFFD4',
    honeydew: '#F0FFF0',
    midnightblue: '#191970',
    navy: '#000080',
    darkblue: '#00008B',
    darkslateblue: '#483D8B',
    mediumblue: '#0000CD',
    royalblue: '#4169E1',
    dodgerblue: '#1E90FF',
    cornflowerblue: '#6495ED',
    deepskyblue: '#00BFFF',
    lightskyblue: '#87CEFA',
    lightsteelblue: '#B0C4DE',
    lightblue: '#ADD8E6',
    steelblue: '#4682B4',
    darkcyan: '#008B8B',
    cadetblue: '#5F9EA0',
    darkturquoise: '#00CED1',
    mediumturquoise: '#48D1CC',
    turquoise: '#40E0D0',
    skyblue: '#87CECB',
    powderblue: '#B0E0E6',
    paleturquoise: '#AFEEEE',
    lightcyan: '#E0FFFF',
    azure: '#F0FFFF',
    aliceblue: '#F0F8FF',
    aqua: '#00FFFF',
    cyan: '#00FFFF',
    black: '#000000',
    dimgray: '#696969',
    gray: '#808080',
    slategray: '#708090',
    lightslategray: '#778899',
    dakgray: '#A9A9A9',
    silver: '#C0C0C0',
    lightgray: '#D3D3D3',
    gainsboro: '#DCDCDC',
    whitesmoke: '#F5F5F5',
    ghostwhite: '#F8F8FF',
    white: '#FFFFFF'
  };

  var Color = function () {
    function Color(color) {
      _classCallCheck(this, Color);

      this.color = color && colorDir[color] && rHex.test(colorDir[color]) ? colorDir[color] : color;
      this.init();
    }

    _createClass(Color, [{
      key: 'init',
      value: function init() {}
    }, {
      key: 'toRgb',
      value: function toRgb(opacity) {
        var color = this.color;
        var rgb = void 0;
        if (color && rRgb.test(color)) {
          rgb = color;
        } else if (color && rHex.test(color)) {
          rgb = Color.HtoR(color, opacity);
        } else if (typeof color === 'number') {
          rgb = Color.HtoR(Color.DtoH(color));
        }
        return rgb;
      }
    }, {
      key: 'toHex',
      value: function toHex() {
        var color = this.color;
        var hex = void 0;
        if (color && rHex.test(color)) {
          hex = color;
        } else if (color && rRgb.test(color)) {
          hex = Color.RtoH(color);
        } else if (typeof color === 'number') {
          hex = Color.DtoH(color);
        }
        return hex;
      }
    }, {
      key: 'toDec',
      value: function toDec() {
        var color = this.color;
        var dec = void 0;
        if (typeof color === 'number') {
          dec = color;
        } else if (color && rHex.test(color)) {
          dec = Color.HtoD(color);
        } else if (color && rRgb.test(color)) {
          dec = Color.HtoD(Color.RtoH(color));
        }
        return dec;
      }
    }]);

    return Color;
  }();

  Color.HtoR = function (color, opacity) {
    var colorChange = [];
    if (color.length === 4) color = color.replace(/(\w)/g, '$1$1');
    for (var i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }if (typeof opacity === 'number') colorChange.push(opacity);
    return 'rgb' + (colorChange.length === 4 ? 'a' : '') + '(' + colorChange.join(",") + ')';
  };

  Color.RtoH = function (color) {
    var hex = '#';
    var rgbArr = rRgb.exec(color);
    var tmp = '';
    for (var i = 2; i < rgbArr.length; i++) {
      tmp = Number(rgbArr[i]).toString(16);
      tmp = tmp.length === 1 ? tmp + tmp : tmp;
      hex += tmp;
    }
    return hex;
  };

  Color.DtoH = function (color) {
    color = color.toString(16);
    while (color.length < 6) {
      color = '0' + color;
    }
    return '#' + color;
  };

  Color.HtoD = function (color) {
    if (color.length === 4) color = color.replace(/(\w)/g, '$1$1');
    return parseInt(color.slice(1), 16);
  };

  exports.default = Color;
});
