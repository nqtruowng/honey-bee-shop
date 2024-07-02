import Home from '../pages/Home'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Present from '../pages/Present'
import Products from '../pages/Products'

const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/products', component: <Products /> },
    { path: '/news', component: <News /> },
    { path: '/contact', component: <Contact /> },
    { path: '/present', component: <Present /> },
]

export { publicRoutes }
