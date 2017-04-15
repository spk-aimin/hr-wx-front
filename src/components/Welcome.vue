<template>
	<div>	
	</div>
</template>
<script>
    import {apiService, apiUrl, urlParams} from '@/api'
    export default {
    	created() {
    		 var userId =4;
    		 var types = urlParams("type");
    		 var type , value;
    		 try{
    		  type = types.split("_")[0];
    		  value = types.split("_")[1];
    		 }catch(e){
    		 	type="";
    		 	value="";
    		 }
    		 var articleid = "";
    		 var code = urlParams('code');
    		 var itemid = "";
    		 var name = "";
    		 switch (type){
    		 	case 'article-list': 
    		 	      name= 'article.list'; 
    		 	      itemid= value; 
    		 	      break;
    		 	case 'article-detail': 
    		 	      name = 'article.detail'; 
    		 	      articleid = value;
    		 	      break;
    		 	default : name = 'welcome';
    		 }
    		 console.log(name, type, value, code);
    		 apiService.requestGet(apiUrl.baseUrl +"oauth/getCode/" +  code).then((res)=>{
    		 	console.log(res);
    		 	if(res.data){
				 	userId = res.data.id;
				 	this.$router.push({name: name, query: {
				 		itemid: itemid,
				 		code: code,
				 		id: articleid,
				 		userId: userId
				 	}});
    		 	}
    	
    		 }, (res)=>{
    		 	console.log("失败");
    		 })
    	}
    }
</script>
<style>
</style>