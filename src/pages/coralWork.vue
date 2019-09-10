<template>
  <div class="workPage" :style="bodySize">
    <div class="workTree">
      <div class="work-title">
        <h2>活动</h2>
      </div>

      <div v-for="(work,index) in firstWork" :key="index">
        <div class="first-work" @click="chooseFirst(index)">
          <el-button type="primary" round>{{work}}</el-button>
        </div>
      </div>
      <div>
        <div class="work-title">
          <!-- <h2>
          {{secondTitle}}
          <span
            @click="HTree(1)"
            class="el-icon-circle-close"
            style="float:right;margin: 5px;"
          ></span>
          </h2>-->
        </div>
        <el-form
          v-show="isHuJiao==true"
          ref="form"
          :model="sizeForm"
          label-width="80px"
          size="mini"
        >
          <el-form-item label="名称:">B-3-20191010</el-form-item>
          <el-form-item label="类型:">潜爱护礁</el-form-item>
          <el-form-item label="区域:">深圳大鹏</el-form-item>
          <el-form-item label="时间:">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="人员:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <div>
            <el-button size="small" type="primary" style="margin-top:20px">确认</el-button>
          </div>
        </el-form>
        <div v-show="isHuJiao==false">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="名称:">B-3-20191010</el-form-item>
            <el-form-item label="类型:">残肢培育</el-form-item>
            <el-form-item label="区域:">深圳大鹏</el-form-item>
            <el-form-item label="时间:">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="人员:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="采集区域:"></el-form-item>
            <el-form-item label="暂养区域:"></el-form-item>
            <el-form-item label="回播区域:"></el-form-item>
            <el-form-item label="个体数量:"></el-form-item>
            <el-form-item label="品种数量:"></el-form-item>

            <el-form-item label="备注:">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item label="阶段:">
              <el-select @change="changeStage" v-model="thirdTitle" placeholder="请选择阶段">
                <el-option
                  v-for="(Option,index) in secondWork"
                  :key="index"
                  :label="Option"
                  :value="Option"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div>
            <el-button size="small" type="primary" style="margin-top:20px" @click="VTree(1)">确认</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="workTree" v-show="tree1">
      <div class="work-title">
        <h2>
          {{thirdTitle}}
          <span
            @click="HTree(1)"
            class="el-icon-circle-close"
            style="float:right;margin: 5px;"
          ></span>
        </h2>
      </div>
      <div v-show="isNew">
        <el-button @click="VTree(2)" icon="el-icon-plus" type="primary" round>珊瑚档案</el-button>
      </div>
      <div style="height: 60%; " v-show="!isNew">
        <div>
          <el-autocomplete
            style="width: 100%;"
            :fetch-suggestions="getKeyword"
            @select="handleSelect"
            v-model="keyword"
            placeholder="输入关键字 搜索珊瑚档案"
          >
            <el-button icon="el-icon-search" type="primary" @click="search" slot="append"></el-button>
          </el-autocomplete>
        </div>
        <!-- 选择苗圃 -->
        <div style="margin-top: 10px">
          <el-radio-group v-model="radio" size="mini">
            <el-radio-button
              v-for="(miaoPu, index) in showMiaoPu"
              :key="index"
              :label="miaoPu.id"
            >{{miaoPu.title}}</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 选择分区 -->
        <div style="margin-top: 10px">
          <el-radio-group v-model="radio2" size="mini">
            <el-radio-button
              v-for="(fenQu, index) in showFenQu"
              :key="index"
              :label="fenQu.id"
            >{{fenQu.title}}</el-radio-button>
          </el-radio-group>
        </div>

        <div class="MyDivider" style="margin-top:10px"></div>
        <!-- <div class="resoult" :style="resoultSize"> -->
        <div style="height: 100%; overflow-y: scroll;">
          <div v-show="resultItems.length!=0">找到的档案：</div>
          <el-row v-for="(item, index) in resultItems" :key="index" class="one-resoult">
            <el-col :offset="0" :span="24">
              <h3
                @click="VTree(2)"
                v-html="item.title_highlight"
                style="color: #08c;"
              >{{item.title_highlight + '.' + item.ext}}</h3>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="workTree" v-show="tree2">
      <div class="work-title">
        <h2>
          珊瑚档案
          <span @click="HTree(3)" class="el-icon-circle-close" style="float:right;margin: 5px;"></span>
        </h2>
      </div>
      <div v-show="isNew">
        <el-form ref="form" label-width="80px" size="mini">
          <el-form-item label="名称:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="牌色:">
            <el-select v-model="form.region" placeholder="请选择活动牌色">
              <el-option label="蓝" value="B"></el-option>
              <el-option label="白" value="W"></el-option>
              <el-option label="红" value="R"></el-option>
              <el-option label="绿" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="号码:">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item label="品种:">
            <el-input v-model="form.type"></el-input>
          </el-form-item>

          <el-form-item label="采集区域:">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="蓝" value="B"></el-option>
              <el-option label="白" value="W"></el-option>
              <el-option label="红" value="R"></el-option>
              <el-option label="绿" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="暂养区域:">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="蓝" value="B"></el-option>
              <el-option label="白" value="W"></el-option>
              <el-option label="红" value="R"></el-option>
              <el-option label="绿" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="回播区域:">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="蓝" value="B"></el-option>
              <el-option label="白" value="W"></el-option>
              <el-option label="红" value="R"></el-option>
              <el-option label="绿" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否完结:">
            <el-radio-group v-model="form.resource">
              <el-radio label="是" value="B"></el-radio>
              <el-radio label="否" value="B"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="重点:">
            <el-radio-group v-model="form.resource">
              <el-radio label="是" value="B"></el-radio>
              <el-radio label="否" value="B"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button size="small" type="primary" style="margin-top:20px">确认</el-button>
        </div>
      </div>
      <div v-show="!isNew" style="height: 40%;overflow-y: scroll;">
        <el-form ref="form" label-width="80px" size="mini">
          <el-form-item label="名称:"></el-form-item>
          <el-form-item label="牌色:"></el-form-item>
          <el-form-item label="号码:"></el-form-item>
          <el-form-item label="品种:"></el-form-item>
          <el-form-item label="采集区域:"></el-form-item>
          <el-form-item label="暂养区域:"></el-form-item>
          <el-form-item label="回播区域:"></el-form-item>
          <el-form-item label="是否完结:"></el-form-item>
          <el-form-item label="暂养编码:"></el-form-item>
          <el-form-item label="初始暂养（名称）:"></el-form-item>
          <el-form-item label="初始回播（时间）:"></el-form-item>
          <el-form-item label="回播编码:"></el-form-item>
          <el-form-item label="初始暂养（时间）:"></el-form-item>
          <el-form-item label="回播编码:"></el-form-item>
          <el-form-item label="当前阶段:"></el-form-item>
          <el-form-item label="当前颜色:"></el-form-item>
          <el-form-item label="当前尺寸:"></el-form-item>
          <el-form-item label="污损生物:"></el-form-item>
          <el-form-item label="当前状态:"></el-form-item>
          <el-form-item label="重点:"></el-form-item>
          <el-form-item label="备注:"></el-form-item>
        </el-form>
      </div>
      <div class="MyDivider" style="margin-top:10px"></div>

      <el-button
        icon="el-icon-plus"
        type="primary"
        size="mini"
        style="margin-top:10px"
        @click.stop="VTree(3);callUpload"
        round
      >图片</el-button>
      <div class="MyDivider" style="margin-top:10px"></div>

      <div>该档案的图片：</div>
      <div v-show="isNew">肚子空空 赶紧添加图片哟~~~</div>
      <div v-show="!isNew" style="height: 40%;overflow-y: scroll;">
        <el-row v-for="(image, index) in imageList" :key="index" class="one-resoult">
          <el-col :offset="0" :span="24">
            <h3>{{image.title}}</h3>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="workTree" v-show="tree3">
      <div class="work-title">
        <h2>
          上传图片
          <span @click="HTree(3)" class="el-icon-circle-close" style="float:right;margin: 5px;"></span>
        </h2>
      </div>
      <Upload></Upload>
      <div>
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <el-form-item label="名称:">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="珊瑚编码:"></el-form-item>
          <el-form-item label="活动编码:"></el-form-item>
          <el-form-item label="号牌:"></el-form-item>
          <el-form-item label="号码:"></el-form-item>
          <el-form-item label="时间:">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="颜色:">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="rgb" value="B"></el-option>
              <el-option label="rgb" value="W"></el-option>
              <el-option label="rgb" value="R"></el-option>
              <el-option label="rgb" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="尺寸:"></el-form-item>
          <el-form-item label="污损生物">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="状态:">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option label="良好" value="B"></el-option>
              <el-option label="部分死亡" value="W"></el-option>
              <el-option label="死亡" value="R"></el-option>
              <el-option label="失踪" value="G"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="环节:">{{thirdTitle}}</el-form-item>
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="workTree" v-show="tree3">
      <div class="work-title">
        <h2>
          上传成功：
          <span
            @click="HTree(3)"
            class="el-icon-circle-close"
            style="float:right;margin: 5px;"
          ></span>
        </h2>
      </div>
      <div style="height:200px;">
        <img src="http://dayy.xyz/resource/1.jpg" height="130px" alt />
      </div>
      <el-button @click="makeAreaVisible = true">测量尺寸</el-button>
      <el-dialog title="提示" :visible.sync="makeAreaVisible" width="80%">
        <MakeArea></MakeArea>
      </el-dialog>
    </div>
    <!-- </div> -->
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message, Loading } from "element-ui";
import Upload from "../components/upload.vue";
import MakeArea from "../components/makeArea.vue";

