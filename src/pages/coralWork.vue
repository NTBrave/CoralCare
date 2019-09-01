<template>
  <div class="workPage" :style="bodySize">
    <div class="workTree">
      <div class="work-title">
        <h2>浅爱护礁</h2>
      </div>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="活动名称">
          <el-input></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div v-for="(work,index) in firstWork" :key="index">
        <div class="first-work" @click="chooseFirst(index)">
          <el-button @click="VTree(1)" type="primary" round>{{work}}</el-button>
        </div>
      </div>
    </div>
    <div class="workTree" v-show="tree1">
      <div class="work-title">
        <h2>
          {{secondTitle}}
          <span
            @click="HTree(1)"
            class="el-icon-circle-close"
            style="float:right;margin: 5px;"
          ></span>
        </h2>
      </div>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="活动名称">
          <el-input></el-input>
        </el-form-item>
     
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div v-for="(Option,index) in secondWork" :key="index">
        <div class="second-work" @click="chooseSecond(index)">
          <el-button @click="VTree(2)" type="primary" round>
            {{Option}}
            <span class="el-icon-circle-plus-outline"></span>
          </el-button>
        </div>
      </div>
    </div>
    <div class="workTree" v-show="tree2">
      <div class="work-title">
        <h2>
          {{thirdTitle}}
          <span
            @click="HTree(2)"
            class="el-icon-circle-close"
            style="float:right;margin: 5px;"
          ></span>
        </h2>
      </div>
      <div v-show="thirdTitle=='首次暂养'">
        <el-button @click="VTree(3)" icon="el-icon-plus" type="primary" round>珊瑚档案</el-button>
      </div>
      <div v-show="thirdTitle!='首次暂养'">
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
          <el-radio-group v-model="radio" size="small">
            <el-radio-button
              v-for="(miaoPu, index) in showMiaoPu"
              :key="index"
              :label="miaoPu.id"
            >{{miaoPu.title}}</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 选择分区 -->
        <div style="margin-top: 10px">
          <el-radio-group v-model="radio2" size="small">
            <el-radio-button
              v-for="(fenQu, index) in showFenQu"
              :key="index"
              :label="fenQu.id"
            >{{fenQu.title}}</el-radio-button>
          </el-radio-group>
        </div>
        <div class="MyDivider" style="margin-top:30px"></div>
        <div class="resoult" :style="resoultSize">
          <div v-show="resultItems.length!=0">找到的档案：</div>
          <el-row v-for="(item, index) in resultItems" :key="index" class="one-resoult">
            <el-col :offset="0" :span="24">
              <h3 @click="VTree(3)"
                v-html="item.title_highlight"
                style="color: #08c;"
              >{{item.title_highlight + '.' + item.ext}}</h3>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="workTree" v-show="tree3">
      <div class="work-title">
        <h2>
          珊瑚档案
          <span @click="HTree(3)" class="el-icon-circle-close" style="float:right;margin: 5px;"></span>
        </h2>
      </div>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="活动名称">
          <el-input></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-col>

          <el-col :span="11">
            <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch></el-switch>
        </el-form-item>

        <el-form-item label="特殊资源">
          <el-radio-group>
            <el-radio label="赞助"></el-radio>
            <el-radio label="免费"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <div class="MyDivider" style="margin-top:30px"></div>

      <el-button
        icon="el-icon-plus"
        type="primary"
        style="margin-top:30px"
        @click.stop="VTree(4);callUpload"
        round
      >珊瑚图片</el-button>
      <div class="MyDivider" style="margin-top:30px"></div>

      <div>该档案的图片：</div>
      <el-row v-for="(image, index) in imageList" :key="index" class="one-resoult">
        <el-col :offset="0" :span="24">
          <h3>{{image.title}}</h3>
        </el-col>
      </el-row>
    </div>
    <div class="workTree" v-show="tree4">
      <div class="work-title">
        <h2>
          上传图片
          <span @click="HTree(4)" class="el-icon-circle-close" style="float:right;margin: 5px;"></span>
        </h2>
      </div>
      <upload></upload>
    </div>
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message, Loading } from "element-ui";
import Upload from "../components/upload.vue";

export default {
  name: "coralWork",
  data() {
    return {
      bodySize: {
        height: " ",
        width: " "
      },
      resoultSize: {
        height: " "
      },
      firstWork: ["残肢培育", "环境维护", "珊瑚普查"],
      secondTitle: "残肢培育",
      secondWork: ["首次暂养", "暂养巡检", "首次回播", "回播巡检"],
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
      tree4: false
    };
  },
  //用的自定义组件
  components: {
    upload: Upload
  },
  mounted: function() {
    let _this = this;
    _this.bodySize.height = document.body.clientHeight - 90 + "px";
    _this.bodySize.width = document.body.clientWidth - 200 + "px";
    _this.resoultSize.height =
      (document.body.clientHeight - 90) * 0.96 * 0.8 + "px";
  },
  methods: {
    chooseFirst(index) {
      this.secondTitle = this.firstWork[index];
    },
    chooseSecond(index) {
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
            console.log(res.data.data);
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
      console.log(index);
      if (index == 1) {
        this.tree1 = true;
      } else if (index == 2) {
        this.tree2 = true;
      } else if (index == 3) {
        this.tree3 = true;
      } else if (index == 4) {
        this.tree4 = true;
        this.$store.commit("uploadV");
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
</style>