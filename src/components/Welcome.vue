<template>
	<div>	
	</div>
</template>
<script>
    import {apiService, apiUrl, urlParams} from '@/api'
    window.userInfoId = -1;
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
    		 if(window.userInfoId == -1){
    		 		 apiService.requestGet(apiUrl.baseUrl +"oauth/getCode/" +  code).then((res)=>{
		    		 	console.log(res);
		    		 	if(res.data){
						 	userId = res.data.id;
						 	window.userInfoId = userId;
						 	this.$router.push({name: name, query: {
						 		itemid: itemid,
						 		id: articleid,
						 		userId: userId
						 	}});
		    		 	}
		    	
		    		 }, (res)=>{
		    		 	console.log("失败");
		    		 })
		 		}else{
		 			window.history.go(-1);
		 			window.close();
		 		}
    	
    	}
    }
</script>
<style>
</style>