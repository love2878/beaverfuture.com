import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = {
    routes: [{ 
            path: '/',
            name: 'Home',
            component: () => import('@/views/home/index') 
        },
        { 
            path: '/product',
            name: 'Product',
            component: () => import('@/views/product/index') 
        },
        { 
            path: '/development',
            name: 'Development',
            component: () => import('@/views/development/index') 
        },
        { 
            path: '/solution',
            name: 'Solution',
            component: () => import('@/views/solution/index') 
        },
        { 
            path: '/costcycle',
            name: 'CostCycle',
            component: () => import('@/views/costcycle/index') 
        },
        { 
            path: '/cases',
            name: 'Cases',
            component: () => import('@/views/cases/index') 
        }]
}

const router = new Router(constantRoutes)
export default router
