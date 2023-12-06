const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {
    port :8080,
    proxy :{
      '^/api':{                               //^/api로 한 이유는 다른 서버도 받아오기 위해서(api는 그냥 변수 아무거나 준거)
        target,
        changeOrigin : true,
        ws : false,     //웹소켓
        pathRewrite : { '^/api' : '/'}     //경로 재설정  /api 경로를 / 로 재설정해라
      }
    }
  }
})
