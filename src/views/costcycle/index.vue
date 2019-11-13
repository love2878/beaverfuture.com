<template>
  <div class="co-body">
    <div class="co-main">
      <div class="co-hearder"></div>
      <div class="co-reckon-header" :style="{display:pingguVisible === true ? 'block' : 'none'}">
        <div class="co-reckon-content">
          <div class="container co-reckon-container">
            <div class="row co-reckon-row">
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 feiyong">
                费用预估：<span class="strong">￥{{ afterData.priceMin }} ~ {{ afterData.priceMax }}</span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 feiyong">
                周期预估：<span class="strong">{{ afterData.min }}周 ~ {{ afterData.max }}周</span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="reset-btn" @click="resetClick">重新评估</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="co-content">
        <div class="container co-reckon-bottom-container" :style="{display:pingguVisible === true ? 'block' : 'none'}">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-md-offset-0 col-lg-6 col-lg-offset-0">
              <div class="name-input">
                <input type="text" v-model="afterData.name" class="name-input-text" placeholder="您的称呼" />
              </div>
              <div class="mobile-input">
                <input type="text" v-model="afterData.mobile" class="mobild-input-text" placeholder="您的手机号码" maxlength="11" />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 col-lg-4 col-lg-offset-2">
              <div class="liji-text">谢谢您对我们的认可！提交成功后，我们会尽快和您联系，请保持手机的畅通。</div>
              <div class="liji-submit" @click="lijiSubmit">立即提交</div>
            </div>
          </div>
        </div>
        <div class="container co-container" :style="{display:pingguVisible === false ? 'block' : 'none'}">
          <div class="row co-row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 co-title">
              产品设计
            </div>
          </div>
          <div class="row co-row">
            <div 
              v-for="(item, index) in prdata" 
              :key="index" 
              :class="'col-xs-12 col-sm-6 col-md-6 col-lg-3 ' + (index === 0 ? 'first-icon' : '')"
            >
              <div :class="'price-list '+(item.active === true ? 'price-current' : '')" @click="onListClick(item)">
                <div class="price-list-title">{{ item.title }}</div>
                <div class="price-list-detail">￥{{ item.priceMin }}~{{ item.priceMax }}</div>
                <div class="select">
                  <img src="../../assets/images/select-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="row co-row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 co-title">
              技术开发
            </div>
          </div>
          <div class="row co-row">
            <div 
              v-for="(item, index) in dedata" 
              :key="index" 
              :class="'col-xs-12 col-sm-6 col-md-6 col-lg-3 ' + (index === 0 ? 'first-icon' : '')"
            >
              <div :class="'price-list '+(item.active === true ? 'price-current' : '')" @click="onListClick(item)">
                <div class="price-list-title">{{ item.title }}</div>
                <div class="price-list-detail">￥{{ item.priceMin }}~{{ item.priceMax }}</div>
                <div class="select">
                  <img src="../../assets/images/select-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="row co-row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 co-title">
              配套服务
            </div>
          </div>
          <div class="row co-row">
            <div 
              v-for="(item, index) in sedata" 
              :key="index" 
              :class="'col-xs-12 col-sm-6 col-md-6 col-lg-3 ' + (index === 0 ? 'first-icon' : '')"
            >
              <div :class="'price-list '+(item.active === true ? 'price-current' : '')" @click="onListClick(item)">
                <div class="price-list-title">{{ item.title }}</div>
                <div class="price-list-detail">￥{{ item.priceMin }}~{{ item.priceMax }}</div>
                <div class="select">
                  <img src="../../assets/images/select-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="row co-row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 feiyong">
              费用预估：<span class="strong">￥{{ afterData.priceMin }} ~ {{ afterData.priceMax }}</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 feiyong">
              周期预估：<span class="strong">{{ afterData.min }}周 ~ {{ afterData.max }}周</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="submit-btn1" @click="nowClick">立即提交需求</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
function checkPhone(phoneNum) {
  if (!(/^1[3456789]\d{9}$/.test(phoneNum))) {
    return false
  } else {
    return true
  }
}
export default {
  name: 'CostCycle',
  data() {
    return {
      pingguVisible: false,
      afterData:{
        min: 0,
        max: 0,
        priceMin: 0,
        priceMax: 0,
        name: '',
        mobile: '',
        titleList: []
      },
      prdata:[{
        title: '需求分析',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 1000,
        priceMax: 3000,
        min: 1,
        max: 2
      },{
        title: '原型设计',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 2000,
        priceMax: 4000,
        min: 1,
        max: 2
      },{
        title: '界面设计',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 6000,
        priceMax: 20000,
        min: 2,
        max: 4
      },{
        title: '交互设计',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 4000,
        priceMax: 10000,
        min: 2,
        max: 4
      }],
      dedata:[{
        title: '前端开发',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 6000,
        priceMax: 18000,
        min: 2,
        max: 4
      },{
        title: '后端开发',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 6000,
        priceMax: 18000,
        min: 2,
        max: 4
      },{
        title: 'APP开发',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 10000,
        priceMax: 20000,
        min: 2,
        max: 4
      },{
        title: '小程序开发',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 5000,
        priceMax: 10000,
        min: 2,
        max: 4
      }],
      sedata: [{
        title: '域名注册备案',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 1000,
        priceMax: 2000,
        min: 1,
        max: 2
      },{
        title: '服务器采购配置',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 2000,
        priceMax: 4000,
        min: 1,
        max: 2
      },{
        title: '软著申请',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 1000,
        priceMax: 2000,
        min: 1,
        max: 2
      },{
        title: '支付接口申请',
        current: '',
        classStyle: 'price-current',
        active: false,
        priceMin: 1000,
        priceMax: 2000,
        min: 1,
        max: 2
      }]
    }
  },
  methods: {
    onListClick(item) {
      if (item.active) {
        this.afterData.min -= item.min
        this.afterData.max -= item.max
        this.afterData.priceMin -= item.priceMin
        this.afterData.priceMax -= item.priceMax
        if (this.afterData.titleList.indexOf(item.title) > 0) {
          this.afterData.titleList.splice(this.afterData.titleList.indexOf(item.title),1)
        }
        item.active = false
      } else {
        this.afterData.min += item.min
        this.afterData.max += item.max
        this.afterData.priceMin += item.priceMin
        this.afterData.priceMax += item.priceMax
        this.afterData.titleList.push(item.title)
        item.active = true
      }
      console.log(this.afterData)
    },
    resetClick() {
      this.pingguVisible = false
    },
    nowClick() {
      this.pingguVisible = true
      // console.log('nowClick::')
    },
    lijiSubmit() {
      if (this.afterData.min === 0) {
        alert('请选择你的需求')
        return
      }
      if (this.afterData.name === '') {
        alert('请填写姓名')
        return
      }
      if (!checkPhone(this.afterData.mobile)) {
        alert('请填写正确手机号码')
        return
      }
      let str = ''
      for (let i = 0; i < this.afterData.titleList.length; i++) {
        if (i === this.afterData.titleList.length - 1) {
          str += this.afterData.titleList[i]
        } else {
          str += this.afterData.titleList[i] + ','
        }
      }
      const postdata = {
        maxprice: this.afterData.priceMax,
        minprice: this.afterData.priceMin,
        maxtime: this.afterData.max,
        mintime: this.afterData.min,
        phone: this.afterData.mobile,
        requirement: str,
        username: this.afterData.name
      }
      axios.post('http://www.beaverfuture.com:8080/api/requirements', postdata).then((response) => {
          console.log(response)
      }).catch((error) => {
          console.log(error)
      })
      console.log(this.afterData, str)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
