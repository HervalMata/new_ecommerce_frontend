import {RiShoppingCart2Fill} from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_dashboard_index_data} from "../../store/reducers/dashboardReducer";

const Index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userInfo = []} = useSelector((state) => state.auth ?? {});
    const {
        recentOrders = [], totalOrder = [], pendingOrder = [], cancelledOrder = []
    } = useSelector((state) => state.dashboard ?? {});

    const redirect = (ord) => {
        let items = 0
        for (let i = 1; i < ord.length; i++) {
            items = ord.products[i].quantity + items
        }
        navigate('/payment', {
            state: {
                price: ord.price,
                items,
                orderId: ord._id,
            }
        })
    }

    useEffect(() => {
        dispatch(get_dashboard_index_data(userInfo.id))
    }, [dispatch])

    return (
        <div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
                <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
                    <div className="bg-green-100 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
                        <span className="text-xl text-green-800"><RiShoppingCart2Fill /></span>
                    </div>
                    <div className="flex flex-col justify-start items-start text-slate-600">
                        <h2 className="text-3xl font-bold">{totalOrder}</h2>
                        <span>Ordens</span>
                    </div>
                </div>

                <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
                    <div className="bg-green-100 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
                        <span className="text-xl text-green-800"><RiShoppingCart2Fill /></span>
                    </div>
                    <div className="flex flex-col justify-start items-start text-slate-600">
                        <h2 className="text-3xl font-bold">{pendingOrder}</h2>
                        <span>Ordens Pendentes</span>
                    </div>
                </div>

                <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
                    <div className="bg-green-100 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
                        <span className="text-xl text-green-800"><RiShoppingCart2Fill /></span>
                    </div>
                    <div className="flex flex-col justify-start items-start text-slate-600">
                        <h2 className="text-3xl font-bold">{cancelledOrder}</h2>
                        <span>Ordens Canceladas</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-5 mt-5 rounded-md">
                <h2>Ordens Recentes</h2>
                <div className="pt-4">
                    <div className="relative overflow-x-auto rounded-md">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th scope='col' className='px-6 py-3'>Ordem ID</th>
                                <th scope='col' className='px-6 py-3'>Preço</th>
                                <th scope='col' className='px-6 py-3'>Status do Pagamento</th>
                                <th scope='col' className='px-6 py-3'>Status da Ordem</th>
                                <th scope='col' className='px-6 py-3'>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                recentOrders.map((o, i) =>
                                    <tr key={i} className="bg-white border-b">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">#{o._id}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                            R$ {o.price.toLocaleString('pt-BR', { minimumFractionDigits: 2})}
                                        </td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">{o.payment_status}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">{o.delivery_status}</td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                            <Link to={`/dashboard/order/details/${o._id}`}>
                                        <span className='bg-green-200 text-green-800 text-md font-semibold mr-2
                                                   px-3 py-[2px] rounded'>
                                            Visualizar
                                        </span>
                                            </Link>
                                            {
                                                o.payment_status !== 'paid' &&
                                                <span onClick={() => redirect(o)}
                                                    className='bg-green-200 text-green-800 text-md font-semibold mr-2
                                                               px-3 py-[2px] rounded'>
                                                    Pagar Agora
                                                </span>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
