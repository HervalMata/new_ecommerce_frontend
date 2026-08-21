import {Link} from "react-router-dom";
import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F3F6Fa]">
            <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
                <div className="w-3/12 lg:w-4/12 sm:w-full">
                    <div className="flex flex-col gap-3">
                        <img className="w-[190px] h-[120px]"
                            src="http://localhost:3000/images/logo.png" alt="logo" />
                        <ul>
                            <li>Endereço: Rua Centro, 1000, Centro, São Paulo-SP </li>
                            <li>Celular: +55 (21) 99999-9999</li>
                            <li>Email: support@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="w-5/12 lg:w-8/12 sm:w-full">
                    <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
                        <div>
                            <h2 className="font-bold text-lg mb-2">Links Utéis</h2>
                            <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                                <ul className="flex flex-col gap-2 text-slate-600 text-sm font-semibold mt-10">
                                    <li>
                                        <Link to="/">Sobre Nós</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sobre A Loja</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Informações sobre entrega</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Politica de Privacidade</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-2 text-slate-600 text-sm font-semibold mt-10">
                                    <li>
                                        <Link to="/">Nossos Serviços</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Perfil da Companhia</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Informações sobre entrega</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Politica de Privacidade</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 lg:w-full lg:mt-6">
                    <div className="w-full flex flex-col gap-5 justify-start">
                        <h2 className="font-bold text-lg mb-2">Se Junte a nós</h2>
                        <span>Receba atualizações por email sobre novidades e ofertas especiais</span>
                        <div className="h-[50px] w-full bg-white border relative">
                            <input className="h-full bg-transparent w-full px-3 outline-0"
                                type="text" placeholder="Digite seu email" />
                            <button className="h-full absolute right-0 bg-[#059473]
                                              text-white uppercase px-4 font-bold text-sm">
                                Inscreva-se
                            </button>
                        </div>

                        <ul className="flex justify-start items-center gap-3">
                            <li>
                                <a className="w-[38px] h-[38px] hover:bg-[#059476] hover:text-white flex
                                             justify-center items-center bg-white rounded-full" href="#">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a className="w-[38px] h-[38px] hover:bg-[#059476] hover:text-white flex
                                             justify-center items-center bg-white rounded-full" href="#">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a className="w-[38px] h-[38px] hover:bg-[#059476] hover:text-white flex
                                             justify-center items-center bg-white rounded-full" href="#">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a className="w-[38px] h-[38px] hover:bg-[#059476] hover:text-white flex
                                             justify-center items-center bg-white rounded-full" href="#">
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[90%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
                <span>Copyright @ 2026 Todos os Direitos Reservados</span>
            </div>
        </footer>
    )
}

export default Footer;
