import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <Banner />
            <Categories />
            <div className="py-[45px]">
                <FeaturedProducts />
            </div>
            <div className='py-10'>
                <div className="w-[85%] flex flex-wrap mx-auto">
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                        <div className='overflow-hidden'>
                            <Products title='Ultimos Produtos' />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Produtos Mais Procurados' />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Produtos com Descontos' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
