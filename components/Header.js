import Link from '../components/NoScrollLink';
import styled from 'styled-components';
import { motion } from 'framer-motion';
export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo>
          More Pay<span>.</span>
        </Logo>
      </Link>
      <Nav>
        <Link href="/accounting">Accounting</Link>
        <Link href="/financial-statements">Financial statements</Link>
        <Link href="/payroll-administration">Payroll administration</Link>
      </Nav>
      <Button>Contact Us</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  z-index: 2;
  padding: 0 var(--container-horizontal-padding);
  height: 9rem;
  font-family: 'Century Gothic';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
`;

const Logo = styled.h1`
  color: var(--dark-gray);
  cursor: pointer;
  span {
    color: var(--medium-green);
  }
`;

const Nav = styled.nav`
  margin-right: -6rem;
  a {
    font-size: 2rem;
    font-family: 'Futura PT';
    font-weight: 500;
    margin-right: 6rem;
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
