/*
*  @描述：头部导航 
*  @作者：白朗
*  @创建时间：2018-04-25
*/
<template>
  <div class="frame-title-box flex_lc">
		<!-- 导航根据数据遍历 -->
    <div class="frame-title-item" v-for="item in navData" :class="{'nav-active':currentNav == item.url}" :key="item.id">
      <a :href="item.url">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			navData: {
				tpye: Array,
				default () {
					return []
				}
			},
			currentNav: {
				type: String,
      	default: ''
			}
		},
		data() {
			return {
			};
		},
	  created(){
	  }
	}
</script>

<style lang="scss" scoped>
	.frame-title-box{
		width:100%;
		height: 60px;
		padding-left:30px;
		.frame-title-item{
			height: 100%;
			line-height: 63px;
			margin-right: 29px;
			padding: 0px 2px;
			border-bottom:3px solid #ffffff;
			font-size: #666666;
			a{
				display: block;
				height: 100%;
				cursor: pointer;
				font-size: 13px;
				font-size: #666666;
			}
		}
		.frame-title-item.nav-active{
			color: #409eff;
			border-bottom:3px solid #409eff;
		}
		.frame-title-item:hover{
			color: #409eff;
		}
	}
	

</style>
