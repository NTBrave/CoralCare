(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-093cac28"],{"02f4":function(e,t,r){var i=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var o,n,c=String(a(t)),s=i(r),l=c.length;return s<0||s>=l?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===l||(n=c.charCodeAt(s+1))<56320||n>57343?e?c.charAt(s):o:e?c.slice(s,s+2):n-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var i=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?i(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var i=r("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var i=r("2aba"),a=r("32e9"),o=r("79e5"),n=r("be13"),c=r("2b4c"),s=r("520a"),l=c("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=c(e),f=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),y=f?!o(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[d](""),!t}):void 0;if(!f||!y||"replace"===e&&!u||"split"===e&&!p){var m=/./[d],v=r(n,d,""[e],function(e,t,r,i,a){return t.exec===s?f&&!a?{done:!0,value:m.call(t,r,i)}:{done:!0,value:e.call(r,t,i)}:{done:!1}}),b=v[0],h=v[1];i(String.prototype,e,b),a(RegExp.prototype,d,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},2583:function(e,t,r){"use strict";var i=r("cb48"),a=r.n(i);a.a},"28a5":function(e,t,r){"use strict";var i=r("aae3"),a=r("cb7c"),o=r("ebd6"),n=r("0390"),c=r("9def"),s=r("5f1b"),l=r("520a"),u=r("79e5"),p=Math.min,d=[].push,f="split",y="length",m="lastIndex",v=4294967295,b=!u(function(){RegExp(v,"y")});r("214f")("split",2,function(e,t,r,u){var h;return h="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[y]||2!="ab"[f](/(?:ab)*/)[y]||4!="."[f](/(.?)(.?)/)[y]||"."[f](/()()/)[y]>1||""[f](/.?/)[y]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!i(e))return r.call(a,e,t);var o,n,c,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=void 0===t?v:t>>>0,b=new RegExp(e.source,u+"g");while(o=l.call(b,a)){if(n=b[m],n>p&&(s.push(a.slice(p,o.index)),o[y]>1&&o.index<a[y]&&d.apply(s,o.slice(1)),c=o[0][y],p=n,s[y]>=f))break;b[m]===o.index&&b[m]++}return p===a[y]?!c&&b.test("")||s.push(""):s.push(a.slice(p)),s[y]>f?s.slice(0,f):s}:"0"[f](void 0,0)[y]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,i){var a=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,i):h.call(String(a),r,i)},function(e,t){var i=u(h,e,this,t,h!==r);if(i.done)return i.value;var l=a(e),d=String(this),f=o(l,RegExp),y=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),x=new f(b?l:"^(?:"+l.source+")",m),g=void 0===t?v:t>>>0;if(0===g)return[];if(0===d.length)return null===s(x,d)?[d]:[];var A=0,E=0,C=[];while(E<d.length){x.lastIndex=b?E:0;var _,z=s(x,b?d:d.slice(E));if(null===z||(_=p(c(x.lastIndex+(b?0:E)),d.length))===A)E=n(d,E,y);else{if(C.push(d.slice(A,E)),C.length===g)return C;for(var I=1;I<=z.length-1;I++)if(C.push(z[I]),C.length===g)return C;E=A=_}}return C.push(d.slice(A)),C}]})},"46c4":function(e,t,r){"use strict";var i=r("81bd"),a=r.n(i);a.a},"4eb9":function(e,t,r){"use strict";r.d(t,"e",function(){return i}),r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return n}),r.d(t,"d",function(){return c});var i=[{label:"红",value:"红",color:"red"},{label:"黄",value:"黄",color:"yellow"},{label:"蓝",value:"蓝",color:"blue"},{label:"绿",value:"绿",color:"green"}],a=[{title:"新建首次暂养活动",activityType:"首次暂养",typeId:"A1",idx:0},{title:"新建暂养巡检活动",activityType:"暂养巡检",typeId:"A2",idx:1},{title:"新建首次回播活动",activityType:"首次回播",typeId:"A3",idx:2},{title:"新建回播巡检活动",activityType:"回播巡检",typeId:"A4",idx:3}],o=[{label:"B2",value:"B2",color:"#E1EAAE"},{label:"B3",value:"B3",color:"#C1DA83"},{label:"B4",value:"B4",color:"#899D52"},{label:"B5",value:"B5",color:"#586832"},{label:"B6",value:"B6",color:"#223017"},{label:"C2",value:"C2",color:"#F9D2BC"},{label:"C3",value:"C3",color:"#F1915E"},{label:"C4",value:"C4",color:"#D86430"},{label:"C5",value:"C5",color:"#8A3820"},{label:"C6",value:"C6",color:"#510D0C"},{label:"D2",value:"D2",color:"#F7DA9F"},{label:"D3",value:"D3",color:"#F2A04C"},{label:"D4",value:"D4",color:"#CC7D3F"},{label:"D5",value:"D5",color:"#8F4124"},{label:"D6",value:"D6",color:"#73381C"},{label:"E2",value:"E2",color:"#EEEDA4"},{label:"E3",value:"E3",color:"#E2C96F"},{label:"E4",value:"E4",color:"#AC913D"},{label:"E5",value:"E5",color:"#764922"},{label:"E6",value:"E6",color:"#4C200E"}],n={B2:"#E1EAAE",B3:"#C1DA83",B4:"#899D52",B5:"#586832",B6:"#223017",C2:"#F9D2BC",C3:"#F1915E",C4:"#D86430",C5:"#8A3820",C6:"#510D0C",D2:"#F7DA9F",D3:"#F2A04C",D4:"#CC7D3F",D5:"#8F4124",D6:"#73381C",E2:"#EEEDA4",E3:"#E2C96F",E4:"#AC913D",E5:"#764922",E6:"#4C200E"},c=[{url:"http://dayy.xyz/resource/example/1.png",size:"223.4",time:"2018.4.10",name:"A1-大鹏大澳湾-2018090410-01"},{url:"http://dayy.xyz/resource/example/2.jpg",size:"235.6",time:"2018.5.09",name:"A2-大鹏大澳湾-2018050909-01"},{url:"http://dayy.xyz/resource/example/3.jpg",size:"240.2",time:"2018.6.09",name:"A2-大鹏大澳湾-2018060910-01"},{url:"http://dayy.xyz/resource/example/4.jpg",size:"242.5",time:"2018.6.17",name:"A2-大鹏大澳湾-2018061710-01"},{url:"http://dayy.xyz/resource/example/5.jpg",size:"243.2",time:"2018.7.01",name:"A2-大鹏大澳湾-2018070110-01"},{url:"http://dayy.xyz/resource/example/6.jpg",size:"250.4",time:"2018.7.28",name:"A2-大鹏大澳湾-2018072810-01"},{url:"http://dayy.xyz/resource/example/7.jpg",size:"254.6",time:"2018.11.17",name:"A2-大鹏大澳湾-2018111710-01"},{url:"http://dayy.xyz/resource/example/8.jpg",size:"260.3",time:"2018.12.29",name:"A2-大鹏大澳湾-2018122910-01"},{url:"http://dayy.xyz/resource/example/9.jpg",size:"268.4",time:"2019.3.02",name:"A2-大鹏大澳湾-2019030210-01"},{url:"http://dayy.xyz/resource/example/10.jpg",size:"278.5",time:"2019.3.17",name:"A3-大鹏大澳湾-2019031710-01"},{url:"http://dayy.xyz/resource/example/11.jpg",size:"279.1",time:"2019.4.06",name:"A4-大鹏大澳湾-2019040610-01"},{url:"http://dayy.xyz/resource/example/12.jpg",size:"280.5",time:"2019.6.02",name:"A4-大鹏大澳湾-2019060210-01"},{url:"http://dayy.xyz/resource/example/13.jpg",size:"284.6",time:"2019.6.22",name:"A4-大鹏大澳湾-2019062210-01"},{url:"http://dayy.xyz/resource/example/14.jpg",size:"288.1",time:"2019.8.24",name:"A4-大鹏大澳湾-2019082410-01"}]},"520a":function(e,t,r){"use strict";var i=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,n=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(n=function(e){var t,r,n,u,p=this;return l&&(r=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),s&&(t=p[c]),n=a.call(p,e),s&&n&&(p[c]=p.global?n.index+n[0].length:t),l&&n&&n.length>1&&o.call(n[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),e.exports=n},"5d58":function(e,t,r){e.exports=r("d8d6")},"5dbc":function(e,t,r){var i=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,n=t.constructor;return n!==r&&"function"==typeof n&&(o=n.prototype)!==r.prototype&&i(o)&&a&&a(e,o),e}},"5f1b":function(e,t,r){"use strict";var i=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"67bb":function(e,t,r){e.exports=r("f921")},"6d62":function(e,t,r){"use strict";r("7f7f"),r("28a5");var i=r("5d58"),a=r.n(i),o=r("67bb"),n=r.n(o);function c(e){return c="function"===typeof n.a&&"symbol"===typeof a.a?function(e){return typeof e}:function(e){return e&&"function"===typeof n.a&&e.constructor===n.a&&e!==n.a.prototype?"symbol":typeof e},c(e)}function s(e){return s="function"===typeof n.a&&"symbol"===c(a.a)?function(e){return c(e)}:function(e){return e&&"function"===typeof n.a&&e.constructor===n.a&&e!==n.a.prototype?"symbol":c(e)},s(e)}function l(e){var t=Array.isArray(e)?[]:{};for(var r in e)e.hasOwnProperty(r)&&("object"===s(e[r])&&null!==e[r]?t[r]=l(e[r]):t[r]=e[r]);return t}function u(e,t,r){var i=l(e),a=i.Jobs[0].Object.ExtendData,o=r.activityNum.split("-");return i.Jobs[0].MasterSpaId=t,a.czzy_spaid=t,a.timestamp=o[2],a.type=r.activityType,a.code=o[0][1],a.participants=r.members,a.activity_number=r.activityNum,a.comment=r.remarks,i}function p(e,t,r){var i=l(e);return i.Jobs[0].MasterSpaId=t,i.Jobs[0].MasterExtendType=r,i}function d(e,t,r){var i=l(e);return i.Jobs[0].MasterSpaId=t,i.Jobs[0].MasterExtendType=r,i}function f(e,t,r,i,a,o,n){var c=l(e);c.Jobs[0].MasterSpaId=t,c.Jobs[1].MasterSpaId=r;var s=c.Jobs[0].Object.ExtendData;s.haopai_color=o.signColor,s.haopai_number=o.signNumber,s.order_spaid=o.species.first,s.family_spaid=o.species.second,s.genus_spaid=o.species.third,s.pyzd_spaid=i,s.quyu_spaid=o.breedArea.firstArea,s.miaopu_spaid=o.breedArea.nursery,s.fenqu_spaid=o.breedArea.partition;var u=c.Jobs[1].Object.ExtendData;return u.czhd_spaid=r,u.timestamp=a,u.status=n.state,u.lightest_color=n.coralColor.shallowColor,u.darkest_color=n.coralColor.deepColor,u.comment=n.remark,c}function y(e,t,r,i,a){var o=l(e);o.Jobs[0].MasterSpaId=t;var n=o.Jobs[0].Object.ExtendData;return n.czhd_spaid=t,n.czda_spaid=r,n.timestamp=i,n.status=a.state,n.lightest_color=a.coralColor.shallowColor,n.darkest_color=a.coralColor.deepColor,n.comment=a.remark,o}function m(e,t,r,i,a,o,n,c){var s=l(e);s.Jobs[0].MasterSpaId=t,s.Jobs[1].MasterSpaId=r;var u=s.Jobs[0].Object.ExtendData;u.czhd_spaid=t,u.czda_spaid=i,u.timestamp=o,u.status=c.state,u.lightest_color=c.coralColor.shallowColor,u.darkest_color=c.coralColor.deepColor,u.comment=c.remark;var p=s.Jobs[1].Object.ExtendData;return s.Jobs[1].Object.SpaId=i,p.haopai_color=n.signColor,p.haopai_number=n.signNumber,p.pyzd_spaid=a,p.yangxian_spaid=n.sowArea.line,p.fenduan_spaid=n.sowArea.segmentation,s}function v(e,t){var r=l(e);return r.Jobs[0].Where[0].Operator.Value=t.breedArea.nursery,r.Jobs[0].Where[1].Operator.Value=t.breedArea.partition,r.Jobs[0].Where[2].Operator.Value=t.signColor,r.Jobs[0].Where[3].Operator.Value=t.signNumber,r}function b(e,t){var r=l(e);return r.Jobs[0].Where[0].Operator.Value=t.sowArea.line,r.Jobs[0].Where[1].Operator.Value=t.sowArea.segmentation,r.Jobs[0].Where[2].Operator.Value=t.signColor,r.Jobs[0].Where[3].Operator.Value=t.signNumber,r}function h(e,t){var r=l(e);return r.Jobs[0].CZDASpaId=t,r.Jobs[0].Where[0].Operator.Value=t,r}function x(e,t){var r=l(e);return r.Jobs[0].MasterSpaId=t,r}function g(e){var t=e.principle.ExtendData,r={};if(e.fks)for(var i=e.fks,a=0;a<i.length;a++)Object.assign(r,i[a]);for(var o in r["SpaId"]=e.principle.SpaId,r["CreateAt"]=e.principle.CreateAt,t)r[o]=t[o];var n=r.PYZD.extenddata.number+"-";return null==r.YX?(n+=r.MP.extenddata.name+"-",n+=r.FQ.extenddata.name+"-"):n+=r.YX.extenddata.name+"-",n+=r.haopai_color+"-"+r.haopai_number,r.title=n,r.type=r.ORDER.extenddata.name+"-"+r.FAMILY.extenddata.name+"-"+r.GENUS.extenddata.name,r}r.d(t,"b",function(){return u}),r.d(t,"j",function(){return p}),r.d(t,"k",function(){return d}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return y}),r.d(t,"e",function(){return m}),r.d(t,"h",function(){return v}),r.d(t,"g",function(){return b}),r.d(t,"f",function(){return h}),r.d(t,"i",function(){return x}),r.d(t,"a",function(){return g})},"80e4":function(e,t,r){"use strict";var i=r("f5c3"),a=r.n(i);a.a},"81bd":function(e,t,r){},"8b97":function(e,t,r){var i=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:i(e,r),e}}({},!1):void 0),check:o}},aa77:function(e,t,r){var i=r("5ca1"),a=r("be13"),o=r("79e5"),n=r("fdef"),c="["+n+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(e,t,r){var a={},c=o(function(){return!!n[e]()||s[e]()!=s}),l=a[e]=c?t(d):n[e];r&&(a[r]=l),i(i.P+i.F*c,"String",a)},d=p.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},aae3:function(e,t,r){var i=r("d3f4"),a=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,r){"use strict";var i=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c5f6:function(e,t,r){"use strict";var i=r("7726"),a=r("69a8"),o=r("2d95"),n=r("5dbc"),c=r("6a99"),s=r("79e5"),l=r("9093").f,u=r("11e9").f,p=r("86cc").f,d=r("aa77").trim,f="Number",y=i[f],m=y,v=y.prototype,b=o(r("2aeb")(v))==f,h="trim"in String.prototype,x=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=h?t.trim():d(t,3);var r,i,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var n,s=t.slice(2),l=0,u=s.length;l<u;l++)if(n=s.charCodeAt(l),n<48||n>a)return NaN;return parseInt(s,i)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(b?s(function(){v.valueOf.call(r)}):o(r)!=f)?n(new m(x(t)),r,y):x(t)};for(var g,A=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;A.length>E;E++)a(m,g=A[E])&&!a(y,g)&&p(y,g,u(m,g));y.prototype=v,v.constructor=y,r("2aba")(i,f,y)}},cb48:function(e,t,r){},d35e:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cardList"},[e._l(e.activityTypes,function(t,i){return r("activity-card",{key:i,staticClass:"cardItem",class:-1!==e.existType.indexOf(e.activityTypes[i].typeId)?"exist":"",attrs:{activityName:t.activityType,index:t.idx,activeItem:e.activeItem,navType:e.navType},on:{createAct:function(r){return e.change(t.idx)}}})}),r("el-dialog",{attrs:{width:"40%",title:e.form.title,visible:e.dialogFormVisible,"append-to-body":"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.back}},[r("el-form",{staticClass:"formBoard",attrs:{model:e.form}},[r("el-form-item",{staticStyle:{"{color":"#7e7e7e}"},attrs:{label:"活动编号","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.activityNum,callback:function(t){e.$set(e.form,"activityNum",t)},expression:"form.activityNum"}})],1),r("el-form-item",{attrs:{label:"活动类型","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.activityType,callback:function(t){e.$set(e.form,"activityType",t)},expression:"form.activityType"}})],1),r("el-form-item",{attrs:{label:"活动时间","label-width":e.formLabelWidth}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.activityTime,callback:function(t){e.$set(e.form,"activityTime",t)},expression:"form.activityTime"}})],1),r("el-form-item",{attrs:{label:"参与人员","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.form.members,callback:function(t){e.$set(e.form,"members",t)},expression:"form.members"}})],1),r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{style:{width:"8vw"},attrs:{type:"danger",round:"",size:"medium"},on:{click:function(t){return e.newAnActivity()}}},[e._v("确定新建")]),r("el-button",{style:{width:"8vw"},attrs:{type:"info",round:"",size:"medium"},on:{click:function(t){return e.back()}}},[e._v("取消")])],1)],1)],2)},a=[],o=r("cebc"),n=r("c1df"),c=r.n(n),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.navType,on:{click:function(t){e.$emit("createAct"),e.$emit("initStyle")}}},[r("div",{staticClass:"subCard",class:e.activeItem===e.index?"activeItem":""},[e._v(e._s(e.activityName))])])},l=[],u=(r("c5f6"),{props:{activityName:String,navType:String,index:{type:Number,required:!0},activeItem:{type:Number,required:!0}},data:function(){return{activeShow:"activeItem"}},watch:{},methods:{},updated:function(){},mounted:function(){}}),p=u,d=(r("80e4"),r("2877")),f=Object(d["a"])(p,s,l,!1,null,"2fd5317e",null),y=f.exports,m=r("2f62"),v=r("4ec3"),b=r("e050"),h=r("6d62"),x=r("4eb9"),g={components:{"activity-card":y},props:{navType:{type:String,default:"card"},existType:{type:Array,default:function(){return[]}}},data:function(){return{activityTypes:x["a"],dialogFormVisible:!1,form:{title:"",activityNum:"",activityType:"",activityTime:"",members:"",remarks:""},formLabelWidth:"100px"}},watch:{"$route.path":function(){this.showActive()}},computed:Object(o["a"])({},Object(m["b"])({activeItem:"getActiveId",currentActivity:"getCurrentActivity",existActivity:"getExistAct"}),Object(m["d"])([])),methods:Object(o["a"])({},Object(m["c"])(["setActiveId","setActivityList"]),{showActive:function(){if(this.$route.query.activityType){var e=parseInt(this.$route.query.activityType.slice(1));this.setActiveId(e-1)}},back:function(){this.showActive(),this.dialogFormVisible=!1},change:function(e){this.setActiveId(e);var t=this.activityTypes[e].typeId+"-"+this.$route.query.address+"-"+this.$route.query.time;if(this.existActivity.length>0){var r=JSON.stringify(this.existActivity,["activity_number"]);console.log(r),-1!==r.indexOf(t)?(this.currentActivity(t),this.$router.push({path:"/manage/coralBreed/newActivity/".concat(this.activityTypes[e].typeId,"/create"),query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.activityTypes[e].typeId,spaid:JSON.stringify({czzy_spaid:JSON.parse(this.$route.query.spaid).czzy_spaid,czhd_spaid:this.currentActivity(t).czhd_spaid})}})):(this.dialogFormVisible=!0,this.form={title:this.activityTypes[e].title,activityNum:t,activityType:this.activityTypes[e].activityType,activityTime:c()(this.$route.query.time,"YYYYMMDDHH").format("YYYY年MM月DD日HH点"),members:"",remarks:""})}else this.dialogFormVisible=!0,this.form={title:this.activityTypes[e].title,activityNum:t,activityType:this.activityTypes[e].activityType,activityTime:c()(this.$route.query.time,"YYYYMMDDHH").format("YYYY年MM月DD日HH点"),members:"",remarks:""}},newAnActivity:function(){var e=this,t=Object(h["b"])(b["b"],JSON.parse(this.$route.query.spaid).czzy_spaid,this.form);console.log("请求创建活动",t),console.log("表单",this.form),Object(v["b"])(t,"/tree/create").then(function(t){if(200===t.data.status){console.log("创建残枝活动成功",t);var r={};r.activity_number=t.data.response.CZHD.objects[0].principle.ExtendData.activity_number,r.czzy_spaid=t.data.response.CZHD.objects[0].principle.ExtendData.czzy_spaid,r.czhd_spaid=t.data.response.CZHD.objects[0].principle.SpaId,e.setActivityList(r),e.$router.push({path:"/manage/coralBreed/newActivity/".concat(e.form.activityNum.slice(0,2),"/create"),query:{time:e.$route.query.time,address:e.$route.query.address,activityType:e.form.activityNum.slice(0,2),spaid:JSON.stringify({czzy_spaid:JSON.parse(e.$route.query.spaid).czzy_spaid,czhd_spaid:e.currentActivity(r.activity_number).czhd_spaid})}}),e.dialogFormVisible=!1}else 406===t.data.status&&e.$message({showClose:!0,message:"数据不合法！",type:"error"})}).catch(function(t){console.log("????????????"),e.$message({showClose:!0,message:"该活动类型已存在！",type:"error"})})}}),mounted:function(){console.log("重新渲染"),this.showActive()}},A=g,E=(r("2583"),r("46c4"),Object(d["a"])(A,i,a,!1,null,"44810feb",null));t["a"]=E.exports},f5c3:function(e,t,r){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-093cac28.9f888675.js.map