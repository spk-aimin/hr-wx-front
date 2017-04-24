// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { AlertPlugin } from 'vux'
import './filter'
import {apiService, apiUrl, urlParams} from '@/api'
Vue.use(AlertPlugin);

window.userId=""

Vue.config.productionTip = false
router.beforeEach((to, from, next)=>{
	if(window.userId === "" && to.path == '/'){
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
    	apiService.requestGet(apiUrl.baseUrl +"oauth/getCode/" +  code).then((res)=>{
		 	console.log(res);
		 	if(res.data){
			 	window.userId = res.data.id;
			 }else {
			 	window.userId = 0;
		    }
		 	next({name: name, query: {
		 		itemid: itemid,
		 		id: articleid,
		 		userId: window.userId
		 	}});


		 }, (res)=>{
		 	console.log("失败");
		 })
	}else {
		next();
	}
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
