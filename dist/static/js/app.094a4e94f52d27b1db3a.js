webpackJsonp([1],[,,,,,,,,,,,,function(t,e,a){"use strict";var i=a(66),n=a.n(i),s=a(67),o=a.n(s),r=a(112),c=a.n(r),l=a(11),u=a(127),d=a.n(u),m=a(51),f=a(52);a.d(e,"a",function(){return p}),a.d(e,"b",function(){return h}),a.d(e,"c",function(){return _}),l.a.use(d.a);var v=function(){function t(){n()(this,t)}return o()(t,[{key:"construct",value:function(){}},{key:"requestGet",value:function(t,e){return new c.a(function(a,i){l.a.http.get(t,{params:e}).then(function(t){0==t.data.code?a(t.data):i(t.data)},function(t){i(t.data)}).catch(function(t){console.log("请求失败")})})}},{key:"requestPost",value:function(t,e){return new c.a(function(a,i){l.a.http.post(t,{params:e}).then(function(t){0==t.data.code?a(t.data):i(t.data)},function(t){i(t.data)}).catch(function(t){console.log("请求失败")})})}}]),t}(),p=new v,h=m.a,_=f.a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){a(105);var i=a(2)(a(55),a(122),null,null);t.exports=i.exports},,function(t,e,a){"use strict";var i=a(11),n=function(t){return t.substr(0,10)},s=function(t){var e=new Date,a=new Date(t),i=e.getTime()-a.getTime();return Math.ceil(i/6e4)<60?Math.ceil(i/6e4)+"分钟前":Math.ceil(i/36e5)<24?Math.ceil(i/36e5)+"小时前":Math.ceil(i/864e5)<30?Math.ceil(i/864e5)+"天前":Math.ceil(i/2592e6)<12?Math.ceil(i/2592e6)+"月前":t};i.a.filter("dateParse",n),i.a.filter("dateMoment",s)},function(t,e,a){"use strict";var i=a(11),n=a(128),s=a(134),o=a.n(s),r=a(133),c=a.n(r),l=a(135),u=a.n(l),d=a(132),m=a.n(d);i.a.use(n.a);var f=[{path:"/",name:"welcome",component:m.a},{path:"/article-list",name:"article.list",component:o.a},{path:"/article-detail",name:"article.detail",component:c.a},{path:"/article-write-comment",name:"article.writeComment",component:u.a}],v=new n.a({routes:f});e.a=v},,function(t,e,a){a(107),a(106);var i=a(2)(a(57),a(123),null,null);t.exports=i.exports},,function(t,e,a){"use strict";var i="/",n=!1;window.location.hostname.indexOf("localhost")>-1?(i="/",n=!0):i="/",e.a={article:{detail:i+"article/getArticle/0/1",list:i+"article/getArticle/0/1"},baseUrl:i,TEST:n}},function(t,e,a){"use strict";e.a=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(e);return null!=a?unescape(a[2]):null}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(11),n=a(49),s=a.n(n),o=a(47),r=a(48);a(46);i.a.use(r.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(131),n=a.n(i);e.default={components:{XDialog:n.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{showLoading:{type:Boolean,default:!0},tip:String,backgroundColor:String},methods:{getStyle:function(){if(!this.showLoading&&this.tip)return{"background-color":this.backgroundColor}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){void 0!==this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(12);e.default={created:function(){var t=this,e=4,n=a.i(i.c)("type"),s=a.i(i.c)("articleid"),o=a.i(i.c)("code"),r=a.i(i.c)("itemid"),c="";switch(n){case"article-list":c="article.list";break;case"article-detail":c="article.detail";break;default:c="welcome"}this.$router.push({name:c,query:{itemid:r,code:o,id:s,userId:e}}),i.a.requestGet(i.b.baseUrl+"oauth/getCode/"+o).then(function(a){e=a.data.id,t.$route.router.go({name:c,query:{itemid:r,code:o,id:s,userId:e}})},function(t){console.log("失败")})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(33),n=a.n(i),s=a(12),o=a(44),r=a.n(o);e.default={data:function(){return{articleId:0,articleInfo:{},isShowPage:!1,comments:[],commentParams:{pageSize:0,pageNum:0},isLoadComment:!1,isMoreComment:!0,code:"",praiseCount:0,userId:""}},components:{LoadMore:r.a},methods:{getComment:function(){var t=this;t.isLoadComment=!0,s.a.requestGet(s.b.baseUrl+"judge/getJudge/"+t.articleId+"/"+t.commentParams.pageNum).then(function(e){if(0!=e.data.length){var a=!0,i=!1,s=void 0;try{for(var o,r=n()(e.data);!(a=(o=r.next()).done);a=!0){var c=o.value;t.comments.push(c)}}catch(t){i=!0,s=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw s}}t.isMoreComment=!0}else t.isMoreComment=!1;t.isLoadComment=!1},function(e){t.isMoreComment=!1,t.isLoadComment=!1})},getMoreComment:function(){var t=this;t.commentParams.pageNum+=1,t.getComment()},operPraise:function(){var t=this;t.articleInfo.attach.praise?s.a.requestGet(s.b.baseUrl+"judge/praiseCancle/"+t.articleId+"/"+t.userId).then(function(e){t.articleInfo.attach.praise=!1,t.praiseCount=t.praiseCount-1},function(t){console.log(t.msg)}):s.a.requestGet(s.b.baseUrl+"judge/praise/"+t.articleId+"/"+t.userId).then(function(e){t.articleInfo.attach.praise=!0,t.praiseCount=t.praiseCount+1},function(t){console.log(t.msg)})}},created:function(){var t=this;t.articleId=this.$route.query.id,t.code=this.$route.query.code,t.userId=this.$route.query.userId,s.a.requestGet(s.b.baseUrl+"article/getArticleDetail/"+t.articleId+"/"+t.userId).then(function(e){t.articleInfo=e.data,t.getComment(),t.isShowPage=!0,t.praiseCount=parseInt(t.articleInfo.attach.praiseCount),t.userId=t.articleInfo.attach.userId},function(t){console.log("服务器错误")}).catch(function(t){console.log(t)})},computed:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(33),n=a.n(i),s=a(12),o=a(44),r=a.n(o);e.default={components:{LoadMore:r.a},data:function(){return{dataList:[],paramList:{pageNum:0,pageSize:2,itemid:""},isLoad:!1,isNext:!0,code:"",origin:"",userId:0}},created:function(){var t=this;t.paramList.itemid=this.$route.query.itemid,t.code=this.$route.query.code,t.userId=this.$route.query.userId,t.origin=window.location.origin,t.getArticleList()},methods:{getArticleList:function(){var t=this,e=s.b.baseUrl+"article/getArticle/"+t.paramList.pageNum+"/"+t.paramList.pageSize+"/"+t.paramList.itemid;s.a.requestGet(e).then(function(e){if(0!=e.data.length){var a=!0,i=!1,s=void 0;try{for(var o,r=n()(e.data);!(a=(o=r.next()).done);a=!0){var c=o.value;t.dataList.push(c)}}catch(t){i=!0,s=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw s}}t.isNext=!0}else t.isNext=!1;t.isLoad=!1},function(e){console.log("数据错误"),t.isNext=!1,t.isLoad=!1})},getArticleListMore:function(){var t=this;t.paramList.pageNum=t.paramList.pageNum+1,t.getArticleList(),t.isLoad=!0}},computed:{},watch:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(12);e.default={data:function(){return{commentContent:"",articleTitle:"",articleId:0,isEmpty:!0,userId:""}},components:{},methods:{saveComment:function(){var t=this,e=this;""!=e.commentContent.trim()&&i.a.requestGet(i.b.baseUrl+"judge/addJudge",{content:e.commentContent,articleid:e.articleId,userid:e.userId}).then(function(a){t.$router.push({name:"article.detail",query:{id:e.articleId,userId:e.userId}})},function(t){console.log("服务器错误")})},judEmpty:function(){var t=this;""==t.commentContent.trim()?t.isEmpty=!0:t.isEmpty=!1}},created:function(){var t=this;t.articleTitle=t.$route.query.title,t.articleId=t.$route.query.articleId,t.userId=t.$route.query.userId},computed:{},watch:{}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowPage?a("div",{attrs:{id:"article-detail"}},[a("div",{staticClass:"atc-container"},[a("h2",{staticClass:"atc-title"},[t._v(t._s(t.articleInfo.title))]),t._v(" "),a("div",{staticClass:"tm-con"},[a("span",{staticClass:"g-tx"},[t._v(t._s(t._f("dateParse")(t.articleInfo.createTime)))]),t._v(" "),a("span",{staticClass:"g-tx"},[t._v(t._s(t.articleInfo.createUserName))]),t._v(" "),a("a",{staticClass:"l-tx",attrs:{href:t.articleInfo.linkOut}},[t._v(t._s(t.articleInfo.itemName))])]),t._v(" "),a("div",{staticClass:"rich-content",domProps:{innerHTML:t._s(t.articleInfo.content)}}),t._v(" "),a("div",{staticClass:"atc-data"},[a("span",{staticClass:"g-tx"},[t._v("阅读 "+t._s(t.articleInfo.readCount))]),t._v(" "),a("span",{staticClass:"g-tx",on:{click:function(e){t.operPraise()}}},[a("i",{staticClass:"fa",class:t.articleInfo.attach.praise?"fa-thumbs-up":"fa-thumbs-o-up"}),t._v(" "+t._s(t.praiseCount)+"\n\t\t\t")]),t._v(" "),a("a",{staticClass:"t-su"},[t._v("投诉")])])]),t._v(" "),a("div",{staticClass:"commnet"},[t._m(0),t._v(" "),a("div",{staticClass:"w-comment"},[a("router-link",{attrs:{to:{name:"article.writeComment",query:{articleId:t.articleId,title:t.articleInfo.title,userId:t.userId}}}},[t._v("写留言 "),a("i",{staticClass:"fa fa-pencil"})])],1),t._v(" "),a("ul",t._l(t.comments,function(e){return a("li",{staticClass:"com-item"},[a("div",{staticClass:"us-con"},[a("img",{attrs:{src:e.imagePath}})]),t._v(" "),a("div",{staticClass:"msg"},[a("div",{staticClass:"m-top"},[a("span",{staticClass:"u-name"},[t._v(t._s(e.userName))])]),t._v(" "),a("div",{staticClass:"m-con",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),a("div",{staticClass:"m-btm"},[a("span",[t._v(t._s(t._f("dateMoment")(e.createTime)))])])])])})),t._v(" "),!t.isLoadComment&&t.isMoreComment?a("div",{staticClass:"load",on:{click:function(e){t.getMoreComment()}}},[t._v("点击加载更多")]):t._e(),t._v(" "),t.isMoreComment?t._e():a("div",{staticClass:"load"},[t._v("没有更多了")]),t._v(" "),t.isLoadComment?a("load-more",{attrs:{tip:"正在加载……"}}):t._e()],1)]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t-title"},[a("p",{staticClass:"span"},[t._v("精选留言")]),t._v(" "),a("p",{staticClass:"line"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-alert"},[a("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[a("div",{staticClass:"weui-dialog__hd"},[a("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"weui-dialog__bd"},[t._t("default",[a("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),a("div",{staticClass:"weui-dialog__ft"},[a("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"article-write-comment"}},[a("div",{staticClass:"atc-title"},[t._v("\n\t\t"+t._s(t.articleTitle)+"\n\t")]),t._v(" "),a("div",{staticClass:"write"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],attrs:{placeholder:"留言将由公众号筛选后显示，对所有人可见",maxlength:"50"},domProps:{value:t.commentContent},on:{input:[function(e){e.target.composing||(t.commentContent=e.target.value)},function(e){t.judEmpty()}]}})]),t._v(" "),a("div",{staticClass:"send-btn"},[a("button",{class:{gray:t.isEmpty},attrs:{type:"button"},on:{click:function(e){t.saveComment()}}},[t._v("提交")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-loadmore",class:{"weui-loadmore_line":!t.showLoading,"weui-loadmore_dot":!t.showLoading&&!t.tip}},[t.showLoading?a("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tip||!t.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips",style:t.getStyle()},[t._v(t._s(t.tip))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[a("transition",{attrs:{name:t.maskTransition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(e){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),a("transition",{attrs:{name:t.dialogTransition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataList.length>0?a("div",{attrs:{id:"article-list"}},[a("ul",{staticClass:"list"},[t._l(t.dataList,function(e,i){return[0==i?a("li",[a("router-link",{staticClass:"li1",attrs:{to:{name:"article.detail",query:{id:e.id,userId:t.userId}}}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.origin+e.titleImage}}),t._v(" "),a("p",{staticClass:"title"},[t._v(t._s(e.title))])])])],1):t._e(),t._v(" "),0!=i?a("li",{staticClass:"li2"},[a("router-link",{staticClass:"tr",attrs:{to:{name:"article.detail",query:{id:e.id,userId:t.userId}}}},[a("table",[a("tr",[a("td",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("td",[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.origin+e.titleImage}})])])])])])],1):t._e()]})],2),t._v(" "),!t.isLoad&&t.isNext?a("div",{staticClass:"load",on:{click:function(e){t.getArticleListMore()}}},[t._v("点击加载更多")]):t._e(),t._v(" "),t.isNext?t._e():a("div",{staticClass:"load"},[t._v("没有更多了")]),t._v(" "),t.isLoad?a("load-more",{attrs:{tip:"正在加载……"}}):t._e()],1):t._e()},staticRenderFns:[]}},,,,function(t,e,a){a(103);var i=a(2)(a(54),a(120),null,null);t.exports=i.exports},function(t,e,a){a(108);var i=a(2)(a(56),a(124),null,null);t.exports=i.exports},function(t,e,a){a(109);var i=a(2)(a(58),a(125),null,null);t.exports=i.exports},function(t,e,a){a(102);var i=a(2)(a(59),a(119),null,null);t.exports=i.exports},function(t,e,a){a(110);var i=a(2)(a(60),a(126),null,null);t.exports=i.exports},function(t,e,a){a(104);var i=a(2)(a(61),a(121),null,null);t.exports=i.exports},function(t,e){}],[53]);
//# sourceMappingURL=app.094a4e94f52d27b1db3a.js.map