<template>
	<div class="city_body">

		  <Scroller class="city_list" ref="city_list">
			<div>
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="(hot,item) in hotcity" :key="item">{{hot.nm}}</li>
				</ul>
			</div>
			<div class="city_sort" ref="city_sort">
				<div v-for="(cityname,index) in newlistcity " :key="index">
					<h2>{{cityname.name}}</h2>
					<ul>
					  <li v-for="(city,k) in cityname.list" :key="k">{{city.nm}}</li>						
					</ul>
				</div>	
			</div>
		    </div>
		  </Scroller>

		<div class="city_index">
			<ul v-for="(item,v) in newlistcity" :key="v">
				<li @touchend ="movelist(v)">{{item.name}}</li>		
			</ul>
		</div>
	</div>   
</template>
<script>
import { constants } from 'crypto';
export default {
	name:'City',
	data(){
       return{
		 newlistcity:[],
		 hotcity:[]

	   }
	},
	mounted(){
		this.axios.get('/api/cityList').then((res)=>{
		// 按字母排序[{name:'A', list:[{"id": 1, "nm": "北京","py": "beijing"},{"id": 1, "nm": "北京","py": "beijing"}]
		 if(res.data.msg === "ok"){
			 var citydata = res.data.data.cities; // 获取城市数组
			 var newCityList =[];
			//筛选是a-z字母开头的数据对象
			 for(var i = 0; i<citydata.length;i++){
				 if(newletter(citydata[i])){ //新的字母，在数组中创建一个对象
				    var getletter = citydata[i].py.substr(0,1).toUpperCase();
				     newCityList.push({name:getletter,list:[{id:citydata[i].id,nm:citydata[i].nm}]})
				 }
			 }
			  function newletter(newcitydata){
				var letter = newcitydata.py.substr(0,1).toUpperCase();
				for(var j =0; j<newCityList.length; j++){
						if(newCityList[j].name  == letter){
							 letter = ""
							 newCityList[j].list.push({id:newcitydata.id,nm:newcitydata.nm}) 
						}
				}
				if(letter){
					return true
				}else{
					return false
				}
			 } 
			 this.newCityDataSort(newCityList) 
			 this.newlistcity = newCityList
			//  hotCity数组：[{id:1,nm:'北京',hot:1}]
			  this.gethotcity(citydata)
		 }
		})
	},
	methods:{	
		    newCityDataSort(newCityList){
			 newCityList.sort((n1,n2)=>{
				var item1 = n1.name
				var item2 = n2.name
				if(item1 > item2){
					return 1
				}else if(item1 < item2){
					return -1
				}else{
					return 0
				}
			 })			   
		  },
		  gethotcity(citydata){
			  var hotCity =[]
			  for(var ii = 0; ii<citydata.length; ii++){
				    if(citydata[ii].isHot == 1){
						hotCity.push(citydata[ii])
					}
			  }
			  this.hotcity = hotCity
		  },
		  movelist(index){
			   var H =this.$refs.city_sort.getElementsByTagName('h2')
			   var hhh = this.$refs.city_list.scrollY(-H[index].offsetTop)			
		  }	
	}   
}
</script>
<style scoped>
     #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
    .city_body .city_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    /* .city_body .city_hot ul{} */
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    /* .city_body .city_sort{} */
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>


