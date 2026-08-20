import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";

const Categories = () => {
    const categories = [
        'Mobiles',
        'Laptops',
        'Speakers',
        'Top wear',
        'Footwear',
        'Watches',
        'Home Decor',
        'SmartWatches',
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        },
    }

    return (
        <div className="w-[87%] mx-auto relativer">
            <div className="w-full">
                <div className="text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold
                                relative pb-[35px]">
                    <h2>Categorias</h2>
                    <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
                </div>
            </div>
            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                responsive={responsive}
                transitionDuration={500}
            >
                {
                    categories.map((c, i) =>
                        <Link className='border block' to='#' key={i}>
                            <div className='w-full h-full relative p-3'>
                                <img src={`http://localhost:3000/images/products/${i+1}.webp`} alt="" />
                            </div>
                            <div className='absolute bottom-6 w-full mx-auto font-bold left-0 flex items-center
                                             justify-center'>
                                <span className='py-[2px] px-6 bg-[#3330305D] text-white'>{c}</span>
                            </div>
                        </Link>)
                }
            </Carousel>
        </div>
    )
}

export default Categories
