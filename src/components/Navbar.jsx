import { navLists } from "../constants"
import { logoImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
return (
<header className="w-full sm:px-10 px-5 flex justify-between items-center">
    <nav className="flex w-full screen-max-width z-20 items-center">
        <div className="flex items-center">
            <img className="xl:w-36 w-28" src={logoImg} alt="unicoder" />
            <h3 className="text-2xl max-md:hidden text-gray-100 font-semibold ml-28 absolute">Uniopen <span className="text-fuchsia-500"><i>Cloud</i></span></h3>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
                <div className='px-5 xl:text-xl sm:text-sm cursor-pointer text-gray hover:text-fuchsia-500 transition-all' key={nav}>
                    {nav}
                </div>
            ))}
        </div>
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
    </nav>
</header>

);

}

export default Navbar
