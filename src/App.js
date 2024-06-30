import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/routes'

function App() {
    console.log('bbbb')
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        console.log('aaa', route.path)
                        return (
                          <Route 
                            key={index}
                            path={route.path}
                            element={route.component}
                          />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
