import Link from '../components/NoScrollLink';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Link href="/">
        <Logo>
          More Pay<span>.</span>
        </Logo>
      </Link>
      <Nav
        className={mobileNavActive ? 'active' : ''}
        onClick={() => setMobileNavActive(false)}
      >
        <Link href="/accounting">Accounting</Link>
        <Link href="/financial-statements">Financial statements</Link>
        <Link href="/payroll-administration">Payroll administration</Link>
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
        {mobileNavActive && (
          <i
            className="icon-cancel-1"
            onClick={() => setMobileNavActive(!mobileNavActive)}
          />
        )}
      </Nav>
      <i
        className="icon-menu"
        onClick={() => setMobileNavActive(!mobileNavActive)}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  z-index: 2;
  padding: 0 var(--container-horizontal-padding);
  height: var(--header-height);
  font-family: 'Century Gothic';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  i {
    font-size: 3rem;
    cursor: pointer;
    display: none;
    pointer-events: none;
    @media only screen and (max-width: 1240px) {
      display: initial;
      pointer-events: initial;
    }
  }
`;

const Logo = styled.h1`
  color: var(--dark-gray);
  cursor: pointer;
  span {
    color: var(--medium-green);
  }
`;

const Nav = styled.nav`
  a {
    font-size: 2rem;
    font-family: 'Futura PT';
    font-weight: 500;
    margin-right: 6rem;
  }
  @media only screen and (max-width: 1240px) {
    position: absolute;
    min-height: 100vh;
    background: var(--pale-blue);
    top: 0;
    left: 100%;
    display: flex;
    flex-direction: column;
    padding: 6rem;
    width: 100vw;
    transition: all 0.75s ease;

    button,
    a {
      margin: 2rem 0;
      width: 30rem;
    }
    button {
      color: var(--dark-gray);
      text-align: left;
      padding: 0;
      border: none;
      font-size: 2rem;
      font-weight: 500;
      &:hover {
        color: var(--dark-gray);
        border: none;
        text-decoration: underline;
      }
    }
    i {
      position: absolute;
      top: 2.7rem;
      right: 3.8rem;
      font-size: 3rem;
    }
    &.active {
      left: 0;
    }
  }
`;

export const Button = styled(motion.button)`
  background: none;
  border: 1px solid var(--medium-green);
  color: var(--medium-green);
  padding: 0.75rem 2rem;
  font-family: 'Futura PT';
  font-size: 2rem;
  border-radius: 5rem;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--green);
    color: var(--green);
  }
`;
