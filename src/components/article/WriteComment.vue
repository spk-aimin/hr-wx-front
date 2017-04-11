<template>
	<div id= "article-write-comment">
		<div class="atc-title">
			{{articleTitle}}
		</div>
		<div class="write">
		    <textarea @input="judEmpty()" placeholder="留言将由公众号筛选后显示，对所有人可见" maxlength="50" v-model="commentContent"></textarea>
		</div>
		<div class="send-btn">
			<button type="button" :class ="{gray:isEmpty}" @click="saveComment()">提交</button>
		</div>
	</div>
</template>
<script>
	import {apiService, apiUrl} from '@/api'
	export default {
		data(){
			return {
				commentContent: "",
				articleTitle: "",
				articleId: 0,
				isEmpty:true
			}
		},
		components: {

		},
		methods: {
			saveComment(){
				var vm =this;
				if(vm.commentContent.trim() == ""){
					return;
				}
				apiService.requestGet(apiUrl.baseUrl + "/judge/addJudge", {content: vm.commentContent, articleId: vm.articleId}).then ((res)=>{
					window.location.href = window.location.origin+"/#/article-detail?id="+vm.articleId;
				},(res)=>{
					console.log("服务器错误");
				})
			},
			judEmpty(){
				var vm =this;
				if(vm.commentContent.trim() == ""){
					vm.isEmpty = true;
				}else {
					vm.isEmpty=false;
				}
			}
		},
		created(){
			var vm = this;
			vm.articleTitle = vm.$route.query.title;
			vm.articleId = vm.$route.query.articleId;
		},
		computed: {

		},
		watch: {

		}
	}
</script>
<style lang="scss">
	#article-write-comment {
		.atc-title {
			font-size: 24px;
			line-height: 1.4;
			padding: 10px 20px;
		}
		.write {
			background: #fff;
			padding: 10px 20px;
			textarea {
				border:none;
				resize: none;
				height: 60px;
				font-size: 14px;
				line-height: 20px;
				width: 100%;
				display: block;
			}
		}
		.send-btn {
			padding: 20px;
			button {
				border:none;
				background:#09BB07;
				color: #fff;
				font-size: 18px;
				line-height: 36px;
				height: 36px;
				text-align: center;
				border:none;
				border-radius: 5px;
				width: 100%;
				display: block;
				&.gray{
					color: #e5e5e5;
				}
			}

		}
	}
</style>