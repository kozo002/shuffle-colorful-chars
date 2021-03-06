(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShuffleColorfulChars = function () {
  function ShuffleColorfulChars(node) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShuffleColorfulChars);

    this.node = node;
    this.originalChars = this.node.innerText;
    this.options = options;
  }

  _createClass(ShuffleColorfulChars, [{
    key: "run",
    value: function run(completionCallback) {
      var _this = this;

      var completedCount = -1;

      var finishIfNeeded = function finishIfNeeded() {
        if (completedCount == _this.originalChars.length) {
          clearInterval(timerID);
          if (typeof completionCallback == "function") {
            completionCallback();
          }
          return;
        }
      };

      var randomChars = function randomChars() {
        var seed = _this.options.lang == "ja" ? SEED_JA : SEED;
        var chars = sampleArrayByLength(seed, _this.originalChars.length);
        chars.splice(0, completedCount + 1);
        chars = chars.map(function (c) {
          return "<span style=\"" + _this.makeStyle() + "\">" + c + "</span>";
        });
        return chars.join("");
      };

      var timerID = setInterval(function () {
        finishIfNeeded();
        var originalChars = _this.originalChars.slice(0, completedCount + 1);
        _this.node.innerHTML = originalChars + randomChars();
        completedCount++;
      }, 50);
    }
  }, {
    key: "makeStyle",
    value: function makeStyle() {
      var styles = {
        "color": sampleArray(COLORS),
        "font-weight": this.options.bold ? "bold" : "normal"
      };
      var result = [];
      for (var key in styles) {
        result.push(key + ":" + styles[key]);
      }
      return result.join(";");
    }
  }]);

  return ShuffleColorfulChars;
}();

exports.default = ShuffleColorfulChars;


function sampleArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function sampleArrayByLength(array, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result.push(sampleArray(array));
  }
  return result;
}

var COLORS = ["#97C783", "#FF8750", "#5750FF", "#9C98FF", "#232066", "#FF7670", "#FFE4AA", "#9DE4AA"];

