import Promise from 'promise'
import Vue from 'vue'
import VueResource from 'vue-resource'
import url from './apiUrl'
import UrlParams from './urlParams'

Vue.use(VueResource);
export class ApiService {
	construct(){

	}
	/**
	 *@dec Get方式请求接口
	 *@param url 请求地址
	 *@param params 请求参数
	 **/
	requestGet(url, params){
		var promise = new Promise((resolve, reject) => {
			Vue.http.get(url, {params: params}).then((rep)=>{
				if(rep.data.code == 0){
					resolve(rep.data);
				}else {
					reject(rep.data);
				}
			}, (rep)=>{
				reject(rep.data);
			}).catch((e) => {
				console.log("请求失败")
			});
		});
		return promise;
	}
	/**
	 *@dec Post方式请求接口
	 *@param url 请求地址
	 *@param params 请求参数
	 **/
	requestPost(url, params) {
		var promise = new Promise((resolve, reject) => {
			Vue.http.post(url, {params: params}).then((rep)=>{
				if(rep.data.code == 0){
					resolve(rep.data);
				}else {
					reject(rep.data);
				}
			}, (rep)=>{
				reject(rep.data);
			}).catch((e) => {
				console.log("请求失败")
			});
		});
		return promise;
	}
}
/*module.exports = {
	ApiService: ApiService,
	apiService: new ApiService()
} */
export const apiService = new ApiService();
export const apiUrl = url
export const urlParams = UrlParams