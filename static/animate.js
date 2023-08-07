// old version function typeWriter(str, selector, interval = 1000)
function typeWriter(options = {}) {
  var str = options.str || "" //function(){console.error("No text to animate. Add \"str\" to options."); return;}
  var selector = options.selector || "" //function(){console.error("No selector. Add \"selector\" to options."); return;}
  var interval = options.interval || 1000

  var target = document.querySelector(selector);
  var s = 0;
  var len = str.length;
  var keyFrame = 1 / len;
  var frameCount = 1;
  var keyFrame_const = keyFrame;
  var cIdx = 0;
  var sstr = "";

  var progressMultply = 1;

  // DEBUG VARIABLE
  var fc = 0;
  var est_fps = len / (interval / 1000);

  if (est_fps > 60) {
    progressMultply = Math.round(est_fps / 60);
  }

  function ani() {
    s = Date.now();
    requestAnimationFrame(update);
  }
  function update() {
    var ct = Date.now();
    var progress = (ct - s);

    if (progress >= keyFrame) {
      for (var i = 0; i < progressMultply; i++) {
        if (str[cIdx] == undefined) { break; }
        sstr += str[cIdx];
        target.innerHTML = sstr;
        frameCount += 1;
        keyFrame += keyFrame_const;
        cIdx += 1;
        fc += 1;
      }
    }
    if (progress <= interval) {
      requestAnimationFrame(update);
    }
  }
  ani();
}

// old version function typeDeleter(selector, interval = 1000)
function typeDeleter(options = {}) {
  var selector = options.selector || ""
  var interval = options.interval || 1000
  var target = document.querySelector(selector);
  var raw_str = target.outerHTML;
  var cStr = raw_str.split("");

  var s = 0;
  var len = raw_str.length;
  var keyFrame = 1 / len;
  var frameCount = 1;
  var keyFrame_const = keyFrame;
  var cIdx = 0;

  var progressMultply = 1;
  var est_fps = len / (interval / 1000);
  if (est_fps > 60) {
    progressMultply = Math.round(est_fps / 60);
  }

  function ani() {
    s = Date.now();
    requestAnimationFrame(update);
  }
  function update() {
    var ct = Date.now();
    var progress = (ct - s) / interval;
    if (progress >= keyFrame) {
      for (var i = 0; i < progressMultply; i++) {
        cStr.pop();
        target.innerHTML = cStr.join("");
        frameCount += 1;
        keyFrame += keyFrame_const;
      }
    }
    if (progress <= 1) {
      requestAnimationFrame(update);
    }
  }
  ani();
}

