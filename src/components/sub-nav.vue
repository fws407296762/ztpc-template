
/*
*  @描述：左边导航树状、一级结构
*  @作者：白朗
*  @创建时间：2018-04-20
*/
<template>

	<div class="frame-sub-nav" :class="subNavOpen ? 'sub-nav-open': 'sub-nav-close'" >
		<div class="sub-nav-con" :class="subNavOpen ? 'sub-navcon-open': 'sub-navcon-close'" >
			<!-- 树状导航 -->
			<el-menu :default-active="$route.meta.p" :router="true" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" background-color="#1c2b36" text-color="#89a2b4" active-text-color="#ffffff">
				<el-menu-item :route="{name:'garage'}" index="garage">
					车库车位管理
				</el-menu-item>
				<el-menu-item :route="{name:'sale_vehmodel'}" index="sale_vehmodel">
					在售车型管理
				</el-menu-item>
                <el-menu-item :route="{name:'accessoriesSupplier'}" index="accessoriesSupplier">
                  精品配件供应商管理
                </el-menu-item>
			</el-menu>
		</div>
		<!-- 左边导航收缩 -->
		<div class="open-close-btn" @click="subNavToggle">
			<i :class="subNavOpen ? 'el-icon-caret-left' : 'el-icon-caret-right'"></i>
			<img src="./../assets/images/subnav-bg.png"/>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	        return {
				subNavOpen:true,
				navActive:sessionStorage.getItem('navActive')
			};
		},
	  created(){
	  },
	  methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {

        },
        subNavToggle(){
            this.subNavOpen = !this.subNavOpen;
            this.$emit('subNavOpenFun',this.subNavOpen);
        }
	  },
	  components:{
	  }
	}
</script>

<style lang="scss" scoped>
	.frame-sub-nav{
		padding-top: 20px;
		width: 200px;
		min-height:100%;
		background-color: #1c2b36;
		color: #ffffff;
		position: relative;
		.sub-nav-con{
			width: 196px;
			font-size: 12px;
			.el-menu-vertical-demo{
				width: 100%;
				border: 1px solid #1c2b36;
			}
		}
		// 左边导航收缩
		.sub-nav-con.sub-navcon-close{
			opacity: 0;
			margin-left: -196px;
			transition:all 0.3s;
		}
		.sub-nav-con.sub-navcon-open{
			opacity: 1;
			margin-left: 0px;
			transition:all 0.5s;
		}
		.open-close-btn{
			position: absolute;
			top: 50%;
			right: -10px;
			height: 90px;
			margin-top: -45px;
			cursor: pointer;
			img{
				height: 100%;
			}
			i{
				position: absolute;
				top: 50%;
				margin-top: -7px;
				left: -2px;
				color: #89a2b4;
			}
		}
		.open-close-btn:hover{
			i{
				color: #ffffff;
			}
		}
	}
	.frame-sub-nav.sub-nav-close{
      width: 0px;
      transition:all 0.3s;
	}
	.frame-sub-nav.sub-nav-open{
      width: 200px;
      transition:all 0.3s;
	}
	.el-menu-item {
      min-width: 196px;
      height: 40px;
      line-height: 40px;
      border-left: 2px solid #1c2b36;
      font-size: 12px;
	}
	.el-menu-item.is-active {
      color: #409EFF;
      border-left: 2px solid #409eff;
      background-color: #2e404d!important;
	}

</style>
