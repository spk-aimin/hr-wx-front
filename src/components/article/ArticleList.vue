<template>
	<div id= "article-list" v-if="dataList.length >0">
		<ul class="list" >
			<template v-for = "ptem in dataList">
			  <template v-for="(item, index) in ptem">
				  	<li v-if ="index == 0" class="li1">
				  	    <div class="time">
				  	    	<span class="dd">{{item.createTime | listTime}}</span>
				  	    </div>
						<router-link :to = '{name: "article.detail", query: {id: item.id, userId: userId}}'>
							<div class="img-box">
								<img :src="origin+item.titleImage">
								<p class="title">{{item.title}}</p>
							</div>
						</router-link>
					</li>
					<li class="li2" v-if="index !=0">
						<router-link  class = 'tr' :to='{name: "article.detail", query: {id: item.id, userId: userId}}'>
							<table>
								<tr>
									<td class="title">{{item.title}}</td>
									<td>
										<div class="img-box">
											<img :src="item.titleImage">
										</div>
								   </td>
								</tr>
							</table>
						</router-link>
					</li>
			  </template>
			</template>
		</ul>
		<div v-if="!isLoad&&isNext" class="load" @click = "getArticleListMore()">点击加载更多</div>
		<div class="load" v-if="!isNext">没有更多了</div>
		<load-more v-if="isLoad" tip='正在加载……'></load-more>
	</div>
</template>
<script>
    import {apiService, apiUrl} from '@/api'
	import { LoadMore } from 'vux'
	export default {
		components: {
			LoadMore
		},
		data() {
			return {
				dataList: [],
				paramList: {//文章列表
					pageNum: 0,
					pageSize: 2,
					itemid: ""
				},
				isLoad:false,
				isNext: true,
				code: '',
				origin: '',
				userId: 0
			}
		},
		created() {
			var vm = this;
			vm.paramList.itemid = this.$route.query.itemid;
			vm.code = this.$route.query.code;
			vm.userId = this.$route.query.userId;
			vm.origin = window.location.origin
			vm.getArticleList();
		},
		methods: {
			getArticleList() {//获取文章列表
				var vm = this;
				var url = apiUrl.baseUrl + "article/getArticle/"+ vm.paramList.pageNum+ "/" + vm.paramList.pageSize+ '/'+ vm.paramList.itemid;
				apiService.requestGet(url).then((res)=> {
					if(res.data.length != 0){
						vm.dataList.push(res.data);
						// for(var item of res.data){
						// 	vm.dataList.push(item);
						// }
						vm.isNext = true;
					}else {
						vm.isNext =false;
					}
					vm.isLoad = false;
					 
				},(res)=> {
					console.log("数据错误");
					vm.isNext =false;
					vm.isLoad = false;
				})
			},
			getArticleListMore(){
				var vm =this;
				vm.paramList.pageNum = vm.paramList.pageNum +1;
				vm.getArticleList();
				vm.isLoad= true;
			}

		},
		computed: {

		},
		watch: {

		},
		filters: {
			listTime (val){
			var week = ['星期日', '星期一','星期二' ,'星期三' ,'星期四','星期五', '星期六'];
			function getTime(tm){
				var date = new Date(tm);
				return {
					y: date.getFullYear(),
					m: date.getMonth()+1,
					d: date.getDate(),
					h: date.getHours(),
					min: date.getMinutes(),
					w: date.getDay()
				}
			}
			function twoParse(val){
				var v = val.toString();
				return v.length == 2 ? v: '0'+ v;
			}

			function hpp (val){
				var tep = "";
				if(so.h - 12 < 0){
					tep = '上午 ' + so.h;
				}else if(so.h - 12 ==0) {
					tep = '中午 ' + so.h;
				}else {
					tep = '下午 ' + (so.h - 12);
				}


				return tep;
			}

			function wpp (val){
				return week[val];
			}
				var now = new Date();
				var sd = new Date(val);
				var no = getTime(now.getTime());
				var so = getTime(sd.getTime());
				var h2 = 48*60*60*1000;

				var d7 = 24*60*60*1000*6;
				if(now.getTime() - sd.getTime() < h2){
					if(no.d - so.d  == 0){
						return hpp(so.h) + ':' + twoParse(so.min);
					} else if (no.d - so.d == 1){
						return '昨天 '+ hpp(so.h) + ':' + twoParse(so.min);
					} else {
						return week[so.w]  + hpp(so.h) + ':' + twoParse(so.min);
					}
				}else if(now.getTime() - sd.getTime() < d7){
					return week[so.w]  + hpp(so.h) + ':' + twoParse(so.min);

				} else {
					 return  so.y + '年' + so.m+ '月' + so.d + '日  ' + hpp(so.h) + ':' + twoParse(so.min);
				}
			}
		}
	}
</script>
<style lang="scss">
	#article-list{
		.list {
			a:link{
			color: #333;
			}
			a:active{
				color: #333;
			}
			a:visited {
				color: #333;
			}
			padding: 15px 7px 7px 7px;
			.li1 {
				.time {
					position: absolute;
					width: 100%;
					font-size: 12px;
					height: 20px;
					line-height: 20px;
					text-align: center;
					top: -40px;
					.dd {
						padding: 0 6px;
						color: #fff;
						background-color: rgba(0,0,0,0.4);
						border-radius: 5px;
						display: inline-block;
					}
				}
				display: block;
				padding-bottom: 7px;
				padding-top: 7px;
				margin-top: 60px;
				background-color:#fff;
				position: relative;
				.img-box {
					width: 100%;
					//height: 6rem;
					min-height: 30px;
					display: block;
					position: relative;
					overflow: hidden;
					img {
						width: 100%;
						display: block;
					}
					.title{
						background-color: rgba(0,0,0,.6);
						height: 30px;
						line-height: 30px;
						padding: 0 8px;
						color: #fff;
						font-size: 18px; 
						position: absolute;
						left: 0;
						bottom: 0;
						overflow: hidden;
						width: 100%
					}
				}
			}
			.li2 {
				background-color:#fff;
				display: block;
				padding: 8px 0;
				border-top: solid 1px #e5e5e5;
				width: 100%;
				table{
					width: 100%;
				}
				table td {
				}
				table td:last-child {
					width: 50px;
				}
				.title {
					font-size: 16px;
					line-height: 20px;
					padding-right: 15px;
					overflow: hidden;
				}
				.img-box {
					display: block;
					width: 50px;
					overflow: hidden;
					//max-height: 50px;
					img {
						width: 100%;
						display: block;
					}
				}
			}
		}
		.load {
			font-size: 14px;
			text-align: center;
			line-height: 20px;
			margin-top: 10px
		}
	}
</style>