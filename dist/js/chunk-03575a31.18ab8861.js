(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03575a31"],{"200c":function(e,t,r){},"36c8":function(e,t,r){"use strict";var a=r("4257"),s=r.n(a);s.a},4257:function(e,t,r){},"529e":function(e,t,r){"use strict";function a(e){var t;for(var r in e)if(e.hasOwnProperty(r)){if(null===e[r]||""===e[r]){t=!0;break}t=e[r]instanceof Object&&a(e[r])}return t}r.d(t,"a",function(){return a})},6408:function(e,t,r){"use strict";var a=r("200c"),s=r.n(a);s.a},"8f71":function(e,t,r){},d850:function(e,t,r){"use strict";var a=r("8f71"),s=r.n(a);s.a},ee5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.isCreated,staticClass:"createBoard"},[r("div",{staticClass:"infoArea"},[r("div",{staticClass:"activityNum"},[e._v("活动编号："+e._s(e.activityNumber))]),r("div",{staticClass:"info"},[e.activityFiles?r("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:e.activityFiles},on:{"update:fileNameList":function(t){e.activityFiles=t},"update:file-name-list":function(t){e.activityFiles=t}}}):e._e(),r("div",{staticClass:"form"},[r("p",[e._v(e._s(e.operateFile))]),r("activity-form",{attrs:{fileData:e.fileData,recordData:e.recordData,isCreated:e.isCreated,imgUrl:e.imgUrl},on:{func:e.getSpaid}})],1)],1)]),r("div",{staticClass:"uploadArea"},[r("el-row",{style:{height:"9.5vh"}},[e.imgUrl.length?r("picture-swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:e.imgUrl},on:{"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t},selectOneImg:e.chooseSwiperImg}}):e._e()],1),r("el-row",{style:{position:"",margin:"0 auto"}},[r("upload-border",[r("div",{staticClass:"imgUpload"},[r("img",{staticClass:"showOneImg",attrs:{src:e.imgUrlFormSwiper,alt:""}}),r("up-load",{attrs:{masterid:e.record_spaid,czda_spaid:e.file_spaid},on:{createImg:function(t){return e.imgArrPush(arguments)},"update:masterid":function(t){e.record_spaid=t},"update:czda_spaid":function(t){e.file_spaid=t}}})],1)])],1)],1)])},s=[],i=r("cebc"),o=r("2f62"),l=r("e1ba"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"formRoot"},[r("el-form",{ref:"fileForm",attrs:{size:"small",disabled:!e.beforeCreateRecord}},[r("el-form-item",[r("el-col",{attrs:{span:4}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("牌色")])]),r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.fileForm.signColor,callback:function(t){e.$set(e.fileForm,"signColor",t)},expression:"fileForm.signColor"}},e._l(e.signColorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value,color:t.color}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.fileForm.signNumber,callback:function(t){e.$set(e.fileForm,"signNumber",t)},expression:"fileForm.signNumber"}},[r("template",{slot:"prepend"},[r("span",{style:{fontWeight:"bold",color:"black"}},[e._v("号码")])])],2)],1)],1),r("el-form-item",[r("el-col",{attrs:{span:4}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("品种")])]),r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{placeholder:"目"},model:{value:e.fileForm.species.first,callback:function(t){e.$set(e.fileForm.species,"first",t)},expression:"fileForm.species.first"}},e._l(e.species_order,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"科"},model:{value:e.fileForm.species.second,callback:function(t){e.$set(e.fileForm.species,"second",t)},expression:"fileForm.species.second"}},e._l(e.species_family,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"属"},model:{value:e.fileForm.species.third,callback:function(t){e.$set(e.fileForm.species,"third",t)},expression:"fileForm.species.third"}},e._l(e.species_genus,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1)],1),r("el-form-item",[r("el-col",{attrs:{span:5}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("采集站点")])]),r("el-col",{attrs:{span:19}},[r("el-input",{attrs:{disabled:!0},model:{value:e.fileForm.collectSite,callback:function(t){e.$set(e.fileForm,"collectSite",t)},expression:"fileForm.collectSite"}})],1)],1),r("el-form-item",[r("el-col",{attrs:{span:5}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("暂养区域")])]),r("el-col",{attrs:{span:5}},[r("el-select",{attrs:{disabled:""},model:{value:e.fileForm.breedArea.firstArea,callback:function(t){e.$set(e.fileForm.breedArea,"firstArea",t)},expression:"fileForm.breedArea.firstArea"}},e._l(e.ZY_quyu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"苗圃"},model:{value:e.fileForm.breedArea.nursery,callback:function(t){e.$set(e.fileForm.breedArea,"nursery",t)},expression:"fileForm.breedArea.nursery"}},e._l(e.ZY_miaopu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"分区"},model:{value:e.fileForm.breedArea.partition,callback:function(t){e.$set(e.fileForm.breedArea,"partition",t)},expression:"fileForm.breedArea.partition"}},e._l(e.ZY_fenqu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1)],1)],1),r("el-form",{ref:"recorderForm",attrs:{size:"small",disabled:!e.beforeCreateRecord}},[r("el-form-item",[r("el-col",{attrs:{span:4}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("状态")])]),r("el-col",{attrs:{span:20}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.recordForm.state,callback:function(t){e.$set(e.recordForm,"state",t)},expression:"recordForm.state"}},[r("el-option",{attrs:{label:"良好",value:"良好"}}),r("el-option",{attrs:{label:"部分白化",value:"部分白化"}}),r("el-option",{attrs:{label:"部分死亡",value:"部分死亡"}}),r("el-option",{attrs:{label:"死亡",value:"死亡"}}),r("el-option",{attrs:{label:"失踪",value:"失踪"}})],1)],1)],1),r("el-form-item",[r("el-col",{attrs:{span:5}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("珊瑚颜色")])]),r("el-col",{attrs:{span:9}},[r("el-select",{attrs:{placeholder:"选择最浅颜色"},model:{value:e.recordForm.coralColor.shallowColor,callback:function(t){e.$set(e.recordForm.coralColor,"shallowColor",t)},expression:"recordForm.coralColor.shallowColor"}},e._l(e.colorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),r("el-col",{attrs:{span:1}},[e._v("  -")]),r("el-col",{attrs:{span:9}},[r("el-select",{attrs:{placeholder:"选择最深颜色"},model:{value:e.recordForm.coralColor.deepColor,callback:function(t){e.$set(e.recordForm.coralColor,"deepColor",t)},expression:"recordForm.coralColor.deepColor"}},e._l(e.colorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1)],1),r("el-form-item",[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:12},placeholder:"备注"},model:{value:e.recordForm.remark,callback:function(t){e.$set(e.recordForm,"remark",t)},expression:"recordForm.remark"}})],1)],1),r("div",{staticClass:"buttonArea"},[e.isCreated&&e.beforeCreateRecord?r("el-button",{staticClass:"afterCreate",attrs:{disabled:e.fileInfoNeed,type:"danger",round:""},on:{click:function(t){return e.submitRecorder()}}},[e._v("录入首次暂养数据")]):e.isCreated&&!e.beforeCreateRecord?r("el-button",{staticClass:"beforeCreate",attrs:{type:"danger",round:""},on:{click:e.routeToSuccess}},[e._v("图片录入")]):r("el-button",{staticClass:"afterCreate",attrs:{type:"danger",round:""},on:{click:function(t){return e.submitRecorder()}}},[e._v("修改首次暂养数据")])],1)],1)},c=[],d=(r("28a5"),r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("4ec3")),p=r("e050"),u=r("4eb9"),f=r("6d62"),m=r("529e"),h=r("c1df"),b=r.n(h),v={props:{fileData:Object,recordData:Object,isCreated:Boolean,imgUrl:{type:Array,default:function(){return[]}}},watch:{fileForm:{handler:function(){var e=Object(m["a"])(this.fileForm);console.log(e),this.fileInfoNeed=e},deep:!0},"fileForm.species.first":function(){var e=this;this.species_family=[],this.fileForm.species.second="",this.fileForm.species.third="",console.log(this.fileForm.species.first);var t=Object(f["j"])(p["z"],this.fileForm.species.first,"ORDER");Object(d["b"])(t,"/tree/select").then(function(t){if(200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var i,o=t.data.response.FAMILY.objects[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.species_family.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}}else e.species_family=[]})},"fileForm.species.second":function(){var e=this;this.species_genus=[],this.fileForm.species.third="";var t=Object(f["j"])(p["z"],this.fileForm.species.second,"FAMILY");Object(d["b"])(t,"/tree/select").then(function(t){if(200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var i,o=t.data.response.GENUS.objects[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.species_genus.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}}else e.species_genus=[]})},"fileForm.breedArea.nursery":function(){var e=this;this.ZY_fenqu=[],this.fileForm.breedArea.partition="";var t=Object(f["k"])(p["y"],this.fileForm.breedArea.nursery,"MP");Object(d["b"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var i,o=t.data.response.FQ.objects[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.ZY_fenqu.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}}else e.ZY_fenqu=[]})}},computed:Object(i["a"])({},Object(o["b"])({currentZD_data:"getCurrentZD_data"}),Object(o["d"])(["currentZD"])),data:function(){return{signColorList:u["e"],colorList:u["b"],species_order:[],species_family:[],species_genus:[],ZY_quyu:[],ZY_miaopu:[],ZY_fenqu:[],file_spaid:"",record_spaid:"",fileForm:this.fileData,recordForm:this.recordData,fileInfoNeed:!0,beforeCreateRecord:!0,activityNum:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time,item:{}}},methods:Object(i["a"])({},Object(o["c"])(["setOperateFile"]),{createFile:function(){this.setOperateFile("A-宇宙号-1区-蓝-10")},sendSpaid:function(){this.$emit("func",this.file_spaid,this.record_spaid)},submitRecorder:function(){var e=this;console.log(JSON.parse(this.$route.query.spaid));var t=Object(f["c"])(p["r"],this.currentZD_data(this.currentZD).ExtendData.czdaroot_spaid,JSON.parse(this.$route.query.spaid).czhd_spaid,this.currentZD_data(this.currentZD).SpaId,this.$route.query.time,this.fileForm,this.recordForm);console.log(t),Object(d["b"])(t,"/tree/flow").then(function(t){if(console.log(t),200===t.data.status){var r=Object(f["a"])(t.data.response.CZDA.objects[0]);e.file_spaid=t.data.response.CZDA.objects[0].principle.SpaId,e.record_spaid=t.data.response.CZJL.objects[0].principle.SpaId,e.sendSpaid();var a={};a.activity_Num=e.activityNum,a.species=r.type,a.status=t.data.response.CZJL.objects[0].principle.ExtendData.status,a.stage=t.data.response.CZDA.objects[0].principle.ExtendData.stage;var s=r.title.split("-");s.length=s.length-2,a.zyqy=s.join("-");var o=t.data.response.CZJL.objects[0].principle.ExtendData.lightest_color,l=t.data.response.CZJL.objects[0].principle.ExtendData.darkest_color;a.coralColor={},a.coralColor.lightest_color=o,a.coralColor.color1=u["c"][o],a.coralColor.darkest_color=l,a.coralColor.color2=u["c"][l],a.time=b()(t.data.response.CZJL.objects[0].principle.ExtendData.timestamp,"YYYYMMDDHH").format("YYYY-MM-DD HH"),a.height=t.data.response.CZJL.objects[0].principle.ExtendData.height,a.area=t.data.response.CZJL.objects[0].principle.ExtendData.area,a.comment=t.data.response.CZJL.objects[0].principle.ExtendData.comment,a.title=r.title,e.item=Object(i["a"])({},a),e.$message({showClose:!0,message:"记录已成功录入！",type:"success"}),e.beforeCreateRecord=!1}})},routeToSuccess:function(){this.$router.push({name:"resultA1",query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType,spaid:JSON.stringify({czzy_spaid:JSON.parse(this.$route.query.spaid).czzy_spaid,czhd_spaid:JSON.parse(this.$route.query.spaid).czhd_spaid,czda_spaid:this.file_spaid,czjl_spaid:this.record_spaid,item:this.item,imgUrl:this.imgUrl})},params:{result:"success"}})},requestOrder:function(){var e=this;Object(d["b"])(p["z"],"/tree/select").then(function(t){if(200===t.data.status){if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var i,o=t.data.response.ORDER.objects[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.species_order.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}}}else e.species_order=[]})},requestCJQU:function(){var e=this;this.fileForm.breedArea.firstArea=this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid,this.ZY_quyu=[{name:"A",spaid:this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid}],console.log(this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid);var t=Object(f["k"])(p["y"],this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid,"ZYQYROOT");Object(d["b"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var i,o=t.data.response.MP.objects[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.ZY_miaopu.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}}else e.ZY_miaopu=[]})}}),mounted:function(){this.requestOrder(),this.requestCJQU()}},y=v,_=(r("d850"),r("6408"),r("2877")),g=Object(_["a"])(y,n,c,!1,null,"1deef2df",null),C=g.exports,F=r("91b0"),D=r("731e"),j=r("9dac"),O={components:{"file-list":l["a"],"activity-form":C,"picture-swiper":F["a"],"upload-border":D["a"],"up-load":j["a"]},data:function(){return{activityFiles:[],fileData:{signColor:"",signNumber:"",species:{first:"",second:"",third:""},collectSite:this.$route.query.address,breedArea:{firstArea:"",nursery:"",partition:""}},recordData:{state:"",coralColor:{shallowColor:"",deepColor:""},remark:""},imgUrl:[],isCreated:!0,imgUrlFormSwiper:"",file_spaid:"",record_spaid:"",activityNumber:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time}},computed:Object(i["a"])({},Object(o["b"])({}),Object(o["d"])(["operateFile"]),{isSpaidChange:function(){var e=this.file_spaid,t=this.record_spaid;return{file_spaid:e,record_spaid:t}}}),watch:{isSpaidChange:{handler:function(){Boolean(this.file_spaid&&this.record_spaid)?this.requestCZJL():console.log("还没有拿到czda_spaid!")},deep:!0}},methods:{getSpaid:function(e,t){this.file_spaid=e,this.record_spaid=t},chooseSwiperImg:function(e){this.imgUrlFormSwiper=e},requestCZJL:function(){var e=this,t=Object(f["i"])(p["o"],JSON.parse(this.$route.query.spaid).czhd_spaid);Object(d["b"])(t,"/tree/select").then(function(t){if(console.log("获取活动下所有残枝记录",t),200===t.data.status&&t.data.response){var r=t.data.response.CZJL.objects;e.activityFiles=r}})},setIsCreated:function(e){this.isCreated=e},setData:function(e){this.recordData=e},imgArrPush:function(e){var t=this,r=e[0];e[1];Object(d["b"])({file_id:r},"/file/get").then(function(e){console.log("img:",e),200===e.data.status&&e.data.response&&t.imgUrl.push({url:e.data.response.url})})}},mounted:function(){this.requestCZJL()},beforeRouteEnter:function(e,t,r){console.log(e.params.recordData),"create"===e.params.build?r(function(e){}):"edit"===e.params.build?r(function(t){t.setData(e.params.recordData),t.setIsCreated(!1)}):r()}},x=O,Z=(r("36c8"),Object(_["a"])(x,a,s,!1,null,"a4faf860",null));t["default"]=Z.exports}}]);
//# sourceMappingURL=chunk-03575a31.18ab8861.js.map