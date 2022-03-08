import { motion } from 'framer-motion';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactInformation from '../components/ContactInformation';
import Page from '../components/Page';
export default function contact() {
  return (
    <Page>
      <Content>
        <ContactInformation />
        <ContactForm />
      </Content>
    </Page>
  );
}

const Content = styled(motion.div)`
  z-index: 2;
  padding: 6rem var(--container-horizontal-padding);
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: space-between;
  background: var(--pale-blue);
  h2 {
    font-size: 4rem;
    font-weight: 100;
  }
  p {
    font-size: 2rem;
  }
`;
