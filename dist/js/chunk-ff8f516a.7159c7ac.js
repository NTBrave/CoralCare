(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff8f516a"],{"200c":function(e,l,t){},"52d1":function(e,l,t){},6408:function(e,l,t){"use strict";var r=t("200c"),a=t.n(r);a.a},bfde:function(e,l,t){},e346:function(e,l,t){"use strict";var r=t("52d1"),a=t.n(r);a.a},ee5c:function(e,l,t){"use strict";t.r(l);var r=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{key:e.isCreated,staticClass:"createBoard"},[t("div",{staticClass:"infoArea"},[t("div",{staticClass:"activityNum"},[e._v("活动编号："+e._s(e.activityNum))]),t("div",{staticClass:"info"},[e.activityFiles?t("file-list",{style:{marginTop:"4.5vh"},attrs:{fileNameList:e.activityFiles}}):e._e(),t("div",{staticClass:"form"},[t("p",[e._v(e._s(e.operateFile))]),t("activity-form",{attrs:{fileData:e.fileData,recordData:e.recordData,isCreated:e.isCreated}})],1)],1)]),t("div",{staticClass:"uploadArea"},[t("el-row",{style:{height:"9.5vh"}},[e.imgUrl.length?t("picture-swiper",{attrs:{imgHeight:9.5,imgWidth:10,imgUrl:e.imgUrl}}):e._e()],1),t("el-row",{style:{position:"",margin:"0 auto"}},[t("upload-border",[t("upload")],1)],1)],1)])},a=[],o=t("cebc"),s=t("2f62"),i=t("e1ba"),c=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"formRoot"},[t("el-form",{attrs:{disabled:e.isCreated&&!e.beforeCreateFile,size:"mini"}},[t("el-form-item",[t("el-col",{attrs:{span:4}},[t("span",{style:{marginLeft:"15px"}},[e._v("牌色")])]),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.fileForm.signColor,callback:function(l){e.$set(e.fileForm,"signColor",l)},expression:"fileForm.signColor"}},e._l(e.signColorList,function(l,r){return t("el-option",{key:r,attrs:{label:l.label,value:l.value}},[t("span",[e._v(e._s(l.label))]),t("span",{staticClass:"colorCircle",style:{backgroundColor:l.value}})])}),1)],1),t("el-col",{attrs:{span:12}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.fileForm.signNumber,callback:function(l){e.$set(e.fileForm,"signNumber",l)},expression:"fileForm.signNumber"}},[t("template",{slot:"prepend"},[e._v("号码")])],2)],1)],1),t("el-form-item",[t("el-col",{attrs:{span:4}},[t("span",{style:{marginLeft:"15px"}},[e._v("品种")])]),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{placeholder:"门纲"},model:{value:e.fileForm.species.first,callback:function(l){e.$set(e.fileForm.species,"first",l)},expression:"fileForm.species.first"}},[t("el-option",{attrs:{label:"**门",value:"a"}}),t("el-option",{attrs:{label:"**纲",value:"b"}})],1)],1),t("el-col",{attrs:{span:7}},[t("el-select",{attrs:{placeholder:"科目"},model:{value:e.fileForm.species.second,callback:function(l){e.$set(e.fileForm.species,"second",l)},expression:"fileForm.species.second"}})],1),t("el-col",{attrs:{span:7}},[t("el-select",{attrs:{placeholder:"属种"},model:{value:e.fileForm.species.third,callback:function(l){e.$set(e.fileForm.species,"third",l)},expression:"fileForm.species.third"}})],1)],1),t("el-form-item",[t("el-input",{attrs:{disabled:!0},model:{value:e.fileForm.collectSite,callback:function(l){e.$set(e.fileForm,"collectSite",l)},expression:"fileForm.collectSite"}},[t("template",{slot:"prepend"},[e._v("采集站点")])],2)],1),t("el-form-item",[t("el-col",{attrs:{span:6}},[t("span",{style:{marginLeft:"15px"}},[e._v("暂养区域")])]),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{disabled:""},model:{value:e.fileForm.breedArea.firstArea,callback:function(l){e.$set(e.fileForm.breedArea,"firstArea",l)},expression:"fileForm.breedArea.firstArea"}})],1),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{placeholder:"苗圃"},model:{value:e.fileForm.breedArea.nursery,callback:function(l){e.$set(e.fileForm.breedArea,"nursery",l)},expression:"fileForm.breedArea.nursery"}},[t("el-option",{attrs:{label:"宇宙号",value:"c"}}),t("el-option",{attrs:{label:"银河号",value:"d"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{placeholder:"分区"},model:{value:e.fileForm.breedArea.partition,callback:function(l){e.$set(e.fileForm.breedArea,"partition",l)},expression:"fileForm.breedArea.partition"}},[t("el-option",{attrs:{label:"1区",value:"e"}}),t("el-option",{attrs:{label:"2区",value:"f"}})],1)],1)],1)],1),t("el-form",{ref:"recorderForm",attrs:{disabled:e.isCreated&&e.beforeCreateFile,size:"mini"}},[t("el-form-item",[t("el-col",{attrs:{span:4}},[t("span",{style:{marginLeft:"15px"}},[e._v("状态")])]),t("el-col",{attrs:{span:20}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.recordForm.state,callback:function(l){e.$set(e.recordForm,"state",l)},expression:"recordForm.state"}},[t("el-option",{attrs:{label:"良好",value:"良好"}}),t("el-option",{attrs:{label:"部分白化",value:"部分白化"}}),t("el-option",{attrs:{label:"部分死亡",value:"部分死亡"}}),t("el-option",{attrs:{label:"死亡",value:"死亡"}}),t("el-option",{attrs:{label:"失踪",value:"失踪"}})],1)],1)],1),t("el-form-item",{style:{border:"none"}},[t("el-col",{style:{border:"1px solid #ACACAC",borderRadius:"6px"},attrs:{span:11}},[t("el-col",{attrs:{span:11}},[t("span",{style:{marginLeft:"10px"}},[e._v("透光度")])]),t("el-col",{attrs:{span:13}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.recordForm.penetrability,callback:function(l){e.$set(e.recordForm,"penetrability",l)},expression:"recordForm.penetrability"}})],1)],1),t("el-col",{attrs:{span:2}},[e._v(" ")]),t("el-col",{style:{border:"1px solid #ACACAC",borderRadius:"6px"},attrs:{span:11}},[t("el-col",{attrs:{span:8}},[t("span",{style:{marginLeft:"15px"}},[e._v("温度")])]),t("el-col",{attrs:{span:16}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.recordForm.temperature,callback:function(l){e.$set(e.recordForm,"temperature",l)},expression:"recordForm.temperature"}})],1)],1)],1),t("el-form-item",[t("el-col",{attrs:{span:5}},[t("span",{style:{marginLeft:"5px"}},[e._v("暂养区域")])]),t("el-col",{attrs:{span:9}},[t("el-select",{attrs:{placeholder:"选择最浅颜色"},model:{value:e.recordForm.coralColor.shallowColor,callback:function(l){e.$set(e.recordForm.coralColor,"shallowColor",l)},expression:"recordForm.coralColor.shallowColor"}},e._l(e.colorList,function(l,r){return t("el-option",{key:r,attrs:{label:l.label,value:l.value}},[t("span",[e._v(e._s(l.label))]),t("span",{staticClass:"colorCircle",style:{backgroundColor:l.color}})])}),1)],1),t("el-col",{attrs:{span:1}},[e._v("  -")]),t("el-col",{attrs:{span:9}},[t("el-select",{attrs:{placeholder:"选择最深颜色"},model:{value:e.recordForm.coralColor.deepColor,callback:function(l){e.$set(e.recordForm.coralColor,"deepColor",l)},expression:"recordForm.coralColor.deepColor"}},e._l(e.colorList,function(l,r){return t("el-option",{key:r,attrs:{label:l.label,value:l.value}},[t("span",[e._v(e._s(l.label))]),t("span",{staticClass:"colorCircle",style:{backgroundColor:l.color}})])}),1)],1)],1),t("el-form-item",[t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"备注"},model:{value:e.recordForm.remark,callback:function(l){e.$set(e.recordForm,"remark",l)},expression:"recordForm.remark"}})],1)],1),t("div",{staticClass:"buttonArea"},[e.isCreated&&e.beforeCreateFile?t("el-button",{staticClass:"beforeCreate",attrs:{type:"danger",round:""},on:{click:e.createFile}},[e._v("创建珊瑚档案")]):e._e(),e.isCreated&&!e.beforeCreateFile?t("el-button",{staticClass:"afterCreate",attrs:{type:"danger",round:""},on:{click:e.submitRecorder}},[e._v("录入首次暂养数据")]):e._e(),e.isCreated?e._e():t("el-button",{staticClass:"afterCreate",attrs:{type:"danger",round:""},on:{click:e.submitEdit}},[e._v("修改首次暂养数据")])],1)],1)},n=[],u=[{label:"红",value:"red"},{label:"黄",value:"yellow"},{label:"蓝",value:"blue"},{label:"绿",value:"green"}],p=[{label:"B2",value:"B2",color:"#E1EAAE"},{label:"B3",value:"B3",color:"#C1DA83"},{label:"B4",value:"B4",color:"#899D52"},{label:"B5",value:"B5",color:"#586832"},{label:"B6",value:"B6",color:"#223017"},{label:"C2",value:"C2",color:"#F9D2BC"},{label:"C3",value:"C3",color:"#F1915E"},{label:"C4",value:"C4",color:"#D86430"},{label:"C5",value:"C5",color:"#8A3820"},{label:"C6",value:"C6",color:"#510D0C"},{label:"D2",value:"D2",color:"#F7DA9F"},{label:"D3",value:"D3",color:"#F2A04C"},{label:"D4",value:"D4",color:"#CC7D3F"},{label:"D5",value:"D5",color:"#8F4124"},{label:"D6",value:"D6",color:"#73381C"},{label:"E2",value:"E2",color:"#EEEDA4"},{label:"E3",value:"E3",color:"#E2C96F"},{label:"E4",value:"E4",color:"#AC913D"},{label:"E5",value:"E5",color:"#764922"},{label:"E6",value:"E6",color:"#4C200E"}],d={props:{fileData:Object,recordData:Object,isCreated:Boolean},watch:{},data:function(){return{signColorList:u,colorList:p,fileForm:this.fileData,recordForm:this.recordData,beforeCreateFile:!0}},methods:Object(o["a"])({},Object(s["c"])(["setOperateFile","setActivityFiles"]),{createFile:function(){this.setOperateFile("A-宇宙号-1区-蓝-10"),this.beforeCreateFile=!1},submitRecorder:function(){this.$message({showClose:!0,message:"数据已成功录入！",type:"success"}),this.$router.push({path:"/manage/coralBreed/".concat(this.$route.query.activityType,"/success"),query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})},submitEdit:function(){this.$message({showClose:!0,message:"数据修改成功！",type:"success"}),this.$router.push({path:"/manage/coralBreed/".concat(this.$route.query.activityType,"/detail"),query:{time:this.$route.query.time,address:this.$route.query.address,activityType:this.$route.query.activityType}})}}),mounted:function(){}},m=d,f=(t("ff15"),t("6408"),t("2877")),b=Object(f["a"])(m,c,n,!1,null,"11e3f856",null),v=b.exports,C=t("91b0"),y=t("731e"),F=t("9dac"),h={components:{"file-list":i["a"],"activity-form":v,"picture-swiper":C["a"],"upload-border":y["a"],upload:F["a"]},data:function(){return{fileData:{signColor:"",signNumber:"",species:{first:"",second:"",third:""},collectSite:"A大鹏大澳湾",breedArea:{firstArea:"A",nursery:"",partition:""}},recordData:{state:"",penetrability:"",temperature:"",coralColor:{shallowColor:"",deepColor:""},remark:""},imgUrl:[{url:"http://dayy.xyz/resource/example/1.png",size:"223.4",time:"2018.4.10",name:"A1-大鹏大澳湾-2018090410-01"},{url:"http://dayy.xyz/resource/example/2.jpg",size:"235.6",time:"2018.5.09",name:"A2-大鹏大澳湾-2018050909-01"},{url:"http://dayy.xyz/resource/example/3.jpg",size:"240.2",time:"2018.6.09",name:"A2-大鹏大澳湾-2018060910-01"}],isCreated:!0}},computed:Object(o["a"])({},Object(s["b"])({activityNum:"getNowDivingActivity",activityFiles:"getActivityFiles"}),Object(s["d"])(["operateFile"])),methods:{setIsCreated:function(e){this.isCreated=e},setData:function(e){this.recordData=e}},mounted:function(){},beforeRouteEnter:function(e,l,t){console.log(e.params.recordData),"create"===e.params.build?t():"edit"===e.params.build?t(function(l){l.setData(e.params.recordData),l.setIsCreated(!1)}):t()}},g=h,A=(t("e346"),Object(f["a"])(g,r,a,!1,null,"6f3948b2",null));l["default"]=A.exports},ff15:function(e,l,t){"use strict";var r=t("bfde"),a=t.n(r);a.a}}]);
//# sourceMappingURL=chunk-ff8f516a.7159c7ac.js.map