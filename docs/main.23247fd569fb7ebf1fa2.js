(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(t=i.currentScript.src),!t)){var s=i.getElementsByTagName("script");if(s.length)for(var c=s.length-1;c>-1&&(!t||!/^http(s?):/.test(t));)t=s[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"a59f0405b34e25bfdd3c.svg",i=e.p+"50816e42231842d4567c.svg",s=e.p+"7cd24bfa252235321377.svg",c=e.p+"a318dfda9223c9b6bcc1.jpg",n=e.p+"5df8a5c7dcda04cc3f1e.jpg",a=e.p+"032cb68ed96890ac0c3b.jpg",r=[{id:1,icon:t,background:c,sound:e.p+"ba837e3ecc073286cbc4.mp3"},{id:2,icon:i,background:n,sound:e.p+"b7ee8a84e7ecf1112c27.mp3"},{id:3,icon:s,background:a,sound:e.p+"24f5c09b90641ef35477.mp3"}];({activeClass:"active",initVolumeValue:50,items:[],bgs:[],itemsContainer:document.querySelector(".items"),backgroundsContainer:document.querySelector(".main__bg"),range:document.querySelector(".range"),currentActiveIndex:null,audio:new Audio,init(){this.renderItems(),this.reunderBackgrounds(),this.initItemClick(),this.initAudio()},initAudio(){this.audio.volume=this.initVolumeValue/100,this.range.addEventListener("input",(()=>{this.audio.volume=+this.range.value/100}))},renderItems(){r.forEach((e=>{const t=document.createElement("div"),i=document.createElement("img"),s=document.createElement("img");t.className="item",i.className="item__bg",s.className="item__icon",i.alt=`bg${e.id}`,s.alt=`icon${e.id}`,i.src=e.background,s.src=e.icon,t.append(i,s),this.itemsContainer.append(t),this.items.push(t)}))},reunderBackgrounds(){r.forEach((e=>{const t=document.createElement("img");t.className="main__img",t.alt=`img${e.id}`,t.src=e.background,this.backgroundsContainer.append(t),this.bgs.push(t)}))},initItemClick(){this.items.forEach(((e,t)=>{e.addEventListener("click",(()=>{null===this.currentActiveIndex&&this.currentActiveIndex!==t||this.disableItem(this.currentActiveIndex),this.currentActiveIndex!==t?(this.enableItem(t),this.currentActiveIndex=t):this.currentActiveIndex=null}))}))},enableItem(e){this.items[e].classList.add(this.activeClass),this.bgs[e].classList.add(this.activeClass),this.audio.src=r[e].sound,this.audio.play()},disableItem(e){this.items[e].classList.remove(this.activeClass),this.bgs[e].classList.remove(this.activeClass),this.audio.pause()}}).init()})();
//# sourceMappingURL=main.23247fd569fb7ebf1fa2.js.map