import NavLink from '../../common/NavlLink.tsx'

const HeaderLinks = () => {
  return (
          <nav className="hidden md:flex flex-1 justify-between items-center ">
              <NavLink name='HOME' url="/"/>
              <NavLink name='ABOUT US' url="/about"/>
              <NavLink name='CONTACT US' url="/contact"/>
              <NavLink name='PRIVACY POLICY' url="/privacy"/>
              <NavLink name='DMCA' url="/dmca"/>
              <NavLink name='TERMS & CONDITIONS' url="/terms"/>
           </nav>
  )
}

export default HeaderLinks
