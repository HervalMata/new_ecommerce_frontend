import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import {useEffect, useState} from "react";
import Pagination from "./Pagination";
import RatingReact from 'react-rating'
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {customer_review, get_reviews, messageClear, product_details} from "../store/reducers/homeReducer";
import toast from "react-hot-toast";

const Reviews = ({product}) => {
    const dispatch = useDispatch();
    const [perPage, setPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [rat, setRat] = useState('');
    const [re, setRe] = useState('')

    const {userInfo = []} = useSelector((state) => state.auth ?? {});
    const {
        successMessage,
        reviews = [],
        rating_review = [],
        totalReview = 0,
    } = useSelector((state) => state.home ?? {});

    const review_submit = (e) => {
        e.preventDefault();
        const obj = {
            name: userInfo.name,
            review: re,
            rat: rat,
            productId: product._id,
        }
        dispatch(customer_review(obj))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(get_reviews({
                productId: product._id,
                pageNumber
            }))
            dispatch(product_details(product.slug))
            setRe('')
            setRat('')
            dispatch(messageClear())
        }
    }, [dispatch, successMessage]);

    useEffect(() => {
        if (product._id) {
            dispatch(get_reviews({
                productId: product._id,
                pageNumber
            }))
        }
    }, [product, pageNumber])

    return (
        <div className="mt-8">
            <div className="flex gap-10 md-lg:flex-col">
                <div className="flex flex-col gap-2 justify-start items-start py-4">
                    <div>
                        <span className="text-6xl font-semibold">{product.rating}</span>
                        <span className="text-3xl font-semibold text-slate-600">/5</span>
                    </div>
                    <div className="flex text-3xl">
                        <Rating ratings={product.rating} />
                    </div>
                    <p className="text-sm text-slate-600">{totalReview} Avaliações</p>
                </div>
                <div className="flex flex-col gap-2 py-4">
                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={5} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div
                                style={{ width: `${Math.floor(( 100 * (rating_review[0]?.sum || 0)) / totalReview)}%`}}
                                className="h-full bg-[#EDBB0E] w-[60%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">{rating_review[0]?.sum}</p>
                    </div>

                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={4} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div
                                style={{ width: `${Math.floor(( 100 * (rating_review[1]?.sum || 0)) / totalReview)}%`}}
                                className="h-full bg-[#EDBB0E] w-[70%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">{rating_review[1]?.sum}</p>
                    </div>

                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={3} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div
                                style={{ width: `${Math.floor(( 100 * (rating_review[2]?.sum || 0)) / totalReview)}%`}}
                                className="h-full bg-[#EDBB0E] w-[40%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">{rating_review[2]?.sum}</p>
                    </div>

                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={2} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div
                                style={{ width: `${Math.floor(( 100 * (rating_review[3]?.sum || 0)) / totalReview)}%`}}
                                className="h-full bg-[#EDBB0E] w-[30%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">{rating_review[3]?.sum}</p>
                    </div>

                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={1} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div
                                style={{ width: `${Math.floor(( 100 * (rating_review[4]?.sum || 0)) / totalReview)}%`}}
                                className="h-full bg-[#EDBB0E] w-[10%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">{rating_review[4]?.sum}</p>
                    </div>

                    <div className="flex gap-5 justify-start items-center">
                        <div className="text-md flex gap-1 w-[93px]">
                            <RatingTemp rating={0} />
                        </div>
                        <div className="w-[200px] h-[14px] bg-slate-200 relative">
                            <div className="h-full bg-[#EDBB0E] w-[0%]"></div>
                        </div>
                        <p className="text-sm text-slate-600 w-[0%]">0</p>
                    </div>
                </div>
            </div>

            <h2 className="text-slate-600 text-xl font-bold py-5">{totalReview} Avaliações do Produto</h2>

            <div className="flex flex-col gap-8 pb-10 pt-4">
                {
                    reviews.map((r, i) =>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 text-xl">
                                    <RatingTemp rating={r.rating} />
                                </div>
                                <span className="text-slate-600">{r.date}</span>
                            </div>
                            <span className="text-slate-600 text-md">{r.name}</span>
                            <p className="text-slate-600 text-sm">
                                {r.review}
                            </p>
                        </div>
                    )
                }
                <div className="flex justify-end">
                    {
                        totalReview > 5 &&
                        <Pagination
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                            totalItem={totalReview}
                            perPage={perPage}
                            showItem={Math.floor(totalReview/3)}
                        />
                    }
                </div>
            </div>

            <div>
                {
                    userInfo ?
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-1">
                                <RatingReact
                                    onChange={(e) => setRe(e)}
                                    initialRating={rat}
                                    emptySymbol={<span className="text-slate-600 text-4xl"><CiStar /></span>}
                                    fullSymbol={<span className="text-[#EDBB0E] text-4xl"><FaStar /></span>}
                                />
                            </div>
                            <form onSubmit={review_submit}>
                                <textarea value={re} onChange={(e) => setRe(e.target.value)}
                                          className="border outline-0 p-3 w-full"
                                    required name="" id="" cols="30" rows="5"></textarea>
                                <div className="mt-2">
                                    <button className="py-1 px-5 bg-indigo-500 text-white rounded-sm">Enviar</button>
                                </div>
                            </form>
                        </div> :
                        <div>
                            <Link  className="py-1 px-5 bg-red-500 text-white rounded-sm"
                                to="/login">Entre Primeiro</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Reviews;
