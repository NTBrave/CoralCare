(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35819b22"],{"18e6":function(e,t,a){"use strict";function r(e,t,a){var r;return function(){var s=this,o=arguments;if(r&&clearTimeout(r),a){var i=!r;r=setTimeout(function(){r=null},t),i&&e.apply(s,o)}else r=setTimeout(function(){e.apply(s,o)},t)}}a.d(t,"a",function(){return r})},2176:function(e,t,a){"use strict";var r=a("3f67"),s=a.n(r);s.a},2229:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.isCreated,staticClass:"createBoard"},[a("div",{staticClass:"infoArea"},[a("div",{staticClass:"activityNum"},[e._v("活动编号："+e._s(e.activityNumber))]),a("div",{staticClass:"info"},[e.activityFiles?a("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:e.activityFiles},on:{"update:fileNameList":function(t){e.activityFiles=t},"update:file-name-list":function(t){e.activityFiles=t}}}):e._e(),a("div",{staticClass:"form"},[a("p",[e._v(e._s(e.operateFile))]),a("activity-form",{attrs:{sowData:e.sowData,recordData:e.recordData,isCreated:e.isCreated,imgUrl:e.imgUrl},on:{"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t},func:e.getSpaid}})],1)],1)]),a("div",{staticClass:"uploadArea"},[a("el-row",{style:{height:"9.5vh"}},[e.imgUrl.length?a("picture-swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:e.imgUrl},on:{"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t},selectOneImg:e.chooseSwiperImg}}):e._e()],1),a("el-row",{style:{position:"",margin:"0 auto"}},[a("upload-border",[a("div",{staticClass:"imgUpload"},[a("img",{staticClass:"showOneImg",attrs:{width:"80%",height:"70%",src:e.imgUrlFormSwiper,alt:""},on:{"update:src":function(t){e.imgUrlFormSwiper=t}}}),a("up-load",{attrs:{masterid:e.record_spaid,czda_spaid:e.file_spaid},on:{createImg:function(t){return e.imgArrPush(arguments)},"update:masterid":function(t){e.record_spaid=t},"update:czda_spaid":function(t){e.file_spaid=t}}})],1)])],1)],1)])},s=[],o=a("cebc"),i=a("2f62"),l=a("e1ba"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"formRoot"},[a("el-form",{staticClass:"A-Two",attrs:{model:e.sowForm,disabled:!e.beforeCreateRecord}},[a("el-form-item",[a("el-col",{style:{textAlign:"center"},attrs:{span:4}},[a("span",{style:{fontWeight:"bold"}},[e._v("回播区域")])]),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{disabled:"",placeholder:""},model:{value:e.sowForm.sowArea.firstArea,callback:function(t){e.$set(e.sowForm.sowArea,"firstArea",t)},expression:"sowForm.sowArea.firstArea"}},e._l(e.HB_quyu,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"样线"},model:{value:e.sowForm.sowArea.line,callback:function(t){e.$set(e.sowForm.sowArea,"line",t)},expression:"sowForm.sowArea.line"}},e._l(e.HB_yangxian,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"分段"},model:{value:e.sowForm.sowArea.segmentation,callback:function(t){e.$set(e.sowForm.sowArea,"segmentation",t)},expression:"sowForm.sowArea.segmentation"}},e._l(e.HB_fenduan,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"牌色"},model:{value:e.sowForm.signColor,callback:function(t){e.$set(e.sowForm,"signColor",t)},expression:"sowForm.signColor"}},e._l(e.signColorList,function(t,r){return a("el-option",{key:r,attrs:{label:t.label,value:t.value,color:t.color}},[a("span",[e._v(e._s(t.label))]),a("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:"号码"},model:{value:e.sowForm.signNumber,callback:function(t){e.$set(e.sowForm,"signNumber",t)},expression:"sowForm.signNumber"}})],1)],1)],1),a("el-form",{ref:"recordForm",attrs:{size:"small",disabled:e.beforeFileFind||!e.beforeCreateRecord}},[a("el-form-item",[a("el-col",{attrs:{span:5}},[a("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("状态")])]),a("el-col",{attrs:{span:19}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.recordForm.state,callback:function(t){e.$set(e.recordForm,"state",t)},expression:"recordForm.state"}},[a("el-option",{attrs:{label:"良好",value:"0"}}),a("el-option",{attrs:{label:"部分白化",value:"1"}}),a("el-option",{attrs:{label:"部分死亡",value:"2"}}),a("el-option",{attrs:{label:"死亡",value:"3"}}),a("el-option",{attrs:{label:"失踪",value:"4"}})],1)],1)],1),a("el-form-item",[a("el-col",{attrs:{span:5}},[a("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("珊瑚颜色")])]),a("el-col",{attrs:{span:9}},[a("el-select",{attrs:{placeholder:"选择最浅颜色"},model:{value:e.recordForm.coralColor.shallowColor,callback:function(t){e.$set(e.recordForm.coralColor,"shallowColor",t)},expression:"recordForm.coralColor.shallowColor"}},e._l(e.colorList,function(t,r){return a("el-option",{key:r,attrs:{label:t.label,value:t.value}},[a("span",[e._v(e._s(t.label))]),a("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),a("el-col",{attrs:{span:1}},[e._v("  -")]),a("el-col",{attrs:{span:9}},[a("el-select",{attrs:{placeholder:"选择最深颜色"},model:{value:e.recordForm.coralColor.deepColor,callback:function(t){e.$set(e.recordForm.coralColor,"deepColor",t)},expression:"recordForm.coralColor.deepColor"}},e._l(e.colorList,function(t,r){return a("el-option",{key:r,attrs:{label:t.label,value:t.value}},[a("span",[e._v(e._s(t.label))]),a("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1)],1),a("el-form-item",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:12,maxRows:12},placeholder:"备注"},model:{value:e.recordForm.remark,callback:function(t){e.$set(e.recordForm,"remark",t)},expression:"recordForm.remark"}})],1)],1),a("div",{staticClass:"buttonArea"},[e.isCreated&&e.beforeCreateRecord?a("el-button",{staticClass:"afterCreate",attrs:{disabled:e.beforeFileFind,type:"danger",round:""},on:{click:e.submitRecorder}},[e._v("录入回播巡检数据")]):e.isCreated&&!e.beforeCreateRecord?a("el-button",{staticClass:"beforeCreate",attrs:{type:"danger",round:""},on:{click:e.routeToSuccess}},[e._v("图片录入")]):a("el-button",{staticClass:"afterCreate",attrs:{type:"danger",round:""},on:{click:e.submitEdit}},[e._v("修改回播巡检数据")])],1)],1)},c=[],d=(a("28a5"),a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),a("4eb9")),u=a("e050"),p=a("6d62"),m=a("18e6"),f=a("4ec3"),h=a("c1df"),b=a.n(h),g={props:{sowData:Object,recordData:Object,isCreated:Boolean,imgUrl:{type:Array,default:function(){return[]}}},computed:Object(o["a"])({},Object(i["b"])({currentZD_data:"getCurrentZD_data",currentActivity:"getCurrentActivity"}),Object(i["d"])(["currentZD"])),watch:{sowForm:{handler:function(){var e=Boolean(this.sowForm.sowArea.firstArea&&this.sowForm.sowArea.line&&this.sowForm.sowArea.segmentation&&this.sowForm.signColor&&this.sowForm.signNumber);e?this.requestCZDA_debounce(e):this.beforeFileFind=!e},deep:!0},"sowForm.sowArea.line":function(){var e=this;this.HB_fenduan=[],this.sowForm.sowArea.segmentation="";var t=Object(p["k"])(u["y"],this.sowForm.sowArea.line,"YX");Object(f["b"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var a=!0,r=!1,s=void 0;try{for(var o,i=t.data.response.FD.objects[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.HB_fenduan.push(n)}}catch(c){r=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}}else e.HB_fenduan=[]})}},data:function(){return{signColorList:d["e"],colorList:d["b"],beforeFileFind:!0,HB_quyu:[],HB_yangxian:[],HB_fenduan:[],file_spaid:"",record_spaid:"",sowForm:this.sowData,recordForm:this.recordData,beforeCreateRecord:!0,activityNum:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time,item:{}}},methods:Object(o["a"])({},Object(i["c"])(["setOperateFile"]),{requestCZDA:function(e){var t=this;if(e){var a=Object(p["g"])(u["f"],this.sowForm);Object(f["b"])(a,"/tree/select").then(function(a){if(console.log(a),200===a.data.status)if(a.data.response){var r=Object(p["a"])(a.data.response.CZDA.objects[0]);console.log(r),t.file_spaid=a.data.response.CZDA.objects[0].principle.SpaId,t.item.activity_Num=t.activityNum,t.item.species=r.type,t.item.stage=r.stage,t.item.title=r.title;var s=r.title.split("-");s.length=s.length-2,t.item.zyqy=s.join("-"),t.$message({showClose:!0,message:"档案已找到！",type:"success"}),t.beforeFileFind=!e}else t.$message({showClose:!0,message:"找不到残枝档案！",type:"error",duration:4e3})})}else this.$message({showClose:!0,message:"残枝档案信息不完整！",type:"error",duration:4e3})},requestCZDA_debounce:Object(m["a"])(function(e){this.requestCZDA(e)},1e3,!1),sendSpaid:function(){this.$emit("func",this.file_spaid,this.record_spaid)},submitRecorder:function(){var e=this,t=Object(p["d"])(u["u"],JSON.parse(this.$route.query.spaid).czhd_spaid,this.file_spaid,this.$route.query.time,this.recordForm);console.log(t),Object(f["b"])(t,"/tree/create").then(function(t){if(200===t.data.status){e.record_spaid=t.data.response.CZJL.objects[0].principle.SpaId,e.sendSpaid(),e.item.status=t.data.response.CZJL.objects[0].principle.ExtendData.status,e.item.stage="回播";var a=t.data.response.CZJL.objects[0].principle.ExtendData.lightest_color,r=t.data.response.CZJL.objects[0].principle.ExtendData.darkest_color;e.item.coralColor={},e.item.coralColor.lightest_color=a,e.item.coralColor.color1=d["c"][a],e.item.coralColor.darkest_color=r,e.item.coralColor.color2=d["c"][r],e.item.time=b()(t.data.response.CZJL.objects[0].principle.ExtendData.timestamp,"YYYYMMDDHH").format("YYYY-MM-DD HH"),e.item.height=t.data.response.CZJL.objects[0].principle.ExtendData.height,e.item.area=t.data.response.CZJL.objects[0].principle.ExtendData.area,e.item.comment=t.data.response.CZJL.objects[0].principle.ExtendData.comment,e.$message({showClose:!0,message:"数据已成功录入！",type:"success"}),e.beforeCreateRecord=!1}console.log(t)})},routeToSuccess:function(){this.$router.push({name:"resultA4",query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType,spaid:JSON.stringify({czzy_spaid:JSON.parse(this.$route.query.spaid).czzy_spaid,czhd_spaid:JSON.parse(this.$route.query.spaid).czhd_spaid,czda_spaid:this.file_spaid,czjl_spaid:this.record_spaid,item:this.item,imgUrl:this.imgUrl})},params:{result:"success"}})},requestHBQY:function(){var e=this;this.sowForm.sowArea.firstArea=this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid,this.HB_quyu=[{name:"A",spaid:this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid}],console.log(this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid);var t=Object(p["k"])(u["y"],this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid,"HBQYROOT");Object(f["b"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var a=!0,r=!1,s=void 0;try{for(var o,i=t.data.response.YX.objects[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.HB_yangxian.push(n)}}catch(c){r=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}}else e.HB_yangxian=[]})}}),mounted:function(){this.requestHBQY()}},v=g,y=(a("d709"),a("8daf"),a("2877")),C=Object(y["a"])(v,n,c,!1,null,"67a7fc6a",null),_=C.exports,w=a("91b0"),F=a("731e"),D=a("9dac"),A={components:{"file-list":l["a"],"activity-form":_,"picture-swiper":w["a"],"upload-border":F["a"],"up-load":D["a"]},data:function(){return{activityFiles:[],sowData:{signColor:"",signNumber:"",sowArea:{firstArea:"A",line:"",segmentation:""}},recordData:{state:"",penetrability:"",temperature:"",coralColor:{shallowColor:"",deepColor:""},remark:""},imgUrl:[],isCreated:!0,imgUrlFormSwiper:"",file_spaid:"",record_spaid:"",activityNumber:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time}},computed:Object(o["a"])({},Object(i["b"])({}),Object(i["d"])(["operateFile"]),{isSpaidChange:function(){var e=this.file_spaid,t=this.record_spaid;return{file_spaid:e,record_spaid:t}}}),watch:{isSpaidChange:{handler:function(){Boolean(this.file_spaid&&this.record_spaid)?this.requestCZJL():console.log("还没有拿到czda_spaid!")},deep:!0}},methods:{getSpaid:function(e,t){this.file_spaid=e,this.record_spaid=t,console.log("拿到的spaid",this.file_spaid,this.record_spaid)},chooseSwiperImg:function(e){this.imgUrlFormSwiper=e},requestCZJL:function(){var e=this,t=Object(p["i"])(u["o"],JSON.parse(this.$route.query.spaid).czhd_spaid);Object(f["b"])(t,"/tree/select").then(function(t){if(console.log("获取活动下所有残枝记录",t),200===t.data.status&&t.data.response){var a=t.data.response.CZJL.objects;e.activityFiles=a}})},setIsCreated:function(e){this.isCreated=e},setData:function(e){this.recordData=e},imgArrPush:function(e){var t=this,a=e[0];e[1];Object(f["b"])({file_id:a},"/file/get").then(function(e){console.log("img:",e),200===e.data.status&&e.data.response&&t.imgUrl.push({url:e.data.response.url})})}},mounted:function(){this.requestCZJL()},beforeRouteEnter:function(e,t,a){console.log(e.params.recordData),"create"===e.params.build?a():"edit"===e.params.build?a(function(t){t.setData(e.params.recordData),t.setIsCreated(!1)}):a()}},j=A,x=(a("2176"),Object(y["a"])(j,r,s,!1,null,"8838c478",null));t["default"]=x.exports},"3f67":function(e,t,a){},"8daf":function(e,t,a){"use strict";var r=a("a4e2"),s=a.n(r);s.a},a4e2:function(e,t,a){},c32a:function(e,t,a){},d709:function(e,t,a){"use strict";var r=a("c32a"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-35819b22.4bfe0cce.js.map