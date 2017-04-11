import Vue from 'vue'

//日期格式化
const dateParse = (value) => {

} 
//日期格式化 一分钟前 一个月前
const dateMoment= (value) => {

	return value;
}

Vue.filter("dateParse", dateParse);
Vue.filter("dateMoment", dateMoment);