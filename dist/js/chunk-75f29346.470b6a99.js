(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f29346"],{"1b1a":function(e,t,r){},"45a8":function(e,t,r){},"5d58":function(e,t,r){e.exports=r("d8d6")},"5ff8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"successRoot"},[r("div",{staticClass:"infoArea"},[r("div",{staticClass:"activityNum"},[e._v("活动编号："+e._s(e.activityNumber))]),r("div",{staticClass:"info"},[e.activityFiles?r("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:e.activityFiles}}):e._e()],1)]),r("div",{staticClass:"successResult"},[r("result-form",{attrs:{recordName:e.recordName,recordInfor:e.recordInfor,imgUrl:e.imgUrl},on:{"update:recordName":function(t){e.recordName=t},"update:record-name":function(t){e.recordName=t}}}),e.isSuccessResult?r("div",{staticClass:"buttonSpan"},[r("el-button",{attrs:{type:"danger",round:""},on:{click:e.returnCreate}},[e._v("继续录入回播巡检数据")])],1):e._e()],1)])},s=[],i=r("cebc"),o=r("2f62"),n=r("e1ba"),c=r("9786"),l=r("6d62"),u=r("4ec3"),d=r("e050"),p={components:{"file-list":n["a"],"result-form":c["a"]},computed:Object(i["a"])({},Object(o["b"])({activityNum:"getNowDivingActivity"})),data:function(){return{recordName:"",activityFiles:[],recordInfor:[{title:"活动编号",msg:""},{title:"属种",msg:""},{title:"状态",msg:""},{title:"阶段类型",msg:""},{title:"暂养区域",msg:""},{title:"颜色",msg:"",color:"",msg2:"",color2:""},{title:"时间",msg:""},{title:"尺寸",msg:""},{title:"面积",msg:""},{title:"备注",msg:""}],imgUrl:[],isSuccessResult:!0,activityNumber:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time,routeObj:JSON.parse(this.$route.query.spaid)}},methods:{showForm:function(e){console.log(JSON.parse(this.$route.query.spaid));var t=JSON.parse(this.$route.query.spaid).item;this.recordInfor[0].msg=t.activity_Num,this.recordInfor[1].msg=t.species,this.recordInfor[2].msg=t.status,this.recordInfor[3].msg=t.stage,this.recordInfor[4].msg=t.zyqy,this.recordInfor[5].msg=t.coralColor.lightest_color,this.recordInfor[5].color=t.coralColor.color1,this.recordInfor[5].msg2=t.coralColor.darkest_color,this.recordInfor[5].color2=t.coralColor.color2,this.recordInfor[6].msg=t.time,this.recordInfor[7].msg=t.height,this.recordInfor[8].msg=t.area,this.recordInfor[9].msg=t.comment,this.recordName=t.title},returnCreate:function(){this.$router.push({name:"buildA4",params:{build:"create"},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType,spaid:JSON.stringify({czzy_spaid:JSON.parse(this.$route.query.spaid).czzy_spaid,czhd_spaid:JSON.parse(this.$route.query.spaid).czhd_spaid})}})},requestCZJL:function(){var e=this,t=Object(l["i"])(d["n"],this.routeObj.czhd_spaid);Object(u["h"])(t,"/tree/select").then(function(t){if(console.log("获取活动下所有残枝记录",t),200===t.data.status){var r=t.data.response.CZJL.objects;e.activityFiles=r}})}},beforeRouteEnter:function(e,t,r){"success"===e.params.result?r(function(e){e.isSuccessResult=!0,e.requestCZJL(),e.showForm(),e.imgUrl=JSON.parse(e.$route.query.spaid).imgUrl}):"detail"===e.params.result?r(function(e){e.isSuccessResult=!1}):r()}},m=p,f=(r("fe3c"),r("2877")),h=Object(f["a"])(m,a,s,!1,null,"5aa0837f",null);t["default"]=h.exports},"67bb":function(e,t,r){e.exports=r("f921")},"6d62":function(e,t,r){"use strict";r("7f7f"),r("28a5");var a=r("5d58"),s=r.n(a),i=r("67bb"),o=r.n(i);function n(e){return n="function"===typeof o.a&&"symbol"===typeof s.a?function(e){return typeof e}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e},n(e)}function c(e){return c="function"===typeof o.a&&"symbol"===n(s.a)?function(e){return n(e)}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":n(e)},c(e)}function l(e){var t=Array.isArray(e)?[]:{};for(var r in e)e.hasOwnProperty(r)&&("object"===c(e[r])&&null!==e[r]?t[r]=l(e[r]):t[r]=e[r]);return t}function u(e,t,r){var a=l(e),s=a.Jobs[0].Object.ExtendData,i=r.activityNum.split("-");return a.Jobs[0].MasterSpaId=t,s.czzy_spaid=t,s.timestamp=i[2],s.type=r.activityType,s.code=i[0][1],s.participants=r.members,s.activity_number=r.activityNum,s.comment=r.remarks,a}function d(e,t,r){var a=l(e);return a.Jobs[0].MasterSpaId=t,a.Jobs[0].MasterExtendType=r,a}function p(e,t,r){var a=l(e);return a.Jobs[0].MasterSpaId=t,a.Jobs[0].MasterExtendType=r,a}function m(e,t,r,a,s,i,o){var n=l(e);n.Jobs[0].MasterSpaId=t,n.Jobs[1].MasterSpaId=r;var c=n.Jobs[0].Object.ExtendData;c.haopai_color=i.signColor,c.haopai_number=i.signNumber,c.order_spaid=i.species.first,c.family_spaid=i.species.second,c.genus_spaid=i.species.third,c.pyzd_spaid=a,c.quyu_spaid=i.breedArea.firstArea,c.miaopu_spaid=i.breedArea.nursery,c.fenqu_spaid=i.breedArea.partition;var u=n.Jobs[1].Object.ExtendData;return u.czhd_spaid=r,u.timestamp=s,u.status=o.state,u.lightest_color=o.coralColor.shallowColor,u.darkest_color=o.coralColor.deepColor,u.comment=o.remark,n}function f(e,t,r,a,s){var i=l(e);i.Jobs[0].MasterSpaId=t;var o=i.Jobs[0].Object.ExtendData;return o.czhd_spaid=t,o.czda_spaid=r,o.timestamp=a,o.status=s.state,o.lightest_color=s.coralColor.shallowColor,o.darkest_color=s.coralColor.deepColor,o.comment=s.remark,i}function h(e,t,r,a,s,i,o,n){var c=l(e);c.Jobs[0].MasterSpaId=t,c.Jobs[1].MasterSpaId=r;var u=c.Jobs[0].Object.ExtendData;u.czhd_spaid=t,u.czda_spaid=a,u.timestamp=i,u.status=n.state,u.lightest_color=n.coralColor.shallowColor,u.darkest_color=n.coralColor.deepColor,u.comment=n.remark;var d=c.Jobs[1].Object.ExtendData;return c.Jobs[1].Object.SpaId=a,d.haopai_color=o.signColor,d.haopai_number=o.signNumber,d.pyzd_spaid=s,d.yangxian_spaid=o.sowArea.line,d.fenduan_spaid=o.sowArea.segmentation,c}function g(e,t){var r=l(e);return r.Jobs[0].Where[0].Operator.Value=t.breedArea.nursery,r.Jobs[0].Where[1].Operator.Value=t.breedArea.partition,r.Jobs[0].Where[2].Operator.Value=t.signColor,r.Jobs[0].Where[3].Operator.Value=t.signNumber,r}function b(e,t){var r=l(e);return r.Jobs[0].Where[0].Operator.Value=t.sowArea.line,r.Jobs[0].Where[1].Operator.Value=t.sowArea.segmentation,r.Jobs[0].Where[2].Operator.Value=t.signColor,r.Jobs[0].Where[3].Operator.Value=t.signNumber,r}function v(e,t){var r=l(e);return r.Jobs[0].CZDASpaId=t,r.Jobs[0].Where[0].Operator.Value=t,r}function y(e,t){var r=l(e);return r.Jobs[0].MasterSpaId=t,r}function _(e){var t=e.principle.ExtendData,r={};if(e.fks)for(var a=e.fks,s=0;s<a.length;s++)Object.assign(r,a[s]);for(var i in r["SpaId"]=e.principle.SpaId,r["CreateAt"]=e.principle.CreateAt,t)r[i]=t[i];var o=r.PYZD.extenddata.number+"-";return null==r.YX?(o+=r.MP.extenddata.name+"-",o+=r.FQ.extenddata.name+"-"):o+=r.YX.extenddata.name+"-",o+=r.haopai_color+"-"+r.haopai_number,r.title=o,r.type=r.ORDER.extenddata.name+"-"+r.FAMILY.extenddata.name+"-"+r.GENUS.extenddata.name,r}r.d(t,"b",function(){return u}),r.d(t,"j",function(){return d}),r.d(t,"k",function(){return p}),r.d(t,"c",function(){return m}),r.d(t,"d",function(){return f}),r.d(t,"e",function(){return h}),r.d(t,"h",function(){return g}),r.d(t,"g",function(){return b}),r.d(t,"f",function(){return v}),r.d(t,"i",function(){return y}),r.d(t,"a",function(){return _})},"7ea4":function(e,t,r){},9786:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"all-infor"},[r("div",{staticClass:"edit-img"}),r("div",{staticClass:"main-size",style:{padding:"0"}},[r("el-col",{staticClass:"inforSwiper",attrs:{span:8}},[r("div",{style:{textAlign:"center",margin:"1.5vh 0"}},[r("span",{staticClass:"record-name"},[e._v(e._s(e.recordName))])]),e._l(e.recordInfor,function(t,a){return r("div",{key:a,staticStyle:{color:"#ACACAC","margin-bottom":"5px"}},[r("el-col",{attrs:{span:2}},[e._v(" ")]),r("el-col",{style:a<e.recordInfor.length-1?{borderBottom:"1px solid #ACACAC"}:"",attrs:{span:20}},[r("el-col",{attrs:{span:8}},[r("span",{staticStyle:{color:"#7E7E7E"}},[e._v(e._s(t.title)+"：")])]),r("el-col",{attrs:{span:16}},[r("span",[null!==t.title.match(/备注/g)?r("span"):e._e(),e._v("\n              "+e._s(t.msg)+"\n            ")]),/颜色/.test(t.title)?r("span",[r("span",{staticClass:"color-block",style:"background-color:"+t.color}),r("span",[e._v("—  ")]),r("span",[e._v(e._s(t.msg2))]),r("span",{staticClass:"color-block",style:"background-color:"+t.color2})]):e._e(),"尺寸"===t.title&&t.msg?r("span",[e._v("cm")]):e._e(),"面积"===t.title&&t.msg?r("span",[e._v("\n              cm\n              "),r("sup",[e._v("2")])]):e._e()])],1),r("el-col",{attrs:{span:2}},[e._v(" ")])],1)})],2),r("el-col",{style:{padding:"0"},attrs:{span:16}},[r("el-row",[r("swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:e.imgUrl},on:{selectOneImg:e.chooseSwiperImg,"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t}}})],1),r("el-row",[r("div",{staticStyle:{height:"25rem",width:"32rem",margin:"0 auto","line-height":"25rem","text-align":"center"}},[r("img",{staticClass:"showOneImg",attrs:{width:"100%",src:e.imgUrlFormSwiper,alt:""},on:{"update:src":function(t){e.imgUrlFormSwiper=t}}})])])],1)],1)])},s=[],i=r("91b0"),o={components:{swiper:i["a"]},props:{recordName:String,recordInfor:Array,imgUrl:Array},data:function(){return{imgUrlFormSwiper:""}},methods:{chooseSwiperImg:function(e){this.imgUrlFormSwiper=e},typeForm:function(e){switch(e){case"A1":var t={signColor:"",signNumber:"",species:{first:"",second:"",third:""},collectSite:this.$route.query.address,breedArea:{firstArea:"",nursery:"",partition:""}};return t;case"A2":var r={signColor:"",signNumber:"",breedArea:{firstArea:"A",nursery:"",partition:""}};return r;case"A3":var a={sowData:{signColor:"",signNumber:"",sowArea:{firstArea:"A",line:"",segmentation:""}},breedData:{signColor:"",signNumber:"",breedArea:{firstArea:"A",nursery:"",partition:""}}};return a;case"A4":var s={signColor:"",signNumber:"",sowArea:{firstArea:"A",line:"",segmentation:""}};return s;default:return null}},edit:function(){this.$router.push({name:"build".concat(this.$route.query.activityType),params:{build:"edit",recordData:{state:"失踪",penetrability:"25",temperature:"24",coralColor:{shallowColor:"D2",deepColor:"E5"},remark:"我自横刀向天笑"}},query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}},watch:{imgUrl:function(){this.imgUrl.length>0&&(this.imgUrlFormSwiper=this.imgUrl[0].url)}},mounted:function(){this.imgUrl.length>0&&(this.imgUrlFormSwiper=this.imgUrl[0].url)}},n=o,c=(r("b8099"),r("2877")),l=Object(c["a"])(n,a,s,!1,null,"07a57df4",null);t["a"]=l.exports},b8099:function(e,t,r){"use strict";var a=r("7ea4"),s=r.n(a);s.a},d726:function(e,t,r){"use strict";var a=r("45a8"),s=r.n(a);s.a},e1ba:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listRoot"},e._l(e.fileName,function(t,a){return r("div",{key:a,staticClass:"listItem",class:e.activeFile===t?"activeItem":"",on:{click:function(r){return e.findFile(t)}}},[e._v(e._s(t))])}),0)},s=[],i=(r("ac4d"),r("8a81"),r("ac6a"),r("96cf"),r("3b8d")),o=r("4ec3"),n=r("6d62"),c=r("e050"),l={props:{fileNameList:{type:Array}},watch:{fileNameList:{handler:function(){this.getFileName()},deep:!0}},computed:{},data:function(){return{fileName:[],activeFile:""}},methods:{getFileName:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,a,s,i,l,u,d=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.fileName=[],!(this.fileNameList.length>0)){e.next=29;break}t=!0,r=!1,a=void 0,e.prev=5,s=this.fileNameList[Symbol.iterator]();case 7:if(t=(i=s.next()).done){e.next=15;break}return l=i.value,u=Object(n["f"])(c["g"],l.principle.ExtendData.czda_spaid),e.next=12,Object(o["h"])(u,"/tree/select").then(function(e){var t=Object(n["a"])(e.data.response.CZDA.objects[0]).title;console.log(Object(n["a"])(e.data.response.CZDA.objects[0])),d.fileName.push(t)});case 12:t=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](5),r=!0,a=e.t0;case 21:e.prev=21,e.prev=22,t||null==s.return||s.return();case 24:if(e.prev=24,!r){e.next=27;break}throw a;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,this,[[5,17,21,29],[22,,24,28]])}));function t(){return e.apply(this,arguments)}return t}(),findFile:function(e){this.activeFile=e,console.log(e)}},mounted:function(){this.getFileName()}},u=l,d=(r("d726"),r("2877")),p=Object(d["a"])(u,a,s,!1,null,"55da99bc",null);t["a"]=p.exports},fe3c:function(e,t,r){"use strict";var a=r("1b1a"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-75f29346.470b6a99.js.map