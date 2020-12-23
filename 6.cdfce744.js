/*! For license information please see 6.cdfce744.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1062:function(e,t,a){"use strict";var n=a(5),r=a(10),c=a(1),o=a.n(c),l=a(624),i=a(602),s=a(94),u=a(673),d=a(134),m=a.n(d),f=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,f=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(i.a)(m.a.themedImage,m.a["themedImage--"+e],l)},h))})))},h=a(633),v=a(590),b=a(702);t.a=function(e){var t=Object(s.default)().isClient,a=Object(v.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,m=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),O=u.target?{target:u.target}:Object(b.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},E={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,O),u.src&&o.a.createElement(f,{key:t,className:d,sources:E,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:m},c))}},1073:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),o=m(c),l=m(a(703)),i=m(a(3)),s=m(a(1074)),u=m(a(1075)),d=a(1076);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},1074:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(1),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1075:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(1),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1076:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},1077:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(5),r=a(10),c=a(1),o=a.n(c),l=a(704),i=a(620),s=a(590);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),m=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=m?m:f)&&void 0!==t?t:h,b=null!=a?a:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:b,to:p}))}},1078:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(5),r=a(10),c=a(1),o=a.n(c),l=a(704),i=a(620),s=a(590),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),E=O.preferredVersion,k=O.savePreferredVersionName;var j=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:g,y=c?"Versions":j.label,C=c?void 0:u(j).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(f,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},1079:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(5),r=a(10),c=a(1),o=a.n(c),l=a(704),i=a(620),s=a(602),u=a(590);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),b=v.activeVersion,p=v.activeDoc,g=Object(u.useDocsPreferredVersion)(f).preferredVersion,O=Object(i.useLatestVersion)(f),E=null!==(t=null!=b?b:g)&&void 0!==t?t:O,k=E.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===k.sidebar,a)),label:null!=m?m:k.id,to:k.path}))}},673:function(e,t,a){"use strict";var n=a(1),r=a(817);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},701:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(602),o=a(131),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(590),u=a(813),d=a(132),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(5),v=a(10),b=a(96),p=a(94),g=a(646),O=a(633),E=a(624),k=a(95),j=a(815);function y(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var C=a(816);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var S="Ctrl";var T=r.a.forwardRef((function(e,t){var a=_(Object(n.useState)(null),2),c=a[0],o=a[1];return Object(n.useEffect)((function(){"undefined"!=typeof navigator&&o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S)}),[]),r.a.createElement("button",w({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement("div",{className:"DocSearch-Button-Container"},r.a.createElement(C.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==c?r.a.createElement("div",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},c===S?r.a.createElement(y,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),I=a(620);function L(){var e=function(){var e=Object(p.default)().i18n,t=Object(I.useAllDocsData)(),a=Object(I.useActivePluginAndVersion)(),n=Object(s.useDocsPreferredVersionByPluginId)(),r=[s.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==a||null===(r=a.activePlugin)||void 0===r?void 0:r.pluginId)===e?a.activeVersion:void 0,l=n[e],i=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(s.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var D=null;function P(e){var t=e.hit,a=e.children;return r.a.createElement(E.a,{to:t.url},a)}function B(e){var t=e.state,a=e.onClose,n=Object(j.a)().generateSearchPageLink;return r.a.createElement(E.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function M(e){var t,c,o=e.contextualSearch,l=Object(v.a)(e,["contextualSearch"]),i=Object(p.default)().siteMetadata,s=L(),u=null!==(t=null===(c=l.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],d=o?[].concat(s,u):u,m=Object.assign({},l.searchParameters,{facetFilters:d}),f=Object(O.b)().withBaseUrl,E=Object(g.useHistory)(),j=Object(n.useRef)(null),y=Object(n.useState)(!1),C=y[0],w=y[1],_=Object(n.useState)(null),N=_[0],S=_[1],I=Object(n.useCallback)((function(){return D?Promise.resolve():Promise.all([a.e(155).then(a.bind(null,1511)),Promise.all([a.e(4),a.e(156)]).then(a.bind(null,1480)),a.e(4).then(a.t.bind(null,328,7))]).then((function(e){var t=e[0].DocSearchModal;D=t}))}),[]),M=Object(n.useCallback)((function(){I().then((function(){w(!0)}))}),[I,w]),x=Object(n.useCallback)((function(){w(!1)}),[w]),A=Object(n.useCallback)((function(e){I().then((function(){w(!0),S(e.key)}))}),[I,w,S]),V=Object(n.useRef)({navigate:function(e){var t=e.itemUrl;E.push(t)}}).current,R=Object(n.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:f(""+t.pathname+t.hash)})}))})).current,F=Object(n.useMemo)((function(){return function(e){return r.a.createElement(B,Object(h.a)({},e,{onClose:x}))}}),[x]),U=Object(n.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",i.docusaurusVersion),e}),[i.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:C,onOpen:M,onClose:x,onInput:A,searchButtonRef:j}),r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+l.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(T,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:M,ref:j}),C&&Object(b.createPortal)(r.a.createElement(D,Object(h.a)({onClose:x,initialScrollY:window.scrollY,initialQuery:N,navigator:V,transformItems:R,hitComponent:P,resultsFooterComponent:F,transformSearchClient:U},l,{searchParameters:m})),document.body))}var x=function(){var e=Object(p.default)().siteConfig;return r.a.createElement(M,e.themeConfig.algolia)},A=a(1073),V=a.n(A),R=a(133),F=a.n(R),U=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(F.a.toggle,F.a.dark),style:a},t)},H=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(F.a.toggle,F.a.light),style:a},t)},X=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(p.default)().isClient;return r.a.createElement(V.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(U,{icon:a,style:n}),unchecked:r.a.createElement(H,{icon:c,style:o})}},e))},K=a(673),G=a(818),q=function(e){var t=Object(g.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(G.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},Y=a(819),W=a(820),z=a(704),J={default:function(){return z.a},docsVersion:function(){return a(1077).default},docsVersionDropdown:function(){return a(1078).default},doc:function(){return a(1079).default}};function Q(e){var t=e.type,a=Object(v.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=J[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var Z=a(1062),$=a(821),ee=a(135),te=a.n(ee),ae="right";var ne=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],v=m[1],b=Object(n.useState)(!1),p=b[0],g=b[1],O=Object(K.a)(),E=O.isDarkTheme,k=O.setLightTheme,j=O.setDarkTheme,y=q(i),C=y.navbarRef,w=y.isNavbarVisible;Object(Y.a)(f);var _=Object(n.useCallback)((function(){v(!0)}),[v]),N=Object(n.useCallback)((function(){v(!1)}),[v]),S=Object(n.useCallback)((function(e){return e.target.checked?j():k()}),[k,j]),T=Object(W.a)();Object(n.useEffect)((function(){T===W.b.desktop&&v(!1)}),[T]);var I=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ae)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ae)}))}}(l),L=I.leftItems,D=I.rightItems;return r.a.createElement("nav",{ref:C,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[te.a.navbarHideable]=i,e[te.a.navbarHidden]=!w,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:_,onKeyDown:_},r.a.createElement($.a,null)),r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[te.a.hideLogoText]=p,t))}),L.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},D.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(X,{className:te.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:E,onChange:S}),r.a.createElement(x,{handleSearchBarToggle:g,isSearchBarExpanded:p}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!d&&f&&r.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:E,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(Q,Object(h.a)({mobile:!0},e,{onClick:N,key:t}))})))))))},re=a(136),ce=a.n(re);function oe(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(v.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(O.a)(t),i=Object(O.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(E.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var le=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ie=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(O.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(oe,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:ce.a.footerLogoLink},r.a.createElement(le,{alt:i.alt,url:u})):r.a.createElement(le,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:null!=a?a:""}})))):null},se=a(9),ue="light",de="dark",me=function(e){return e===de?de:ue},fe=function(){return se.a.canUseDOM?me(document.documentElement.getAttribute("data-theme")):ue},he=function(e){try{localStorage.setItem("theme",me(e))}catch(t){console.error(t)}},ve=function(){var e=Object(s.useThemeConfig)().colorMode.disableSwitch,t=void 0!==e&&e,a=Object(n.useState)(fe),r=a[0],c=a[1],o=Object(n.useCallback)((function(){c(ue),he(ue)}),[]),l=Object(n.useCallback)((function(){c(de),he(de)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",me(r))}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(me(e))}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?de:ue)}))}),[]),{isDarkTheme:r===de,setLightTheme:o,setDarkTheme:l}},be=a(817);var pe=function(e){var t=ve(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(be.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},ge="docusaurus.tab.",Oe=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(ge))e[n.substring(ge.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},Ee="docusaurus.announcement.dismiss",ke="docusaurus.announcement.id",je=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(Ee,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(ke);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(ke,t),n&&localStorage.setItem(Ee,"false"),(n||"false"===localStorage.getItem(Ee))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},ye=a(814);var Ce=function(e){var t=Oe(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=je(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(ye.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function we(e){var t=e.children;return r.a.createElement(pe,null,r.a.createElement(Ce,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}function _e(e){var t=e.locale,a=e.version,n=e.tag,c=t;return r.a.createElement(k.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}function Ne(e){var t=Object(p.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,v=e.keywords,b=e.permalink,g=e.searchMetadatas,E=Object(s.useTitleFormatter)(d),j=f||l,y=Object(O.a)(j,{absolute:!0}),C=Object(O.a)(c),w=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("html",{lang:w}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),c&&r.a.createElement("link",{rel:"shortcut icon",href:C}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{property:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(_e,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},g)),r.a.createElement(k.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(137);var Se=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(138);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return Se(),r.a.createElement(we,null,r.a.createElement(Ne,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(ne,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(ie,null))}},703:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},704:function(e,t,a){"use strict";var n=a(5),r=a(10),c=a(1),o=a.n(c),l=a(602),i=a(624),s=a(633),u=a(646),d=a(590);function m(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:m,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function f(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!1),h=f[0],v=f[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":h})},o.a.createElement(m,Object(n.a)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(m,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},l)))})))):o.a.createElement(m,Object(n.a)({className:b(i)},s))}function h(e){var t,a,i=e.items,s=e.className,f=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,b=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),p=b[0],g=b[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(m,Object(n.a)({className:O(s)},f)));var E=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(a=h.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(m,Object(n.a)({role:"button",className:O(s,!0)},f,{onClick:function(){g((function(e){return!e}))}}),f.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:E}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:O(a)},c,{onClick:f.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:f;return o.a.createElement(c,n)}},813:function(e,t,a){"use strict";var n=a(1),r=a(814);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},814:function(e,t,a){"use strict";var n=a(1),r=Object(n.createContext)(void 0);t.a=r},815:function(e,t,a){"use strict";var n=a(646),r=a(9),c=a(94);t.a=function(){var e=Object(n.useHistory)(),t=Object(n.useLocation)(),a=Object(c.default)().siteConfig,o=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},816:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(1),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},817:function(e,t,a){"use strict";var n=a(1),r=a.n(n).a.createContext(void 0);t.a=r},818:function(e,t,a){"use strict";var n=a(1),r=a(9),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},819:function(e,t,a){"use strict";var n=a(1);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},820:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(1),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},821:function(e,t,a){"use strict";var n=a(5),r=a(10),c=a(1),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}}}]);