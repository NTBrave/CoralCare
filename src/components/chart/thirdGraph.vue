<template>
<div style="margin-top:30px;">
    <div style="height:400px;width:400px;display:inline-block;float:left;">
        <div style="text-align:center;color:#00c8c8;font-size:30px;" v-if="$store.state.dropdownKey2.spa_id!=''">
            {{this.$store.state.dropdownKey2.name+'-'+this.$store.state.dropdownKey3.name}}
        </div>
        <div style="text-align:center;color:#C0C4CC;font-size:30px;" v-if="$store.state.dropdownKey2.spa_id==''">苗圃未选定</div>
        <div style="height:300px;width:300px;margin:auto;">         
            <div v-for="count in groupNumber" :key="count" @click="chooseBlock(count)" class="blocks"
            :style="blockStyle">
            <div :style="innerGroupNumber">
                <span style="color:white;" v-if="count<=$store.state.fq.length">
                    {{count}}<span v-if="$store.state.fq.length<=9">区</span>
                </span>
                <span style="color:#EFEFEF;background-color:#EFEFEF;display:block;height:100%;width:100%;" v-if="count>$store.state.fq.length">1</span>
            </div>
            </div>
        </div>
    </div>
    <div id="thirdGraph1" style="float:left;margin-top:50px;margin-left:20px;">
        <v-chart :options="option1" />
    </div>  
</div>

</template>

<script>
import ECharts from "vue-echarts";
import Axios from 'axios'
export default {
  data() {
    return {
    }
    },

  methods: {
    helpHandleCommand(num){
        document.getElementsByClassName('blocks')[num-1].style.background="#00c8c8";
    },
    chooseBlock(count){
        if(count<=this.$store.state.fq.length){
            if(this.$store.state.dropdownKey3.spa_id!=''){
                let num = 0;
                for(let k=0;k<=this.$store.state.fq.length-1;k++){
                if(this.$store.state.fq[k].spa_id==this.$store.state.dropdownKey3.spa_id){
                    num=k+1;
                    break;
                }
                }
                document.getElementsByClassName('blocks')[num-1].style.background="#00c8c8";
            }         
            document.getElementsByClassName('blocks')[count-1].style.background="red";
            let command=this.$store.state.fq[count-1]
            this.$store.commit('setDropdownKey3',command);
            Axios.post('http://192.168.43.156:9091/data/result',{mp:this.$store.state.dropdownKey2.spa_id,fq:command.spa_id}).then(response=>{
                this.$store.commit('setCoralNumberStatistic',response.data);
            }).catch(error=>{});
        }
    }
  },
  mounted(){
      if(this.$store.state.dropdownKey3.spa_id!=''){
          let num = 0;
          for(let k=0;k<=this.$store.state.fq.length-1;k++){
          if(this.$store.state.fq[k].spa_id==this.$store.state.dropdownKey3.spa_id){
              num=k+1;
              break;
          }
          }
          document.getElementsByClassName('blocks')[num-1].style.background="red";
      }
  },
  components:{'v-chart':ECharts},
  computed:{ 
       groupNumber:function(){
          if(this.$store.state.fq.length<=9){
              return 9;
          }
          else if(this.$store.state.fq.length<=16){
              return 16;
          }
          else if(this.$store.state.fq.length<=25){
              return 25;
          }
          else if(this.$store.state.fq.length<=36){
              return 36;
          }
          else if(this.$store.state.fq.length<=49){
              return 49;
          }
          else{
              return 64;
          }
      },
      blockStyle:function(){
           if(this.$store.state.fq.length<=9){
              return {
          'display':'inline-block','text-align':'center','line-height':'80px','height':'80px','width':'80px',
          'margin-top':'15px','margin-left':'15px','background-color':'#3FC1CB'
              };
          }
          else if(this.$store.state.fq.length<=16){
              return {
          'display':'inline-block','text-align':'center','line-height':'60px','height':'60px','width':'60px',
          'margin-top':'15px','margin-left':'15px','background-color':'#3FC1CB'
              };
          }
          else if(this.$store.state.fq.length<=25){
              return {
          'display':'inline-block','text-align':'center','line-height':'50px','height':'50px','width':'50px',
          'margin-top':'10px','margin-left':'10px','background-color':'#3FC1CB'
              };
          }
          else if(this.$store.state.fq.length<=36){
              return {
          'display':'inline-block','text-align':'center','line-height':'40px','height':'40px','width':'40px',
          'margin-top':'10px','margin-left':'10px','background-color':'#3FC1CB'
              };
          }
          else if(this.$store.state.fq.length<=49){
              return{
          'display':'inline-block','text-align':'center','line-height':'35px','height':'35px','width':'35px',
          'margin-top':'7px','margin-left':'7px','background-color':'#3FC1CB'
              };
          }
          else{
              return{
          'display':'inline-block','text-align':'center','line-height':'31px','height':'31px','width':'31px',
          'margin-top':'6px','margin-left':'6px','background-color':'#3FC1CB'
              };
          }
      },
      innerGroupNumber:function(){
          if(this.$store.state.fq.length<=16){
              return {'font-size':'30px'}
          }
          else if(this.$store.state.fq.length<=25){
              return {'font-size':'25px'}
          }
          else if(this.$store.state.fq.length<=36){
              return {'font-size':'20px'}
          }
          else if(this.$store.state.fq.length<=49){
              return {'font-size':'18px'}
          }
          else{
              return {'font-size':'17px'}
          }
      },
      option1:function(){
        let op={
                title: {
                    text:'所有当前回播残枝的种类及数量统计',
                    x: 'center',
                        },
                color: [ '#FF6B6B', '#707070','#000000'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    right: '10%',
                    bottom: 60
                },
                toolbox: {
                   
                },
                legend: {
                    data:['数量'],
                    x: 'left'
                },
                xAxis: [                  
                    {                                           
                        type: 'category',
                        data:this.$store.getters.coralStatistic.dataX3
                    }
                ],
                yAxis: {                       
                        type: 'value',     
                        name:'数量(株)',
                        min:0,
                        max:this.$store.getters.coralStatistic.maxY3              
                },
                series: [
                    {
                        type:'bar',
                        data:this.$store.getters.coralStatistic.dataY5
                    }
                ],
                dataZoom: [
                            {
                                type:'slider',
                                show: true,
                                realtime: true,
                                start: 0,
                                end: this.$store.getters.coralStatistic.rateX3,
                                height:20
                            },                                                   
                            {
                                type: 'inside',
                                realtime: true,
                                start: 45,
                                end: 85
                            }
                        ],
                }
          return op;

      }

  }
    }
  
</script>
<style scoped>
.dropdown-style2{
  background-color:#00c8c8;
  border-radius:14px;
  line-height:28px;
  width:240px;
  text-align:center;
  margin-left:20px;
}
.el-dropdown-link {
  cursor: pointer;
}
#thirdGraph1{
    width:900px;
    height:300px;

    display:inline-block;
}
.echarts{
    width:900px;
    height:300px;

}
.echarts div{
    width:900px;
    height:300px;

}
#thirdGraph1 div.echarts div canvas{
    width:900px;
    height:300px;

}

</style>
