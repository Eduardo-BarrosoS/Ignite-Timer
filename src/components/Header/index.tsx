import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'

import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [active, setActive] = useState(true)

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to=""
          // onClick={() => setActive(true)}
          // className={active === true ? 'navActive' : ''}
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          // onClick={() => setActive(false)}
          // className={active === false ? 'navActive' : ''}
          title="Histórico"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
