/*
 * Modernizr JavaScript library 1.0
 * http://modernizr.com/
 *
 * Copyright (c) 2009 Faruk Ates - http://farukat.es/
 * Licensed under the MIT license.
 * http://modernizr.com/license/
 *
 * Featuring major contributions by
 * Paul Irish  - http://paulirish.com
 * Ben Alman   - http://benalman.com/
 */
window.Modernizr=(function(){var D={},L=true,T=true,G=50,h=document,V=h.documentElement,M=h.createElement("modernizr"),g=M.style,R=h.createElement("input"),k="canvas",Q="canvastext",N="rgba",d="hsla",I="multiplebgs",t="borderimage",y="borderradius",r="boxshadow",P="opacity",x="cssanimations",J="csscolumns",a="cssgradients",l="cssreflections",e="csstransforms",s="csstransforms3d",S="csstransitions",A="fontface",E="geolocation",c="video",w="audio",q="inputtypes",H="background",b=H+"Color",B="canPlayType",o={},v={},n,K,O,F,j=[];function u(f){g.cssText=f}function z(i,f){i+=";";return u(i+"-webkit-"+i+"-moz-"+i+"-o-"+i+"-ms-"+i+(f||""))}function C(i,f){return i.indexOf(f)!==-1}function U(m,W){for(var f in m){if(g[m[f]]!==undefined&&(!W||W(m[f]))){return true}}}function p(W,m){var i=W.replace(/./,function(X){return X.toUpperCase()}),f=[W,"webkit"+i,"Moz"+i,"moz"+i,"o"+i,"ms"+i];return !!U(f,m)}o[k]=function(){return !!h.createElement(k).getContext};o[Q]=function(){return !!(o[k]()&&typeof h.createElement(k).getContext("2d").fillText=="function")};o[E]=function(){return !!navigator.geolocation};o[N]=function(){u(H+"-color:rgba(150,255,150,.5)");return C(g[b],N)};o[d]=function(){u(H+"-color:hsla(120,40%,100%,.5)");return C(g[b],N)};o[I]=function(){u(H+":url(m.png),url(a.png),#f99 url(m.png)");return/(url\s*\(.*?){3}/.test(g[H])};o[t]=function(){z("border-image:url(m.png) 1 1 stretch");return p("borderImage")};o[y]=function(){z("border-radius:10px");return p("borderRadius","",function(f){return C(f,"orderRadius")})};o[r]=function(){z("box-shadow:#000 1px 1px 3px");return p("boxShadow")};o[P]=function(){u("opacity:.5");return C(g[P],"0.5")};o[x]=function(){z('animation:"animate" 2s ease 2',"position:relative");return p("animationName")};o[J]=function(){z("column-count:3");return p("columnCount")};o[a]=function(){var i=H+"-image:",f="gradient(linear,left top,right bottom,from(#9f9),to(white));";u(i+f+i+"-webkit-"+f+i+"-moz-"+f+i+"-o-"+f+i+"-ms-"+f);return C(g.backgroundImage,"gradient")};o[l]=function(){z("box-reflect:right 1px");return p("boxReflect")};o[e]=function(){z("transform:rotate(3deg)");return !!U(["transformProperty","webkitTransform","MozTransform","mozTransform","oTransform","msTransform"])};o[s]=function(){z("perspective:500");return !!U(["perspectiveProperty","webkitPerspective","MozPerspective","mozPerspective","oPerspective","msPerspective"])};o[S]=function(){z("transition:all .5s linear");return p("transitionProperty")};o[A]=(function(){var i;if(!(!/*@cc_on@if(@_jscript_version>=5)!@end@*/0)){i=true}else{var ab=h.createElement("style"),W=h.createElement("span"),ac,X,Z=false,Y=h.body,aa,m;ab.textContent="@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}";h.getElementsByTagName("head")[0].appendChild(ab);W.setAttribute("style","font:99px _,serif;position:absolute;visibility:hidden");if(!Y){Y=V.appendChild(h.createElement(A));Z=true}W.innerHTML="........";W.id="fonttest";Y.appendChild(W);ac=W.offsetWidth;W.style.font="99px testfont,_,serif";i=ac!==W.offsetWidth;var f=function(){i=Modernizr[A]=ac!==W.offsetWidth;V.className=V.className.replace(/(no-)?font.*?\b/,"")+(i?" ":" no-")+A;aa&&(m=true)&&aa(i);Z&&setTimeout(function(){Y.parentNode.removeChild(Y)},50)};setTimeout(f,G)}D._fontfaceready=function(ad){(m||i)?ad(i):(aa=ad)};return function(){return i||ac!==W.offsetWidth}})();o[c]=function(){return !!h.createElement(c)[B]};o[w]=function(){return !!h.createElement(w)[B]};for(F in o){if(o.hasOwnProperty(F)){j.push((!(D[F]=o[F]())&&T?"no-":"")+F)}}D[q]=function(m){for(var f in m){R.setAttribute("type",m[f]);v[m[f]]=!!(R.type!=="text")}return v}("search tel url email datetime date month week time datetime-local number range color".split(" "));u("");M=R=null;if(L&&!(!/*@cc_on!@*/0)){n="abbr article aside audio bb canvas datagrid datalist details dialog figure footer header mark menu meter nav output progress section time video".split(" ");O=n.length+1;while(--O){K=h.createElement(n[O])}K=null}D._enableHTML5=L;D._enableNoClasses=T;(function(f,i){f[i]=f[i].replace(/\bno-js\b/,"js")})(V,"className");V.className+=" "+j.join(" ");return D})();

