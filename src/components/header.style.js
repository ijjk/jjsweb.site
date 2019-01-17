import css from 'styled-jsx/css'

import theme from '../styles/theme'
import { navItems } from '../config'

export default css`
  header {
    display: block;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  .constrain {
    margin: 0 auto;
    display: flex;
    padding: 8px 10px;
    max-width: 1200px;
    align-items: center;
    flex-direction: row;
  }

  :global(.logo) {
    margin: 0 10px;
  }

  nav,
  :global(.logo) ~ ul {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    margin: 0 10px 0 auto;
    text-transform: uppercase;
  }

  input {
    display: none;
  }

  label span {
    padding-right: 5px;
  }

  label :global(svg) {
    transition: transform 200ms ease;
  }

  #checkbox:checked ~ label :global(svg) {
    transform: rotate(180deg);
  }

  nav,
  :global(.logo) ~ ul {
    left: 0;
    z-index: 10;
    width: 100vw;
    display: block;
    max-height: 0px;
    overflow: hidden;
    position: absolute;
    background: #ffffff;
    transition: all ease-in-out;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  nav {
    top: 60px;
    transition-delay: 49ms;
    transition-duration: 200ms;
  }

  :global(.logo) ~ ul {
    align-items: center;
    display: inline-flex;
    transition-delay: 0ms;
    justify-content: center;
    transition-duration: 50ms;
    top: ${37 * navItems.length + 60}px;
  }

  :global(.logo) ~ ul li :global(a) {
    padding: 10px 10px;
  }

  #checkbox:checked ~ nav {
    transition-delay: 0ms;
    max-height: ${37 * navItems.length}px;
  }

  #checkbox:checked ~ :global(.logo) ~ ul {
    max-height: 50px;
    transition-delay: 199ms;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li :global(a) {
    display: block;
    line-height: 1;
    font-size: 16px;
    color: ${theme.fg};
  }

  li :global(a:hover),
  li :global(a.active) {
    color: ${theme.active};
  }

  nav li :global(a) {
    width: 100vw;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 500px) {
    input,
    label {
      display: none;
    }

    ul {
      align-items: center;
      display: inline-flex;
    }

    nav,
    :global(.logo) ~ ul {
      flex: 1 1 0;
      width: auto;
      position: static;
      box-shadow: none;
      max-height: none;
      overflow: visible;
    }

    nav li :global(a) {
      border-bottom: none;
    }

    nav ul li :global(a) {
      width: auto;
      padding: 10px 10px;
    }

    li :global(a) {
      transition: color 250ms ease;
    }

    :global(.logo) ~ ul {
      padding-right: 3px;
      display: inline-flex;
      justify-content: flex-end;
    }

    :global(.logo) ~ ul li :global(a) {
      padding: 10px 7px;
    }
  }
`
