<template>
 <div id="wraper" ref="wrapper">
    <slot></slot>
 </div>

    
</template>
<script>
import BScroll from "better-scroll"
import { constants } from 'crypto';
export default {
    name:'Scroller',
    data(){
        return{

        }
    },
    mounted(){
        // 初始化滚动条
       var scroll = new BScroll(this.$refs.wrapper,{
           tap:true,
           probeType:1
       })
       this.scroll = scroll
    },
    methods:{
        scrollY(y){
          this.scroll.scrollTo(0,y)
        }
    }    

}
</script>
<style scoped>
 
</style>


