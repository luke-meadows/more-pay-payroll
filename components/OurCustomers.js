import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Bike from '../public/imgs/bike.jpg';
import Calculator from '../public/imgs/calculator.jpg';
import Sea from '../public/imgs/sea.jpg';
import Shoes from '../public/imgs/shoes.jpg';
export default function OurCustomers() {
  return (
    <Section>
      <h3>Our customers</h3>
      <Link href="/">See more customer references</Link>
      <CardsContainer>
        <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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
          <h5>John Doe, AAB DD Distribution</h5>
        </Card>
      </CardsContainer>
    </Section>
  );
}

const Section = styled.section`
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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  margin-top: 8rem;
`;

const Card = styled.div`
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
