import Vue from 'vue'

//日期格式化 2010-05-03  15:23
const dateParse = (value) => {
	return value.substr(0,10);
} 
//日期格式化 一分钟前 一个月前
const dateMoment= (value) => {
	var now = new Date();
	var dp = new Date(value);
	var mins = now.getTime() - dp.getTime();
	if(Math.ceil(mins/(1000*60)) < 60){
		return Math.ceil(mins/(1000*60))+"分钟前"

	}else if(Math.ceil(mins/(1000*60*60)) < 24){
		return Math.ceil(mins/(1000*60*60)) + "小时前"
	}else if(Math.ceil(mins/(1000*60*60*24))< 30){
		return Math.ceil(mins/(1000*60*60*24)) +"天前"
	}else if (Math.ceil(mins/(1000*60*60*24*30))<12){
		return Math.ceil(mins/(1000*60*60*24*30)) + "月前"
	} else {
		return value;
	}
}

Vue.filter("dateParse", dateParse);
Vue.filter("dateMoment", dateMoment);