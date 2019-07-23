// 配置影院路由
export default{
     path:'/cinema',
     component:()=>import ("@/views/Cinema/index.vue"),
     children:[
          {
               path:'wholecity',
               component:()=>import("@/components/WholeCity/index.vue")
          },
          {
             path:'brand' ,
             component:()=>import('@/components/Brand/index.vue')
          },
          {
               path:'onlycolor',
               component:()=>import('@/components/OnlyColor/index.vue')

          },{
               path:'',
               redirect:'wholecity'
          }

     ]

}