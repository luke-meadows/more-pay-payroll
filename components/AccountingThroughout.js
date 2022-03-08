import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
import Together from '../public/imgs/together.jpg';
import { Button } from './Header';

export default function AccountingThroughout() {
  const [element, controls] = useScroll();
  return (
    <Section
      variants={containerVariant}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Content>
        <motion.h3 variants={elementVariant}>
          Accounting throughout the UK
        </motion.h3>
        <motion.h4 variants={elementVariant}>
          Simple bookkeeping and accounting at the UK's lowest price
        </motion.h4>
        <motion.p variants={elementVariant}>
          Your Pay accounting firm was started in Stockholm in 2013 because we
          thought the cost of current accounting and accounting was too
          expensive for small and medium-sized companies. Even with a limited
          amount of vouchers and employees, accounting costs were often several
          thousand dollars each month. We therefore wanted to start an
          accounting firm that could offer qualitative current accounting and
          bookkeeping but at a low price. One step in this was to digitize the
          current accounting so that we could use our time for smarter things.
          Like giving really good advice and a personal service.
        </motion.p>
        <motion.p variants={elementVariant}>
          Our digital accounting services have also made it possible to help
          customers from all over the country. So it actually does not matter if
          you are from Stockholm, Gothenburg, Malmö or Finspång; our accounting
          works just as well wherever in Sweden you are. In addition to current
          accounting, Your Pay also offers financial statements, income tax
          returns, annual reports, tax advice, payroll administration and
          qualified advice on business finance issues. In other words, Your Pay
          is like any qualified accounting firm. Except that we are a little
          smarter, a little smoother and above all a little cheaper. Welcome to
          a smarter accounting firm!
        </motion.p>
        <Button variants={elementVariant}>Read more about us</Button>
      </Content>
      <ImageContainer variants={elementVariant}>
        <Image src={Together} layout="responsive" objectFit="cover" />
      </ImageContainer>
    </Section>
  );
}

const Section = styled(motion.section)`
  padding: 6rem var(--container-horizontal-padding);
  display: flex;
  align-items: center;
  background: var(--light-peach);
  @media only screen and (max-width: 1240px) {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;

const Content = styled.div`
  margin-right: 6rem;

  h3 {
    margin: 0 0 2rem 0;
  }
  h4 {
    margin: 0;
  }
  p {
    width: 70ch;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-top: 2rem;
    }
    p,
    h3,
    h4 {
      width: 100%;
      text-align: center;
    }
    button {
      width: fit-content;
    }
  }
`;
