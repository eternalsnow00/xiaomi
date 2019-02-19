<template>
	<div>
		<div class="fix_bottom">
			<router-link to="/home" :class="$route.path === '/home'?'navbar active':'navbar'">
				<i class="fa fa-home icon"></i>
				<p class="iconName">首页</p>
			</router-link>
			<router-link to="/category" :class="$route.path === '/category'?'navbar active':'navbar'">
				<i class="fa fa-file-text-o icon"></i>
				<p class="iconName">分类</p>
			</router-link>
			<router-link to="/shopcart" :class="$route.path === '/shopcart'?'navbar active':'navbar'">
				<i class="fa fa-shopping-cart icon"></i>
				<p class="iconName">购物车</p>
			</router-link>
			<router-link to="/user" :class="$route.path === '/user'?'navbar active':'navbar'">
				<i class="fa fa-user-o icon"></i>
				<p class="iconName">我的</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      
	    }
	  },
	  
	  created(){
		
	  },
	  methods:{
	
	  }
	}
</script>

<style scoped>
	.fix_bottom{
		position: fixed;
		width: 100%;
		bottom: 0px;
		left: 0px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
	}
	.navbar{
		flex: 1;
		text-align: center;
		padding: 0.15rem 0px;
		color: #999;
	} 
	.navbar.active{
		color: #ff8000;
	}
	.icon{
		font-size: 0.54rem;
	}
	.iconName{
		font-size: 0.34rem;
	}
</style>
