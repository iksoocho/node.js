<template>
  <!-- <VCalendar /> -->
  <VDatePicker v-model="date" locale="en" color="red" />
</template>

<script>
  export default{
    data(){
      return {
        date : ''
      }
    },
    // methods:{
    //   selectDate(value){
    //     this.date = 
    //   }
    // }
  }
</script>