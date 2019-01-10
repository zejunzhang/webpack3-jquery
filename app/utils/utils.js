import md5 from 'md5'

let Utils = {
    // 判断浏览器类型
    isBrowser: () => {
       
       const browser = 'native';
       console.log('browser:' + browser);
       return browser;
    },
   
    request: (name) => {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    isMobile: (val) => {
        const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        return reg.test(val);
    },
    //进行传参排序
    rawShart: (param,key) => {
		  var keys = Object.keys(param);
		  keys = keys.sort();
		  var newArgs = {};
		  keys.forEach(function (key) {
			    newArgs[key] = param[key];
		   });
		  var str = '';
		  for (var k in newArgs) {
			  if(k === 'channel'){
				  str += `${k}=${newArgs[k]}`;
			  }else{
				  str += `&${k}=${newArgs[k]}`;
			  }
			  
		  }
		  str = `${str}&key=${key}`;
		  //str = str.substr(1);
		  str = md5(str);
		  return str;
    },
   sendShenZeio:(title,obj) => {
		try{
			sa.track(title,obj);
		}catch(e){
			console.log(e.message);
		}
		
	}
};
export default Utils;