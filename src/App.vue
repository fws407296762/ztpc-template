<template>
  <div class="sysframe-box">
    <!-- 头部组建 -->
    <frameHeader></frameHeader>
    <!-- 导航组件 -->
    <frameNav :navData="navData" :currentNav ="currentNav"></frameNav>
    <!-- 大内容区 -->
    <div class="sysframe-content flex_lt">
      <subNav @subNavOpenFun="getSubNavOpen"></subNav>
      <!-- 内容区 -->
      <div class="sysframe-con" :class="{'sysframe-open':sysframeOpen}">
        <!-- 历史记录 -->
        <!--<historyRecord :historyData="historyData"></historyRecord>-->
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import frameHeader from './components/frame-header.vue';
  import frameNav from './components/frame-nav.vue';
  import historyRecord from './components/history-record.vue';
  import subNav from './components/sub-nav.vue';
  export default {
    data() {
      return {
        navData:[
          {
            id:"2",
            name:"客户管理"
          },
          {
            id:"3",
            name:"整车管理"
          },
          {
            id:"4",
            name:"精品配件管理"
          },
          {
            id:"5",
            name:"增值业务管理"
          },
          {
            id:"6",
            name:"集采中心"
          },
          {
            id:"7",
            name:"查询统计"
          },
          {
            id:"8",
            name:"终端管理"
          },
          {
            id:"9",
            name:"基础数据管理"
          },
          {
            id:"10",
            name:"系统设置"
          }
        ],
        currentNav:'',
        historyData:[
          {
            id:"4",
            name:"客户管理"
          },
          {
            id:"5",
            name:"整车销售管理"
          },
          {
            id:"6",
            name:"精品配件管理"
          },
          {
            id:"7",
            name:"延伸服务管理"
          },
          {
            id:"8",
            name:"客户端管理"
          },
          {
            id:"9",
            name:"设备管理"
          }

        ],
        sysframeOpen:false
      };
    },
    created(){

    },
    methods:{
      getSubNavOpen(data){
        console.log(data);
        this.sysframeOpen = !data;
      }
    },
    components:{
      frameHeader,
      frameNav,
      historyRecord,
      subNav
    }
  }
</script>

<style lang="scss">
  @import "./../src/assets/css/base.scss";
  //引入通用样式
  .sysframe-box{
    height: 100%;
    min-width: 1200px;
    margin: 0px auto;
    .sysframe-content{
      height: calc(100% - 110px);
      overflow: hidden;
      .sysframe-con{
        width: calc(100% - 200px);
        padding: 12px;
        min-width:1000px;
        height:100%;
        background-color:#f0f3f4;
        .page-content{
          background: #fff;
          height: calc(100% - 40px);
          overflow: hidden;
          overflow-y: auto;
        }
      }
      .sysframe-con.sysframe-open{
        width: 100%;
      }
    }
  }

  .page-content{padding: 20px 0;}
  .button__box{padding: 0 10px;}

  .dialog__column{
    padding: 20px;
    border-bottom: 1px solid #eaeefb;
    &:last-of-type{border: none;}
    &:first-of-type{padding-top: 0;}
  }

  .button__text{text-decoration: underline;padding: 0;}
  .form__item__text{line-height: 40px;}
  .search__box{
    position: relative;
    .search__form{
      margin-top: 18px;
      .search__input--text{
        width: 300px;
      }
      .el-form-item{
        margin-bottom: 0;
      }
    }
  }
  .info__wrap{
    width: 826px;
    font-size: 14px;
    .el-row{
      line-height: 30px;
    }
    .iw__title{color: #999;}
    .iw__content{
      color: #333;
      &.iw__remarkcontent{
        line-height: 20px;
      }
    }
  }
</style>
