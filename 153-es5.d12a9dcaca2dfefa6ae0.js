function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{bUBm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleBrowserModule",(function(){return A}));var r,o=n("2kYt"),a=n("sEIs"),i=n("SVIu"),s=n("EM62"),c=n("OZlg"),l=n("e0eB"),u=n("iyc4"),p=n("9qw2"),m=n("l4xa"),d=((r=function(){function e(t){_classCallCheck(this,e),this.userAgent=t}return _createClass(e,[{key:"aboutMyBrowser",get:function(){return Object(m.isEdge)(this.userAgent)?Object(m.isEdgeOlderThan)(13,this.userAgent)?"Edge \u0441\u0442\u0430\u0440\u0448\u0435 13-\u0442\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438":"Edge \u0434\u043e 13 \u0432\u0435\u0440\u0441\u0438\u0438":Object(m.isIE)(this.userAgent)?"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0443 \u0412\u0430\u0441 IE11":Object(m.isFirefox)(this.userAgent)?"\u0417\u0434\u043e\u0440\u043e\u0432\u043e, \u0443 \u0432\u0430\u0441 Firefox!":"\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u0412\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Chromium, \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!"}}]),e}()).\u0275fac=function(e){return new(e||r)(s["\u0275\u0275directiveInject"](p.e))},r.\u0275cmp=s["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-browser-example-1"]],decls:4,vars:1,template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"label"),s["\u0275\u0275text"](1,"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](t.aboutMyBrowser))},encapsulation:2,changeDetection:0}),r),f=n("u8jZ");function g(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-example",3),s["\u0275\u0275element"](1,"tui-browser-example-1"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("content",n.example1)}}function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 "),s["\u0275\u0275element"](3,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("code",n.importComponentExample)}}var b,h,E=((h=function e(){_classCallCheck(this,e),this.importComponentExample="import {isIE} from '@taiga-ui/cdk';\nimport {USER_AGENT} from '@ng-web-apis/common';\n\n...\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    areThereProblems = isIE(this.userAgent);\n...\n",this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {USER_AGENT} from '@ng-web-apis/common';\nimport {isEdge, isEdgeOlderThan, isFirefox, isIE} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n@Component({\n    selector: 'tui-browser-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBrowserExample1 {\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    get aboutMyBrowser(): string {\n        if (isEdge(this.userAgent)) {\n            if (isEdgeOlderThan(13, this.userAgent)) {\n                return 'Edge \u0441\u0442\u0430\u0440\u0448\u0435 13-\u0442\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438';\n            }\n\n            return 'Edge \u0434\u043e 13 \u0432\u0435\u0440\u0441\u0438\u0438';\n        }\n\n        if (isIE(this.userAgent)) {\n            return '\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0443 \u0412\u0430\u0441 IE11';\n        }\n\n        if (isFirefox(this.userAgent)) {\n            return '\u0417\u0434\u043e\u0440\u043e\u0432\u043e, \u0443 \u0432\u0430\u0441 Firefox!';\n        }\n\n        return '\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u0412\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Chromium, \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!';\n    }\n}\n",HTML:"<label>\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440:</label>\n\n<p>{{ aboutMyBrowser }}</p>\n"}}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=s["\u0275\u0275defineComponent"]({type:h,selectors:[["example-browser"]],decls:3,vars:0,consts:[["header","\u0411\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b","package","CDK"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u0438\u043d\u0435"],["id","browser","heading","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","description","\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,g,2,1,"ng-template",1),s["\u0275\u0275template"](2,y,4,1,"ng-template",2),s["\u0275\u0275elementEnd"]())},directives:[c.a,l.a,u.a,d,f.a],encapsulation:2,changeDetection:0}),h),A=((b=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[o.c].concat(_toConsumableArray(i.e),[a.g.forChild(Object(i.n)(E))])]}),b)}}]);