<template>
	<div id= "article-list" v-if="dataList.length >0">
		<ul class="list" >
			<template v-for = "(item, index) in dataList">
				<li v-if ="index == 0">
					<router-link class="li1" :to = '{name: "article.detail", query: {id: item.id, userId: userId}}'>
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
										<img :src="origin + item.titleImage">
									</div>
							   </td>
							</tr>
						</table>
					</router-link>
				</li>
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
						for(var item of res.data){
							vm.dataList.push(item);
						}
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

		}
	}
</script>
<style lang="scss">
	#article-list{
		.list {
			a:link{
			color: #1062a9;
			}
			a:active{
				color: #1062a9;
			}
			a:visited {
				color: #1062a9;
			}
			padding: 15px 7px 7px 7px;
			background-color: #fff;
			.li1 {
				display: block;
				padding-bottom: 7px;
				.img-box {
					width: 100%;
					//height: 6rem;
					min-height: 30px;
					display: block;
					position: relative;
					overflow: hidden;
					img {
						width: 100%;
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
				display: block;
				padding: 8px 0;
				border-top: solid 1px #e5e5e5;
				width: 100%;
				table{
					width: 100%;
				}
				table td {
					height: 50px;
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
					height: 50px;
					img {
						width: 100%;
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