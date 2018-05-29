var imgs = document.getElementsByClassName("img_loading");
var length = imgs.length
for (i = 0; i < length; i++) {
  var realSrc = imgs[i].dataset.src;
  if (realSrc) {
    imgs[i].src = realSrc;
    // 某些奇葩限制图片大小，如 https://mp.weixin.qq.com/s/b4V3eaFYYI0h90vIVEqKzw
    imgs[i].style.width = "";
    imgs[i].style.height = "";
  }
}
