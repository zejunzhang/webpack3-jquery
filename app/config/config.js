import dev from './config-dev';
import sit from './config-sit';
import formal from './config-prd';
let baseUrl = {};
const obj = {
   loginNative : 'nexuscommon://gotoLogin?params={param1:"", param2:""}',//app登录
   nativeShareUrl : 'nexusshare://share?params=',//app分享
   loginApi:'https://m-uat2.maxxipoint.com/regist/member/register.do?channelId=memberBill&sign=',
   loginApi:'https://m-uat2.maxxipoint.com/regist/member/register.do?channelId=memberBill&sign=',
};
const env = _ENV_;
const setVisit = window.location.origin;

if(env === 'build'){
    baseUrl = Object.assign(obj, formal);
}else if(env === 'build-test'){
    baseUrl = Object.assign(obj, sit);
}else{
    baseUrl = Object.assign(obj, dev);
}

export default baseUrl;