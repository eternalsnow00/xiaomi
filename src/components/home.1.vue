<template>
	<div>
		<input v-model="product.id"/>
		<bottom :child="product" @closeTip="closeTip"></bottom>
	</div>
</template>

<script>
	import bottom from './bottom'
	export default {
	  data () {
	    return {
	      product:{
			  id:0
		  }
	    }
	  },
	  components:{
		  bottom
	  },
	  created(){
		function person(name,age){
			this.name = name;
			this.age = age;
		}  
		var person1 = new person("jiang",28);
		console.log(person1.name)
		
	  },
	  methods:{
		  closeTip(a,b){
			  alert(a+b)
		  }
	  }
	}
</script>

<style>
</style>
