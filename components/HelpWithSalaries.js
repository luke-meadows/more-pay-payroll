import Image from 'next/image';
import styled from 'styled-components';
import salaries from '../public/imgs/salaries.jpg';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
export default function HelpWithSalaries() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Section
      variants={containerVariant}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <div>
        <motion.h3 variants={elementVariant}>
          We help you with your salaries
        </motion.h3>
        <motion.p variants={elementVariant}>
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
        </motion.p>
      </div>
      <ImageContainer variants={elementVariant}>
        <Image layout="responsive" objectFit="cover" src={salaries} />
      </ImageContainer>
    </Section>
  );
}

const Section = styled(motion.section)`
  padding: 6rem var(--container-horizontal-padding) 10rem
    var(--container-horizontal-padding);
  display: flex;
  align-items: center;
  div {
    p {
      width: 60ch;
      margin-right: 6rem;
    }
  }
  @media only screen and (max-width: 1240px) {
    flex-direction: column;
    div {
      p {
        width: 100%;
      }
    }
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
  width: 100%;
  img {
    border-radius: 0.3rem;
  }
`;
