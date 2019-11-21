<template>
  <div class="createBoard" :key="isCreated">
    <div class="infoArea">
      <div class="activityNum">活动编号：{{activityNumber}}</div>

      <div class="info">
        <file-list
          :style="{'marginTop': '4.5vh'}"
          v-if="activityFiles"
          :fileNameList.sync="activityFiles"
        ></file-list>
        <div class="form">
          <p>{{operateFile}}</p>
          <activity-form
            :sowData="sowData"
            :recordData="recordData"
            :isCreated="isCreated"
            :imgUrl.sync="imgUrl"
            @func="getSpaid"
          ></activity-form>
        </div>
      </div>
    </div>

    <div class="uploadArea">
      <el-row :style="{'height': '9.5vh'}">
        <picture-swiper
          v-if="imgUrl.length"
          :imgHeight="9.5"
          :imgWidth="10"
          :imgUrl.sync="imgUrl"
          @selectOneImg="chooseSwiperImg"
        ></picture-swiper>
      </el-row>
      <el-row :style="{'position':'','margin':'0 auto'}">
        <upload-border>
          <div class="imgUpload">
            <img class="showOneImg" width="80%" height="70%" :src.sync="imgUrlFormSwiper" alt />
            <up-load
              @createImg="imgArrPush(arguments)"
              :masterid.sync="record_spaid"
              :czda_spaid.sync="file_spaid"
            ></up-load>
          </div>
        </upload-border>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import ActivityFormVue from '../../components/dayActivity/ActivityForm/FormA4.vue'
import swiperVue from '../../components/swiper.vue'
import UploadBorderVue from '../../components/dayActivity/UploadBorder.vue'
import uploadVue from '../../components/upload.vue'

