var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop(); _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var _this = this;

libs.string_matching_title = function (movieInfo, titleSearch, regex, replacement) {
    if (regex === void 0) { regex = true; }
    if (replacement === void 0) { replacement = '+'; }
    var matching = slugify(movieInfo.title, { lower: true, replacement: replacement, remove: /[*+~.()'\"!:@-]/g }) == slugify(titleSearch, { lower: true, replacement: replacement, remove: /[*+~.()'\"!:@-]/g });
    if (matching) {
        return true;
    }
    if (!regex) {
        return false;
    }
    var reg = new RegExp("^".concat(movieInfo.title, " *.+"), 'gi');
    return titleSearch.match(reg) ? true : false;
};

libs.string_get_season_tvshow = function (title) {
    var season = title.toLowerCase().match(/\\- *season *([0-9]+)/i);
    season = season ? season[1] : 0;
    return {
        new_title: title.toLowerCase().replace(/\\- *season [0-9]+/i, "").trim(),
        season: season,
    };
};

libs.string_btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var str = input;
    var output = '';
    for (var block = 0, charCode = void 0, i = 0, map = chars; str.charAt(i | 0) || (map = '=', i % 1); output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
        charCode = str.charCodeAt(i += 3 / 4);
        if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
    }
    return output;
};

libs.string_atob = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var str = input.replace(/=+$/, '');
    var output = '';
    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (var bc = 0, bs = 0, buffer = void 0, i = 0; buffer = str.charAt(i++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
    }
    return output;
};

libs.string_provider = function (provider, rank) {
    if (rank === void 0) { rank = 0; }
    if (!rank) {
        return "Server ".concat(provider[0].toUpperCase());
    }
    return "Server ".concat(provider[0].toUpperCase()).concat(rank);
};

libs.string_encrypt_fmovies = function (input) {
    var keytwo = "51wJ0FDq/UVCefLopEcmK3ni4WIQztMjZdSYOsbHr9R2h7PvxBGAuglaN8+kXT6y";
    var output = '';
    for (var i = 0; i < input.length; i += 3) {
        var a = new Int32Array([-1, -1, -1, -1]);
        a[0] = (input[i].charCodeAt() | 0) >> 2;
        a[1] = (3 & (input[i].charCodeAt() | 0)) << 4;
        if (input.length > (i + 1 | 0)) {
            a[1] = a[1] | (input[i + 1 | 0].charCodeAt() | 0) >> 4;
            a[2] = (15 & (input[i + 1 | 0].charCodeAt() | 0)) << 2;
        }
        if (input.length > (i + 2 | 0)) {
            a[2] = a[2] | (input[i + 2 | 0].charCodeAt() | 0) >> 6;
            a[3] = 63 & (input[i + 2 | 0].charCodeAt() | 0);
        }
        for (var y = 0; y !== a.length; ++y) {
            var n = a[y];
            if (n === -1) {
                output += '=';
            }
            else {
                if (0 <= n && n <= 63) {
                    output += String.fromCharCode(keytwo[n].charCodeAt());
                }
            }
        }
    }
    return output;
};

libs.string_cipher_fmovies = function (inputOne, inputTwo) {
    var array = new Int32Array(256);
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
        array[i] = i;
    }
    var arr = array;
    var output = '';
    var u = 0;
    var r;
    for (var a = 0; a !== arr.length; ++a) {
        u = (u + arr[a] + (inputOne[a % inputOne.length].charCodeAt() | 0) | 0) % 256;
        r = arr[a];
        arr[a] = arr[u];
        arr[u] = r;
    }
    u = 0;
    var c = 0;
    for (var a_1 = 0; a_1 < inputTwo.length; a_1++) {
        c = (c + a_1) % 256;
        u = (u + arr[c]) % 256;
        r = arr[c];
        arr[c] = arr[u];
        arr[u] = r;
        output += String.fromCharCode("".concat((inputTwo[a_1].charCodeAt() | 0) ^ arr[(arr[c] + arr[u] | 0) % 256]));
    }
    return output;
};

libs.string_join_fmovies = function (_0x4a7250) {
    for (var _0x1f5f88 = [], _0x40fc17 = 0; _0x40fc17 < _0x4a7250['length']; _0x40fc17++) {
        var _0x2fcc8a = _0x4a7250["charCodeAt"](_0x40fc17);
        _0x40fc17 % 5 == 0 ? _0x2fcc8a ^= 4 : _0x40fc17 % 5 == 1 ? _0x2fcc8a *= 4 : _0x40fc17 % 5 == 2 ? _0x2fcc8a ^= 3 : _0x40fc17 % 5 == 3 ? _0x2fcc8a ^= 4 : _0x40fc17 % 5 == 4 && (_0x2fcc8a *= 3), _0x1f5f88["push"](_0x2fcc8a);
    }
    return _0x1f5f88.join("-");
};

libs.string_unpack = function (code) {
    function indent(code) {
        try {
            var tabs = 0, old = -1, add = '';
            for (var i = 0; i < code.length; i++) {
                if (code[i].indexOf("{") != -1)
                    tabs++;
                if (code[i].indexOf("}") != -1)
                    tabs--;
                if (old != tabs) {
                    old = tabs;
                    add = "";
                    while (old > 0) {
                        add += "\t";
                        old--;
                    }
                    old = tabs;
                }
                code[i] = add + code[i];
            }
        }
        finally {
            tabs = null;
            old = null;
            add = null;
        }
        return code;
    }
    var env = {
        eval: function (c) {
            code = c;
        },
        window: {},
        document: {}
    };
    eval("with(env) {" + code + "}");
    code = (code + "").replace(/;/g, ";\n").replace(/{/g, "\n{\n").replace(/}/g, "\n}\n").replace(/\n;\n/g, ";\n").replace(/\n\n/g, "\n");
    code = code.split("\n");
    code = indent(code);
    code = code.join("\n");
    return code;
};

libs.string_unpacker_v2 = function (code) {
    function indent(code) {
        try {
            var tabs = 0, old = -1, add = '';
            for (var i = 0; i < code.length; i++) {
                if (code[i].indexOf("{") != -1)
                    tabs++;
                if (code[i].indexOf("}") != -1)
                    tabs--;
                if (old != tabs) {
                    old = tabs;
                    add = "";
                    while (old > 0) {
                        add += "\t";
                        old--;
                    }
                    old = tabs;
                }
                code[i] = add + code[i];
            }
        }
        finally {
            tabs = null;
            old = null;
            add = null;
        }
        return code;
    }
    var env = {
        eval: function (c) {
            code = c;
        },
        window: {},
        document: {}
    };
    eval("with(env) {" + code + "}");
    code = (code + "").replace(/;/g, ";\n").replace(/{/g, "\n{\n").replace(/}/g, "\n}\n").replace(/\n;\n/g, ";\n").replace(/\n\n/g, "\n");
    code = code.split("\n");
    code = indent(code);
    code = code.join("\n");
    return code;
};

libs.string_base64_decode = function (str) {
    var words = cryptoS.enc.Base64.parse(str);
    var textString = cryptoS.enc.Utf8.stringify(words);
    return textString;
};

libs.string_base64_encode = function (str) {
    var wordArray = cryptoS.enc.Utf8.parse(str);
    var base64 = cryptoS.enc.Base64.stringify(wordArray);
    return base64;
};