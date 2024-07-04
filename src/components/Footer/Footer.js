import { useNavigate } from 'react-router-dom'

import images from '../../assets/images'

function Footer() {
    const navigate = useNavigate()

    return (
        <div className="bg-black">
            <div className='max-w-6xl bg-black flex m-auto '>
              <div className='text-white text-base flex flex-col flex-1'>
                  <img src={images.logo} alt="logo" className='w-10 h-9'/>
                  <span>Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội,</span>
                  <span>1800 6750</span>
                  <span>you@gmail.com</span>
                  <span>Hệ thống chi nhánh</span>
              </div>
              <div className='text-white text-base flex flex-col flex-1'>
                <h1 className='text-yellow-bee text-xl'>Thông tin khách hàng</h1>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/')}>Trang chủ</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/products')}>Sản phẩm</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/news')}>Tin tức</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/contact')}>Liên hệ</span>
              </div>
              <div className='text-white text-base flex flex-col flex-1'>
                <h1 className='text-yellow-bee text-xl'>Chính sách mua hàng</h1>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/')}>Trang chủ</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/products')}>Sản phẩm</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/news')}>Tin tức</span>
                <span className='cursor-pointer hover:text-yellow-bee transition-transform ease-linear duration-300 hover:translate-x-3' onClick={() => navigate('/contact')}>Liên hệ</span>
              </div>
              <div className='text-white text-base flex flex-col flex-1'>
                <h1 className='text-yellow-bee text-xl'>Dịch vụ hỗ trợ</h1>
                <img src={images.payment} alt='payment' />
              </div>
            </div>
        </div>
    )
}

export default Footer
