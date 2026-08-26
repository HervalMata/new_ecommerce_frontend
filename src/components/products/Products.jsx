import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Products = ({ title, products }) => {

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
    }

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-slate-600">
                    {title}
                </div>
                <div>
                    <button aria-label={`Mostrar Anterior ${title}`}
                        className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border
                                     border-slate-200"
                        onClick={() => previous()}>
                        <IoIosArrowBack aria-hidden="true" />
                    </button>
                    <button aria-label={`Mostrar próximo ${title}`}
                        className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border
                                     border-slate-200"
                        onClick={() => next()}>
                        <IoIosArrowForward aria-hidden="true" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex gap-8 flex-col-reverse">
            <Carousel
                arrows={false}
                infinite={false}
                autoPlay={false}
                responsive={responsive}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
            >
                {
                    products.map((p, i) => {
                        return (
                            <div key={i} className="flex flex-col justify-start gap-2">
                                {
                                    p.map((pl, j) =>
                                        <Link key={j} className="flex flex-col justify-start  gap-2" to="#">
                                            <img className="w-[150px] h-[150px]"
                                                src={pl.images[0]} alt="" />
                                            <div className="p-3 flex flex-col justify-start items-start gap-1 text-slate-600">
                                                <h2>{pl.name}</h2>
                                                <span className="text-lg font-bold">R$ {pl.price.toLocaleString("pt-BR")}</span>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        )
                    })}

            </Carousel>
        </div>
    )
}

export default Products
