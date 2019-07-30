<template>
<div id="mian">
    <Header/>
     <div id="content">
			<div class="cinema_menu">
				<router-link class="city_switch" tag="div" to="/cinema/wholecity">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link class="brand_swtich" tag="div"  to="/cinema/brand">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link class="feature_switch" tag="div" to="/cinema/onlycolor">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
			</div>
            <router-view/>
     </div>
    <Footer/>
</div>
    
</template>
<script>
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
export default {
    name:'cinema',
    data:()=>{
        return{
            
        }
    },
    components:{
        Header,
        Footer
    }
    
    
}
</script>
<style scoped>
   #mian{height: 100%}
   #content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column; height: 100%}
   #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>


