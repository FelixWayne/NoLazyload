// ==UserScript==
// @name          Real wechat subscription articles images
// @name:zh-CN    原图显示微信公众号文章
// @namespace     https://github.com/ivysrono/Scripts
// @author        ivysrono
// @version       1.2
// @match         https://mp.weixin.qq.com/s*
// @grant         none
// ==/UserScript==

// 去除延迟加载，直接载入原图。
var imgs = document.getElementsByClassName("img_loading");
var length = imgs.length
for (i = 0; i < length; i++) {
  var realSrc = imgs[i].dataset.src;
  if (realSrc) {
    imgs[i].src = realSrc;
    // 对付垃圾公众号的长宽限制 https://mp.weixin.qq.com/s/b4V3eaFYYI0h90vIVEqKzw
    imgs[i].style.width = "";
    imgs[i].style.height = "";
  }
}

// 将网页标题修改回文章标题
var runcount = 0;
var realTitle = document.getElementById("activity-name").innerHTML;
function real() {
  // “微信扫一扫关注该公众号”出现后会将标题修改为公众号名，可能脚本执行后又被改回去，二次修改可以保证成功。也许用 MutationObserver 是更好的选择。
  if (document.title != realTitle && runcount < 2) {
    document.title = realTitle;
    runcount += 1;
  }
}
setInterval(real, 1000);