import {MdEmail} from "react-icons/md";
import {IoIosArrowDown, IoMdArrowDropdown, IoMdPhonePortrait} from "react-icons/io";
import {FaFacebook, FaGithub, FaHeart, FaLinkedin, FaList, FaLock, FaPhoneAlt, FaTwitter, FaUser} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {FaCartShopping} from "react-icons/fa6";

const Header = () => {
    const {pathname} = useLocation();

    const [showSidebar, setShowSidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [category, setCategory] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const user = true
    const wishlist_count = 3
    const categories = [
        'Laços',
        'Tiaras',
        'Viseiras',
        'Faixas'
    ]

    return (
        <div className="w-full bg-white">
            <div className="header-top bg-pink-300 md-lg:hidden">
                <div className="w-[85%] lg:w-[90%] mx-auto">
                    <div className="flex w-full items-center justify-between h-[50px] text-slate-700">
                        <ul className="flex items-center justify-start gap-8 font-semibold text-black">
                            <li className="flex relative items-center justify-center gap-2 text-sm after:absolute
                                            after:h-[18px] after:w-[1px] after:bg-[#AFAFAF] after:-right-[16px]">
                                <span><MdEmail /></span>
                                <span>support@gmail.com</span>
                            </li>
                            <li className="flex relative items-center justify-center gap-2 text-sm">
                                <span><IoMdPhonePortrait /></span>
                                <span>+55 (21) 99999-9999</span>
                            </li>
                        </ul>

                        <div>
                            <div className="flex items-center justify-center gap-10">
                                <div className="flex items-center justify-center gap-4 text-black">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /></a>
                                </div>
                                <div className="flex group cursor-pointer text-slate-800 text-sm items-center
                                                justify-center gap-1 relative after:h-[18px] after:w-[1px]
                                                after:bg-[#AFAFAF] after:-right-[16px] after:absolute
                                                before:absolute before:-[18px] before:bg-[#AFAFAF] before:w-[1px]
                                                before:-left-[16px]">
                                    <img height={30} width={30} src="http://localhost:3000/images/language.png" alt="" />
                                    <span><IoMdArrowDropdown /></span>
                                    <ul className='absolute invisible transition-all top-12 rounded-sm duration-200
                                                  text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible
                                                  group-hover:top-6 group-hover:bg-black z-10'>
                                        <li>Português</li>
                                        <li>English</li>
                                    </ul>
                                </div>

                                {
                                    user ?
                                        <Link to="/dashboard"
                                              className="flex cursor-pointer justify-center items-center gap-2 text-sm
                                                          text-black">
                                            <span> <FaUser /></span>
                                            <span>Herval Mata</span>
                                        </Link> :
                                        <Link to="/login"
                                              className="flex cursor-pointer justify-center items-center gap-2 text-sm
                                                          text-black">
                                            <span> <FaLock /></span>
                                            <span>Entre </span>
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-white">
                <div className="w-[85%] lg:w-[90%] mx-auto">
                    <div className="h-[80px] md-lg:h-[100px] flex items-center justify-between flex-wrap">
                        <div className="md-lg:w-full w-3/12 md-lg:pt-4">
                            <div className="flex justify-between items-center">
                                <Link to="/">
                                    <img height={80} width={80} src="http://localhost:3000/images/logo.png" alt="" />
                                </Link>
                                <div className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600
                                       border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex
                                       xl:hidden hidden" onClick={() => setIsSidebarOpen(true)}>
                                    <span><FaList /></span>
                                </div>
                            </div>
                        </div>

                        <div className="md:lg:w-full w-9/12">
                            <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                                    <li>
                                        <Link
                                            className={`p-2 block ${pathname === '/' 
                                                ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`p-2 block ${pathname === '/'
                                                ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Loja</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`p-2 block ${pathname === '/'
                                                ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Blog</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`p-2 block ${pathname === '/'
                                                ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Sobre Nós</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`p-2 block ${pathname === '/'
                                                ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Contato</Link>
                                    </li>
                                </ul>

                                <div className="flex justify-between items-center md-lg:hidden gap-5">
                                    <div className="flex justify-center gap-5">
                                        <div className="relative flex items-center justify-center cursor-pointer w-[35px]
                                                       h-[35px] rounded-full bg-[#E2E2E2]">
                                            <span className="text-xl text-green-500"><FaHeart /></span>
                                            <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full
                                                           text-white flex justify-center items-center
                                                           -top-[3px] -right-[5px]">
                                                {
                                                    wishlist_count
                                                }
                                            </div>
                                        </div>
                                        <div className="relative flex items-center justify-center cursor-pointer w-[35px]
                                                       h-[35px] rounded-full bg-[#E2E2E2]">
                                            <span className="text-xl text-green-500"><FaCartShopping /></span>
                                            <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full
                                                           text-white flex justify-center items-center
                                                           -top-[3px] -right-[5px]">
                                                {
                                                    wishlist_count
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md-lg:block">
                <div onClick={() => setIsSidebarOpen(false)}
                     className={`fixed duration-200 transition-all ${
                         isSidebarOpen ? 'visible' : 'invisible'
                     } hidden md-lg:block w-screen h-screen 
                     bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}></div>
                <div className={`fixed top-0 w-[300px] z-[9999] transition-all duration-200 ${
                           isSidebarOpen ? 'left-0' : '-left-[360px] top-0'} overflow-y-auto
                           bg-white h-screen py-6 px-8`}>
                    <div  className="flex justify-start flex-col gap-6">
                        <Link to="/">
                            <img height={120} width={120} src="http://localhost:3000/images/logo.png" alt="" />
                        </Link>
                        <div className="flex justify-start items-center gap-10">
                            <div className="flex group cursor-pointer text-slate-800 text-sm items-center
                                                justify-center gap-1 relative after:h-[18px] after:w-[1px]
                                                after:bg-[#AFAFAF] after:-right-[16px] after:absolute
                                                before:absolute before:-[18px] before:bg-[#AFAFAF] before:w-[1px]
                                                before:-left-[16px]">
                                <img height={30} width={30} src="http://localhost:3000/images/language.png" alt="" />
                                <span><IoMdArrowDropdown /></span>
                                <ul className='absolute invisible transition-all top-12 rounded-sm duration-200
                                                  text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible
                                                  group-hover:top-6 group-hover:bg-black z-10'>
                                    <li>Português</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            {
                                user ?
                                    <Link to="/dashboard"
                                          className="flex cursor-pointer justify-center items-center gap-2 text-sm
                                                          text-black">
                                        <span> <FaUser /></span>
                                        <span>Herval Mata</span>
                                    </Link> :
                                    <Link to="/login"
                                          className="flex cursor-pointer justify-center items-center gap-2 text-sm
                                                          text-black">
                                        <span> <FaLock /></span>
                                        <span>Entre </span>
                                    </Link>
                            }
                        </div>
                        <ul className="flex flex-col justify-start items-start text-sm font-bold uppercase">
                            <li>
                                <Link
                                    className={`p-2 block ${pathname === '/'
                                        ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Home</Link>
                            </li>
                            <li>
                                <Link
                                    className={`p-2 block ${pathname === '/'
                                        ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Loja</Link>
                            </li>
                            <li>
                                <Link
                                    className={`p-2 block ${pathname === '/'
                                        ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Blog</Link>
                            </li>
                            <li>
                                <Link
                                    className={`p-2 block ${pathname === '/'
                                        ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link
                                    className={`p-2 block ${pathname === '/'
                                        ? 'text-[#059473]' : 'text-slate-600'}`} to="/">Contato</Link>
                            </li>
                        </ul>

                        <div className="flex items-center justify-start gap-4 text-black">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                        <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                            <div className="w-[48px] h-[48px] rounded-full flex bg-[#F5F5F5] justify-center items-center">
                                <span><FaPhoneAlt /></span>
                            </div>
                            <div className="flex justify-end flex-col gap-1">
                                <h2 className="text-sm font-medium text-slate-700">+55 (21) 99999-9999</h2>
                                <span className="text-xs">Suporte 24/7</span>
                            </div>
                        </div>
                        <ul className="flex flex-col justify-start items-start gap-3 text-[#1C1C1C]">
                            <li className="flex justify-start items-start gap-2 text-sm">
                                <span><MdEmail /></span>
                                <span>support@gmail.com</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="w-[85%] lg:w-[90%] mx-auto">
                <div className="flex w-full flex-wrap md-lg:gap-8">
                    <div className="w-3/12 md-lg:w-full">
                        <div className="bg-white relative">
                            <div className="h-[50px] bg-[#059473] text-white flex justify-center md-lg:justify-between
                                            md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
                                 onClick={() => setCategoryShow(!categoryShow)}>
                                <div className="flex justify-center items-center gap-3">
                                    <span><FaList /></span>
                                    <span>Todas as Categorias</span>
                                </div>
                                <span className="pt-1"><IoIosArrowDown /></span>
                            </div>
                            <div className={`${categoryShow ? 'h-0' : 'h-[400px]'}
                                 overflow-hidden transition-all md-lg:relative duration-500
                                 absolute z-[99999] bg-[#DBF3ED] w-full border-x`}>
                                <ul className="py-2 text-slate-600 font-medium">
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <li key={index} className="flex justify-start items-center gap-2
                                                      px-[24px] py-[6px]">
                                                    <Link to={'/'} className="text-sm block">{category}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
                        <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
                            <div className="w-8/12 md-lg:w-full">
                                <div className="flex border h-[50px] items-center relative gap-6">
                                    <div className="relative after:absolute after:h-[25px] after:w-[1px]
                                                 after:bg-[#F5F5F5] after:-right-[15px] md:hidden">
                                        <select className="w-[190px] text-slate-600 font-semibold
                                               bg-transparent px-2 h-full outline-0 border-none"
                                            name="" id="">
                                            <option value="">Selecione a Categoria</option>
                                            {
                                                categories.map((category, index) => <option key={index} value={category}>{category}</option>)
                                            }
                                        </select>
                                    </div>
                                    <input className="w-full relative bg-transparent text-slate-500 outline-0
                                                 px-3 h-full"
                                        type="text" name="" id="" placeholder="Categoria"
                                           onChange={(e) => setSearchValue(e.target.value)} />
                                    <button className="bg-[#059473] right-0 absolute px-8 h-full font-semibold
                                                      uppercase text-white">
                                        Pesquisar
                                    </button>
                                </div>
                            </div>

                            <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
                                <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                                    <div className="w-[48px] h-[48px] rounded-full flex bg-[#F5F5F5] justify-center items-center">
                                        <span><FaPhoneAlt /></span>
                                    </div>
                                    <div className="flex justify-end flex-col gap-1">
                                        <h2 className="text-md font-medium text-slate-700">+55 (21) 99999-9999</h2>
                                        <span className="text-sm">Suporte 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
