<template>			
    <div class="cinema_body">
        <ul>
            <li  v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <!-- 具体是有内容的过滤 -->
                <div class="card">
                    <div v-for="(num,val) in item.tag" :key="val"  v-if="num == 1" :class="val |filterClass" >{{val | filterName}}</div>
                    
                </div>
                <div class="card" v-if="item.tag.vipTag"><div>{{item.tag.vipTag}}</div></div>
            </li>
      
        </ul>
    </div>  
</template>
<script>
import { constants } from 'crypto';
export default {
    name:'WholeCity',
    data(){
        return{
            cinemaList:[]

        }
    },
    mounted(){
        this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
            if(res.data.msg == 'ok'){
                this.cinemaList = res.data.data.cinemas
            }
        })
    },
    filters:{
        filterName(val){
         var listVal =[{val:'allowRefund',value:'退'},
                        {val:'sell',value:'售卖'},
                        {val:'snack',value:'小吃'},
                        {val:'vipTag',value:'折扣卡'},
                        {val:'buyout',value:'卖出'},
                        {val:'cityCardTag',value:'Card'},
                        {val:'deal',value:'交易'},
                        {val:'endorse',value:'支持'}                           
                        ]

         for(var i = 0; i<listVal.length; i++){
             if(listVal[i].val == val){
                 return  listVal[i].value
             }
         }
          return ''
        },
        filterClass(num){
           var listVal =[{num:'allowRefund',value:'bl'},
                        {num:'sell',value:'or'},
                        {num:'snack',value:'or'},
                        {num:'buyout',value:'or'},
                        {num:'cityCardTag',value:'bl'},
                        {num:'deal',value:'bl'},
                        {num:'endorse',value:'bl'}                           
                        ]
        for(var i = 0; i<listVal.length; i++){
        if( listVal[i].num == num){
            return  listVal[i].value
          }
         }
        return ''
        }
    }
    
}
</script>
<style scoped>
     #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px; overflow: hidden;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37; float: right;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(1){ overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 64%;display: inline-block}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex; float: left;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>

