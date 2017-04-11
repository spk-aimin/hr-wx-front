let baseUrl = "/";
if(window.location.hostname.indexOf("localhost") > -1 || window.location.hostname.indexOf("123.207.119.252")> -1){
	baseUrl = "/DataServer/"
} else {
	baseUrl = "http://runhua.applinzi.com/"
}
export default {
	article:{//文章
		detail: baseUrl + "article/getArticle/0/1",//文章详情请求接口
		list: baseUrl+ "article/getArticle/0/1" //文章列表请求接口
	},
	baseUrl: baseUrl
	
}