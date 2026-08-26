import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_category, get_products} from "../store/reducers/homeReducer";

const Home = () => {
    const dispatch = useDispatch()
    const {
        categories = [],
        products = [],
        latest_product = [],
        topRated_product = [],
        discount_product = [],
    } = useSelector(state => state.home ?? {});

    useEffect(() => {
        dispatch(get_category())
        dispatch(get_products())
    }, [dispatch]);

    return (
        <div className="w-full">
            <Header categories={categories} />
            <Banner />
            <Categories categories={categories} />
            <div className="py-[45px]">
                <FeaturedProducts products={products} />
            </div>
            <div className='py-10'>
                <div className="w-[85%] flex flex-wrap mx-auto">
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                        <div className='overflow-hidden'>
                            <Products title='Ultimos Produtos' products={latest_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Produtos Mais Procurados' products={topRated_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Produtos com Descontos' products={discount_product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
