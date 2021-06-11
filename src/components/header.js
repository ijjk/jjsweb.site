import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ExtLink from './extLink'
import Logo from './logo'
import headerStyles from './header.style'
import Caret from './svgs/caret-down'
import { pathPrefix, navItems, socials } from '../config'

let checkboxRef
const collapseNav = () => {
  if (checkboxRef) checkboxRef.checked = false
}

const Header = () => {
  const router = useRouter()

  return (
    <>
      <header>
        <div className="constrain">
          <input type="checkbox" id="checkbox" ref={el => (checkboxRef = el)} />

          <nav>
            <ul>
              {navItems.map(item => {
                const href = '/' + (item === 'Home' ? '' : item.toLowerCase())
                const asHref = pathPrefix !== '/' ? pathPrefix + href : href
                const active = href === router.route

                return (
                  <li key={item}>
                    <Link href={href} as={asHref}>
                      <a className={active ? 'active' : null}>
                        <span onClick={collapseNav}>{item}</span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Link href="/">
            <a className="logo">
              <span className="hidden">JK logo</span>
              <span onClick={collapseNav}>
                <Logo />
              </span>
            </a>
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
}

export default Header
