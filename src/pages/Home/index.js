import images from "../../assets/images"
import Product from "../../components/Product/ProductDetail"

function Home() {

    return (
        <>
            <div className=''>
                <img src={images.baner} alt="baner" className="w-1920 h-860 m-auto"/>
            </div>
            <div className='w-full h-750 bg-yellow-blur flex items-center justify-center'>
                <Product />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>

    )
}

export default Home;