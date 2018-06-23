// ==UserScript==
// @name          Real wechat subscription articles images
// @name:zh-CN    原图显示微信公众号文章
// @namespace     https://github.com/ivysrono/Scripts
// @author        ivysrono
// @version       1.1
// @match         https://mp.weixin.qq.com/s*
// @grant         none
// ==/UserScript==

// 将网页标题修改为文章标题
document.title = document.getElementById("activity-name").innerHTML;

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
