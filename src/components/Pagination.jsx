import {MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";

const Pagination = ({ pageNumber, setPageNumber, totalItem, perPage, showItem }) => {
    let totalPage = Math.ceil(totalItem/perPage);
    const visiblePageCount = Math.min(showItem, totalPage)
    const startPage = Math.min(pageNumber, Math.max(totalPage - visiblePageCount + 1, 1))

    const endPage = startPage + visiblePageCount - 1

    /*let diff = totalPage - pageNumber
    if (diff <= showItem) {
        startPage = totalPage - showItem
    }

    if (startPage <= 0) {
        startPage = 1
    }*/

    const createBtn = () => {
        const btns = []
        for (let i = startPage; i <= endPage; i++) {
            btns.push(
                <li onClick={() => setPageNumber(i)}
                   className={`${pageNumber === i ? 
                       "bg-green-700 shadow-lg shadow-indigo-300/50 text-white" 
                       : "bg-slate-600 hover:bg-green-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#D0D2D6]"
                       } w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer`}>
                    {i}
                </li>
            )
        }
        return btns
    }

    return (
        <ul className="flex gap-3">
            {
                pageNumber > 1 &&
                    <li onClick={() => setPageNumber(pageNumber - 1)}
                        className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300
                        text-[#000000] cursor-pointer'>
                        <MdOutlineKeyboardDoubleArrowLeft />
                    </li>
            }
            {
                createBtn()
            }
            {
                pageNumber < totalPage &&
                <li onClick={() => setPageNumber(pageNumber + 1)}
                    className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300
                        text-[#000000] cursor-pointer'>
                    <MdOutlineKeyboardDoubleArrowRight />
                </li>
            }
        </ul>
    )
}

export default Pagination
