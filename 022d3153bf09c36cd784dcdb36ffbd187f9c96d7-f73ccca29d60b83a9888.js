"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[790],{7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return j},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],f=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(f,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,m);return r.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(y,s({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=o(e,b);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:S},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],_=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=o(e,k),y=i.width,v=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),E=w.style,S=w.className,x=o(w,T),O=(0,r.useRef)(),I=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var q=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void _.add(I)):L&&_.has(I)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;O.current&&(O.current.innerHTML=r(s({isLoading:!0,isLoaded:_.has(I),image:i},h)),_.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,I,_,c,f,g,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){_.has(I)&&L&&(O.current.innerHTML=L(s({isLoading:_.has(I),isLoaded:_.has(I),image:i},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},x,{style:s({},E,c,{backgroundColor:u}),className:S+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));I.propTypes=x,I.displayName="GatsbyImage";var q,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:S,width:N,height:N,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(q=I,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,A);return n&&console.warn(n),a?r.createElement(q,s({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=R},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7706:function(e,t,a){var r=a(7294),n=a(1597),i=a(7059);t.Z=function(){var e,t,s=(0,n.useStaticQuery)("3257411868"),o=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=s.site.siteMetadata)||void 0===t||t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"https://avatars.githubusercontent.com/u/56056962?v=4",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(3299)}),(null==o?void 0:o.name)&&r.createElement("p",null,"Written by ",r.createElement("a",{href:"https://github.com/ajfAfg"},"ajfAfg"),"."))}},3299:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#283848","images":{"fallback":{"src":"/static/1b5006aff4a513f555dcf8af87a69279/e5610/56056962.png","srcSet":"/static/1b5006aff4a513f555dcf8af87a69279/e5610/56056962.png 50w,\\n/static/1b5006aff4a513f555dcf8af87a69279/e9b55/56056962.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/1b5006aff4a513f555dcf8af87a69279/d4bf4/56056962.avif 50w,\\n/static/1b5006aff4a513f555dcf8af87a69279/ee81f/56056962.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/1b5006aff4a513f555dcf8af87a69279/3faea/56056962.webp 50w,\\n/static/1b5006aff4a513f555dcf8af87a69279/6a679/56056962.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-f73ccca29d60b83a9888.js.map