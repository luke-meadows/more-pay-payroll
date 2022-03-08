import Link from 'next/link';
import styled from 'styled-components';
export default function Footer() {
  return (
    <StyledFooter>
      <Column>
        <h4>Our services</h4>
        <Link href="/">Accounting</Link>
        <Link href="/">Financial Statements</Link>
        <Link href="/">Payroll Administration</Link>
        <Link href="/">Advice</Link>
      </Column>
      <Column>
        <h4>Contact</h4>
        <p>
          <span>
            <i className="icon-phone" />
          </span>
          +447 949 4428 44
        </p>
        <p>
          <span>
            <i className="icon-mail-alt" />
          </span>
          developedbyluke@gmail.com
        </p>
      </Column>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 4rem 0;
  background: var(--peach);
  color: var(--dark-gray);
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  @media only screen and (max-width: 1240px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Column = styled.div`
  width: fit-content;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;

  p,
  a {
    margin: 0.5rem 0;
  }
  h4 {
    margin: 0rem 0 2rem 0;
  }
  p,
  a {
    font-size: 1.8rem;
  }
  span {
    margin-right: 1rem;
  }
  @media only screen and (max-width: 1240px) {
    padding: 0;
    p,
    a {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
