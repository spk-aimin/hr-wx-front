import Vue from 'vue'
/*plugin*/
import Router from 'vue-router'
/*Componet*/
//import Hello from '@/components/Hello'
import ArticleList from '@/components/article/ArticleList'
import ArticleDetail from '@/components/article/ArticleDetail'
import WriteComment from '@/components/article/WriteComment'
import Welcome from '@/components/Welcome'

Vue.use(Router);


let routes = [{
       path: '/',
       name: 'welcome',
       component: Welcome
    },
    {//文章列表
      path: '/article-list',
      name: 'article.list',
      component: ArticleList
    }, {//文章
      path: '/article-detail',
      name: 'article.detail',
      component: ArticleDetail
    }, {//评论
      path: '/article-write-comment',
      name: 'article.writeComment',
      component: WriteComment
    }];

 const router = new Router({
  routes: routes
})

export default router;