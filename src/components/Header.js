import React from 'react'
import { Link } from 'gatsby'

import ExtLink from './extLink'
import NavLink from './navLink'
import Logo from '../assets/logo.svg'
import headerStyles from './header.style'
import Caret from '../assets/caret-down.svg'
import { pathPrefix, navItems, socials } from '../config'

let checkboxRef
const collapseNav = () => {
  if (checkboxRef) checkboxRef.checked = false
}

const Header = () => (
  <>
    <header>
      <div className="constrain">
        <input type="checkbox" id="checkbox" ref={el => (checkboxRef = el)} />

        <nav>
          <ul>
            {navItems.map(item => (
              <li key={item}>
                <NavLink
                  to={pathPrefix + (item === 'Home' ? '' : item.toLowerCase())}
                >
                  <span onClick={collapseNav}>{item}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/" className="logo">
          <span className="hidden">JK logo</span>
          <span onClick={collapseNav}>
            <Logo height={50} />
          </span>
        </Link>

        <label htmlFor="checkbox">
          <span>Menu</span>
          <Caret height={18} />
        </label>

        <ul>
          {socials.map(({ alt, Icon, link }) => (
            <li key={link}>
              <ExtLink href={link}>
                <Icon height={22} />
                <span className="hidden">{alt}</span>
              </ExtLink>
            </li>
          ))}
        </ul>
      </div>
    </header>

    <style jsx>{headerStyles}</style>
  </>
)

export default Header