export default {
  name: "coralWork",
   components: {
    Upload,
    MakeArea,
  },
  data() {
    return {
      bodySize: {
        height: " ",
        width: " "
      },
      resoultSize: {
        height: " "
      },
      firstWork: ["残肢培育", "潜爱护礁"],
      secondTitle: "残肢培育",
      secondWork: ["首次暂养", "暂养巡检", "回播", "回播巡检"],
      thirdTitle: "首次暂养",
      keyword: "",
      showMiaoPu: DEFAULT.miaoPu,
      showFenQu: DEFAULT.fenQu,
      radio: 1,
      radio2: 1,
      // 结果展示
      resultItems: [],
      imageList: DEFAULT.imageList,
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // tree1: [true, true, true, true, true]，
      tree1: false,
      tree2: false,
      tree3: false,
      tree4: false,
      form: {
        name: "",
        date1: "",
        desc: "",
        region: "",
        num: "",
        type: "",
        resource: ""
      },
      //判断 是否护礁
      isHuJiao: null,
      //判断 是否首次暂养
      isNew: true,
      makeAreaVisible:false,
    };
  },
  //用的自定义组件
 
  mounted: function() {
    let _this = this;
    var myDate = new Date();
    _this.bodySize.height = document.body.clientHeight - 90 + "px";
    _this.bodySize.width = document.body.clientWidth - 200 + "px";
    // _this.resoultSize.height =
    //   (document.body.clientHeight - 90) * 0.96 * 0.8 + "px";
    // _this.form.date1 = myDate.toLocaleDateString();
  },
  methods: {
    chooseFirst(index) {
      this.HTree(2);
      if (index == 1) {
        this.isHuJiao = true;
      } else {
        this.isHuJiao = false;
      }
      this.secondTitle = this.firstWork[index];
    },
    chooseSecond(index) {
      // this.HTree(4);
      this.thirdTitle = this.secondWork[index];
    },
    getKeyword(keyword, cb) {
      let _this = this;
      _this.cardLoading = true;
      Api.Suggestions("all", this.keyword, 10)
        .then(res => {
          if (res.data.status === 200) {
            // 数组清空
            let searchSuggestions = [];
            for (let i = 0; i < res.data.data.length; ++i) {
              let temp = {
                value: res.data.data[i]
              };
              searchSuggestions.push(temp);
            }
            cb(searchSuggestions);
            _this.cardLoading = false;
          } else {
            Message.error(res.data.msg);
          }
        })
        .catch(err => {
          console.log("getKeyword");

          _this.handleError(err);
          _this.cardLoading = false;
        });
    },
    handleSelect(item) {
      // 点击后处理
      this.keyword = item.value;
      this.search();
    },
    search() {
      Api.Results(
        "all",
        this.keyword,
        [],
        [],
        ["all"],
        { from: null, to: null },
        { from: null, to: null },
        "+8",
        1,
        10
      )
        .then(res => {
          if (res.data.status === 200) {
            // 结果数组
            // console.log(res.data.data);
            this.resultItems.splice(0, this.resultItems.length);
            this.resultItems = res.data.data.results;
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    callUpload() {
      this.$store.commit("uploadV");
    },
    HTree(index) {
      console.log(index);
      if (index == 1) {
        this.tree1 = false;
        this.tree2 = false;
        this.tree3 = false;
        this.tree4 = false;
      } else if (index == 2) {
        this.tree2 = false;
        this.tree3 = false;
        this.tree4 = false;
      }
      if (index == 3) {
        this.tree3 = false;
        this.tree4 = false;
      }
      if (index == 4) {
        this.tree4 = false;
      }
    },
    VTree(index) {
      // console.log(index);
      if (index == 1) {
        this.tree1 = true;
      } else if (index == 2) {
        this.tree2 = true;
      } else if (index == 3) {
        this.tree3 = true; this.$store.commit("uploadV");
      } else if (index == 4) {
        this.tree4 = true;
      }
    },

    changeStage() {
      if (this.thirdTitle == "首次暂养") {
        this.isNew = true;
      } else {
        this.isNew = false;
      }
    }
  }
};
</script>

<style scoped>
.workPage {
  width: 100%;
  height: 100%;
  margin: 60px 0 0 0;
  background-color: rgba(0, 0, 0, 0.08);
  /* border: 1px solid seagreen;
   */
  display: flex;
}
.workTree {
  width: 19%;
  height: 96%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  background-color: white;
  margin: 1% 0 0 1%;
}

.second-work {
  margin-top: 5px;
}
.first-work {
  margin-top: 5px;
}
.work-title {
  /* font-weight: 800; */
}
.resoult {
  overflow: scroll;
  width: 100%;
  height: 600px;
}
.one-resoult {
  height: 40px;
  width: 96%;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  margin: 2%;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 5px;
}
.el-form-item {
  margin-bottom: 5px;
}
.el-form-item__label {
  font-size: 12px !important;
}
.one-resoult:hover {
  background-color: #99a9bf;
}
.el-radio-button__inner {
  padding: 5px 5px !important;
}
</style>