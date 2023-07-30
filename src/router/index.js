import { createRouter, createWebHistory } from 'vue-router'
import DefaultsLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredients.vue'

const routes = [
    {
        path:'/',
        component: DefaultsLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },    
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            }
        ]
    },
    {
        path:'/guest',
        component: GuestLayout,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;