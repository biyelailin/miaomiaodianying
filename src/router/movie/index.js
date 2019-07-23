// 配置电影的路由
export default{
    path:'/movie',
    component:()=>import('@/views/Movie/index.vue'),
    children:[
        {
            path:'playingnow',
            component:()=>import("@/components/PlayingNow/index.vue")
        },
        {
            path:'comingsoon',
            component:()=>import('@/components/ComingSoon/index.vue')
        },
        {
            path:'search',
            component:()=>import("@/components/Searching/index.vue")
        },
        {
            path:'city',
            component:()=>import("@/components/City/index.vue")
        },{
            path:'/movie',
            redirect:'/movie/playingnow'
        }
    ]
 
}