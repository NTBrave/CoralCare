(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa3050d4"],{"268f":function(t,e,i){t.exports=i("fde4")},"32a6":function(t,e,i){var s=i("241e"),r=i("c3a1");i("ce7e")("keys",function(){return function(t){return r(s(t))}})},3434:function(t,e,i){},"3b8a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"successRoot"},[i("div",{staticClass:"infoArea"},[i("div",{staticClass:"activityNum"},[t._v("活动编号："+t._s(t.activityNum))]),i("div",{staticClass:"info"},[t.activityFiles?i("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:t.activityFiles}}):t._e()],1)]),i("div",{staticClass:"successResult"},[i("result-form",{attrs:{recordName:t.recordName,recordInfor:t.recordInfor,imgUrl:t.imgUrl}}),t.isSuccessResult?i("div",{staticClass:"buttonSpan"},[i("el-button",{attrs:{type:"danger",round:""},on:{click:t.returnCreate}},[t._v("继续录入首次回播数据")])],1):t._e()],1)])},r=[],n=i("cebc"),a=i("2f62"),l=i("e1ba"),c=i("9786"),o={components:{"file-list":l["a"],"result-form":c["a"]},computed:Object(n["a"])({},Object(a["b"])({activityNum:"getNowDivingActivity",activityFiles:"getActivityFiles"})),data:function(){return{recordName:"A-宇宙号-1区-蓝-07",recordInfor:[{title:"活动编号",msg:""},{title:"属种",msg:"盔型珊瑚科目"},{title:"状态",msg:"部分白化"},{title:"阶段类型",msg:"回播"},{title:"暂养区域",msg:"A-宇宙号-1区"},{title:"透光度",msg:"180cm"},{title:"温度",msg:"31℃"},{title:"颜色",msg:"D2",color:"rgb(247,218,159)",msg2:"D5",color2:"rgb(143,65,36)"},{title:"时间",msg:"2018.9.10.10"},{title:"珊瑚尺寸",msg:"5.66"},{title:"备注",msg:"有松动现象，已经重新加固，污损生物已清除。"}],imgUrl:[{url:"http://dayy.xyz/resource/example/1.png",size:"223.4",time:"2018.4.10",name:"A1-大鹏大澳湾-2018090410-01"},{url:"http://dayy.xyz/resource/example/2.jpg",size:"235.6",time:"2018.5.09",name:"A2-大鹏大澳湾-2018050909-01"},{url:"http://dayy.xyz/resource/example/3.jpg",size:"240.2",time:"2018.6.09",name:"A2-大鹏大澳湾-2018060910-01"},{url:"http://dayy.xyz/resource/example/4.jpg",size:"242.5",time:"2018.6.17",name:"A2-大鹏大澳湾-2018061710-01"},{url:"http://dayy.xyz/resource/example/5.jpg",size:"243.2",time:"2018.7.01",name:"A2-大鹏大澳湾-2018070110-01"},{url:"http://dayy.xyz/resource/example/6.jpg",size:"250.4",time:"2018.7.28",name:"A2-大鹏大澳湾-2018072810-01"},{url:"http://dayy.xyz/resource/example/7.jpg",size:"254.6",time:"2018.11.17",name:"A2-大鹏大澳湾-2018111710-01"},{url:"http://dayy.xyz/resource/example/8.jpg",size:"260.3",time:"2018.12.29",name:"A2-大鹏大澳湾-2018122910-01"},{url:"http://dayy.xyz/resource/example/9.jpg",size:"268.4",time:"2019.3.02",name:"A2-大鹏大澳湾-2019030210-01"},{url:"http://dayy.xyz/resource/example/10.jpg",size:"278.5",time:"2019.3.17",name:"A3-大鹏大澳湾-2019031710-01"},{url:"http://dayy.xyz/resource/example/11.jpg",size:"279.1",time:"2019.4.06",name:"A4-大鹏大澳湾-2019040610-01"},{url:"http://dayy.xyz/resource/example/12.jpg",size:"280.5",time:"2019.6.02",name:"A4-大鹏大澳湾-2019060210-01"},{url:"http://dayy.xyz/resource/example/13.jpg",size:"284.6",time:"2019.6.22",name:"A4-大鹏大澳湾-2019062210-01"},{url:"http://dayy.xyz/resource/example/14.jpg",size:"288.1",time:"2019.8.24",name:"A4-大鹏大澳湾-2019082410-01"}],isSuccessResult:!0}},methods:{returnCreate:function(){this.$router.push({name:"buildA3",params:{build:"create"},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}},beforeRouteEnter:function(t,e,i){"success"===t.params.result?i(function(t){t.isSuccessResult=!0}):"detail"===t.params.result?i(function(t){}):i()}},u=o,m=(i("f696"),i("2877")),d=Object(m["a"])(u,s,r,!1,null,"4a0e88e2",null);e["default"]=d.exports},"85f2":function(t,e,i){t.exports=i("454f")},"8aae":function(t,e,i){i("32a6"),t.exports=i("584a").Object.keys},"8e96":function(t,e,i){},"91b0":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:"width:"+t.imgWidth*t.num+"vw; height:"+t.imgHeight+"vh",attrs:{id:"container"}},[i("div",{style:"left:0px;width:"+t.imgWidth*(t.imgUrl.length+1)+"vw;height:"+t.imgHeight+"vh",attrs:{id:"list"}},t._l(t.imgUrl,function(e,s){return i("div",{key:s,staticClass:"img-swiper",style:"width:"+t.imgWidth,on:{click:function(e){return t.selectOneImg(s)}}},[i("img",{style:"width:"+t.imgWidth+"vw;height:"+t.imgHeight+"vh;",attrs:{src:e.url}}),i("span",{staticClass:"img-name",style:"width:"+t.imgWidth+"vw;bottom:0"},[t._v(t._s(e.name))]),i("span",{staticClass:"delete-img el-icon-close",on:{click:t.deleteImg}})])}),0),i("div",{staticClass:"arrow",style:"width:"+t.imgWidth/5+"vw;height:"+t.imgHeight+"vh",attrs:{id:"prev"},on:{click:t.prevOnclick}},[i("span",{staticClass:"el-icon-arrow-left"})]),i("div",{staticClass:"arrow",style:"height:"+t.imgHeight+"vh",attrs:{id:"next"},on:{click:t.nextOnclick}},[i("span",{staticClass:"el-icon-arrow-right"})])])},r=[],n=(i("c5f6"),{name:"swiperper",props:{imgHeight:Number,imgWidth:Number,imgUrl:Array},data:function(){return{list:null,index:0,allImg:null,num:4,signImgUrl:""}},components:{},mounted:function(){this.list=document.getElementById("list"),this.allImg=document.getElementsByClassName("img-swiper"),this.allImg[this.index].classList.add("current-img"),this.imgLen=this.imgUrl.length-1,this.selectOneImg(this.index)},methods:{move:function(t){if(0==this.index)this.list.style.left="0vw";else if(this.index>this.imgLen-this.num)this.list.style.left=-this.imgWidth*(this.imgUrl.length-this.num+1)+"vw";else{var e=parseInt(this.list.style.left)+t;this.list.style.left=e+"vw"}},prevOnclick:function(){this.allImg[this.index].classList.remove("current-img"),this.index=this.index>0?this.index-1:0,this.allImg[this.index].classList.add("current-img"),this.move(this.imgWidth),this.selectOneImg(this.index)},nextOnclick:function(){this.allImg[this.index].classList.remove("current-img"),this.index=this.index<this.imgLen?this.index+1:this.imgLen,this.allImg[this.index].classList.add("current-img"),this.move(-this.imgWidth),this.selectOneImg(this.index)},selectOneImg:function(t){this.allImg[this.index].classList.remove("current-img"),this.index=t,this.allImg[this.index].classList.add("current-img"),this.$emit("selectOneImg",this.imgUrl[t].url)},deleteImg:function(){}}}),a=n,l=(i("d6f4"),i("2877")),c=Object(l["a"])(a,s,r,!1,null,"ac344fa6",null);e["a"]=c.exports},"96b6":function(t,e,i){"use strict";var s=i("a9d2"),r=i.n(s);r.a},9786:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all-infor"},[i("div",{staticClass:"edit-img"},[i("span",{on:{click:t.edit}},[t._v("编辑")]),i("span",[t._v("删除")])]),i("div",{staticClass:"main-size",style:{padding:"0"}},[i("el-col",{staticClass:"inforSwiper",attrs:{span:8}},[i("div",{style:{textAlign:"center",margin:"1.5vh 0"}},[i("span",{staticClass:"record-name"},[t._v(t._s(t.recordName))])]),t._l(t.recordInfor,function(e,s){return i("div",{key:s,staticStyle:{color:"#ACACAC","margin-bottom":"5px"}},[i("el-col",{attrs:{span:2}},[t._v(" ")]),i("el-col",{style:s<t.recordInfor.length-1?{borderBottom:"1px solid #ACACAC"}:"",attrs:{span:20}},[i("el-col",{attrs:{span:8}},[i("span",{staticStyle:{color:"#7E7E7E"}},[t._v(t._s(e.title)+"：")])]),i("el-col",{attrs:{span:16}},[i("span",[null!==e.title.match(/备注/g)?i("span"):t._e(),t._v("\n              "+t._s(e.msg)+"\n            ")]),/颜色/.test(e.title)?i("span",[i("span",{staticClass:"color-block",style:"background-color:"+e.color}),i("span",[t._v("—")]),i("span",[t._v(t._s(e.msg2))]),i("span",{staticClass:"color-block",style:"background-color:"+e.color2})]):t._e(),e.title.search(/尺寸/)>0?i("span",[t._v("\n              cm\n              "),i("sup",[t._v("2")])]):t._e()])],1),i("el-col",{attrs:{span:2}},[t._v(" ")])],1)})],2),i("el-col",{style:{padding:"0"},attrs:{span:16}},[i("el-row",[i("swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:t.imgUrl},on:{selectOneImg:t.chooseSwiperImg}})],1),i("el-row",[i("div",{staticStyle:{height:"25rem",width:"32rem",margin:"0 auto","line-height":"25rem"}},[i("img",{staticClass:"showOneImg",attrs:{width:"100%",src:t.imgUrlFormSwiper,alt:""}})])])],1)],1)])},r=[],n=i("91b0"),a={components:{swiper:n["a"]},props:{recordName:String,recordInfor:Array,imgUrl:Array},data:function(){return{imgUrlFormSwiper:""}},methods:{chooseSwiperImg:function(t){this.imgUrlFormSwiper=t},edit:function(){this.$router.push({name:"build".concat(this.$route.query.activityType),params:{build:"edit",recordData:{state:"失踪",penetrability:"25",temperature:"24",coralColor:{shallowColor:"D2",deepColor:"E5"},remark:"我自横刀向天笑"}},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}}},l=a,c=(i("96b6"),i("2877")),o=Object(c["a"])(l,s,r,!1,null,"80825950",null);e["a"]=o.exports},a2be4:function(t,e,i){"use strict";var s=i("8e96"),r=i.n(s);r.a},a4bb:function(t,e,i){t.exports=i("8aae")},a9d2:function(t,e,i){},bf90:function(t,e,i){var s=i("36c3"),r=i("bf0b").f;i("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return r(s(t),e)}})},ce7e:function(t,e,i){var s=i("63b6"),r=i("584a"),n=i("294c");t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],a={};a[t]=e(i),s(s.S+s.F*n(function(){i(1)}),"Object",a)}},cebc:function(t,e,i){"use strict";var s=i("268f"),r=i.n(s),n=i("e265"),a=i.n(n),l=i("a4bb"),c=i.n(l),o=i("85f2"),u=i.n(o);function m(t,e,i){return e in t?u()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=c()(i);"function"===typeof a.a&&(s=s.concat(a()(i).filter(function(t){return r()(i,t).enumerable}))),s.forEach(function(e){m(t,e,i[e])})}return t}i.d(e,"a",function(){return d})},d6f4:function(t,e,i){"use strict";var s=i("f09a"),r=i.n(s);r.a},e1ba:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listRoot"},t._l(t.fileNameList,function(e,s){return i("div",{key:s,staticClass:"listItem",class:t.activeFile===e?"activeItem":"",on:{click:function(i){return t.findFile(e)}}},[t._v(t._s(e))])}),0)},r=[],n={props:{fileNameList:{type:Array,default:function(){return["A-宇宙号-1区-蓝-07","A-宇宙号-1区-蓝-10"]}}},data:function(){return{activeFile:""}},methods:{findFile:function(t){this.activeFile=t,console.log(t)}},mounted:function(){this.activeFile=this.$route.query.file}},a=n,l=(i("a2be4"),i("2877")),c=Object(l["a"])(a,s,r,!1,null,"0c4e4a36",null);e["a"]=c.exports},e265:function(t,e,i){t.exports=i("ed33")},ed33:function(t,e,i){i("014b"),t.exports=i("584a").Object.getOwnPropertySymbols},f09a:function(t,e,i){},f696:function(t,e,i){"use strict";var s=i("3434"),r=i.n(s);r.a},fde4:function(t,e,i){i("bf90");var s=i("584a").Object;t.exports=function(t,e){return s.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-aa3050d4.dadf4baf.js.map