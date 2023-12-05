<template>  
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused"/>
    <component v-bind:is="selected"></component>         <!--component태그 동적 컴포넌트를 대체 할떄 사용  is 속성에 가져올 component 이름을 넣으면 그 component가 들어온다-->
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue'
import SlotCom from './components/TextModal.vue'
import Composition from './components/CompositionInterface.vue'
import StoreCom from './components/StoreComponent.vue'

export default {
  name : 'app',
  data(){
    return {
      selected : 'PropsCom',
      isFocused : true
    }
  },
  components : {
    PropsCom,
    SlotCom,
    Composition,
    StoreCom
  }
}
</script>

<style>

</style>
