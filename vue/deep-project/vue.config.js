//전체 프로젝트의 설정 부분  ex) devserver  >> 수정 후에는 서버를 껐다가 켜야됨

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
