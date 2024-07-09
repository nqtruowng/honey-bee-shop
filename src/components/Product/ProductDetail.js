import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'


import images from '../../assets/images'

const honeyPreviews = [
    {
        id: 1,
        url : 'https://bizweb.dktcdn.net/thumb/large/100/472/304/products/9350631000056.jpg?v=1669707636973'
    },
    {
        id: 2,
        url : 'https://bizweb.dktcdn.net/thumb/large/100/472/304/products/australian-manuka-honey-mgo-30-500g.jpg?v=1669708921813'
    },
    {
        id: 3,
        url : 'https://bizweb.dktcdn.net/thumb/large/100/472/304/products/bramwells-mgo100-manuka-honey.jpg?v=1669708921813'
    },
    {
        id: 4,
        url : 'https://bizweb.dktcdn.net/thumb/large/100/472/304/products/3df-800-10-1f1424d2-97db-4cea-ba6e-d3c585d47bea.jpg?v=1669708921813'
    },
    {
        id: 5,
        url : 'https://bizweb.dktcdn.net/thumb/large/100/472/304/products/7-d32481ff-654d-414f-9782-34420d36363b.png?v=1669708921813'
    },
]

const product =  [
    {
        id: 1,
        name: 'Mật Hoa Cà Phê',
        price: 1000000
    },
    {
        id: 2,
        name: 'Mật Ong Rừng Mật Khoái',
        price: 1000000
    },
    {
        id: 3,
        name: 'Mật Ong Hoa Sâm Ngọc Linh',
        price: 1000000
    },
    {
        id: 4,
        name: 'Mật Ong Sữa Chúa',
        price: 1000000
    },
    {
        id: 5,
        name: 'Mật Ong Chín Hoa Nhãn Cổ Thụ',
        price: 1000000
    },
    {
        id: 6,
        name: 'Mật Ong Hoa Bạc Hà',
        price: 1000000
    }
]

const formatCurrency = (price) => {
    let formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    return formatted
}

function ProductDetail() {

    const [checked, setChecked] = useState(1)
    const [quanlity, setQuanlity] = useState(1)

    const slideRef = useRef()

    const handleOnClickChangeQuanlity = (id) => {
        if (id === 0 && quanlity > 1) {
            setQuanlity(pre => pre - 1)
        } else if (id === 1) {
            setQuanlity(pre => pre + 1)
        }
    }

    const handleOnChangeQuanlity =  (e) => {
        setQuanlity(e.target.value)
    }

    const handleOnKeyDownQuanlity = (e) => {
       if (e.keyCode === 8) {
        const amount = quanlity.toString().slice(0, -1)
        setQuanlity(amount)
       }
    }

    const handleOnClick = (honey) => {
        setChecked(honey.id)

        slideRef.current.style.transform = `translateX(${-(honey.id - 1) * 480}px)`
    }

    return (
        <div className="h-4/5 w-2/4 flex">
            <div className="flex flex-col flex-1 pl-16 pr-16">
                <div className="overflow-hidden w-480 h-480 m-auto">
                    <div ref={slideRef} className="transition-transform duration-1000 flex">
                        {honeyPreviews.map((honeyPreview, index) => {
                            return <img key={index} src={honeyPreview.url} alt="honey" />
                        })}
                    </div>
                </div>
                <div className="flex justify-around mt-5 ">
                    {honeyPreviews.map((honeyPreview, index) => {
                        return (
                            <div
                                className={`border border-transparent ${
                                    checked === honeyPreview.id ? 'border-yellow-bee' : ''
                                }`}
                                key={index}
                                onClick={() => handleOnClick(honeyPreview)}
                            >
                                <img src={honeyPreview.url} alt={honeyPreview.url} className="w-20 h-20" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" bg-white relative rounded-2xl p-7 w-500">
                <div className=''>
                    <div>
                        <img src={images.leaf} alt='leaf' className='absolute -right-7 -top-5'/>
                    </div>
                    <div className=''>
                        <h1 className='uppercase border-b-2 border-yellow-bee border-solid text-2xl my-2'>{product[0].name}</h1>
                        <div className={`after:content-['đ'] after:underline after:underline-offset-2 after:text-yellow-bee after:ml-1 text-yellow-bee text-2xl border-b-2 border-yellow-bee border-solid my-4`}>{formatCurrency(product[0].price)}</div>
                        <div>
                            <ul className='border-b-2 border-yellow-bee border-solid text-2xl font-semibold my-2 leading-relaxed'>
                                <li>Uống mật ong vào buổi sáng giúp làm sạch, bổ sung năng lượng cho dạ dày</li>
                                <li>Uống trước khi đi ngủ giúp an thần, dễ ngủ</li>
                                <li>Uống mật trước khi ăn 30 phút giúp tốt cho hệ tiêu hó...</li>
                            </ul>
                        </div>
                        <div className='border-b-2 border-yellow-bee border-solid font-semibold text-xl my-4 leading-normal'>
                            <div className=''>Đặc điểm sản phẩm: </div>
                            <span>Ong hút mật của hoa sâm Ngọc Linh và các loại dược liệu quý khác nên mật thơm, mùi vị có chút khác biệt so với các loại mật ong khác</span>
                        </div>
                        <div className={`border-2 border-gray-400 my-4 max-w-24 max-h-10 flex items-center rounded-2xl py-1 focus-within:border-yellow-bee`}>
                            <button onClick={() => handleOnClickChangeQuanlity(0)} className='w-4 h-4 flex text-xl ml-1'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input 
                                value={quanlity} 
                                className='h-full w-full border-none outline-none text-center flex-1 bg-transparent text-xl font-semibold'
                                onChange={(e) => handleOnChangeQuanlity(e)}
                                onKeyDown={(e) => handleOnKeyDownQuanlity(e)}
                            />
                            <button onClick={() => handleOnClickChangeQuanlity(1)} className='w-4 h-4 flex text-xl mr-1'>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                        <div className='my-4'>
                            Thêm vào giỏ hàng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
