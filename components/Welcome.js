import styled from 'styled-components';
import { Button } from './Header';
export default function Welcome({ bannerOptions }) {
  return (
    <WelcomeContainer>
      <ImageContainer img={bannerOptions.img}>
        <Overlay />
      </ImageContainer>
      <Content>
        <h2>{bannerOptions.title}</h2>
        <p>{bannerOptions.subtitle}</p>
        <ServiceBlurbContainer>
          {bannerOptions.captions.map((caption) => {
            return (
              <div>
                <i className="demo-icon icon-ok-circled" />
                <p>{caption}</p>
              </div>
            );
          })}
        </ServiceBlurbContainer>
        <DarkButton>Contact Us</DarkButton>
      </Content>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.section`
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

const Content = styled.div`
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

const ServiceBlurbContainer = styled.div`
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
