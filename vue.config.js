// 解决跨域实现反向代理
module.exports = {
    devServer :{
       proxy:{
        '/api':{
            target:'http://39.97.33.178',
            changeOrigin:true
        }
       }
    }
 }


