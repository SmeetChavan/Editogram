import { logo } from "../assets"

const NavBar = () => {

  return (
    <nav className='flex items-center gap-5 text-4xl font-ubuntu font-bold text-slate-700'>
        <img 
            src={logo}
            alt="logo"
            className='object-contain w-16 h-16'
        />
        <h2>Editogram</h2>
    </nav>
  )
}

export default NavBar