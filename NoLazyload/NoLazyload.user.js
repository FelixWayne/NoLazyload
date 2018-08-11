// ==UserScript==
// @name          NoLazyload
// @namespace     https://github.com/ivysrono/Scripts
// @author        ivysrono
// @version       1.5
// @match         https://mp.weixin.qq.com/s*
// @grant         none
// ==/UserScript==

// 去除延迟加载，直接载入原图。
let imgs = document.getElementsByTagName("img");
if (imgs) { // 可能存在无图页面
  for (let img of imgs) {
    let realSrc = img.dataset.src;
    if (realSrc && img.src !== realSrc){ // 可能没有延迟加载图或原图已经载入
      img.src = realSrc;
      // 对付垃圾公众号的长宽限制 https://mp.weixin.qq.com/s/b4V3eaFYYI0h90vIVEqKzw
      img.style.width = "";
      img.style.height = "";
    }
  }
}

// 将网页标题修改回文章标题
let runcount = 0;
let realTitle = document.getElementById("activity-name").innerHTML;
function real() {
  // “微信扫一扫关注该公众号”出现后会将标题修改为公众号名，可能脚本执行后又被改回去，二次修改可以保证成功。https://mp.weixin.qq.com/s/cyFN8mEq00dgpklQn6woeg
  // 也许用 MutationObserver 是更好的选择。
  if (runcount >= 2) {
    clearInterval(change);
  }
  if (document.title != realTitle && runcount < 2) {
    document.title = realTitle;
    runcount++;
    console.log('runcount=' + runcount)
  }
}
change = setInterval(real, 1000);