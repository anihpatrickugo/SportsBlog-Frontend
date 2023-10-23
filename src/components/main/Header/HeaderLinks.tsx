import NavLink from '../../common/NavlLink.tsx'

const HeaderLinks = () => {
  return (
    <nav className="hidden md:flex flex-1 justify-between items-center ">
              <NavLink name='NBA' url="/"/>
              <NavLink name='NFL' url="/"/>
              <NavLink name='NHL' url="/"/>
              <NavLink name='MLB' url="/"/>
              <NavLink name='SOCCER' url="/"/>
              <NavLink name='FANTASY' url="/"/>
              <NavLink name='MASACAR' url="/"/>
           </nav>
  )
}

export default HeaderLinks
