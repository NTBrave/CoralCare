<template>
  <div :closable="false" class="uploadRoot">
    <el-upload
      :disabled="uploadable"
      class="avatar-upload"
      drag
      multiple
      action
      :http-request="uploadProcess"
      :show-file-list="false"
    >
      <div v-if="!uploadable">
        <i class="el-icon-plus"></i>
        <h3 class="em">批量上传图片，点击上传</h3>
      </div>
      <div v-else>
        <i class="el-icon-plus"></i>
        <p class="em" :style="{'color':'#fab6b6'}">先填写表单，再上传图片</p>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as Api from '../api/api'
import * as DEFAULT from '../json/default'
import { Message } from 'element-ui'
import * as ENTITY from '../json/entity'

export default {
  name: 'Upload',
  computed: {
    uploadable() {
      return !Boolean(this.masterid && this.czda_spaid)
    }
  },
  //父节点残肢记录id、残肢档案id
  props: ['masterid', 'czda_spaid'],
  // props: ["currentResourceId"],
  data() {
    return {
      // 上传
    }
  },
  methods: {
    uploadProcess(params) {
      // 通用变量 初始化
      let uploadData = {
        url: '',
        objectName: '',
        file_id: '',
        fileExtension: '',
        currentUserId: ''
      }

      this.beforeUpload(params, uploadData)
    },
    beforeUpload(params, uploadData) {
      let _this = this
      uploadData.fileExtension = params.file.name.split('.')[
        params.file.name.split('.').length - 1
      ]

      // 从服务器获取一个URL
      this.policy(params, uploadData)
    },
    // 从服务器获取一个URL
    policy(params, uploadData) {
      let _this = this
      var data = JSON.stringify({
        ext: uploadData.fileExtension
      })
      console.log(uploadData.objectName)

      $.ajax({
        type: 'post',
        url: Api.baseUrl + '/file/upload',
        data: data,
        async: false,
        contentType: 'application/json',
        xhrFields: {
          withCredentials: false //跨域记得该改这里
        },
        crossDomain: true,
        success: function(datas) {
          // console.log(datas.response);
          if (datas.response) {
            uploadData.url = datas.response.url
            console.log(uploadData.url)

            // uploadData.currentUserId = datas.data.creator;

            let strings = uploadData.url.split('/')
            uploadData.objectName = ''
            for (var i = 4; i < strings.length - 1; i++) {
              uploadData.objectName += strings[i] + '/'
            }

            uploadData.file_id = strings[strings.length - 1].split('?')[0]
            // 存储在oss里的key
            uploadData.objectName += uploadData.file_id
            console.log(uploadData.file_id, uploadData.objectName)

            // 上传文件
            _this.uploadFile(params, uploadData)
          }
        }
        // error: _this.handleError() 有点忘了是不是这个函数。。
      })
    },
    //覆盖默认的上传行为，可以自定义上传的实现
    uploadFile(params, uploadData) {
      // 临时变量
      let _this = this
      let file = params.file
      let xhr = new XMLHttpRequest()

      // 监听上传进度 中间函数计算已经上传的进度 大小/总量
      //
      xhr.upload.addEventListener(
        'progress',
        function(evt) {
          var percentComplete = Math.round((evt.loaded * 100) / evt.total)
          if (percentComplete > 50) {
            percentComplete -= 2
          }
          params.onProgress({
            //减少2 永不显示100% 避免后端响应太慢产生100%误会
            percent: percentComplete
          })
        },
        false
      )
      xhr.open('PUT', uploadData.url, true)
      xhr.send(file)
      xhr.onload = () => {
        if (xhr.status == 200) {
          // console.log("uploadFile ",xhr.status);
          // 调用afterUpload
          params.onSuccess('上传成功')

          // 上传成功
          _this.afterUpload(params, uploadData)
        } else {
          _this.handleError()
        }
      }
    },
    afterUpload(params, uploadData) {
      let _this = this
      let file = params.file
      //上传成功之后 新建照片节点
      console.log(uploadData.objectName)
      let imgNodeData = ENTITY.P01
      imgNodeData.Jobs[0].MasterSpaId = _this.masterid
      imgNodeData.Jobs[0].Object.ExtendData.czjl_spaid = _this.masterid
      imgNodeData.Jobs[0].Object.ExtendData.czda_spaid = _this.czda_spaid
      imgNodeData.Jobs[0].Object.ExtendFileData.file_id = uploadData.objectName
      imgNodeData.Jobs[0].Object.ExtendFileData.mine_type =
        uploadData.fileExtension
      Api.reqApi(imgNodeData, '/tree/create').then(res => {
        console.log(res)
        if (res.data.status === 200 && res.data.response) {
          this.$emit('createImg', uploadData.objectName)
        }
      })
    },
    close() {
      return
      // this.$store.commit({
      //   type: "uploadH"
      // });
    },
    handleError(err) {
      console.log(err)
      Message.warning(DEFAULT.defaultNetwordError)
    }
  }
}
</script>

<style lang="stylus" scoped>
.uploadRoot {
  .avatar-upload {
    text-align: center;
    margin-top: 1vw;

    .el-icon-plus {
      margin-top: 1vw;
      font-size: 1.8rem;
    }
  }
}
</style>
<style lang="stylus">
.em {
  color: #409eff;
  font-style: normal;
  margin: auto;
}

.el-upload-dragger {
  height: 6vw !important;
  // width: 250px !important ;
  text-align: center;
  // padding-top: 18vh;
  // border: none;
}
</style>


