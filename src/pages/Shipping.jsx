import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth  || []);

    const { state: { products, price, shipping_fee, items } } = useLocation()
    const [res, setRes] = useState(false);
    const [state, setState] = useState({
        name: '',
        address: '',
        phone: '',
        post: '',
        province: '',
        city: '',
        area: '',
    });

    const placeOrder = () => {
        dispatch({
            price,
            products,
            shipping_fee,
            shippingInfo: state,
            userId: userInfo.id,
            navigate,
        })
    }

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const save = (e) => {
        e.preventDefault();
        const { name, address, phone, post, province, city, area} = state
        if (name && address && phone && post && province && city && area) {
            setRes(true);
        }
    }

    return (
        <div>
            <Header />
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover
                                bg-no-repeat relative bg-left'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228A]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className="flex flex-col items-center justify-center gap-1 h-full text-white">
                            <h2 className="text-3xl font-bold">Entregas</h2>
                          <div>
                              <Link to=''>Home</Link>
                              <span className="pt-1"><IoIosArrowForward/></span>
                              <span>Entregas</span>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#EEEEEE]">
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto py-16'>
                    <div className="w-full flex flex-wrap">
                        <div className="md-lg:w-full w-[67%]">
                            <div className="flex flex-col gap-3">
                                <div className="bg-white p-6 shadow-sm rounded-md">
                                    <h2 className="text-slate-600 font-bold pb-3"> Informações da Entrega </h2>

                                    {
                                        !res &&
                                            <>
                                                <form onSubmit={save}>
                                                    <div className="flex md:flex-col md:gap-2 gap-5 w-full text-slate-600">
                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="name"> Nome </label>
                                                            <input onChange={inputHandle} value={state.name}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="name" id="name" placeholder="Nome" />
                                                        </div>

                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="address"> Enderêço </label>
                                                            <input onChange={inputHandle} value={state.address}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="address" id="address" placeholder="Enderêço" />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-col md:gap-2 gap-5 w-full text-slate-600">
                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="phone"> Celular </label>
                                                            <input onChange={inputHandle} value={state.phone}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="phone" id="phone" placeholder="Celular" />
                                                        </div>

                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="post"> CEP </label>
                                                            <input onChange={inputHandle} value={state.post}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="post" id="post" placeholder="CEP" />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-col md:gap-2 gap-5 w-full text-slate-600">
                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="province"> Bairro </label>
                                                            <input onChange={inputHandle} value={state.province}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="province" id="province" placeholder="Bairro" />
                                                        </div>

                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="city"> Cidade </label>
                                                            <input onChange={inputHandle} value={state.city}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="city" id="city" placeholder="Cidade" />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-col md:gap-2 gap-5 w-full text-slate-600">
                                                        <div className="flex flex-col gap-1 mb-2 w-full">
                                                            <label htmlFor="area"> Area </label>
                                                            <input onChange={inputHandle} value={state.area}
                                                                className="w-full px-3 py-2 border border-slate-200 outline-none
                                                             focus:border-green-500 rounded-md"
                                                                   type="text" name="area" id="area" placeholder="Area" />
                                                        </div>

                                                        <div className="flex flex-col gap-1 mt-7 mb-2 w-full">
                                                            <button className="px-3 py-[9px] rounded-sm hover:shadow-green-500/50
                                                                   hover:shadow-lg bg-green-500 text-white">
                                                                Salvar Alterações
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </>
                                    }

                                    {
                                        res &&
                                        <div className="flex flex-col gap-3">
                                            <h2 className="text-slate-600 font-semibold pb-2">Entregar Para: </h2>
                                            <p>
                                                <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1">Home</span>
                                                <span>{state.phone}, {state.address}, {state.province} {state.city} {state.area} </span>
                                                <span onClick={() => setRes(false)}
                                                      className="text-indigo-500 cursor-pointer">
                                                    Mudar
                                                </span>
                                            </p>
                                            <p className="text-slate-600 text-sm">Email Para john@gmail.com</p>
                                        </div>
                                    }
                                </div>

                                {
                                    products.map((p, i) =>
                                        <div key={i} className="flex bg-white p-4 flex-col gap-2">
                                            <div className="flex justify-start items-center">
                                                <h2 className="test-md text-slate-600 font-bold">{p.shopName}</h2>
                                            </div>
                                            {
                                                p.products.map((pt, i) =>
                                                    <div className="w-full flex flex-wrap">
                                                        <div className="flex sm:w-full gap-2 w-7/12">
                                                            <div className="flex gap-2 justify-start items-center">
                                                                <img className="w-[80px] h-[80px]"
                                                                    src={pt.productInfo.images[0]} alt="" />
                                                                <div className="pr-4 text-slate-600">
                                                                    <h2 className="text-md font-semibold">
                                                                        {pt.productInfo.name}
                                                                    </h2>
                                                                    <span className="text-sm">
                                                                        Marca: {pt.productInfo.brand}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                                            <div className="pl-4 sm:pl-0">
                                                                <h2 className="text-lg text-orange-500">
                                                                    R$ {(pt.productInfo.price -
                                                                            Math.floor((pt.productInfo.price * pt.productInfo.discount) / 100))
                                                                    .toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                                                </h2>
                                                                <p className="line-through">
                                                                    R$ {pt.productInfo.price.toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                                                </p>
                                                                <p>-{pt.productInfo.discount}%</p>
                                                            </div>
                                                            <div className="flex gap-2 flex-col">
                                                                <div className="flex bg-slate-200 h-[30px]
                                                                           justify-center items-center text-xl">
                                                                    <div className="px-3 cursor-pointer">-</div>
                                                                    <div className="px-3">{pt.quantity}</div>
                                                                    <div className="px-3 cursor-pointer">+</div>
                                                                </div>
                                                                <button className="px-5 py-[3px] bg-red-500 text-white"
                                                                >Remover</button>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="w-[33%] md-lg:w-full">
                            <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                                <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                                    <h2 className="text-xl font-bold">Resumo da Ordem</h2>
                                    <div className="flex justify-between items-center">
                                        <span>Total de itens (items)</span>
                                        <span>
                                            R$ {price.toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Taxa de Entrega</span>
                                        <span>
                                            R$ {shipping_fee.toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Total Para pagamento</span>
                                        <span>
                                            R$ {(price + shipping_fee).toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Total</span>
                                        <span className="text-lg text-[#059473]">
                                            R$ {(price + shipping_fee).toLocaleString('pt-BR', { maximumFractionDigits: 2})}
                                        </span>
                                    </div>
                                    <button disabled={!!res} onClick={placeOrder}
                                        className={`px-5 py-[6px] rounded-sm hover:shadow-green-500/50 hover:shadow-lg ${
                                            res ? 'bg-red-500' : 'bg-red-300'
                                        } text-sm text-white uppercase`}>
                                    Finalizar Ordem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shipping
