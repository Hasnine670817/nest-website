import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo1.png'
import greenFire from '../assets/images/green-fire.png'

const Header = () => {

    const link = (
        <>
            <li>
                <NavLink to="/about" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">About</NavLink>
            </li>
            <li>
                <NavLink to="/shop" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Shop</NavLink>
            </li>
            <li>
                <NavLink className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Mega menu</NavLink>
            </li>
            <li>
                <NavLink to="/vendors" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Vendors</NavLink>
            </li>
            <li>
                <NavLink to="/blog" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/pages" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Pages</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="text-[#253D4E] hover:bg-transparent hover:text-[#3BB77E]">Contact</NavLink>
            </li>
        </>
    )

    return (
        <header className='md:pt-4 md:mb-4'>
            <div className='container-custom'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 hover:bg-transparent border-0 shadow-none !h-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold text-base z-20">
                                {link}
                            </ul>
                        </div>
                        <div className='flex gap-5 3xl:gap-10 items-center'>
                            <a><img className='max-w-[100px] 2xl:max-w-[150px] 3xl:max-w-none ms-2.5' src={logo} alt="logo" /></a>
                            <p className='hidden md:flex lg:hidden xl:flex gap-1 items-center text-sm 2xl:text-base font-bold'>
                                <img src={greenFire} alt="fire" />
                                Hot Deals
                            </p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-bold text-sm 2xl:text-base gap-3 2xl:gap-8">
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end lg:w-[35%] 2xl:w-[25%] 3xl:w-[35%]">
                        <Link className="btn bg-[#3BB77E] hover:bg-[#27db87] text-white border-0 h-[35px] xl:h-[44px] xl:w-[98px] text-center text-xs md:text-sm xl:text-base">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;