import { getCZJL } from '../../util/apiCreator'
import { reqApi } from '../../api/api'
import { R01 } from '../../json/entity'
export default {
  components: {
    'file-list': FileListVue,
    'activity-form': ActivityFormVue,
    'picture-swiper': swiperVue,
    'upload-border': UploadBorderVue,
    'up-load': uploadVue
  },
  data() {
    return {
      activityFiles: [], // 左侧边栏渲染记录所属档案（本质还是记录）

      sowData: {
        signColor: '',
        signNumber: '',
        sowArea: {
          firstArea: 'A',
          line: '', // 样线
          segmentation: '' // 分段
        }
      },

      recordData: {
        // 更新记录表单
        state: '', // 状态
        penetrability: '', // 透光度
        temperature: '', // 温度
        coralColor: {
          shallowColor: '', // 最浅颜色
          deepColor: '' // 最深颜色
        },
        remark: '' // 备注
      },
      imgUrl: [
        // {
        //   url: 'http://dayy.xyz/resource/example/1.png',
        //   size: '223.4',
        //   time: '2018.4.10',
        //   name: 'A1-大鹏大澳湾-2018090410-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/2.jpg',
        //   size: '235.6',
        //   time: '2018.5.09',
        //   name: 'A2-大鹏大澳湾-2018050909-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/3.jpg',
        //   size: '240.2',
        //   time: '2018.6.09',
        //   name: 'A2-大鹏大澳湾-2018060910-01'
        // }
        // {
        //   url: 'http://dayy.xyz/resource/example/4.jpg',
        //   size: '242.5',
        //   time: '2018.6.17',
        //   name: 'A2-大鹏大澳湾-2018061710-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/5.jpg',
        //   size: '243.2',
        //   time: '2018.7.01',
        //   name: 'A2-大鹏大澳湾-2018070110-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/6.jpg',
        //   size: '250.4',
        //   time: '2018.7.28',
        //   name: 'A2-大鹏大澳湾-2018072810-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/7.jpg',
        //   size: '254.6',
        //   time: '2018.11.17',
        //   name: 'A2-大鹏大澳湾-2018111710-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/8.jpg',
        //   size: '260.3',
        //   time: '2018.12.29',
        //   name: 'A2-大鹏大澳湾-2018122910-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/9.jpg',
        //   size: '268.4',
        //   time: '2019.3.02',
        //   name: 'A2-大鹏大澳湾-2019030210-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/10.jpg',
        //   size: '278.5',
        //   time: '2019.3.17',
        //   name: 'A3-大鹏大澳湾-2019031710-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/11.jpg',
        //   size: '279.1',
        //   time: '2019.4.06',
        //   name: 'A4-大鹏大澳湾-2019040610-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/12.jpg',
        //   size: '280.5',
        //   time: '2019.6.02',
        //   name: 'A4-大鹏大澳湾-2019060210-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/13.jpg',
        //   size: '284.6',
        //   time: '2019.6.22',
        //   name: 'A4-大鹏大澳湾-2019062210-01'
        // },
        // {
        //   url: 'http://dayy.xyz/resource/example/14.jpg',
        //   size: '288.1',
        //   time: '2019.8.24',
        //   name: 'A4-大鹏大澳湾-2019082410-01'
        // }
      ],

      isCreated: true,
      imgUrlFormSwiper: '',

      file_spaid: '',
      record_spaid: '',

      activityNumber:
        this.$route.query.activityType +
        '-' +
        this.$route.query.address +
        '-' +
        this.$route.query.time
    }
  },
  computed: {
    ...mapGetters({
      // activityNum: 'getNowDivingActivity',
      // activityFiles: 'getActivityFiles'
    }),

    ...mapState(['operateFile']),

    isSpaidChange() {
      const { file_spaid, record_spaid } = this
      return {
        file_spaid,
        record_spaid
      }
    }
  },
  watch: {
    isSpaidChange: {
      handler: function() {
        if (Boolean(this.file_spaid && this.record_spaid)) {
          this.requestCZJL()
        } else {
          console.log('还没有拿到czda_spaid!')
        }
      },
      deep: true
    }
  },
  methods: {
    // 接收表单组件回传的 档案spaid 和 记录spaid
    getSpaid(fileSpaid, recordSpaid) {
      this.file_spaid = fileSpaid
      this.record_spaid = recordSpaid
      console.log('拿到的spaid', this.file_spaid, this.record_spaid)
    },

    chooseSwiperImg(url) {
      this.imgUrlFormSwiper = url
      // console.log(this.imgUrlFormSwiper)
    },

    // 请求该活动下的所有记录
    requestCZJL() {
      let obj = getCZJL(R01, JSON.parse(this.$route.query.spaid).czhd_spaid)
      reqApi(obj, '/tree/select').then(res => {
        console.log('获取活动下所有残枝记录', res)
        if (res.data.status === 200) {
          if (res.data.response) {
            let czdaList = res.data.response.CZJL.objects
            this.activityFiles = czdaList
          }
        }
      })
    },

    setIsCreated(res) {
      this.isCreated = res
    },
    setData(res) {
      this.recordData = res
    },

    // 生成传给轮播组件的url对象数组
    imgArrPush(arg) {
      let fileId = arg[0]
      let imgSpaId = arg[1]
      reqApi({ file_id: fileId }, '/file/get').then(res => {
        console.log('img:', res)
        if (res.data.status === 200 && res.data.response) {
          this.imgUrl.push({ url: res.data.response.url })
        }
      })
    }
  },
  mounted() {
    this.requestCZJL()
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params.recordData)
    if (to.params.build === 'create') {
      next()
    } else if (to.params.build === 'edit') {
      next(vm => {
        // vm.recordData = to.params.recordData
        vm.setData(to.params.recordData)
        vm.setIsCreated(false)
      })
    } else next()
  }
}
</script>

<style lang="stylus" scoped>
.createBoard {
  display: flex;
  width: 100%;
  justify-content: space-around;

  .infoArea {
    display: flex;
    flex-direction: column;
    width: 50%;

    .activityNum {
      width: 40%;
      height: 1.6rem;
      min-width: 320px;
      margin: 1.5rem 0;
      background: rgba(0, 173, 186, 0.8);
      color: #ffffff;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.6rem;
      border-radius: 3px;
    }

    .info {
      display: flex;
      justify-content: space-between;

      // width: 80%;
      .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        min-width: 350px;
        max-width: 500px;

        p {
          height: 1.8rem;
          font-size: 1.2rem;
          color: #3FC1CB;
          margin-bottom: 1vh;
        }
      }
    }
  }

  .uploadArea {
    width: 40vw;
    margin-right: 5vw;
    margin-top: 2.3rem;

    .imgUpload {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;
    }
  }
}

@media screen and (min-width: 1680px) {
  .createBoard {
    .infoArea {
      .info {
        // width: 80%;
        .form {
          margin-right: 5vw;
        }
      }
    }
  }
}
</style>