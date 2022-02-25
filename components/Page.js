import styled from 'styled-components';
import Header from './Header';
import { GlobalStyles } from '../styles/GlobalStyles';
import Footer from './Footer';
export default function Page({ children }) {
  return (
    <StyledPage>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
`;
