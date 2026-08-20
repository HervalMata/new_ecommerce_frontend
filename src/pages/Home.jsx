import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <Banner />
            <Categories />
            <div className="py-[45px]">
                <FeaturedProducts />
            </div>
        </div>
    )
}

export default Home;
