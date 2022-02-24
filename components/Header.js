import Link from 'next/link';
import styled from 'styled-components';
export default function Header() {
  return (
    <StyledHeader>
      <Logo>
        More Pay<span>.</span>
      </Logo>
      <Nav>
        <Link href="/">Accounting</Link>
        <Link href="/">Financial statements</Link>
        <Link href="/">Payroll administration</Link>
        <Link href="/">Advice</Link>
      </Nav>
      <ContactButton>Contact Us</ContactButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: var(--container-padding);
  height: 9rem;
  font-family: 'Century Gothic';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
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

const ContactButton = styled.button`
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
