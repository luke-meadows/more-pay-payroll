import styled from 'styled-components';
import PhoneImg from '../public/imgs/phone-img.jpg';
import MeetingImg from '../public/imgs/meeting-img.jpg';
import Quote from '../components/Quote';
import Image from 'next/image';
export default function DigitalPersonalAccounting() {
  return (
    <Section>
      <Quote size="small" />
      <h3>Digital & personal accounting</h3>
      <p>
        At Bokoredo, you always get a dedicated accounting consultant who gives
        you personal service in combination with smart technical solutions. This
        way, you do not have to choose between a digital service and personal
        contact; with us you get both parts. In our ongoing service, you not
        only get the right number declared to the Swedish Tax Agency on the
        right day, but also a knowledgeable accounting consultant to answer
        questions with. No matter how you look at your company's accounts, we
        are sure to have a solution for you. Of course completely digital, with
        flexible systems that suit you and with a high level of personal service
        at a low price.
      </p>
      <CardContainer>
        <OuterCard backgroundColor="var(--blue)">
          <Card>
            <div className="img-container">
              <Image layout="responsive" objectFit="cover" src={PhoneImg} />
            </div>
            <h5>Take photos, send, ready!</h5>
            <h6>Flexible solutions</h6>
            <p>
              Avoid running back and forth to the mailbox or dragging bags of
              receipts. With us, everything is digital and visible. You send in
              your material via app or email and we will take care of the rest.
              It allows you to be anywhere in the world, but just a push of a
              button away from us. It could not be easier.
            </p>
          </Card>
        </OuterCard>
        <OuterCard backgroundColor="var(--peach)">
          <Card>
            <div className="img-container">
              <Image layout="responsive" objectFit="cover" src={MeetingImg} />
            </div>
            <h5>Always close at hand</h5>
            <h6>Personal accounting consultant</h6>
            <p>
              Paperless accounting does not mean impersonal accounting firm. On
              the contrary, with us, the customer relationship is in focus. That
              is why all our customers have a personal consultant. We believe
              that this is what allows you to sleep well at night with the
              knowledge that your company's financial management is in safe
              hands.
            </p>
          </Card>
        </OuterCard>
      </CardContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem var(--container-horizontal-padding);
  position: relative;
  h3 {
    font-size: 3rem;
  }
  p {
    width: 55ch;
    line-height: 1.3;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
`;
const OuterCard = styled.div`
  box-shadow: var(--bs);
  display: flex;
  background: ${(props) => props.backgroundColor};
  max-width: 60rem;
  @media only screen and (max-width: 1440px) {
    max-width: 45%;
  }
`;

const Card = styled.div`
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: initial;
    line-height: 1.3;
  }
  h5 {
    font-size: 2.8rem;
    margin: 2rem;
  }
  h6 {
    margin: 1rem;
    font-size: 2rem;
    line-height: 0;
  }
  .img-container {
    height: 30rem;
    width: 30rem;
    overflow: hidden;
    border-radius: 50%;
  }
`;
