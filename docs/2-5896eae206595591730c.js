(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,n){"use strict";var r=n(5);e.__esModule=!0,e.withPrefix=d,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var o=r(n(57)),a=r(n(27)),i=r(n(6)),c=r(n(35)),u=r(n(40)),l=r(n(2)),s=r(n(0)),f=n(16),p=n(174);function d(t){return function(t){return t.replace(/\/+/g,"/")}("/saoirse/"+t)}var T={activeClassName:l.default.string,activeStyle:l.default.object},E=function(t){function e(e){var n;n=t.call(this,e)||this,(0,u.default)((0,c.default)((0,c.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,c.default)((0,c.default)(n))),n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,r=e.getProps,i=void 0===r?this.defaultGetProps:r,c=e.onClick,u=e.onMouseEnter,l=(e.activeClassName,e.activeStyle,e.innerRef,e.state),T=e.replace,E=(0,o.default)(e,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var h=d(n);return s.default.createElement(f.Link,(0,a.default)({to:h,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(t){u&&u(t),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(e){return c&&c(e),0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),A(n,{state:l,replace:T})),!0}},E))},e}(s.default.Component);E.propTypes=(0,a.default)({},T,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var h=s.default.forwardRef(function(t,e){return s.default.createElement(E,(0,a.default)({innerRef:e},t))});e.default=h;var A=function(t,e){window.___navigate(d(t),e)};e.navigate=A;var v=function(t){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(t))};e.push=v;e.replace=function(t){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(t))};e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(t)}},210:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=f(n(0)),i=f(n(2)),c=f(n(253)),u=f(n(256)),l=n(259),s=n(211);function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var d,T,E,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)(function(){return null}),A=(d=h,E=T=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,c=t.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=c,e.titleAttributes=r({},i),e));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach(function(e){var o;n=r({},n,((o={})[e]=t[e],o))}),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,function(t){if(t&&t.props){var o=t.props,a=o.children,i=p(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=p(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),a.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(a.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=d.peek,T.rewind=function(){var t=d.rewind();return t||(t=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);A.renderStatic=A.rewind,e.Helmet=A,e.default=A},211:function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},225:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return s}),n.d(e,"h",function(){return f});var r=n(226),o=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(t)};o.displayName="FaAngleLeft";var a=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}}]})(t)};a.displayName="FaAngleRight";var i=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}}]})(t)};i.displayName="FaCaretLeft";var c=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}}]})(t)};c.displayName="FaChevronLeft";var u=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}}]})(t)};u.displayName="FaChevronRight";var l=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-96 168c0 8.84-7.16 16-16 16H160c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h192c8.84 0 16 7.16 16 16v16z"}}]})(t)};l.displayName="FaFolderMinus";var s=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-96 168c0 8.84-7.16 16-16 16h-72v72c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-72h-72c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h72v-72c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v72h72c8.84 0 16 7.16 16 16v16z"}}]})(t)};s.displayName="FaFolderPlus";var f=function(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(t)};f.displayName="FaStar"},226:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a);n.d(e,"a",function(){return l});var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function l(t){return function(e){return o.a.createElement(s,c({attr:c({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return o.a.createElement(e.tag,c({key:n},e.attr),t(e.child))})}(t.child))}}function s(t){var e=function(e){var n,r=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var a=t.attr,i=u(t,["attr"]);return o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,i,{className:n,style:c({color:t.color||e.color},e.style,t.style),height:r,width:r}),t.children)};return void 0!==i?o.a.createElement(i.Consumer,null,function(t){return e(t)}):e(a)}},253:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n(0),a=r(o),i=r(n(254)),c=r(n(255));t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u=[],l=void 0;function s(){l=t(u.map(function(t){return t.props})),f.canUseDOM?e(l):n&&(l=n(l))}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.peek=function(){return l},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,u=[],t},e.prototype.shouldComponentUpdate=function(t){return!c(t,this.props)},e.prototype.componentWillMount=function(){u.push(this),s()},e.prototype.componentDidUpdate=function(){s()},e.prototype.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),s()},e.prototype.render=function(){return a.createElement(r,this.props)},e}(o.Component);return f.displayName="SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")",f.canUseDOM=i.canUseDOM,f}}},254:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(e,n,e,t))||(t.exports=r)}()},255:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<a.length;u++){var l=a[u];if(!c(l))return!1;var s=t[l],f=e[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},256:function(t,e,n){var r=Array.prototype.slice,o=n(257),a=n(258),i=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:function(t,e,n){var l,s;if(c(t)||c(e))return!1;if(t.prototype!==e.prototype)return!1;if(a(t))return!!a(e)&&(t=r.call(t),e=r.call(e),i(t,e,n));if(u(t)){if(!u(e))return!1;if(t.length!==e.length)return!1;for(l=0;l<t.length;l++)if(t[l]!==e[l])return!1;return!0}try{var f=o(t),p=o(e)}catch(d){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),l=f.length-1;l>=0;l--)if(f[l]!=p[l])return!1;for(l=f.length-1;l>=0;l--)if(s=f[l],!i(t[s],e[s],n))return!1;return typeof t==typeof e}(t,e,n))};function c(t){return null==t}function u(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}},257:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n},258:function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?r:o).supported=r,e.unsupported=o},259:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=u(n(0)),i=u(n(59)),c=n(211);function u(t){return t&&t.__esModule?t:{default:t}}var l,s=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=h(t,c.TAG_NAMES.TITLE),n=h(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=h(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},p=function(t){return h(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return o({},t,e)},{})},T=function(t,e){return e.filter(function(t){return void 0!==t[c.TAG_NAMES.BASE]}).map(function(t){return t[c.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e},[])},E=function(t,e,n){var o={};return n.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&m("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var r={};n.filter(function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();-1===e.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var a=Object.keys(r),u=0;u<a.length;u++){var l=a[u],s=(0,i.default)({},o[l],r[l]);o[l]=s}return t},[]).reverse()},h=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},A=(l=Date.now(),function(t){var e=Date.now();e-l>16?(l=e,t(e)):setTimeout(function(){A(t)},0)}),v=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:t.cancelAnimationFrame||v,m=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,_=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,l=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,p=t.title,d=t.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),O(p,d);var T={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,a),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,u),scriptTags:R(c.TAG_NAMES.SCRIPT,s),styleTags:R(c.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=T[t].oldTags)}),e&&e(),l(t,E,h)},g=function(t){return Array.isArray(t)?t.join(""):t},O=function(t,e){void 0!==t&&document.title!==t&&(document.title=g(t)),P(c.TAG_NAMES.TITLE,e)},P=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),u=0;u<i.length;u++){var l=i[u],s=e[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=a.indexOf(l);-1!==f&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return i=e,n.isEqualNode(t)})?o.splice(i,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},w=function(t){return Object.keys(t).reduce(function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e},e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=w(n),a=g(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return w(e)}};default:return{toComponent:function(){return function(t,e){return e.map(function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),a.default.createElement(t,o)})}(t,e)},toString:function(){return function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o=void 0===r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")},"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e},e)},e.handleClientStateChange=function(t){b&&S(b),t.defer?b=y(function(){_(t,function(){b=null})}):(_(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,l=t.scriptTags,s=t.styleTags,f=t.title,p=void 0===f?"":f,d=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,a,r),meta:C(c.TAG_NAMES.META,i,r),noscript:C(c.TAG_NAMES.NOSCRIPT,u,r),script:C(c.TAG_NAMES.SCRIPT,l,r),style:C(c.TAG_NAMES.STYLE,s,r),title:C(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},e.reducePropsToState=function(t){return{baseTag:T([c.TAG_PROPERTIES.HREF],t),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,t),defer:h(t,c.HELMET_PROPS.DEFER),encode:h(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:p(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=m}).call(this,n(80))}}]);
//# sourceMappingURL=2-5896eae206595591730c.js.map