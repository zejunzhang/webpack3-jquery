import './styles/base.scss';
import 'babel-polyfill';
import './common/rem';
import moment from 'moment';
import doT from 'dot';
import initPage from './init';
import Utils from './utils/utils';
import config from './config/config';
import './common/base64.js';
import './common/shenZeio';
// console log
// import VConsole from 'vconsole';
// new VConsole();
$.moment = moment; // 时间处理
$.doT = doT;
const isBrowser = Utils.isBrowser();
$.isFlag = '';

$(() => {
    new initPage();
});