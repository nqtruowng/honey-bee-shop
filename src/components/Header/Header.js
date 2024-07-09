import images from '../../assets/images'


import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'


function Header() {
    const navigate = useNavigate()
    const headerRef = useRef()

    const handleOnClick = () => {
        navigate('/')
    }

    const [isTop, setIsTop] = useState(true)
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScrollTop = () => {
        window.scrollY === 0 ? setIsTop(true) : setIsTop(false)
    }

    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
        setLastScrollY(window.scrollY)
    }
    
    useEffect(() => {
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', handleScrollTop)
        }
    }, [])
    
    
    window.addEventListener('scroll', handleScrollTop)
    window.addEventListener('scroll', handleScroll)

    return (
        <div>
            <div
                className={`bg-black w-full fixed transition-transform duration-1000 ${showHeader ? '-translate-y-20' : '-translate-y-40'} ${isTop ? '' : 'opacity-80' }`}
                ref={headerRef}
            >
                <div className='h-20 grid grid-cols-3 max-w-6xl m-auto' >
                    <div className=''>
                        <ul className='flex justify-around text-white text-xl cursor-pointer h-full'>
                            <li className='flex justify-center items-center' onClick={() => {navigate('/')}}>Trang chủ</li>
                            <li className='flex justify-center items-center' onClick={() => {navigate('/products')}}>Sản phẩm</li>
                            <li className='flex justify-center items-center' onClick={() => {navigate('/news')}}>Tin tức</li>
                            <li className='flex justify-center items-center' onClick={() => {navigate('/contact')}}>Liên hệ</li>
                        </ul>
                    </div>
                    <div 
                        className='flex justify-center cursor-pointer'
                        onClick={handleOnClick}
                    >
                        <img src={images.logo} alt='logo'/>
                    </div>
                    <div className='flex justify-end items-center'>
                        <span className='text-white text-2xl mr-6'>Hotline: 1800 6750</span>
                        <div className='flex text-white'>
                            <div className='mr-3 ml-3'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className='mr-3 ml-3'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className='mr-3 ml-3 relative' onClick={() => navigate('/cart')}>
                                <div className='absolute top-[2px] -right-[2px] text-xs bg-yellow-bee rounded-lg h-3 w-4 text-black font-bold flex items-center justify-center'>3</div>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
