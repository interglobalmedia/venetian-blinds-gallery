!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);var o=n(2),r=n(3),s=document.getElementById("support-msg"),u=(document.querySelector("#speak"),document.querySelector("#stop")),a=(document.querySelector('[name="text"]'),document.querySelector("#voice"),document.querySelector('[name="volume"]'),document.querySelector('[name="rate"]'),document.querySelector('[name="pitch"]'),new Audio("./audio/06-Power-Animals.mp3"),document.querySelector(".play")),c=document.querySelector(".pause"),i=document.querySelector("#blinds"),l=document.querySelector(".sessionstorage"),d=document.querySelector(".clear"),p=document.querySelector(".empty"),m=document.getElementById("storagequota-msg");if(document.getElementById("save").addEventListener("click",o.sessionStorageToFile),"speechSynthesis"in window?s.innerHTML="Your browser supports speech synthesis":s.innerHTML="Sorry but your browser does not support speech synthesis",r.sessionStorageSupport)try{setInterval(function(){sessionStorage.setItem("autosave",l.value)},1e3)}catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(m.innerHTML="Session Storage Quota Exceeded!")}else m.innerHTML="Sorry. No HTML5 session storage support here.";sessionStorage.getItem("autosave",l.value)&&(l.value=sessionStorage.getItem("autosave",l.value)),a.addEventListener("click",r.playAudio),c.addEventListener("click",r.stopAudio),d.addEventListener("click",r.clearStorage),p.addEventListener("click",r.emptyStorage),i.addEventListener("mouseenter",r.playAudio),i.addEventListener("mouseleave",r.stopAudio),a.addEventListener("click",r.playAudio),c.addEventListener("click",r.stopAudio),u.addEventListener("click",function(){return(0,r.toggle)(!1)})},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sessionStorageToFile=r;var o=document.getElementById("save");document.querySelector(".sessionstorage").value;function r(){var e=JSON.stringify(sessionStorage.autosave),t=new Blob([e],{type:"text/plain"}),n=document.getElementById("save");n.download="session-storage.txt",null!==window.URL?(n.href=window.URL.createObjectURL(t),n.target="_blank"):(n.href=window.URL.createObjectURL(t),n.target="_blank",n.style.display="none",document.body.appendChild(n.download))}o.addEventListener("click",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.populateVoices=h,t.speak=L,t.toggle=w,t.playAudio=b,t.stopAudio=q,t.sessionStorageSupport=_,t.clearStorage=k,t.emptyStorage=A;var o=document.getElementById("support-msg"),r=document.querySelector("#speak"),s=document.querySelector("#stop"),u=document.querySelector('[name="text"]'),a=document.querySelector("#voice"),c=document.querySelector('[name="volume"]'),i=document.querySelector('[name="rate"]'),l=document.querySelector('[name="pitch"]'),d=n(4),p=new Audio(d),m=document.querySelector(".play"),y=document.querySelector(".pause"),v=document.querySelector("#blinds span"),S=document.querySelector(".sessionstorage"),g=document.querySelector(".clear"),f=document.querySelector(".empty"),E=document.getElementById("storagequota-msg");function h(){speechSynthesis.getVoices().forEach(function(e,t){var n=document.createElement("option");n.value=e.name,n.innerHTML=e.name,a.appendChild(n)})}function L(e){var t=new SpeechSynthesisUtterance,n=speechSynthesis.getVoices();t.text=e,t.volume=parseFloat(c.value),t.rate=parseFloat(i.value),t.pitch=parseFloat(l.value),a.value&&(t.voice=n.filter(function(e){return e.name===a.value})[0]),window.speechSynthesis.speak(t)}function w(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=new SpeechSynthesisUtterance;speechSynthesis.cancel(),e&&speechSynthesis.speak(t)}function b(){p.play("../audio/06-Power-Animals.mp3")}function q(){p.pause("../audio/06-Power-Animals.mp3")}function _(){return"undefined"!=typeof Storage}if("speechSynthesis"in window?o.innerHTML="Your browser supports speech synthesis":o.innerHTML="Sorry but your browser does not support speech synthesis",_)try{setInterval(function(){sessionStorage.setItem("autosave",S.value)},1e3)}catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(E.innerHTML="Local Storage Quota Exceeded!")}else E.innerHTML="Sorry. No HTML5 session storage support here.";function k(){S.value="",sessionStorage.removeItem("autosave",S.value)}function A(){S.value="",sessionStorage.clear()}sessionStorage.getItem("autosave",S.value)?S.value=sessionStorage.getItem("autosave",S.value):sessionStorage.setItem("autosave",S.value),m.addEventListener("click",b),y.addEventListener("click",q),g.addEventListener("click",k),f.addEventListener("click",A),v.addEventListener("mouseenter",b),v.addEventListener("mouseleave",q),h(),window.speechSynthesis.onvoiceschanged=function(e){return h()},r.addEventListener("click",function(e){a.value.length>0&&L(u.value)}),s.addEventListener("click",function(){return w(!1)})},function(e,t,n){e.exports=n.p+"audio/06-Power-Animals.mp3"}]);