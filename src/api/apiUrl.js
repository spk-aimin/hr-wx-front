let baseUrl = "/";
let TEST = false;
if(window.location.hostname.indexOf("localhost") > -1){
	baseUrl = "/"
	TEST = true
} else {
	baseUrl = "/"
}
export default {
	article:{//文章
		detail: baseUrl + "article/getArticle/0/1",//文章详情请求接口
		list: baseUrl+ "article/getArticle/0/1" //文章列表请求接口
	},
	baseUrl: baseUrl,
	TEST: TEST
	
}