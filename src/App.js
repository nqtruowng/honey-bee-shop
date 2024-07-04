import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import Layout from './Layout/Layout'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return (
                            <Route
                                key={index} 
                                path={route.path} 
                                element={
                                    <Layout>
                                        {route.component}
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
