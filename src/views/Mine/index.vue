<template>
    <div id="mian">
        <Header/>
        <Login/>         
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from "@/components/footer.vue"
import Login from "@/components/Login/index.vue"
export default {
    name:'mine',
    data:()=>{
        return{

        }
    },
    components:{
        Header,
        Footer,
        Login
    }
    
}
</script>
<style  scoped>


</style>


