(this.webpackChunkoishikm12_github_io=this.webpackChunkoishikm12_github_io||[]).push([[826],{6968:(t,i,e)=>{"use strict";e(2222),e(4812),e(9653),e(6977),e(9070);var n=e(3411),s=e.n(n),o=e(8947),a=e(1417);function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}console.log("Welcome !!!"),o.vI.add(a.AYu,a.hwn,a.Zzi),o.vz.watch();var h=document.getElementById("scene"),c=(new(s())(h),window.devicePixelRatio),u=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=window.cursor,this.shape=window["cursor-shape"],this.translation={x:1,y:1},this.mouse={x:window.innerWidth/2,y:window.innerHeight/2},this.precision=2,this.scale=1,this.rotation=1,this.friction=.1,this.animate(),this.events()}var i,e,n;return i=t,(e=[{key:"events",value:function(){var t=this;document.addEventListener("mousemove",(function(i){t.mouse.x=i.clientX*c,t.mouse.y=i.clientY*c}),!1)}},{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),this.render()}},{key:"getDist",value:function(t,i){return Math.sqrt(Math.pow(t,2)+Math.pow(i,2))}},{key:"speedMorph",value:function(){var t=this.getDist(this.dx,this.dy)/500;return Number(Math.min(t,.3).toFixed(2))}},{key:"update",value:function(){var t=this.speedMorph(this.dx,this.dy);this.scale+=(t-this.scale)*this.friction,this.translation.x+=this.dx*this.friction,this.translation.y+=this.dy*this.friction,this.rotation=180*Math.atan2(this.dy,this.dx)/Math.PI}},{key:"render",value:function(){this.update(),this.container.style.transform="translate3d(".concat(this.translation.x.toFixed(this.precision),"px ,").concat(this.translation.y.toFixed(this.precision),"px, 0)"),this.shape.style.transform="rotate(".concat(this.rotation.toFixed(this.precision),"deg) scale(").concat(1+this.scale,", ").concat(1-this.scale,")")}},{key:"dx",get:function(){return this.mouse.x-this.translation.x}},{key:"dy",get:function(){return this.mouse.y-this.translation.y}}])&&r(i.prototype,e),n&&r(i,n),t}();if("none"!==document.getElementById("cursor").style.display)new u}},0,[[6968,730,976]]]);
//# sourceMappingURL=index.fd43c5cc.js.map