import { motion } from 'framer-motion';
import styled from 'styled-components';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
import { Button } from './Header';
export default function Welcome({ bannerOptions }) {
  const [element, controls] = useScroll();
  return (
    <WelcomeContainer>
      <ImageContainer img={bannerOptions.img}>
        <Overlay />
      </ImageContainer>
      <Content
        variants={containerVariant}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={elementVariant}>{bannerOptions.title}</motion.h2>
        <motion.p variants={elementVariant}>{bannerOptions.subtitle}</motion.p>
        <ServiceBlurbContainer variants={elementVariant}>
          {bannerOptions.captions.map((caption) => {
            return (
              <div key={caption}>
                <i className="demo-icon icon-ok-circled" />
                <p>{caption}</p>1
              </div>
            );
          })}
        </ServiceBlurbContainer>
        <DarkButton variants={elementVariant}>Contact Us</DarkButton>
      </Content>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled(motion.section)`
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ImageContainer = styled.div`
  background-image: ${(props) => 'url(' + props.img + ')'};
  background-size: cover;
  background-position: center;
  height: 100%;
  z-index: -1;
  position: absolute;
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  left: -6rem;
  height: 100%;
  width: 65%;
  background: var(--light-peach);
  transform: skew(-10deg);
  z-index: 1;
`;

const Content = styled(motion.div)`
  z-index: 2;
  padding: 5rem var(--container-horizontal-padding);
  width: 65%;
  h2 {
    font-size: 4rem;
    font-weight: 100;
  }
  p {
    font-size: 2rem;
  }
`;

const ServiceBlurbContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0;
  i {
    color: var(--orange);
    font-size: 2rem;
    margin-right: 1rem;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const DarkButton = styled(Button)`
  color: white;
  background: var(--medium-green);
  border: 1px solid var(--medium-green);
  &:hover {
    background: var(--green);
    border: 1px solid var(--green);
    color: white;
  }
`;
