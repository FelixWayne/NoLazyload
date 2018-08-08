// ==UserScript==
// @name          NoLazyload
// @namespace     https://github.com/ivysrono/Scripts
// @author        ivysrono
// @version       1.3
// @match         https://mp.weixin.qq.com/s*
// @grant         none
// ==/UserScript==

// 去除延迟加载，直接载入原图。
let imgs = document.getElementsByClassName("img_loading");
if (imgs) {
  for (let img of imgs) {
    let realSrc = img.dataset.src;
    img.src = realSrc;
    // 对付垃圾公众号的长宽限制 https://mp.weixin.qq.com/s/b4V3eaFYYI0h90vIVEqKzw
    img.style.width = "";
    img.style.height = "";
  }
}

// 将网页标题修改回文章标题
let runcount = 0;
let realTitle = document.getElementById("activity-name").innerHTML;
function real() {
  // “微信扫一扫关注该公众号”出现后会将标题修改为公众号名，可能脚本执行后又被改回去，二次修改可以保证成功。也许用 MutationObserver 是更好的选择。
  if (document.title != realTitle && runcount < 2) {
    document.title = realTitle;
    runcount++;
  }
}
setInterval(real, 1000);