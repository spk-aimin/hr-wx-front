<template>
	<div id= "article-detail" v-if="isShowPage">
		<div class="atc-container">
			<h2 class="atc-title">{{articleInfo.title}}</h2>
			<div class="tm-con">
				<span class="g-tx">{{articleInfo.createTime | dateParse}}</span>
				<span class="g-tx">{{articleInfo.createUserName}}</span>
				<a :href="articleInfo.linkOut" class="l-tx">{{articleInfo.itemName}}</a>
			</div>
			<div class="rich-content" v-html= "articleInfo.content">
			</div>
			<div class="atc-data">
				<span class="g-tx">阅读 {{articleInfo.readCount}}</span>
				<span class="g-tx" @click="operPraise()">
				    <!--{"fa-thumbs-o-up":!articleInfo.attach.praise, "thumbs-up":articleInfo.attach.praise}-->
				    <i class="fa" :class='articleInfo.attach.praise?"fa-thumbs-up":"fa-thumbs-o-up"'></i> {{praiseCount}}
				</span><!-- thumbs-up-->
				<a class="t-su">投诉</a>
			</div>
		</div>

		<div class="commnet">
			<div class="t-title">
				<p class="span">精选留言</p>
				<p class="line"></p>
			</div>
			<div class="w-comment">
				<router-link :to = '{name:"article.writeComment", query:{articleId: articleId, title: articleInfo.title, userId: userId}}'>写留言&nbsp;<i class="fa fa-pencil"></i></router-link>
			</div>
			<ul>
				<li class="com-item" v-for="item in comments">
					<div class="us-con">
						<img :src="item.imagePath">
					</div>
					<div class="msg">
						<div class="m-top">
							<span class="u-name">{{item.userName}}</span>
						</div>
						<div class="m-con" v-html="item.content">
						</div>
						<div class="m-btm">
							<span>{{item.createTime | dateMoment}}</span>
						</div>
					</div>
				</li>
			</ul>
			<div class="load" v-if="!isLoadComment&& isMoreComment" @click= "getMoreComment()">点击加载更多</div>
			<div class="load" v-if="!isMoreComment">没有更多了</div>
			<load-more v-if="isLoadComment" tip='正在加载……'></load-more>
		</div>

	</div>
</template>
<script>
    import {apiService, apiUrl} from '@/api'
	import { LoadMore } from 'vux'
	export default {
		data() {
			return {
				articleId: 0,
				articleInfo: {},
				isShowPage: false,
				comments: [],
				commentParams: {
					pageSize: 0,
					pageNum: 0
				},
				isLoadComment: false,
				isMoreComment:true,
				code: "",
				praiseCount: 0,
				userId: ""
			}
		},
		components: {
			LoadMore
		},
		methods:{
			getComment(){//加载评论
				var vm =this;
				vm.isLoadComment = true;
				apiService.requestGet(apiUrl.baseUrl + "judge/getJudge/"+vm.articleId+"/"+vm.commentParams.pageNum).then((res)=>{
					if(res.data.length != 0){
						for(var item of res.data){
							vm.comments.push(item);
						  }
						  vm.isMoreComment =true;
					}else {
						vm.isMoreComment = false;
					}
					vm.isLoadComment = false
					
				}, (res)=>{
					vm.isMoreComment = false;
					vm.isLoadComment = false
				});
			},
			getMoreComment(){
				var vm = this;
				vm.commentParams.pageNum += 1;
				vm.getComment();
			},
			operPraise() {
				var vm = this;
				if(vm.articleInfo.attach.praise){
					apiService.requestGet(apiUrl.baseUrl+ "judge/praiseCancle/" + vm.articleId+ "/" + vm.userId ).then((res)=>{
						vm.articleInfo.attach.praise = false;
						vm.praiseCount = vm.praiseCount -1;
					}, (res)=> {
						console.log(res.msg)
					})
				}else {
						apiService.requestGet(apiUrl.baseUrl+ "judge/praise/" + vm.articleId+ "/" + vm.userId ).then((res)=>{
						vm.articleInfo.attach.praise = true;
						vm.praiseCount = vm.praiseCount + 1;
					}, (res)=> {
						console.log(res.msg)
					})
				}
			}
		},
		created() {
			var vm = this;
			vm.articleId = this.$route.query.id;
			vm.code = this.$route.query.code;
			vm.userId= this.$route.query.userId;
			apiService.requestGet(apiUrl.baseUrl + "article/getArticleDetail/" + vm.articleId + "/"+vm.userId).then((res)=> {
				vm.articleInfo = res.data;
				vm.getComment();
				vm.isShowPage= true;
				vm.praiseCount =parseInt(vm.articleInfo.attach.praiseCount);
				vm.userId = vm.articleInfo.attach.userId;
			}, (res)=>{
				console.log("服务器错误");
			}).catch((e)=>{
				console.log(e);
			});
		},
		computed: {

		},
	}
