var ipdb = require('../node_modules/ipip-ipdb/index')
var cookieParser = require('cookie')
var country = 'en'
var countryMap = {
    '中国': 'cn',
    '本机地址': 'cn',
    '荷兰': 'nl',
    '美国': 'en',
    '法国': 'fr',
    '德国': 'de',
    '日本': 'jp',
}

export default function ({ req, res, store, redirect, env }) {
    //var ip = req.connection.remoteAddress || req.socket.remoteAddress
    //console.log(ip);
    //var ip = "88.159.13.198" //nl
    //var ip = "111.92.162.4" //id

    var ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress
    console.log(ip);

    //从IP中解析地区信息
    var city = new ipdb.City(process.cwd() + '/ipipfree.ipdb')
    var cityInfo = city.findInfo(ip, "CN")
    console.log(cityInfo)

    //获取地区信息，并指定地区
    var cookie = ('cookie' in req.headers) ? cookieParser.parse(req.headers['cookie']) : {}
    console.log('Cookie:' + req.headers['cookie'])
    if ('country' in cookie) {
        // 如果Cookie非空，使用Cookie记录作为指定地区
        country = cookie['country']
    } else {
        // 如果Cookie为空，使用IP解析地区作为指定地区
        var countryName = cityInfo["countryName"]
        if ( countryMap[countryName] ) {
            country = countryMap[countryName]
        }
        //res.setHeader('Cookie', ['country=' + country])
    }
    console.log('country:' + country)

    //保存数据，用于前端展示
    store.commit("SET_CITY", cityInfo)
    store.commit("SET_IP", ip)
    store.commit("SET_COUNTRY", country)


    //地区跳转逻辑
    //不在当前项目，进行跳转访问国内官网项目
    if (country == 'cn' ) {
        redirect(env.baseUrlLocal)
    }

    //在当前项目，判断URL是否为指定地区
    var url_parsed = require('url').parse(req.url)
    var pathname_arr = url_parsed.pathname.split('/')
    //URL未指定地区 //1.没有任何路径 //2.TODO 有路径,没有地区
    if ( pathname_arr.length == 1 ) {
        pathname_arr[1] = 'en'
    }
    if ( pathname_arr[1] != country ) {
        pathname_arr[1] = country
        var redirect_path = pathname_arr.join('/')
        if ( url_parsed.search ) {
            redirect_path += '?' + url_parsed.search
        }
        redirect(redirect_path)
    }
}
