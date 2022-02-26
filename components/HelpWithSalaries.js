import Image from 'next/image';
import styled from 'styled-components';
import salaries from '../public/imgs/salaries.jpg';
import { motion } from 'framer-motion';
export default function HelpWithSalaries() {
  return (
    <Section>
      <motion.div>
        <h3>We help you with your salaries</h3>
        <p>
          Our payroll team consists of senior and authorized payroll consultants
          via the industry organization SRF consultants. We can thus guarantee
          high quality and advisory support. You as a customer get a customer
          responsible payroll consultant and also have access to the entire
          payroll team that is available so that you always get answers and feel
          confident that we have control over your payroll. We have solid and
          constantly updated documentation about your specific payroll routines
          and processes. The payroll team's solid experience and elaborated
          cooperation is, among other things, what sets us apart from many other
          outsourcing services and gives you as a customer secure payroll
          management.
        </p>
      </motion.div>
      <ImageContainer>
        <Image layout="responsive" objectFit="cover" src={salaries} />
      </ImageContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem var(--container-horizontal-padding) 6rem
    var(--container-horizontal-padding);
  display: flex;
  align-items: center;
  div {
    p {
      width: 60ch;
      margin-right: 6rem;
    }
  }
`;

const ImageContainer = styled.div`
  display: block;
  width: 100%;
  img {
    border-radius: 0.3rem;
  }
`;
