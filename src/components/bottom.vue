<template>
	<div>
		{{child.id}}
		<button @click="closeTip">传值</button>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      childValue1:"welcome",
		  childValue2:"vue"
	    }
	  },
	  props:['child'],
	  methods:{
		  closeTip(){
			  console.log(1);
			  this.$emit('closeTip',this.childValue1,this.childValue2)
		  }
	  }
	}
</script>

<style>
</style>