// old version function randomTypeWriter(str, selector, interval = 1000, customStyle = {}, customBaseText = [], baseTextAnimation = false, baseTextAnimationName, baseTextAnimationDelay = 0)
function randomTypeWriter(options = {}) {
  var str = options.str || ""
  var selector = options.selector || ""
  var interval = options.interval || 1000
  var customStyle = options.customStyle || {}
  var customBaseText = options.customBaseText || []
  var baseTextAnimation = options.baseTextAnimation || false
  var baseTextAnimationName = options.baseTextAnimationName || ""
  var baseTextAnimationDelay = options.baseTextAnimationDelay || 0
  var space = options.customSpacer || "&emsp;";

  var target = document.querySelector(selector);
  var animationStartTime = 0;
  var len = str.length;
  var keyFrame = 1 / len;
  var frameCount = 1;
  var keyFrame_const = keyFrame;
  var cIdx = 0;
  var interval_cnt = interval;
  var strary = str.split("");
  var cStr = [];
  var rd = new Set();
  var addstr;

  var progressMultply = 1;
  var est_fps = len / (interval / 1000);
  if (est_fps > 60) {
    progressMultply = Math.round(est_fps / 60);
  }

  console.log(customStyle);

  if (customStyle.length != 0) { target.setAttribute("class", customStyle) }

  if (customBaseText.length <= 1) {
    for (const idx in str) { cStr.push(space); }
  }
  else {
    for (const idx in str) {
      var rnd = Math.floor(Math.random() * customBaseText.length);
      cStr.push(customBaseText[rnd]);
    }
  }

  var preRnd = nonReapeatRandomGenerator(0, len - 1);

  if (!baseTextAnimation) {
    target.innerHTML = cStr.join("");
    ani();
  }
  else {
    interval_cnt /= 2;
    // cStr.join(""), selector, interval_cnt, "", [], false
    baseTextAnimationName({ str: cStr.join(""), selector: selector, interval: interval_cnt });
    window.setTimeout(function () {
      ani();
    }, interval_cnt + baseTextAnimationDelay);
  }
  function ani() {
    animationStartTime = Date.now();
    requestAnimationFrame(updateFrame);
  }
  function updateFrame() {
    var currentProgressTime = Date.now();
    var progress = (currentProgressTime - animationStartTime) / interval_cnt;
    if (progress >= keyFrame) {
      for (var i = 0; i < progressMultply; i++) {
        var rnd = preRnd[preRnd.length - 1];
        addstr = strary[rnd]
        cStr.splice(rnd, 1, addstr);
        target.innerHTML = cStr.join("");
        frameCount += 1;
        keyFrame += keyFrame_const;
        preRnd.pop()
      }
    }
    if (progress <= 1) {
      requestAnimationFrame(updateFrame);
    }
  }
}

// old version function randomDeleter(selector, interval = 1000, customSpacer = "&emsp;")
function randomDeleter(options = {}) {
  var selector = options.selector || "";//function () { console.error("No selector. Add \"selector\" to options."); return; }
  var interval = options.interval || 1000;
  var customSpacer = options.customSpacer || "&emsp;";
  var nrChar = options.noRemove;

  var target = document.querySelector(selector);
  var animationStartTime = 0;
  var interval_cnt = interval;
  var rd = new Set();
  var addstr = customSpacer;
  var raw_str = target.outerHTML;

  var cStr = raw_str.split("");
  var dIdx = 0;

  var len = raw_str.length;
  var keyFrame = 1 / len;
  var frameCount = 1;
  var keyFrame_const = keyFrame;

  var progressMultply = 1;
  var est_fps = len / (interval / 1000);
  if (est_fps > 60) {
    progressMultply = Math.round(est_fps / 60);
  }

  var preRnd = nonReapeatRandomGenerator(0, len - 1);

  ani();

  function ani() {
    animationStartTime = Date.now();
    requestAnimationFrame(updateFrame);
  }
  function updateFrame() {
    var currentProgressTime = Date.now();
    var progress = (currentProgressTime - animationStartTime) / interval_cnt;

    if (progress >= keyFrame && dIdx < raw_str.length) {
      for (var i = 0; i < progressMultply; i++) {
        var rnd = preRnd[preRnd.length - 1];
        frameCount += 1;
        keyFrame += keyFrame_const;

        cStr.splice(rnd, 1, addstr);
        target.innerHTML = cStr.join("");
        dIdx += 1;
        preRnd.pop()
      }
    }

    if (progress <= 1) {
      requestAnimationFrame(updateFrame);
    }
  }
}

var defaultBaseText = {
  FW_HEX: ["１", "２", "３", "４", "５", "６", "７", "８", "９", "０", "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｘ"],
  HW_HEX: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"],
  FW_SHIFT: ["！", "＠", "＃", "＄", "％", "＾", "＆", "＊"],
  HW_SHIFT: ["!", "@", "#", "document.querySelector", "%", "^", "&", "*"]
};

function nonReapeatRandomGenerator(fromInt, toInt) {
  var l = [];
  for (let i = fromInt; i <= toInt; i++) {
    var rIdx = Math.floor(Math.random() * l.length);
    l.splice(rIdx, 0, i);
  }
  return l;
}