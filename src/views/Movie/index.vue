<template>
<div id="main">
   <Header/>
   <div id="content">
       <div class="movie_menu">
				<router-link class="city_name" tag="div" to="/movie/city">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link class="hot_item"  tag="div" to="/movie/playingnow">正在热映</router-link>
					<router-link class="hot_item" tag="div" to="/movie/comingsoon">即将上映</router-link>
				</div>
				<router-link class="search_entry" tag="div" to="search">
					<i class="iconfont icon-sousuo"></i>
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
    name:'movie',
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
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

</style>