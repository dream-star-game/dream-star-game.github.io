(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function I(){const e=$(window).width(),t=$(window).height(),n=1600,u=757,i=e/n,s=t/u;$("body").css("zoom",(i+s)/2),$("section").css("height",$("#app").height())}$(window).on("resize",I);I();const r=$("main"),l=$("main>section,main>footer"),x="fp24";let m=x,j=null;function E(){return $("#app").height()}function O(e){e||(e=x);const t=r.find(`#${e}`);return t.length?t:r.find(`#${x}`)}function p(e){m=e,w()}function w(){const e=O(m),t=[].slice.call(l).indexOf(e[0]);l.each((u,i)=>$(i).removeClass("active"));let n;t==l.length-1?(n=(t-1)*E()+e.outerHeight(),e.addClass("active"),e.prev().addClass("active")):(n=t*E(),e.addClass("active")),j&&j(e.attr("id")),r[0].style.setProperty("--pos",n+"px")}let y=!1;r.on("mousewheel",function({originalEvent:{wheelDelta:e,ctrlKey:t}}){if(t||y)return;y=!0;let n=[].slice.call(l).indexOf(O(m)[0]);e<0?n++:e>0&&n--,n<=0&&(n=0),n>l.length-1&&(n=l.length-1),p(l.get(n).id),setTimeout(()=>{y=!1},500)});let h=!1,g=null,P=null,L=null,d=null;r.on("touchstart",function({originalEvent:{changedTouches:e}}){h||(h=!0,r.addClass("touching"),g=e[0].identifier,P=e[0].clientY,L=Number(r[0].style.getPropertyValue("--pos").split("px")[0]))});r.on("touchmove",function({originalEvent:{changedTouches:e}}){if(!h)return;const t=[].slice.call(e).find(u=>u.identifier==g);if(!t)return;d=P-t.clientY;const n=L+d;r[0].style.setProperty("--pos",n+"px")});r.on("touchend",function({originalEvent:{changedTouches:e}}){if(h&&[].slice.call(e).find(t=>t.identifier==g)){if(h=!1,r.removeClass("touching"),Math.abs(d)>=100){let t=[].slice.call(l).indexOf(O(m)[0]);d>0?t++:t--,t<=0&&(t=0),t>l.length-1&&(t=l.length-1),p(l.get(t).id)}else w();g=null,P=null,L=null,d=null}});w();$(window).on("resize",w);function Y(e){j=e}const b=[{img:"./assets/pj1.png",title:"建筑天地",desc:"“以社交为芯，以朋友为伴”",link:"https://www.dao3.fun/exp/experience/detail/100084551"},{img:"./assets/pj2.png",title:"我是外卖员",desc:"高考过后，你来到了外卖城的一个大学，因为生活费太少而被迫在外卖城开始外卖员的工作。",link:"https://www.dao3.fun/exp/experience/detail/100062926"},{img:"./assets/pj3.png",title:"赛博外卖员",desc:"随着科技的发展，外卖城也进入了全新的“赛博”宇宙，下面请继续你的外卖员之旅吧~",link:"https://www.dao3.fun/exp/experience/detail/100067181"}],T=186,F=216,A=16,a=$(".projects-list"),f=$(".projects-info");let o=0,z=[];function c(e){let t=b.length;if(e<0){let n=t- -(e%t);return n==t?0:n}else return e>0?e%t:0}function H(){return $(window).width()}function N(){if(H()<624){let e=$(".projects-list").width();return-(T*4+A*5)+(e/2-F/2)}else return-(T*4)}function M(e){a.addClass("animating"),a.children().eq(4).removeClass("active"),a.children().eq(4+e).addClass("active"),a[0].style.setProperty("--pos",N()-e*(T+A)+"px")}function S(){a.removeClass("animating"),z=[c(o-4),c(o-3),c(o-2),c(o-1),c(o),c(o+1),c(o+2),c(o+3),c(o+4)],a.children().each((e,t)=>{e==4?$(t).addClass("active"):$(t).removeClass("active");const n=b[z[e]];$(t).find("img").attr("src",n.img).attr("alt",n.title)}),a[0].style.setProperty("--pos",N()+"px")}function B(){f.addClass("hide"),setTimeout(()=>{f.removeClass("hide");const e=b[o];f.find("h2").text(e.title),f.find("p").text(e.desc),f.find("a").attr("href",e.link)},350)}function W(e){M(e),setTimeout(()=>{S()},500),B()}let C=!1;a.children().each((e,t)=>{$(t).on("click",function(){if(C||e==4)return;C=!0;const n=e<4?-(4-e):e-4;o=c(o+n),W(n),setTimeout(()=>{C=!1},564)})});W(0);$(window).on("resize",S);function q(){const e=location.hash.slice(1);p(e||null)}window.addEventListener("hashchange",()=>{q()});Y(function(e){location.hash="#"+e,$("ul.nav li").removeClass("active"),$(`ul.nav li:has([href="#${e}"])`).addClass("active")});setTimeout(()=>{q()},100);
