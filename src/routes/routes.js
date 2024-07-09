import Home from '../pages/Home'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Cart from '../pages/Cart'

const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/products', component: <Products /> },
    { path: '/news', component: <News /> },
    { path: '/contact', component: <Contact /> },
    { path: '/cart', component: <Cart />}
]

export { publicRoutes }
