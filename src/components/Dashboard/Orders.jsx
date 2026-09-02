import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {get_orders} from "../../store/reducers/orderReducer";

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userInfo = []} = useSelector((state) => state.auth ?? {});
    const {myOrders = []} = useSelector((state) => state.order ?? {});
    const [state, setState] = useState('all')

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
        dispatch(get_orders({status:state, customerId: userInfo.id}))
    }, [dispatch, state])

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-600">Minhas Ordens</h2>
                <select value={state} onChange={e => setState(e.target.value)}
                      className="outline-none px-3 py-1 border rounded-md text-slate-600">
                    <option value="all">--Status das Ordens--</option>
                    <option value="placed">Feitas</option>
                    <option value="pending">Pendentes</option>
                    <option value="cancelled">Canceladas</option>
                    <option value="warehouse">Finalizadas</option>
                </select>
            </div>

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
                            myOrders.map((o, i) =>
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
    )

}

export default Orders;
