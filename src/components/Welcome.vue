<template>
	<div>	
	</div>
</template>
<script>
    import {apiService, apiUrl, urlParams} from '@/api'
    export default {
    	created() {
    		var userId =4;
    		 var type = urlParams('type');
    		 var articleid = urlParams('articleid');
    		 var code = urlParams('code');
    		 var itemid = urlParams('itemid');
    		 var name = "";
    		 switch (type){
    		 	case 'article-list': name= 'article.list'; break;
    		 	case 'article-detail': name = 'article.detail'; break;
    		 	default : name = 'welcome';
    		 }
    		 this.$router.push({name: name, query: {
    		 		itemid: itemid,
    		 		code: code,
    		 		id: articleid,
    		 		userId: userId
    		 	}});
    		 apiService.requestGet(apiUrl.baseUrl +"oauth/getCode/" +  code).then((res)=>{
    		 	userId = res.data.id;
    		 	this.$route.router.go({name: name, query: {
    		 		itemid: itemid,
    		 		code: code,
    		 		id: articleid,
    		 		userId: userId
    		 	}});
    		 }, (res)=>{
    		 	console.log("失败");
    		 })
    	}
    }
</script>
<style>
</style>