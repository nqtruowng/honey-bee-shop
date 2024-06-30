import Home from '../pages/Home/Home'
import News from '../pages/News/News'
import Contact from '../pages/Contact/Contact'
import Present from '../pages/Present/Present'
import Products from '../pages/Products/Products'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/present', component: Present },
]

export { publicRoutes }
