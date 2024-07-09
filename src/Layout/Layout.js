import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout({ children }) {
    const [showGoToTop, setShowGoToTop] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setShowGoToTop(true)
        } else {
            setShowGoToTop(false)
        }
    }

    const handleOnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', handleScroll)

    useEffect(() => {

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className=''>
            <Header />
            <div className='mt-20'>
                <div 
                    className={`${showGoToTop ? 'fixed w-10 h-10 bg-yellow-bee rounded-md flex justify-center items-center right-10 bottom-16' : 'hidden' } `} 
                    onClick={handleOnClick}
                >
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
