import { createWebHistory, createRouter } from 'vue-router';
import HomePage from "@/pages/HomePage";
import UsersPage from "@/pages/UsersPage";
import SignUpPage from "@/pages/SignUpPage";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/users',
    component: UsersPage
  },
  {
    path: '/signup',
    component: SignUpPage
  },
  
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.Base_URL)
})
export default router;