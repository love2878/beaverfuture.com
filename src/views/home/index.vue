<template>
  <div class="body">
    <main>
      <div class="index-banner-container">
        <img src="../../assets/images/index-banner.png" class="index-banner">
        <img src="../../assets/images/index-text.png" class="index-text">
      </div>
      <div class="index-list-container">
        <div class="row">
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg1">
              <img src="../../assets/images/ca-c-logo1.png" class="w100" />
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg2">
              <img src="../../assets/images/ca-c-logo1.png" class="w100" />
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg3">
              <img src="../../assets/images/ca-c-logo1.png" class="w100" />
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg1">
              111
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg2">
              222
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 col-lg-4 clearfix">
            <div class="index-list-top index-list-bg3">
              333
            </div>
            <div class="index-list-bottom">
              <img src="../../assets/images/index-list-img.png" class="w100" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{ background-color: #121515;}
.w100{width: 100%;}
.index-list-container{ width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.index-list-container .col-12,.index-list-container .col-sm-4,.index-list-container .col-lg-4{padding-left:0px;padding-right:0px;}

.index-list-top{ width: 100%; min-height: 300px;}
.index-list-bg1{ background: url("../../assets/images/index-list-bg1.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.index-list-bg2{ background: url("../../assets/images/index-list-bg2.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.index-list-bg3{ background: url("../../assets/images/index-list-bg3.png") no-repeat 0 0;
  background-size: 100% 100%;
}
</style>
