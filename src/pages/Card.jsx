import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

const Card = () => {
    const card_products = [1, 2]
    const outOfStockProduct = [1, 2]

    return (
        <div>
            <Header/>
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover
                                bg-no-repeat relative bg-left'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228A]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className="flex flex-col items-center justify-center gap-1 h-full text-white">
                            <h2 className="text-3xl font-bold">Card</h2>
                            <div className="flex items-center justify-center gap-2 text-2xl w-full">
                                <Link to="/">Home</Link>
                                <span className="pt-1"><IoIosArrowForward/></span>
                                <span>Cartão</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#EEEEEE]">
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    {
                        card_products.length > 0 || outOfStockProduct.length > 0 ?
                            <div className="flex flex-wrap">
                                <div className="md-lg:w-full w-[67%]">
                                    <div className="pr-3 md-lg:pr-0">
                                        <div className="flex flex-col gap-3">
                                            <div className="bg-white p-4">
                                                <h2 className="text-md text-green-500 font-semibold">
                                                    Estoque de Produtos {card_products.length}
                                                </h2>
                                            </div>
                                            {
                                                card_products.map((p, i) =>
                                                    <div className="flex bg-white p-4 flex-col gap-2">
                                                        <div className="flex justify-start items-center">
                                                            <h2 className="text-md text-slate-600 font-bold">Cris
                                                                Laços</h2>
                                                        </div>
                                                        {
                                                            [1, 2].map((p, i) =>
                                                                <div className="w-full flex flex-wrap">
                                                                    <div className="flex sm:w-full gap-2 w-7/12">
                                                                        <div
                                                                            className="flex gap-2 justify-start items-center">
                                                                            <img className="w-[80px] h-[80px]"
                                                                                 src="http://localhost:3000/images/products/3.webp"
                                                                                 alt=""/>
                                                                            <div className="pr-4 text-slate-600">
                                                                                <h2 className="text-md font-semibold">Nome
                                                                                    do Produto</h2>
                                                                                <span className="text-sm">Marca: Cris Laços</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                                                        <div className="pl-4 sm:pl-0">
                                                                            <h2 className="text-lg text-orange-500">R$
                                                                                240,00</h2>
                                                                            <p className="line-through">R$ 300,00</p>
                                                                            <p>-15%</p>
                                                                        </div>
                                                                        <div className="flex gap-2 flex-col">
                                                                            <div
                                                                                className="flex bg-slate-200 h=[30px] justify-center items-center text-xl">
                                                                                <div className="px-3 cursor-pointer">-
                                                                                </div>
                                                                                <div className="px-3">2</div>
                                                                                <div className="px-3 cursor-pointer">+
                                                                                </div>
                                                                            </div>
                                                                            <button
                                                                                className="px-5 py-[3px] bg-red-500 text-white">Remover
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                            {
                                                outOfStockProduct.length > 0 &&
                                                <div className="flex flex-col gap-3">
                                                    <div className="bg-white p-4">
                                                        <h2 className="text-md text-red-500 font-semibold">Fora de Estoque {outOfStockProduct.length}</h2>
                                                    </div>
                                                <div>
                                            {
                                                [1].map((p, i) =>
                                                    <div className="w-full flex flex-wrap">
                                                        <div className="flex sm:w-full gap-2 w-7/12">
                                                            <div
                                                                className="flex gap-2 justify-start items-center">
                                                                <img className="w-[80px] h-[80px]"
                                                                        src={`http://localhost:3000/images/products/${i+1}.webp`} alt="" />
                                                                <div className="pr-4 text-slate-600">
                                                                    <h2 className="text-md font-semibold">Nome do Produto</h2>
                                                                    <span className="text-sm">Marca: Cris Laços</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                                            <div className="pl-4 sm:pl-0">
                                                                <h2 className="text-lg text-orange-500">R$ 240,00</h2>
                                                                <p className="line-through">R$ 300,00</p>
                                                                <p>-15%</p>
                                                            </div>
                                                            <div className="flex gap-2 flex-col">
                                                                <div className="flex bg-slate-200 h=[30px] justify-center items-center text-xl">
                                                                    <div className="px-3 cursor-pointer">-</div>
                                                                    <div className="px-3">2</div>
                                                                    <div className="px-3 cursor-pointer">+</div>
                                                                </div>
                                                                <button className="px-5 py-[3px] bg-red-500 text-white">Remover</button>
                                                            </div>
                                                        </div>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                                <div className="w-[33%] md-lg:w-full">
                                    <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                                        {
                                            card_products.length > 0 &&
                                                <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                                                    <h2 className="text-xl font-bold">Resumo da Ordem</h2>
                                                    <div className="flex justify-between items-center">
                                                        <span>2 Itens</span>
                                                        <span>R$ 343,00</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>Taxa de Entrega</span>
                                                        <span>R$ 40,00</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <input className="w-full px-3 py-2 border border-slate-200 outline-0
                                                                         focus:border-green-500 rounded-sm"
                                                            type="text" placeholder="Digitar Cupom" />
                                                        <button className="px-5 py-[1px] bg-[#059473] text-white
                                                                 rounded-sm uppercase text-sm">
                                                            Aplicar
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>Total</span>
                                                        <span className="text-lg text-[#059473]">R$ 430,00</span>
                                                    </div>
                                                    <button className="px-5 py-[6px] hover:shadow-red-500/50 bg-red-500
                                                                 hover:shadow-lg rounded-sm uppercase text-sm text-white">
                                                        Ir Para Pagamento
                                                    </button>
                                                </div>
                                        }
                                    </div>
                                </div>
                        </div> :
                        <div>
                            <Link className='px-4 py-1 bg-indigo-500 text-white' to='/shops'>Compre Agora</Link>
                        </div>
                    }
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Card
