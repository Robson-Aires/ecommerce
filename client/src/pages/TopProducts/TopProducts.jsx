import img1 from './img/shirt.png'
import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        description:
        "Lorem ipsum dolor sit amet, consecroins sfesf, fsenf, isufainfeksjfnkejfns feuisfsdef efuweifnw iaefiefni"
    },
    {
        id: 2,
        img: img1,
        title: "Casual Wear",
        description:
        "Lorem ipsum dolor sit amet, consecroins sfesf, fsenf, isufainfeksjfnkejfns feuisfsdef efuweifnw iaefiefni"
    },
    {
        id: 3,
        img: img1,
        title: "Casual Wear",
        description:
        "Lorem ipsum dolor sit amet, consecroins sfesf, fsenf, isufainfeksjfnkejfns feuisfsdef efuweifnw iaefiefni"
    }
    
]

const TopProducts = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
    <div className="text-left mb-24 ml-16">
        <p data-aos="fade-up" className="text-sm text-orange-300">
            Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">LOrem ipsum ksdfbsjfbgfvb, afserfrae
            aferfaefaerffaergergergargeargerger
            aegerger,
                </p>
    </div>
            {/* Body section */}
            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
            >
                {
                    ProductsData.map((data) => (
                        <div
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
                        key={data.id}>
                            {/* Image section */}
                            <div className='h-[100px]'>
                                <img
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                src={data.img} />
                            </div>
                             {/* details section */}
                             <div className='p-4 text-center'>
                             {/* star raing */}
                             <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                             </div>
                             <h1 className='text-xl font-bold'>{data.title}</h1>
                             <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                             <button
                              className='bg-yellow-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500'
                            >
                                Order Now
                             </button>
                           </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts