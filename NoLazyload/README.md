由于 Violentmonkey 迟迟不能解决 [Firefox CSP issue](https://github.com/violentmonkey/violentmonkey/issues/408)，故将[脚本](https://github.com/ivysrono/NoLazyload/raw/master/NoLazyload/NoLazyload.user.js)打包成扩展。目前仅支持微信公众号文章页面。

Chrome 用户可以用任意脚本管理器[安装](https://github.com/ivysrono/NoLazyload/raw/master/NoLazyload/NoLazyload.user.js)。
Firefox + Greasemonkey/Tampermonkey 应当都可以正常使用。
其实 Firefox 用户也可以继续使用 Violentmonkey 安装管理本脚本，但需要加装 Greasemonkey。至于为什么空白的 GM 就能解决问题，还请大佬指点。

前辈 [LightTerminal/nolazyload](https://github.com/LightTerminal/nolazyload) 提供了适用于全网的去除延迟加载脚本，但会造成很多误伤，建议一个一个需要的网站进行处理。