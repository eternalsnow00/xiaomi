<template>
	<div>
		<div class="fix_top">
			<div class="top_info">
				<div class="logodiv">
					<img src="../../assets/img/logo.png" class="logo" width="100%"/>
				</div>
				<div class="search">
					<i class="fa fa-search"></i>
					<span>搜索商品名称</span>
				</div>
				<div class="top_user">
					<router-link to="/user" class="user_color">
						<i class="fa fa-user-o"></i>
					</router-link>
				</div>
			</div>
			<div class="top_category">
				<ul class="itemlist">
					<li v-for="(item,index) in top_category">
						<router-link to="/user" class="top_navbar">{{item}}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      top_category:["推荐","手机","开学季","智能","电视","笔记本","生活周边","家电"]
	    }
	  },
	  created(){
		
	  },
	  methods:{
	
	  }
	}
</script>

<style scoped>
	.fix_top{
		position: fixed;
		width: 100%;
		top: 0px;
		left: 0px;
		background: #f2f2f2;
		padding: 0.22rem 0px;
	}
	.top_info{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items:center;
	}
	.logodiv{
		width: 0.7rem;
		margin-left: 0.34rem;
	}
	.logo{
		width: 100%;
		height: auto;
	}
	.search{
		flex: 1;
		text-align: left;
		padding: 0.12rem 0.21rem;
		margin: 0px 0.4rem;
		background: white;
		border: 1px solid #e5e5e5;
		box-sizing: border-box;
		color: #ccc;
		font-size: 0.45rem;
	}
	.search i,
	.search span{
		vertical-align: middle;
	}
	.fa-search{
		font-size: 0.5rem;
		margin-right: 0.15rem;
	}
	.top_user{
		font-size: 0.55rem;
		margin-right: 0.34rem;
	}
	.user_color{
		color: #999;
	}
	.top_category{
		margin-top: 0.18rem;
	}
	.itemlist{
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		white-space:nowrap;
		font-size: 0.38rem;
	}
	.itemlist::-webkit-scrollbar{
		display: none;
	}
	.itemlist li{
		display: inline-block;
		padding: 0px 0.25rem;
	}
	.top_navbar{
		color: rgb(116, 116, 116);
	}
</style>
