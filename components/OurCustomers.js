import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Bike from '../public/imgs/bike.jpg';
import Calculator from '../public/imgs/calculator.jpg';
import Sea from '../public/imgs/sea.jpg';
import Shoes from '../public/imgs/shoes.jpg';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
export default function OurCustomers() {
  const [element, controls] = useScroll(0.1);
  const [element2, controls2] = useScroll(0.2);
  return (
    <Section
      variants={containerVariant}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <motion.h3 variants={elementVariant}>Our customers</motion.h3>
      <motion.div variants={elementVariant}>
        <Link href="/">See more customer references</Link>
      </motion.div>
      <CardsContainer
        variants={containerVariant}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <Card variants={elementVariant}>
          <ImageContainer>
            <Image src={Bike} />
            <p className="text">Ellen&apos;s Cycles</p>
          </ImageContainer>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat, saepe sapiente mollitia iste, molestias fugiat atque,
            obcaecati dolorum beatae ullam iure? Eius, beatae hic. Voluptatum,
            saepe officiis unde ex ducimus ullam a inventore est et optio
            tempore beatae incidunt aspernatur nihil blanditiis omnis nisi ipsam
            sit nulla facere quibusdam."
          </p>
          <h5>John Doe, Ellen&apos;s Cycles</h5>
        </Card>
        <Card variants={elementVariant}>
          <ImageContainer>
            <Image src={Calculator} />
            <p className="text">AAB Accounting</p>
          </ImageContainer>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat, saepe sapiente mollitia iste, molestias fugiat atque,
            obcaecati dolorum beatae ullam iure? Eius, beatae hic. Voluptatum,
            saepe officiis unde ex ducimus ullam a inventore est et optio
            tempore beatae incidunt aspernatur nihil blanditiis omnis nisi ipsam
            sit nulla facere quibusdam."
          </p>
          <h5>John Doe, AAB Accounting</h5>
        </Card>
        <Card variants={elementVariant}>
          <ImageContainer>
            <Image src={Sea} />
            <p className="text">Marine Cooperation</p>
          </ImageContainer>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat, saepe sapiente mollitia iste, molestias fugiat atque,
            obcaecati dolorum beatae ullam iure? Eius, beatae hic. Voluptatum,
            saepe officiis unde ex ducimus ullam a inventore est et optio
            tempore beatae incidunt aspernatur nihil blanditiis omnis nisi ipsam
            sit nulla facere quibusdam."
          </p>
          <h5>John Doe, Marine Cooperation</h5>
        </Card>
        <Card variants={elementVariant}>
          <ImageContainer>
            <Image layout="responsive" src={Shoes} />
            <p className="text">DD Distribution</p>
          </ImageContainer>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat, saepe sapiente mollitia iste, molestias fugiat atque,
            obcaecati dolorum beatae ullam iure? Eius, beatae hic. Voluptatum,
            saepe officiis unde ex ducimus ullam a inventore est et optio
            tempore beatae incidunt aspernatur nihil blanditiis omnis nisi ipsam
            sit nulla facere quibusdam."
          </p>
          <h5>John Doe, DD Distribution</h5>
        </Card>
      </CardsContainer>
    </Section>
  );
}

const Section = styled(motion.section)`
  background: var(--light-peach);
  padding: 4rem var(--container-horizontal-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: var(--medium-green);
    font-size: 1.8rem;
  }
`;

const CardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  margin-top: 8rem;
  @media only screen and (max-width: 1240px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    margin-bottom: 0;
  }
  h5 {
    font-size: 1.5rem;
    font-family: 'Futura PT';
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
  height: 20rem;
  width: 20rem;
  position: relative;
  .text {
    position: absolute;
    top: 20%;
    height: 100%;
    width: 100%;
    padding: 2rem;
    color: white;
  }
  img {
    border-radius: 50%;
    filter: sepia(1%) saturate(50%) brightness(50%) hue-rotate(357deg);
  }
`;
