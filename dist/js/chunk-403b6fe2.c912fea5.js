(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403b6fe2"],{1319:function(e,t,r){"use strict";var a=r("4c2f"),s=r.n(a);s.a},1717:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.isCreated,staticClass:"createBoard"},[r("div",{staticClass:"infoArea"},[r("div",{staticClass:"activityNum"},[e._v("活动编号："+e._s(e.activityNumber))]),r("div",{staticClass:"info"},[e.activityFiles?r("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:e.activityFiles},on:{"update:fileNameList":function(t){e.activityFiles=t},"update:file-name-list":function(t){e.activityFiles=t}}}):e._e(),r("div",{staticClass:"form"},[r("p",[e._v(e._s(e.operateFile))]),r("activity-form",{attrs:{sowData:e.sowData,breedData:e.breedData,recordData:e.recordData,isCreated:e.isCreated,imgUrl:e.imgUrl},on:{"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t},func:e.getSpaid}})],1)],1)]),r("div",{staticClass:"uploadArea"},[r("el-row",{style:{height:"9.5vh"}},[e.imgUrl.length?r("picture-swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:e.imgUrl},on:{"update:imgUrl":function(t){e.imgUrl=t},"update:img-url":function(t){e.imgUrl=t},selectOneImg:e.chooseSwiperImg}}):e._e()],1),r("el-row",{style:{position:"",margin:"0 auto"}},[r("upload-border",[r("div",{staticClass:"imgUpload"},[r("img",{staticClass:"showOneImg",attrs:{width:"80%",height:"70%",src:e.imgUrlFormSwiper,alt:""},on:{"update:src":function(t){e.imgUrlFormSwiper=t}}}),r("up-load",{attrs:{masterid:e.record_spaid,czda_spaid:e.file_spaid},on:{createImg:function(t){return e.imgArrPush(arguments)},"update:masterid":function(t){e.record_spaid=t},"update:czda_spaid":function(t){e.file_spaid=t}}})],1)])],1)],1)])},s=[],o=r("cebc"),i=r("2f62"),l=r("e1ba"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"formRoot"},[r("el-form",{staticClass:"A-Two",attrs:{disabled:!e.beforeCreateRecord},model:{value:e.breedForm,callback:function(t){e.breedForm=t},expression:"breedForm"}},[r("el-form-item",[r("el-col",{style:{textAlign:"center"},attrs:{span:4}},[r("span",{style:{fontWeight:"bold"}},[e._v("选择珊瑚")])]),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{disabled:"",placeholder:""},model:{value:e.breedForm.breedArea.firstArea,callback:function(t){e.$set(e.breedForm.breedArea,"firstArea",t)},expression:"breedForm.breedArea.firstArea"}},e._l(e.ZY_quyu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"苗圃"},model:{value:e.breedForm.breedArea.nursery,callback:function(t){e.$set(e.breedForm.breedArea,"nursery",t)},expression:"breedForm.breedArea.nursery"}},e._l(e.ZY_miaopu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"分区"},model:{value:e.breedForm.breedArea.partition,callback:function(t){e.$set(e.breedForm.breedArea,"partition",t)},expression:"breedForm.breedArea.partition"}},e._l(e.ZY_fenqu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"牌色"},model:{value:e.breedForm.signColor,callback:function(t){e.$set(e.breedForm,"signColor",t)},expression:"breedForm.signColor"}},e._l(e.signColorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value,color:t.color}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),r("el-col",{attrs:{span:4}},[r("el-input",{attrs:{placeholder:"号码"},model:{value:e.breedForm.signNumber,callback:function(t){e.$set(e.breedForm,"signNumber",t)},expression:"breedForm.signNumber"}})],1)],1)],1),r("el-form",{staticClass:"A-Two",attrs:{disabled:e.beforeFileFind||!e.beforeCreateRecord}},[r("el-form-item",[r("el-col",{style:{textAlign:"center"},attrs:{span:4}},[r("span",{style:{fontWeight:"bold"}},[e._v("回播区域")])]),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{disabled:"",placeholder:""},model:{value:e.sowForm.sowArea.firstArea,callback:function(t){e.$set(e.sowForm.sowArea,"firstArea",t)},expression:"sowForm.sowArea.firstArea"}},e._l(e.HB_quyu,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"样线"},model:{value:e.sowForm.sowArea.line,callback:function(t){e.$set(e.sowForm.sowArea,"line",t)},expression:"sowForm.sowArea.line"}},e._l(e.HB_yangxian,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"分段"},model:{value:e.sowForm.sowArea.segmentation,callback:function(t){e.$set(e.sowForm.sowArea,"segmentation",t)},expression:"sowForm.sowArea.segmentation"}},e._l(e.HB_fenduan,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.spaid}})}),1)],1),r("el-col",{attrs:{span:4}},[r("el-select",{attrs:{placeholder:"牌色"},model:{value:e.sowForm.signColor,callback:function(t){e.$set(e.sowForm,"signColor",t)},expression:"sowForm.signColor"}},e._l(e.signColorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value,color:t.color}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),r("el-col",{attrs:{span:4}},[r("el-input",{attrs:{placeholder:"号码"},model:{value:e.sowForm.signNumber,callback:function(t){e.$set(e.sowForm,"signNumber",t)},expression:"sowForm.signNumber"}})],1)],1)],1),r("el-form",{ref:"recordForm",attrs:{size:"small",disabled:e.beforeFileFind||!e.beforeCreateRecord}},[r("el-form-item",[r("el-col",{attrs:{span:5}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("状态")])]),r("el-col",{attrs:{span:19}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.recordForm.state,callback:function(t){e.$set(e.recordForm,"state",t)},expression:"recordForm.state"}},[r("el-option",{attrs:{label:"良好",value:"良好"}}),r("el-option",{attrs:{label:"部分白化",value:"部分白化"}}),r("el-option",{attrs:{label:"部分死亡",value:"部分死亡"}}),r("el-option",{attrs:{label:"死亡",value:"死亡"}}),r("el-option",{attrs:{label:"失踪",value:"失踪"}})],1)],1)],1),r("el-form-item",[r("el-col",{attrs:{span:5}},[r("span",{style:{marginLeft:"15px",fontWeight:"bold"}},[e._v("珊瑚颜色")])]),r("el-col",{attrs:{span:9}},[r("el-select",{attrs:{placeholder:"选择最浅颜色"},model:{value:e.recordForm.coralColor.shallowColor,callback:function(t){e.$set(e.recordForm.coralColor,"shallowColor",t)},expression:"recordForm.coralColor.shallowColor"}},e._l(e.colorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1),r("el-col",{attrs:{span:1}},[e._v("  -")]),r("el-col",{attrs:{span:9}},[r("el-select",{attrs:{placeholder:"选择最深颜色"},model:{value:e.recordForm.coralColor.deepColor,callback:function(t){e.$set(e.recordForm.coralColor,"deepColor",t)},expression:"recordForm.coralColor.deepColor"}},e._l(e.colorList,function(t,a){return r("el-option",{key:a,attrs:{label:t.label,value:t.value}},[r("span",[e._v(e._s(t.label))]),r("span",{staticClass:"colorCircle",style:{backgroundColor:t.color}})])}),1)],1)],1),r("el-form-item",[r("el-input",{attrs:{type:"textarea",autosize:{minRows:8,maxRows:12},placeholder:"备注"},model:{value:e.recordForm.remark,callback:function(t){e.$set(e.recordForm,"remark",t)},expression:"recordForm.remark"}})],1)],1),r("div",{staticClass:"buttonArea"},[e.isCreated&&e.beforeCreateRecord?r("el-button",{staticClass:"afterCreate",attrs:{disabled:e.beforeFileFind,type:"danger",round:""},on:{click:e.submitRecorder}},[e._v("录入首次回播数据")]):e.isCreated&&!e.beforeCreateRecord?r("el-button",{staticClass:"beforeCreate",attrs:{type:"danger",round:""},on:{click:e.routeToSuccess}},[e._v("图片录入")]):r("el-button",{staticClass:"afterCreate",attrs:{type:"danger",round:""},on:{click:e.submitRecorder}},[e._v("修改首次回播数据")])],1)],1)},c=[],d=(r("28a5"),r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("4eb9")),u=r("e050"),p=r("6d62"),m=r("18e6"),b=r("4ec3"),f=r("c1df"),h=r.n(f),y={props:{sowData:Object,breedData:Object,recordData:Object,isCreated:Boolean,imgUrl:{type:Array,default:function(){return[]}}},computed:Object(o["a"])({},Object(i["b"])({currentZD_data:"getCurrentZD_data",currentActivity:"getCurrentActivity"}),Object(i["d"])(["currentZD"])),watch:{breedForm:{handler:function(){var e=Boolean(this.breedForm.breedArea.firstArea&&this.breedForm.breedArea.nursery&&this.breedForm.breedArea.partition&&this.breedForm.signColor&&this.breedForm.signNumber);e?this.requestCZDA_debounce(e):this.beforeFileFind=!e},deep:!0},"breedForm.breedArea.nursery":function(){var e=this;this.ZY_fenqu=[],this.breedForm.breedArea.partition="";var t=Object(p["k"])(u["y"],this.breedForm.breedArea.nursery,"MP");Object(b["h"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var o,i=t.data.response.FQ.objects[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.ZY_fenqu.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}}else e.ZY_fenqu=[]})},"sowForm.sowArea.line":function(){var e=this;this.HB_fenduan=[],this.sowForm.sowArea.segmentation="";var t=Object(p["k"])(u["y"],this.sowForm.sowArea.line,"YX");Object(b["h"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){console.log("分段",t.data.response.FD);var r=!0,a=!1,s=void 0;try{for(var o,i=t.data.response.FD.objects[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.HB_fenduan.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}}else e.HB_fenduan=[]})}},data:function(){return{signColorList:d["g"],colorList:d["c"],beforeFileFind:!0,ZY_quyu:[],ZY_miaopu:[],ZY_fenqu:[],HB_quyu:[],HB_yangxian:[],HB_fenduan:[],file_spaid:"",record_spaid:"",sowForm:this.sowData,breedForm:this.breedData,recordForm:this.recordData,beforeCreateRecord:!0,activityNum:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time,item:{}}},methods:Object(o["a"])({},Object(i["c"])(["setOperateFile"]),{requestCZDA:function(e){var t=this;if(e){var r=Object(p["h"])(u["e"],this.breedForm);Object(b["h"])(r,"/tree/select").then(function(r){if(console.log(r),200===r.data.status)if(r.data.response){var a=Object(p["a"])(r.data.response.CZDA.objects[0]);console.log(a),t.file_spaid=r.data.response.CZDA.objects[0].principle.SpaId,t.item.activity_Num=t.activityNum,t.item.species=a.type,t.item.stage=a.stage,t.item.title=a.title;var s=a.title.split("-");s.length=s.length-2,t.item.zyqy=s.join("-"),t.$message({showClose:!0,message:"档案已找到！",type:"success"}),t.beforeFileFind=!e}else t.$message({showClose:!0,message:"找不到残枝档案！",type:"error",duration:4e3})})}else this.$message({showClose:!0,message:"残枝档案信息不完整！",type:"error",duration:4e3})},requestCZDA_debounce:Object(m["a"])(function(e){this.requestCZDA(e)},1e3,!1),sendSpaid:function(){this.$emit("func",this.file_spaid,this.record_spaid)},submitRecorder:function(){var e=this,t=Object(p["e"])(u["t"],this.currentActivity(this.activityNum).czhd_spaid,this.currentZD_data(this.currentZD).czdaroot_spaid,this.file_spaid,this.currentZD_data(this.currentZD).SpaId,this.$route.query.time,this.sowForm,this.recordForm);console.log(t),Object(b["h"])(t,"/tree/flow").then(function(t){if(console.log(t),200===t.data.status){e.record_spaid=t.data.response.CZJL.objects[0].principle.SpaId,e.sendSpaid(),e.item.status=t.data.response.CZJL.objects[0].principle.ExtendData.status;var r=t.data.response.CZJL.objects[0].principle.ExtendData.lightest_color,a=t.data.response.CZJL.objects[0].principle.ExtendData.darkest_color;e.item.coralColor={},e.item.coralColor.lightest_color=r,e.item.coralColor.color1=d["d"][r],e.item.coralColor.darkest_color=a,e.item.coralColor.color2=d["d"][a],e.item.time=h()(t.data.response.CZJL.objects[0].principle.ExtendData.timestamp,"YYYYMMDDHH").format("YYYY-MM-DD HH"),e.item.height=t.data.response.CZJL.objects[0].principle.ExtendData.height,e.item.area=t.data.response.CZJL.objects[0].principle.ExtendData.area,e.item.comment=t.data.response.CZJL.objects[0].principle.ExtendData.comment,e.$message({showClose:!0,message:"数据已成功录入！",type:"success"}),e.beforeCreateRecord=!1}})},routeToSuccess:function(){this.$router.push({name:"resultA3",query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType,spaid:JSON.stringify({czzy_spaid:JSON.parse(this.$route.query.spaid).czzy_spaid,czhd_spaid:JSON.parse(this.$route.query.spaid).czhd_spaid,czda_spaid:this.file_spaid,czjl_spaid:this.record_spaid,item:this.item,imgUrl:this.imgUrl})},params:{result:"success"}})},requestCJQU:function(){var e=this;this.breedForm.breedArea.firstArea=this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid,this.ZY_quyu=[{name:"A",spaid:this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid}],console.log(this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid);var t=Object(p["k"])(u["y"],this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid,"ZYQYROOT");Object(b["h"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var o,i=t.data.response.MP.objects[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.ZY_miaopu.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}}else e.ZY_miaopu=[]})},requestHBQY:function(){var e=this;this.sowForm.sowArea.firstArea=this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid,this.HB_quyu=[{name:"A",spaid:this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid}],console.log(this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid);var t=Object(p["k"])(u["y"],this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid,"HBQYROOT");Object(b["h"])(t,"/tree/select").then(function(t){if(console.log(t),200===t.data.status)if(t.data.response){var r=!0,a=!1,s=void 0;try{for(var o,i=t.data.response.YX.objects[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value,n={};n.name=l.principle.ExtendData.name,n.spaid=l.principle.SpaId,e.HB_yangxian.push(n)}}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}}else e.HB_yangxian=[]})}}),mounted:function(){this.requestCJQU(),this.requestHBQY()}},v=y,g=(r("599b"),r("1319"),r("2877")),_=Object(g["a"])(v,n,c,!1,null,"344daf4e",null),C=_.exports,F=r("91b0"),w=r("731e"),D=r("9dac"),A={components:{"file-list":l["a"],"activity-form":C,"picture-swiper":F["a"],"upload-border":w["a"],"up-load":D["a"]},data:function(){return{activityFiles:[],sowData:{signColor:"",signNumber:"",sowArea:{firstArea:"",line:"",segmentation:""}},breedData:{signColor:"",signNumber:"",breedArea:{firstArea:"",nursery:"",partition:""}},recordData:{state:"",penetrability:"",temperature:"",coralColor:{shallowColor:"",deepColor:""},remark:""},imgUrl:[],isCreated:!0,imgUrlFormSwiper:"",file_spaid:"",record_spaid:"",activityNumber:this.$route.query.activityType+"-"+this.$route.query.address+"-"+this.$route.query.time}},computed:Object(o["a"])({},Object(i["b"])({}),Object(i["d"])(["operateFile"]),{isSpaidChange:function(){var e=this.file_spaid,t=this.record_spaid;return{file_spaid:e,record_spaid:t}}}),watch:{isSpaidChange:{handler:function(){Boolean(this.file_spaid&&this.record_spaid)?this.requestCZJL():console.log("还没有拿到czda_spaid!")},deep:!0}},methods:{getSpaid:function(e,t){this.file_spaid=e,this.record_spaid=t,console.log("拿到的spaid",this.file_spaid,this.record_spaid)},chooseSwiperImg:function(e){this.imgUrlFormSwiper=e},requestCZJL:function(){var e=this,t=Object(p["i"])(u["o"],JSON.parse(this.$route.query.spaid).czhd_spaid);Object(b["h"])(t,"/tree/select").then(function(t){if(console.log("获取活动下所有残枝记录",t),200===t.data.status&&t.data.response){var r=t.data.response.CZJL.objects;e.activityFiles=r}})},setIsCreated:function(e){this.isCreated=e},setData:function(e){this.recordData=e},imgArrPush:function(e){var t=this,r=e[0];e[1];Object(b["h"])({file_id:r},"/file/get").then(function(e){console.log("img:",e),200===e.data.status&&e.data.response&&t.imgUrl.push({url:e.data.response.url})})}},mounted:function(){},beforeRouteEnter:function(e,t,r){console.log(e.params.recordData),"create"===e.params.build?r():"edit"===e.params.build?r(function(t){t.setData(e.params.recordData),t.setIsCreated(!1)}):r()}},Z=A,x=(r("3d02"),Object(g["a"])(Z,a,s,!1,null,"583477ea",null));t["default"]=x.exports},"18e6":function(e,t,r){"use strict";function a(e,t,r){var a;return function(){var s=this,o=arguments;if(a&&clearTimeout(a),r){var i=!a;a=setTimeout(function(){a=null},t),i&&e.apply(s,o)}else a=setTimeout(function(){e.apply(s,o)},t)}}r.d(t,"a",function(){return a})},"3d02":function(e,t,r){"use strict";var a=r("4e68"),s=r.n(a);s.a},"4c2f":function(e,t,r){},"4e68":function(e,t,r){},"599b":function(e,t,r){"use strict";var a=r("7b00"),s=r.n(a);s.a},"7b00":function(e,t,r){}}]);
//# sourceMappingURL=chunk-403b6fe2.c912fea5.js.map