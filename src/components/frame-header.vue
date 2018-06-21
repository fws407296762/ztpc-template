/*
*  @描述：页面结构的头部组件，包括区域树状选择、logo、当前登录人等
*  @作者：白朗
*  @创建时间：2018-04-20
*/
<template>
  <div class="frame-header-box flex_sc">
		<!-- logo -->
		<div class="logo-box flex_lc">
			<img class="icon" src="./../assets/images/zt_logo1.png"/>
		</div>
		<div class="person-info flex_rc">
			<!-- 门店区域树状选择 -->
			<div class="header-store-info">
				<span class="header-store-font" v-popover:hearderSelStore>
					<span>集团-宝马-华南大区-广东-深圳-XX4s店</span>
					<i class="el-icon-caret-bottom el-icon-right "></i>
				</span>
				<el-popover ref="hearderSelStore"	placement="bottom" width="300" trigger="click" v-model="hearderSelStorePop">
					<div>
						<el-tree :data="areaStore" show-checkbox node-key="id" :default-expanded-keys="['sn001']" :default-checked-keys="['sn0010302']"></el-tree>
					</div>
					<div class="tree-store-sty">
						<el-button size="mini" type="default" @click="hearderSelStorePop = false">取消</el-button>
						<el-button size="mini" type="primary"  @click="hearderSelStorePop = false">确定</el-button>
					</div>
				</el-popover>
			</div>
			<!-- 登录人信息 -->
			<div class="header-account-info">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<span>白居易 销售顾问</span>
						<i class="el-icon-caret-bottom el-icon-right "></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<i class="iconfont zticon-icon_person"></i>
							账户信息
						</el-dropdown-item>
						<el-dropdown-item>
							<i class="iconfont zticon-icon_exit"></i>
							退出
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<!-- 消息 -->
			<div class="header-msg flex_cc">
				<img src="./../assets/images/header-msg-icon.png" />
				<span>99+</span>
			</div>
			<!-- 提示 -->
			<div class="header-help flex_cc">
				<img src="./../assets/images/header-help-icon.png" />
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				// 区域树状结构框限制隐藏状态
				hearderSelStorePop:false,
				// 门店区域数据
				areaStore: [{
          id: 'sn001',
          label: 'sn001/总部',
          children: [
						{
							id: 'sn00101',
							label: 'sn00101/华北大区',
							children: [
								{
									id: 'sn0010101',
									label: 'sn0010101/北京运营部'
								}, 
								{
									id: 'sn0010102',
									label: 'sn0010102/河北运营部',
								}
							]
						}, 
						{
							id: 'sn00102',
							label: 'sn00102/华东大区',
							children: [
								{
									id: 'sn0010201',
									label: 'sn0010201/上海运营部'
								},
								{
									id: 'sn0010202',
									label: 'sn0010202/杭州运营部',
								}
							]
						},
						{
							id: 'sn00103',
							label: 'sn00103/华南大区',
							children: [
								{
									id: 'sn0010301',
									label: 'sn0010301/广州运营部'
								},
								{
									id: 'sn0010302',
									label: 'sn0010302/深圳运营部',
								}
							]
						}
					]
        }]
			};
		},
	  created(){
	  }
	}
</script>

<style lang="scss" scoped>
	.frame-header-box{
		width: 100%;
		height: 50px;
		background-color:#ecf5ff;
		border-bottom: 1px solid #e6e6e6;
		// logo
		.logo-box{
			padding-left: 20px;
			width: 200px;
			height: 100%;
			background-color: #409eff;
			.icon{
				height: 32px;
			}
		}
		.person-info{
			padding-right: 18px;
			// 门店信息
			.header-store-info{
				padding-right: 38px;
				text-align: right;
				.header-store-font{
					color: #666666;
					font-size: 12px;
					cursor: pointer;
				}
				.header-store-font:hover{
					color: #409eff;
				}
			}
			// 登录人信息
			.header-account-info{
				padding-right: 38px;
				text-align: right;
				.el-dropdown{
					cursor: pointer;
					color: #666666;
					span{
						font-size: 12px;
					}
				}
				.el-dropdown:hover{
					color: #409eff;
				}
			}
			.header-msg{
				width: 20px;
				margin-right: 34px;
				position: relative;
				img{
					width: 100%;
				}
				span{
					position: absolute;
					top: -10px;
					left: 14px;
					font-size: 12px;
					padding: 1px 4px;
					background-color: #f56c6c;
					color: #ffffff;
					border-radius: 16px;
				}
			}
			.header-help{
				width: 20px;
				img{
					width: 100%;
				}
			}
		}
		
	}
	// 门店选择树状结构样式修改
	.tree-store-sty{
		text-align: right;
		border-top:1px solid #eaeefb;
		padding-top:10px;
		margin-top:10px;
	}
	.el-tree-node__label {
		font-size: 12px;
	}
	.el-dropdown-menu .el-dropdown-menu__item {
		font-size: 12px;
		line-height: 30px;
		padding-left: 10px;
		color: #666666;
		i{
			font-size: 12px;
			color: #c0c4cc;
			margin-right: 5px;
		}
	}
	.el-dropdown-menu__item:hover{
		color:#666666;
	}

</style>