</script>
<style lang='scss'>
    body {
    	background-color: #f3f3f3;
    }
	#article-detail {
		.atc-container{
			background-color: #fff;
			padding: 20px 15px 15px 15px;
		}
		.atc-title{
			font-size: 24px;
			line-height: 1.4;
			display: block;
			word-wrap: break-word;
			margin-bottom: 10px;
		}
		.tm-con {
			font-size: 0;
			line-height: 1;
			margin-bottom: 10px;
			.g-tx {
				display: inline-block;
				font-size: 16px;
				margin-right: 8px;
				margin-bottom: 10px;
				color: #999;
			}
			.l-tx {
				display: inline-block;
				color: #1062a9;
				font-size: 16px;
				margin-right: 8px;
				margin-bottom: 10px;
			}
		}
		.rich-content {
			line-height: 1.4;
			word-wrap: break-word;
			img{max-width: 100%; display: block; margin: 0 auto}
		}
		.atc-data {
			margin-top: 10px;
			color: #999;
			font-size: 0;
			line-height: 1;
			.g-tx{
				font-size: 16px;
				margin-right: 16px;
				display: inline-block;
			}
			em{
				vertical-align: text-top;
			}
			.t-su{
				display: inline-block;
				float: right;
				font-size: 16px
			}
			&:after{
				display: block;
				clear:both;
				content: " ";
				height: 0;
				visibility: hidden;;
				width: 100%;
			}
		}
		.commnet {
			padding: 20px 15px 15px 15px;
			.t-title{
				position: relative;
				.span{
					background-color: #f3f3f3;
					width: 100px;
					height: 40px;
					line-height: 40px;
					font-size: 16px;
					color: #666;
					text-align: center;
					margin: 0px auto;
					position: relative;
					z-index: 2;
				}
				.line {
					border-top: dashed 1px #999;
					height: 1px;
					position: absolute;
					width: 100%;
					z-index: 1;
					top: 20px;
				}
			}
			.w-comment {
				text-align: right;
				color: #1062a9;
				font-size: 16px;
				line-height: 1.4;
				a:link{
					color: #1062a9;
				}
				a:active{
					color: #1062a9;
				}
				a:visited {
					color: #1062a9;
				}
			}
			.com-item {
				display: -webkit-box;
				padding: 10px 0;
				.us-con {
					width: 40px;
					height: 40px;
					display: block;
					overflow: hidden;
					img{width: 100%}
				}
				.msg {
					padding-left: 10px;
					-webkit-box-flex:1;
					.m-top {
						height: 24px;
						u-name {
							font-size: 14px;
							line-height: 24px;
						}
					}
					.m-con {
						font-size: 16px;
						word-wrap: break-word;
						line-height: 22px;
					}
					.m-btm {
						margin-top: 8px;
						font-size: 12px;
						color: #999
					}
				}
			}
		}
		.load {
			font-size: 14px;
			text-align: center;
			line-height: 20px
		}
	}
</style>