var LowerCase = "abcefghijklmnopqrstuvwxyz";
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "01234567889";
var Signs = "-=^¥|[]{}()*;:?/_!\"#$%&'^@+<>";
var Hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
var Katakana = "アイウエオカキクケコサシスセソタチツテトナナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
var Kanji = "亜哀挨愛曖悪圧嵐暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯逸茨芋引印因咽姻員院隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅閲円延怨宴媛煙猿遠鉛塩演縁艶汚王凹応往押旺欧殴桜翁奥横岡屋億憶臆虞乙卸音恩温穏下化火加可仮何花佳価果河苛架夏家華菓貨渦過嫁暇禍靴寡歌箇稼課蚊我画芽賀雅餓介会快戒改怪拐悔海界皆械開階塊解潰壊懐諧貝外劾害崖涯街慨該概骸柿角拡革格核殻郭覚較隔閣確獲嚇穫学岳楽顎掛潟括活喝渇割葛滑褐且株釜鎌刈干甘汗完官冠巻看陥乾勘患貫寒喚堪換敢棺間閑勧寛幹漢慣管関歓監緩館環簡観韓艦岸岩玩眼頑顔願企伎危机気岐希忌汽奇祈季紀軌既飢鬼帰基寄規喜幾揮期貴棄旗器輝機騎技宜偽欺義疑儀戯擬犠議菊吉喫詰客脚逆虐九久及休吸朽臼求究泣急級救給嗅窮牛去巨居拒拠挙虚許距魚御凶共叫狂京享供協況峡狭胸脅強教境橋矯競響驚仰業凝曲局極玉巾斤均近金菌勤琴筋僅禁緊謹襟吟句苦駆具惧愚偶遇隅串窟熊繰訓勲薫軍郡群型契計恵啓掲渓経蛍敬景軽傾携慶憬稽憩警鶏迎鯨劇撃激桁欠穴血決結傑犬件見券肩建研県倹兼剣拳軒健険圏堅献遣権憲賢謙鍵繭顕験懸元限原現舷厳己戸古呼固股虎孤弧故枯湖雇誇鼓錮顧五互呉後娯悟碁語誤護口工公孔功巧広甲交光向后江考行孝抗攻更効幸拘厚恒洪皇紅荒郊候校航貢降高康黄喉慌港硬絞構綱酵稿興講購乞号合拷剛傲豪克谷刻国黒穀酷獄骨駒込頃今困昆恨根婚混痕紺墾懇左佐沙査砂唆差詐鎖座挫再妻采砕宰栽採済祭斎細菜裁債催載際埼在材剤財罪崎索策搾錯咲冊札刷刹拶察撮擦雑皿三山参桟蚕惨産傘散算酸賛残斬暫士子支止氏仕史四市矢旨死糸私使始姉枝祉肢姿思指師恣紙脂視紫詞詩資飼誌賜諮示字寺次似児事侍治持慈辞磁餌璽鹿式識軸七𠮟失室疾執湿嫉漆質実芝写社車舎者射捨赦斜煮遮謝邪酌釈爵若弱手主守朱取狩首殊珠酒腫種趣授儒樹収囚州舟秀周宗拾秋臭終習週就衆集愁酬醜襲十汁充住柔重従渋銃獣縦叔祝宿淑粛縮塾熟出述術俊春旬巡盾純循順準潤遵処所書暑署緒諸女如助序叙小升匠床抄肖尚招承沼昭宵将消症笑唱商渉章紹訟勝掌晶焼焦硝詔証象傷奨照詳彰障憧衝賞償礁丈冗条状乗城常情場畳蒸縄壌嬢錠譲醸色拭食植触職辱尻心申伸身辛侵信津神唇娠振浸針紳進森診新審震薪親人刃仁尽迅甚陣尋腎須図水垂炊衰推酔遂睡穂錘随髄枢崇杉裾寸瀬是井世正生成西声制姓征斉政星牲省凄清盛婿晴聖誠精製誓静請整税夕斥石赤昔席脊隻惜跡積績切折拙窃接設雪説舌絶千川仙占先宣泉浅洗染扇栓戦煎羨腺詮践箋銭銑潜線遷繊鮮全前善然禅漸膳繕狙阻祖租組疎訴遡壮早争走奏相荘草送倉捜挿桑掃曹窓痩葬装僧想層総遭踪操燥霜騒藻造像増憎蔵贈臓足促則息捉速側測属賊続卒率存村孫尊損遜他多汰打妥唾堕惰駄太対体耐怠胎退帯堆袋逮替貸隊滞態戴大代第題沢卓拓託濯諾濁但達脱奪棚誰丹担単炭胆探淡端綻誕鍛団男暖談壇地池知値恥致遅痴稚置緻竹畜逐蓄築秩窒茶着嫡虫沖宙忠抽昼柱衷酎鋳駐弔庁兆町長挑帳張彫眺鳥脹貼超腸跳徴嘲潮澄調聴懲直勅捗沈陳賃墜通痛塚漬坪爪鶴低呈弟定底抵邸亭貞帝訂庭逓停偵堤提程艇泥的滴適敵溺鉄徹撤天店点展添転塡田伝電斗吐妬徒途塗賭土努度怒刀冬灯当投豆東凍唐島桃討透党悼盗陶塔搭湯痘登答等筒統稲糖頭謄藤闘騰同洞胴堂童道働匿特得督徳篤毒独読栃凸突屯豚頓貪鈍曇丼那奈内謎鍋難二尼弐匂虹日入乳尿忍熱年念捻粘燃悩納能脳農濃把波派破覇馬婆罵杯背肺俳配排廃輩売倍陪媒買賠白博薄麦漠縛爆箱箸畑肌八鉢発髪伐抜罰閥反半氾犯帆汎伴判版班畔般販搬頒繁藩晩番蛮盤比皮妃否批彼披肥非卑飛疲秘被悲扉費碑避尾眉美微肘匹必筆姫百氷表評漂標苗秒病描猫品浜貧賓頻敏瓶不夫付布扶府怖阜附訃負富普腐敷賦侮武部封風伏服副幅復福腹複覆払沸仏物紛雰噴墳憤奮分文聞丙平兵併並柄陛閉幣弊蔽米壁璧癖別蔑片辺返変偏遍編弁便勉歩保哺捕舗母募墓慕方包宝抱放法胞俸倣峰崩訪蜂豊飽褒縫亡乏忙妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀頰北木朴牧睦僕没勃堀奔凡盆麻摩磨魔毎妹枚昧埋幕膜枕又末抹満漫未味魅岬蜜脈眠矛務無夢霧娘名命明鳴滅免面綿麺茂模毛妄盲耗猛網目黙門紋問匁冶夜野弥厄役約訳薬躍由油喩愉諭輸癒唯友有悠郵湧猶裕遊雄誘憂融優与予余誉幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊擁謡抑沃浴欲翌翼拉裸羅来雷頼絡落酪辣乱卵覧濫藍欄吏利里理痢裏璃離陸立律慄略柳流留竜粒硫侶虜慮了良料涼猟陵量僚領林厘倫輪隣臨瑠涙累塁令礼冷励戻例鈴零霊隷齢暦歴列劣烈裂恋連廉練錬呂炉賂路露老労弄郎朗浪廊楼漏籠六録麓論和話賄脇惑枠湾腕";

var SEED = LowerCase + UpperCase + Numbers + Signs;
var SEED_JA = Hiragana + Katakana + sampleArrayByLength(Kanji, 25).join("") + Numbers + Signs;

},{}],2:[function(require,module,exports){
"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var isAnimatingSample1 = false;
  var sample1 = document.getElementById("sample-1");
  var sample1Button = document.getElementById("sample-1-button");
  var scc = new _index2.default(sample1);

  sample1Button.addEventListener("click", function () {
    if (isAnimatingSample1) {
      return;
    }
    isAnimatingSample1 = true;
    scc.run(function () {
      return isAnimatingSample1 = false;
    });
  });

  var isAnimatingSample2 = false;
  var sample2 = document.getElementById("sample-2");
  var sample2Button = document.getElementById("sample-2-button");
  var scc2 = new _index2.default(sample2, { lang: "ja" });

  sample2Button.addEventListener("click", function () {
    if (isAnimatingSample2) {
      return;
    }
    isAnimatingSample2 = true;
    scc2.run(function () {
      isAnimatingSample2 = false;
    });
  });
});

},{"./index":1}]},{},[2]);
