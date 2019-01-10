'use strict';
import wx from 'weixin-js-sdk';
import Utils from '../utils/utils';
import './base64';
import configApi from'../config/config'
class weiLib {
    constructor(flag) {
        if (flag) {
            this.weinInit(flag);
        }
    }
    weinInit(flag) {
            if (flag === 'native') {
                this.nativeLogin();
            } else if (flag === 'weixin') {
                this.receiveDo();
            } else {
                this.mobileLogin();
            }
     }
    //禁除分享入口
    static weixxinErr() {
        var obj = {};
        var _url = window.location.href;
        obj.url = _url;
        obj.channel = 'dianbiaoActiny';
        var _sign = Utils.rawShart(obj, `${configApi.uatShareKey}`);
        obj.sign = _sign;
        GetShareIp(obj).then((data) => {
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow'
                ]
            });
            wx.ready(() => {
                wx.hideAllNonBaseMenuItem();
            })
        }).catch(err => {
            console.log(err)
        })
    }
    //微信登录入口
    weixinLogin() {

    }
    //通用接口
    nativeLogin() {
            
    }
     //H5登录
    mobileLogin() {
           

    }
    //微信界面分享
    static Share(param, fn = null) {
            var obj = {};
            var _url = window.location.href;
            var link = `${configApi.uatStatic}/receive.html?utm_source=weixin&utm_term=receive&${param.shareParam}`;
            obj.url = _url;
            obj.channel = 'jdqsActiny';
            var _sign = Utils.rawShart(obj, `${configApi.uatShareKey}`);
            obj.sign = _sign;
            GetShareIp(obj).then((data) => {
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow'
                    ]
                });
                wx.ready(() => {
                    wx.hideMenuItems({
                        menuList: [
                            //'menuItem:share:timeline',
                            'menuItem:share:qq',
                            'menuItem:share:QZone',
                            'menuItem:share:weiboApp',
                            'menuItem:openWithQQBrowser',
                            'menuItem:openWithSafari',
                            'menuItem:copyUrl'
                            //'menuItem:share:timeline'
                        ]
                    });
                    wx.onMenuShareTimeline({
                        title: param.title, // 分享标题
                        desc: param.shareDesc, // 分享描述
                        link: link, // 分享链接
                        imgUrl: param.thumImage, // 分享图标
                        success: () => {
                            if (fn) {
                                fn();
                            }
                        },
                        cancel: () => {}
                    });
                    wx.onMenuShareAppMessage({
                        title: param.title, // 分享标题
                        desc: param.shareDesc, // 分享描述
                        link: link, // 分享链接
                        imgUrl: param.thumImage, // 分享图标
                        //type: '', // 分享类型,music、video或link，不填默认为link
                        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: () => {
                            if (fn) {
                                fn();
                            }
                        },
                        cancel: () => {}
                    });
                });
            }).catch(error => {
                console.log(error)
            });
        }

    // 分享
   static shareInfo() {
        var _hre = window.location.href.split('.html');
        var _href = _hre[0].split('/');
        var _locat = _href[_href.length - 1];
        var link = '';
        var title = '';
        if (_locat === 'share') {
            wx.ready(() => {
                wx.hideMenuItems({
                    menuList: [
                        //'menuItem:share:timeline',
                        'menuItem:share:qq',
                        'menuItem:share:QZone',
                        'menuItem:share:weiboApp',
                        'menuItem:openWithQQBrowser',
                        'menuItem:openWithSafari',
                        'menuItem:copyUrl'
                        //'menuItem:share:timeline'
                    ]
                });
            });
        } else {
            link = `${configApi.uatStatic}/index.html?utm_source=weixin&utm_term=index`;
            title = 'index.html！';
            var obj = {};
            var _url = window.location.href;
            obj.url = _url;
            obj.channel = 'jdqsActiny';
            var _sign = Utils.rawShart(obj, `${configApi.uatShareKey}`);
            obj.sign = _sign;
            console.log(obj);
            GetShareIp(obj).then((data) => {
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow'
                    ]
                });
                wx.ready(() => {
                    wx.hideMenuItems({
                        menuList: [
                            //'menuItem:share:timeline',
                            'menuItem:share:qq',
                            'menuItem:share:QZone',
                            'menuItem:share:weiboApp',
                            'menuItem:openWithQQBrowser',
                            'menuItem:openWithSafari',
                            'menuItem:copyUrl'
                        ]
                    });
                    wx.onMenuShareTimeline({
                        title: title, // 分享标题
                        link: link, // 分享链接
                        imgUrl: `${configApi.uatStatic}/images/shareAct.jpg`, // 分享图标
                        desc: '集合，到我这里来！我这里有【德克士脆皮炸鸡一年免费畅吃】【全家湃客咖啡一年免费畅饮】 【iPhoneX】',
                        success: () => {},
                        cancel: () => {}
                    });
                    wx.onMenuShareAppMessage({
                        title: title, // 分享标题
                        desc: 'dd', // 分享描述
                        link: link, // 分享链接
                        imgUrl: `${configApi.uatStatic}/images/shareAct.jpg`, // 分享图标
                        //type: '', // 分享类型,music、video或link，不填默认为link
                        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: () => {},
                        cancel: () => {}
                    });
                });
            }).catch(error => {
                console.log(error)
            });
        }
    }
    // app菜单分享
    static shareAPPMenu(param,fn = null) {
        var urlShare = [`WeiXin`, `WeiXinFriends`];
        let url = location.href.includes('giveT.html');
        if(url){
            urlShare.unshift('urlShare');
        }
        const params = {
            title: param.title,
            shareDesc:param.desc,
            thumImage: param.img,
            shareUrl: `${configApi.static}/openGet.html?${param.behaveId}`,
            shareStatus: 1,
            platformType: urlShare
        }
        const str = BASE64.encoder(JSON.stringify(params));
        const appMenu = `nexusshare://shareContent?params=${str}`;
        setTimeout(() => {
            location.href = appMenu;
        }, 80);
    }
}
export default weiLib;