(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c52a844"],{"0bf0":function(t,e,i){"use strict";var r=i("796e"),s=i.n(r);s.a},"0f04":function(t,e,i){"use strict";var r=i("8b97"),s=i.n(r);s.a},"268f":function(t,e,i){t.exports=i("fde4")},"32a6":function(t,e,i){var r=i("241e"),s=i("c3a1");i("ce7e")("keys",function(){return function(t){return s(r(t))}})},"3b8a":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"successRoot"},[i("div",{staticClass:"infoArea"},[i("div",{staticClass:"activityNum"},[t._v("活动编号："+t._s(t.activityNum))]),i("div",{staticClass:"info"},[t.activityFiles?i("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:t.activityFiles}}):t._e()],1)]),i("div",{staticClass:"successResult"},[i("result-form",{attrs:{recordName:t.recordName,recordInfor:t.recordInfor,imgUrl:t.imgUrl}}),t.isSuccessResult?i("div",{staticClass:"buttonSpan"},[i("el-button",{attrs:{type:"danger",round:""},on:{click:t.returnCreate}},[t._v("继续录入首次回播数据")])],1):t._e()],1)])},s=[],n=i("cebc"),a=i("2f62"),c=i("e1ba"),o=i("9786"),l={components:{"file-list":c["a"],"result-form":o["a"]},computed:Object(n["a"])({},Object(a["b"])({activityNum:"getNowDivingActivity",activityFiles:"getActivityFiles"})),data:function(){return{recordName:"A-宇宙号-1区-蓝-07",recordInfor:[{title:"活动编号",msg:""},{title:"属种",msg:"盔型珊瑚科目"},{title:"状态",msg:"部分白化"},{title:"阶段类型",msg:"回播"},{title:"暂养区域",msg:"A-宇宙号-1区"},{title:"透光度",msg:"180cm"},{title:"温度",msg:"31℃"},{title:"颜色",msg:"D2",color:"rgb(247,218,159)",msg2:"D5",color2:"rgb(143,65,36)"},{title:"时间",msg:"2018.9.10.10"},{title:"珊瑚尺寸",msg:"5.66"},{title:"备注",msg:"有松动现象，已经重新加固，污损生物已清除。"}],imgUrl:[{url:"http://dayy.xyz/resource/example/1.png",size:"223.4",time:"2018.4.10",name:"A1-大鹏大澳湾-2018090410-01"},{url:"http://dayy.xyz/resource/example/2.jpg",size:"235.6",time:"2018.5.09",name:"A2-大鹏大澳湾-2018050909-01"},{url:"http://dayy.xyz/resource/example/3.jpg",size:"240.2",time:"2018.6.09",name:"A2-大鹏大澳湾-2018060910-01"},{url:"http://dayy.xyz/resource/example/4.jpg",size:"242.5",time:"2018.6.17",name:"A2-大鹏大澳湾-2018061710-01"},{url:"http://dayy.xyz/resource/example/5.jpg",size:"243.2",time:"2018.7.01",name:"A2-大鹏大澳湾-2018070110-01"},{url:"http://dayy.xyz/resource/example/6.jpg",size:"250.4",time:"2018.7.28",name:"A2-大鹏大澳湾-2018072810-01"},{url:"http://dayy.xyz/resource/example/7.jpg",size:"254.6",time:"2018.11.17",name:"A2-大鹏大澳湾-2018111710-01"},{url:"http://dayy.xyz/resource/example/8.jpg",size:"260.3",time:"2018.12.29",name:"A2-大鹏大澳湾-2018122910-01"},{url:"http://dayy.xyz/resource/example/9.jpg",size:"268.4",time:"2019.3.02",name:"A2-大鹏大澳湾-2019030210-01"},{url:"http://dayy.xyz/resource/example/10.jpg",size:"278.5",time:"2019.3.17",name:"A3-大鹏大澳湾-2019031710-01"},{url:"http://dayy.xyz/resource/example/11.jpg",size:"279.1",time:"2019.4.06",name:"A4-大鹏大澳湾-2019040610-01"},{url:"http://dayy.xyz/resource/example/12.jpg",size:"280.5",time:"2019.6.02",name:"A4-大鹏大澳湾-2019060210-01"},{url:"http://dayy.xyz/resource/example/13.jpg",size:"284.6",time:"2019.6.22",name:"A4-大鹏大澳湾-2019062210-01"},{url:"http://dayy.xyz/resource/example/14.jpg",size:"288.1",time:"2019.8.24",name:"A4-大鹏大澳湾-2019082410-01"}],isSuccessResult:!0}},methods:{returnCreate:function(){this.$router.push({name:"buildA3",params:{build:"create"},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}},beforeRouteEnter:function(t,e,i){"success"===t.params.result?i(function(t){t.isSuccessResult=!0}):"detail"===t.params.result?i(function(t){t.isSuccessResult=!1}):i()}},u=l,m=(i("f87e"),i("2877")),g=Object(m["a"])(u,r,s,!1,null,"670fd19c",null);e["default"]=g.exports},"5dbc":function(t,e,i){var r=i("d3f4"),s=i("8b975").set;t.exports=function(t,e,i){var n,a=e.constructor;return a!==i&&"function"==typeof a&&(n=a.prototype)!==i.prototype&&r(n)&&s&&s(t,n),t}},"796e":function(t,e,i){},"8aae":function(t,e,i){i("32a6"),t.exports=i("584a").Object.keys},"8b97":function(t,e,i){},"8b975":function(t,e,i){var r=i("d3f4"),s=i("cb7c"),n=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,i){return n(t,i),e?t.__proto__=i:r(t,i),t}}({},!1):void 0),check:n}},"8e96":function(t,e,i){},"91b0":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:"width:"+t.imgWidth*t.num+"vw; height:"+t.imgHeight+"vh",attrs:{id:"container"}},[i("div",{style:"left:0px;width:"+t.imgWidth*(t.imgUrl.length+1)+"vw;height:"+t.imgHeight+"vh",attrs:{id:"list"}},t._l(t.imgUrl,function(e,r){return i("div",{key:r,staticClass:"img-swiper",style:"width:"+t.imgWidth,on:{click:function(e){return t.selectOneImg(r)}}},[i("img",{style:"width:"+t.imgWidth+"vw;height:"+t.imgHeight+"vh;",attrs:{src:e.url}}),i("span",{staticClass:"img-name",style:"width:"+t.imgWidth+"vw;bottom:0"},[t._v(t._s(e.name))]),i("span",{staticClass:"delete-img el-icon-close",on:{click:t.deleteImg}})])}),0),i("div",{staticClass:"arrow",style:"width:"+t.imgWidth/5+"vw;height:"+t.imgHeight+"vh",attrs:{id:"prev"},on:{click:t.prevOnclick}},[i("span",{staticClass:"el-icon-arrow-left"})]),i("div",{staticClass:"arrow",style:"height:"+t.imgHeight+"vh",attrs:{id:"next"},on:{click:t.nextOnclick}},[i("span",{staticClass:"el-icon-arrow-right"})])])},s=[],n=(i("c5f6"),{name:"swiperper",props:{imgHeight:Number,imgWidth:Number,imgUrl:Array},data:function(){return{list:[],index:0,allImg:[],num:4,signImgUrl:"",imgLen:0}},components:{},mounted:function(){this.list=document.getElementById("list"),this.allImg=document.getElementsByClassName("img-swiper"),this.allImg[0]&&(this.allImg[0].classList.add("current-img"),this.imgLen=this.allImg.length-1,this.selectOneImg(this.index))},methods:{move:function(t){if(0==this.index)this.list.style.left="0vw";else if(this.index>this.imgLen-this.num)this.list.style.left=-this.imgWidth*(this.imgUrl.length-this.num+1)+"vw";else{var e=parseInt(this.list.style.left)+t;this.list.style.left=e+"vw"}},prevOnclick:function(){this.allImg.length>0&&(this.allImg[this.index].classList.remove("current-img"),this.index=this.index>0?this.index-1:0,this.allImg[this.index].classList.add("current-img"),this.move(this.imgWidth),this.selectOneImg(this.index))},nextOnclick:function(){this.allImg.length>0&&(this.allImg[this.index].classList.remove("current-img"),console.log(this.index,this.imgLen),this.index=this.index<this.imgLen?this.index+1:this.imgLen,console.log(this.index),this.allImg[this.index].classList.add("current-img"),this.move(-this.imgWidth),this.selectOneImg(this.index))},selectOneImg:function(t){this.allImg.length>0&&(this.allImg[this.index].classList.remove("current-img"),this.index=t,this.allImg[this.index].classList.add("current-img"),this.$emit("selectOneImg",this.imgUrl[t].url))},deleteImg:function(){}}}),a=n,c=(i("0f04"),i("2877")),o=Object(c["a"])(a,r,s,!1,null,"23475cef",null);e["a"]=o.exports},9786:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all-infor"},[i("div",{staticClass:"edit-img"},[i("span",{on:{click:t.edit}},[t._v("编辑")]),i("span",[t._v("删除")])]),i("div",{staticClass:"main-size",style:{padding:"0"}},[i("el-col",{staticClass:"inforSwiper",attrs:{span:8}},[i("div",{style:{textAlign:"center",margin:"1.5vh 0"}},[i("span",{staticClass:"record-name"},[t._v(t._s(t.recordName))])]),t._l(t.recordInfor,function(e,r){return i("div",{key:r,staticStyle:{color:"#ACACAC","margin-bottom":"5px"}},[i("el-col",{attrs:{span:2}},[t._v(" ")]),i("el-col",{style:r<t.recordInfor.length-1?{borderBottom:"1px solid #ACACAC"}:"",attrs:{span:20}},[i("el-col",{attrs:{span:8}},[i("span",{staticStyle:{color:"#7E7E7E"}},[t._v(t._s(e.title)+"：")])]),i("el-col",{attrs:{span:16}},[i("span",[null!==e.title.match(/备注/g)?i("span"):t._e(),t._v("\n              "+t._s(e.msg)+"\n            ")]),/颜色/.test(e.title)?i("span",[i("span",{staticClass:"color-block",style:"background-color:"+e.color}),i("span",[t._v("—")]),i("span",[t._v(t._s(e.msg2))]),i("span",{staticClass:"color-block",style:"background-color:"+e.color2})]):t._e(),e.title.search(/尺寸/)>0?i("span",[t._v("\n              cm\n              "),i("sup",[t._v("2")])]):t._e()])],1),i("el-col",{attrs:{span:2}},[t._v(" ")])],1)})],2),i("el-col",{style:{padding:"0"},attrs:{span:16}},[i("el-row",[i("swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:t.imgUrl},on:{selectOneImg:t.chooseSwiperImg}})],1),i("el-row",[i("div",{staticStyle:{height:"25rem",width:"32rem",margin:"0 auto","line-height":"25rem"}},[i("img",{staticClass:"showOneImg",attrs:{width:"100%",src:t.imgUrlFormSwiper,alt:""}})])])],1)],1)])},s=[],n=i("91b0"),a={components:{swiper:n["a"]},props:{recordName:String,recordInfor:Array,imgUrl:Array},data:function(){return{imgUrlFormSwiper:""}},methods:{chooseSwiperImg:function(t){this.imgUrlFormSwiper=t},typeForm:function(t){switch(t){case"A1":var e={signColor:"",signNumber:"",species:{first:"",second:"",third:""},collectSite:this.$route.query.address,breedArea:{firstArea:"",nursery:"",partition:""}};return e;case"A2":var i={signColor:"",signNumber:"",breedArea:{firstArea:"A",nursery:"",partition:""}};return i;case"A3":var r={sowData:{signColor:"",signNumber:"",sowArea:{firstArea:"A",line:"",segmentation:""}},breedData:{signColor:"",signNumber:"",breedArea:{firstArea:"A",nursery:"",partition:""}}};return r;case"A4":var s={signColor:"",signNumber:"",sowArea:{firstArea:"A",line:"",segmentation:""}};return s;default:return null}},edit:function(){this.$router.push({name:"build".concat(this.$route.query.activityType),params:{build:"edit",recordData:{state:"失踪",penetrability:"25",temperature:"24",coralColor:{shallowColor:"D2",deepColor:"E5"},remark:"我自横刀向天笑"}},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}}},c=a,o=(i("0bf0"),i("2877")),l=Object(o["a"])(c,r,s,!1,null,"fd85a2fc",null);e["a"]=l.exports},a2be4:function(t,e,i){"use strict";var r=i("8e96"),s=i.n(r);s.a},a379:function(t,e,i){},a4bb:function(t,e,i){t.exports=i("8aae")},aa77:function(t,e,i){var r=i("5ca1"),s=i("be13"),n=i("79e5"),a=i("fdef"),c="["+a+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),m=function(t,e,i){var s={},c=n(function(){return!!a[t]()||o[t]()!=o}),l=s[t]=c?e(g):a[t];i&&(s[i]=l),r(r.P+r.F*c,"String",s)},g=m.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=m},bf90:function(t,e,i){var r=i("36c3"),s=i("bf0b").f;i("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return s(r(t),e)}})},c5f6:function(t,e,i){"use strict";var r=i("7726"),s=i("69a8"),n=i("2d95"),a=i("5dbc"),c=i("6a99"),o=i("79e5"),l=i("9093").f,u=i("11e9").f,m=i("86cc").f,g=i("aa77").trim,d="Number",f=r[d],p=f,h=f.prototype,y=n(i("2aeb")(h))==d,v="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():g(e,3);var i,r,s,n=e.charCodeAt(0);if(43===n||45===n){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var a,o=e.slice(2),l=0,u=o.length;l<u;l++)if(a=o.charCodeAt(l),a<48||a>s)return NaN;return parseInt(o,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof f&&(y?o(function(){h.valueOf.call(i)}):n(i)!=d)?a(new p(b(e)),i,f):b(e)};for(var x,A=i("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;A.length>_;_++)s(p,x=A[_])&&!s(f,x)&&m(f,x,u(p,x));f.prototype=h,h.constructor=f,i("2aba")(r,d,f)}},ce7e:function(t,e,i){var r=i("63b6"),s=i("584a"),n=i("294c");t.exports=function(t,e){var i=(s.Object||{})[t]||Object[t],a={};a[t]=e(i),r(r.S+r.F*n(function(){i(1)}),"Object",a)}},cebc:function(t,e,i){"use strict";i.d(e,"a",function(){return u});var r=i("268f"),s=i.n(r),n=i("e265"),a=i.n(n),c=i("a4bb"),o=i.n(c),l=i("bd86");function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},r=o()(i);"function"===typeof a.a&&(r=r.concat(a()(i).filter(function(t){return s()(i,t).enumerable}))),r.forEach(function(e){Object(l["a"])(t,e,i[e])})}return t}},e1ba:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listRoot"},t._l(t.fileNameList,function(e,r){return i("div",{key:r,staticClass:"listItem",class:t.activeFile===e?"activeItem":"",on:{click:function(i){return t.findFile(e)}}},[t._v(t._s(e))])}),0)},s=[],n={props:{fileNameList:{type:Array,default:function(){return["A-宇宙号-1区-蓝-07","A-宇宙号-1区-蓝-10"]}}},data:function(){return{activeFile:""}},methods:{findFile:function(t){this.activeFile=t,console.log(t)}},mounted:function(){this.activeFile=this.$route.query.file}},a=n,c=(i("a2be4"),i("2877")),o=Object(c["a"])(a,r,s,!1,null,"0c4e4a36",null);e["a"]=o.exports},e265:function(t,e,i){t.exports=i("ed33")},ed33:function(t,e,i){i("014b"),t.exports=i("584a").Object.getOwnPropertySymbols},f87e:function(t,e,i){"use strict";var r=i("a379"),s=i.n(r);s.a},fde4:function(t,e,i){i("bf90");var r=i("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-5c52a844.ba5fef7b.js.map