import {MdEmail} from "react-icons/md";
import {IoMdArrowDropdown, IoMdPhonePortrait} from "react-icons/io";
import {FaFacebook, FaGithub, FaLinkedin, FaLock, FaTwitter, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
    const user = true

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
        </div>
    )
}

export default Header;
