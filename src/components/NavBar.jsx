import { logo } from "../assets"

const NavBar = () => {

  return (
    <nav className='flex items-center gap-5 sm:text-4xl text-2xl font-ubuntu font-bold text-slate-700'>
        <img 
            src={logo}
            alt="logo"
            className='object-contain sm:w-16 sm:h-16 w-10 h-10'
        />
        <h2>Editogram</h2>
    </nav>
  )
}

export default NavBar