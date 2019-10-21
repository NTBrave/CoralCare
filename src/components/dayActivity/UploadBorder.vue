<template>
  <div class="borderRoot">
    <el-row :gutter="0">
      <el-col
        :span="2"
        :style="{'borderTop': '1px solid lightgray','borderLeft':'1px solid lightgray'}"
      >
        <div :style="{'textAlign':'center'}">B1</div>
      </el-col>
      <el-col
        :span="4"
        v-for="(item, idx) in colorList.B_color"
        :key="idx"
        :style="{'borderTop': '1px solid lightgray'}"
      >
        <div :style="{'background': item.color,'textAlign': 'center','color':'white'}">{{item.name}}</div>
      </el-col>
      <el-col
        :span="2"
        :style="{'borderTop': '1px solid lightgray', 'borderRight':'1px solid lightgray'}"
      >
        <div :style="{'textAlign':'center'}">C1</div>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="1">
        <div
          v-for="(item, idx) in reverseE_color"
          :key="idx"
          :style="{'width':'100%','height':'9vh','background': item.color,'textAlign': 'center','lineHeight':'9vh','color':'white','borderLeft': '1px solid lightgray'}"
        >{{item.name}}</div>
      </el-col>
      <el-col :span="22">
        <div :style="{'width':'100%','height':'45vh'}">
          <slot></slot>
        </div>
      </el-col>
      <el-col :span="1">
        <div
          v-for="(item, idx) in colorList.C_color"
          :key="idx"
          :style="{'width':'100%','height':'9vh','background': item.color,'textAlign': 'center','lineHeight':'9vh','color':'white','borderRight': '1px solid lightgray'}"
        >{{item.name}}</div>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="2">
        <div
          :style="{'textAlign':'center','borderLeft': '1px solid lightgray','borderBottom':'1px solid lightgray'}"
        >E1</div>
      </el-col>
      <el-col :span="4" v-for="(item, idx) in reverseD_color" :key="idx">
        <div
          :style="{'background': item.color,'textAlign': 'center','color':'white','borderBottom': '1px solid lightgray'}"
        >{{item.name}}</div>
      </el-col>
      <el-col :span="2">
        <div
          :style="{'textAlign':'center','borderRight': '1px solid lightgray','borderBottom':'1px solid lightgray'}"
        >D1</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const colorList = {
  B_color: [
    {
      color: '#E1EAAE',
      name: 'B2'
    },
    {
      color: '#C1DA83',
      name: 'B3'
    },
    {
      color: '#899D52',
      name: 'B4'
    },
    {
      color: '#586832',
      name: 'B5'
    },
    {
      color: '#223017',
      name: 'B6'
    }
  ],
  C_color: [
    {
      color: '#F9D2BC',
      name: 'C2'
    },
    {
      color: '#F1915E',
      name: 'C3'
    },
    {
      color: '#D86430',
      name: 'C4'
    },
    {
      color: '#8A3820',
      name: 'C5'
    },
    {
      color: '#510D0C',
      name: 'C6'
    }
  ],
  D_color: [
    {
      color: '#F7DA9F',
      name: 'D2'
    },
    {
      color: '#F2A04C',
      name: 'D3'
    },
    {
      color: '#CC7D3F',
      name: 'D4'
    },
    {
      color: '#8F4124',
      name: 'D5'
    },
    {
      color: '#73381C',
      name: 'D6'
    }
  ],
  E_color: [
    {
      color: '#4C200E',
      name: 'E2'
    },
    {
      color: '#764922',
      name: 'E3'
    },
    {
      color: '#AC913D',
      name: 'E4'
    },
    {
      color: '#E2C96F',
      name: 'E5'
    },
    {
      color: '#EEEDA4',
      name: 'E6'
    }
  ]
}
export default {
  data() {
    return {
      colorList
    }
  },
  computed: {
    reverseD_color() {
      return colorList.D_color.reverse()
    },
    reverseE_color() {
      return colorList.E_color.reverse()
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped></style>