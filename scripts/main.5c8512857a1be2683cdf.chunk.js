!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o(1);var n=o(2),r=o(3),a=document.getElementById("support-msg"),c=(document.querySelector("#speak"),document.querySelector("#stop")),u=(document.querySelector('[name="text"]'),document.querySelector("#voice"),document.querySelector('[name="volume"]'),document.querySelector('[name="rate"]'),document.querySelector('[name="pitch"]'),new Audio("./audio/06-Power-Animals.mp3"),document.querySelector(".play")),l=document.querySelector(".pause"),s=document.querySelector("#blinds"),i=document.querySelector(".localstorage"),d=document.querySelector(".clear"),p=document.querySelector(".empty"),m=document.getElementById("storagequota-msg");if(document.getElementById("save").addEventListener("click",n.localStorageToFile),"speechSynthesis"in window?a.innerHTML="Your browser supports speech synthesis":a.innerHTML="Sorry but your browser does not support speech synthesis",r.localStorageSupport)try{setInterval(function(){localStorage.setItem("autosave",i.value)},1e3)}catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(m.innerHTML="Local Storage Quota Exceeded!")}else m.innerHTML="Sorry. No HTML5 local storage support here.";localStorage.getItem("autosave",i.value)&&(i.value=localStorage.getItem("autosave",i.value)),u.addEventListener("click",r.playAudio),l.addEventListener("click",r.stopAudio),d.addEventListener("click",r.clearStorage),p.addEventListener("click",r.emptyStorage),s.addEventListener("mouseenter",r.playAudio),s.addEventListener("mouseleave",r.stopAudio),u.addEventListener("click",r.playAudio),l.addEventListener("click",r.stopAudio),c.addEventListener("click",function(){return(0,r.toggle)(!1)})},function(e,t,o){},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.localStorageToFile=r;var n=document.getElementById("save");document.querySelector(".localstorage").value;function r(){var e=JSON.stringify(localStorage.autosave),t=new Blob([e],{type:"text/plain"}),o=document.getElementById("save");o.download="local-storage.txt",null!==window.URL?(o.href=window.URL.createObjectURL(t),o.target="_blank"):(o.href=window.URL.createObjectURL(t),o.target="_blank",o.style.display="none",document.body.appendChild(o.download))}n.addEventListener("click",r)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.populateVoices=h,t.speak=L,t.toggle=w,t.playAudio=b,t.stopAudio=q,t.localStorageSupport=_,t.clearStorage=k,t.emptyStorage=A;var n=document.getElementById("support-msg"),r=document.querySelector("#speak"),a=document.querySelector("#stop"),c=document.querySelector('[name="text"]'),u=document.querySelector("#voice"),l=document.querySelector('[name="volume"]'),s=document.querySelector('[name="rate"]'),i=document.querySelector('[name="pitch"]'),d=o(4),p=new Audio(d),m=document.querySelector(".play"),y=document.querySelector(".pause"),v=document.querySelector("#blinds span"),S=document.querySelector(".localstorage"),g=document.querySelector(".clear"),f=document.querySelector(".empty"),E=document.getElementById("storagequota-msg");function h(){speechSynthesis.getVoices().forEach(function(e,t){var o=document.createElement("option");o.value=e.name,o.innerHTML=e.name,u.appendChild(o)})}function L(e){var t=new SpeechSynthesisUtterance,o=speechSynthesis.getVoices();t.text=e,t.volume=parseFloat(l.value),t.rate=parseFloat(s.value),t.pitch=parseFloat(i.value),u.value&&(t.voice=o.filter(function(e){return e.name===u.value})[0]),window.speechSynthesis.speak(t)}function w(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=new SpeechSynthesisUtterance;speechSynthesis.cancel(),e&&speechSynthesis.speak(t)}function b(){p.play("../audio/06-Power-Animals.mp3")}function q(){p.pause("../audio/06-Power-Animals.mp3")}function _(){return"undefined"!=typeof Storage}if("speechSynthesis"in window?n.innerHTML="Your browser supports speech synthesis":n.innerHTML="Sorry but your browser does not support speech synthesis",_)try{setInterval(function(){localStorage.setItem("autosave",S.value)},1e3)}catch(e){"QUOTA_EXCEEDED_ERR"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||(E.innerHTML="Local Storage Quota Exceeded!")}else E.innerHTML="Sorry. No HTML5 local storage support here.";function k(){S.value="",localStorage.removeItem("autosave",S.value)}function A(){S.value="",localStorage.clear()}localStorage.getItem("autosave",S.value)?S.value=localStorage.getItem("autosave",S.value):localStorage.setItem("autosave",S.value),m.addEventListener("click",b),y.addEventListener("click",q),g.addEventListener("click",k),f.addEventListener("click",A),v.addEventListener("mouseenter",b),v.addEventListener("mouseleave",q),h(),window.speechSynthesis.onvoiceschanged=function(e){return h()},r.addEventListener("click",function(e){u.value.length>0&&L(c.value)}),a.addEventListener("click",function(){return w(!1)})},function(e,t,o){e.exports=o.p+"audio/06-Power-Animals.mp3"}]);