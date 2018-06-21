/*
*  @描述：历史记录
*  @作者：白朗
*  @创建时间：2018-04-20
*/
<template>
  <div class="history-record">
		<div class="history-item flex_cc" v-for="item in historyData" :class="{'history-active':item.id == currentHistory}"  :key="item.id" 
			@click="changeHistory(item.id)" 
			@mouseenter="historyBoxEnter(item.id)"
			@mouseleave="historyBoxLeave(item.id)"
		>
			{{item.name}}
			<!-- 删除符号 -->
			<span>
				{{item.id == currentHistory || item.id == mouseEnter?'×':''}}
			</span>
		</div>
  </div>
</template>

<script>
	export default {
		props: {
			historyData:{
				tpye: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				// 当前历史编号
				currentHistory:4,
				// 鼠标移入当前id
				mouseEnter:''
			};
		},
	  created(){
	  },
		mounted(){
		
		},
	  methods:{
			changeHistory(id){
				this.currentHistory = id;
			},
			// 删除鼠标移入
			historyBoxEnter(id){
				this.mouseEnter = id;
			},
			// 删除鼠标移出
			historyBoxLeave(id){
				this.mouseEnter = '';
			}
	  },
	  components:{
	  }
	}
</script>

<style lang="scss" scoped>
	.history-record{
		width: 100%;
		min-width: 1000px;
		height: 40px;
		background: #ffffff;
		border-bottom: 1px solid #eaeefb;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		padding: 0px 5px;
		.history-item{
			cursor: pointer;
			color: #999999;
			padding: 3px 8px 4px;
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
			font-size: 13px;
			background-color: #ffffff;
			border: 1px solid #ffffff;
			border-bottom: none;
			// margin-bottom: -1px;
			span{
				display: block;
				width: 10px;
				height: 20px;
				margin-left: 5px;
				// padding-left: 8px;
				font-size: 20px;
				cursor: pointer;
				// padding-top: 2px;
				color: #999999;
			}
			span:hover{
				color: #333333;
			}
		}
		.history-item.history-active{
			border: 1px solid #eaeefb;
			border-bottom: none;
			color: #409eff;
			padding-bottom: 5px;
			margin-bottom: -1px;
			span{
				color: #409eff;
			}
		}
	}
	

</style>
