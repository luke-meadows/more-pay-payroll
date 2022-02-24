import styled from 'styled-components';
import Header from './Header';
import { GlobalStyles } from '../styles/GlobalStyles';
export default function Page({ children }) {
  return (
    <StyledPage>
      <GlobalStyles />
      <Header />
      {children}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
`;
