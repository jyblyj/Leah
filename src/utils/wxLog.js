import Taro from '@tarojs/taro';

/**
 * 微信小程序实时日志
 * @url https://developers.weixin.qq.com/miniprogram/dev/framework/realtimelog/
 * 为帮助小程序开发者快捷地排查小程序漏洞、定位问题，我们推出了实时日志功能。
 * 从基础库2.7.1开始，开发者可通过提供的接口打印日志，日志汇聚并实时上报到小程序后台。
 * 开发者可从小程序管理后台“开发->运维中心->实时日志”进入日志查询页面，查看开发者打印的日志信息
 */
const log = Taro.getRealtimeLogManager ? Taro.getRealtimeLogManager() : null

const wxLog = {
    info() {
        if (!log) return
        log.info.apply(log, arguments)
    },
    warn() {
        if (!log) return
        log.warn.apply(log, arguments)
    },
    error() {
        if (!log) return
        log.error.apply(log, arguments)
    },
    setFilterMsg(msg) { // 从基础库2.7.3开始支持
        if (!log || !log.setFilterMsg) return
        if (typeof msg !== 'string') return
        log.setFilterMsg(msg)
    },
    addFilterMsg(msg) { // 从基础库2.8.1开始支持
        if (!log || !log.addFilterMsg) return
        if (typeof msg !== 'string') return
        log.addFilterMsg(msg)
    }
}

export default wxLog;