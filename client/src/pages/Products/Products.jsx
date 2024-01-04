import img1 from './img/gojo.webp';
import { FaStar } from "react-icons/fa6";

const ProductData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "red",
        aosDelay: "0",
    },
    {
        id: 3,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "red",
        aosDelay: "0",
    },
    {
        id: 4,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 5,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },

]


const Products = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-orange-300">Top Selling Products for you</p>
            <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-xs text-gray-400">LOrem ipsum ksdfbsjfbgfvb, afserfrae
            aferfaefaerffaergergergargeargerger
            aegerger,
        </p>
        </div>
            {/* body section */}
            <div>
                <div
                className="grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
                >
                    {/*  card section */}
                    {ProductData.map((data) => (
                        <div key={data.id} className='space-y-3'>
                            <img
                            src={data.img}
                            className='h-[220px] w-[150px]
                            object-cover rounded-md' 
                             alt=""
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{data.rating}</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products