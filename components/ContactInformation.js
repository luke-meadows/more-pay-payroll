import styled from 'styled-components';
export default function ContactInformation() {
  return (
    <StyledContactInformation>
      <h2>Welcome to a smarter accounting firm!</h2>
      <p>We are ready to answer your questions, big and small.</p>
      <ContactMethodContainer>
        <ContactMethod>
          <h6>Email</h6>
          <p>info@morepay.co.uk</p>
        </ContactMethod>
        <ContactMethod>
          <h6>Telephone</h6>
          <p>07949442844</p>
        </ContactMethod>
        <ContactMethod>
          <h6>London Address</h6>
          <p className="no-underline">1 Green Street, London, SE1 1FF</p>
          <a target="blank" href="https://www.google.com/maps">
            Show on map
          </a>
        </ContactMethod>
        <ContactMethod>
          <h6>Birmingham Address</h6>
          <p className="no-underline">1 red Street, Birmingham, B11 5FG</p>
          <a target="blank" href="https://www.google.com/maps">
            Show on map
          </a>
        </ContactMethod>
      </ContactMethodContainer>
    </StyledContactInformation>
  );
}

const StyledContactInformation = styled.div`
  margin-right: 10rem;
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-right: 0rem;
  }
`;

const ContactMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4rem;
  gap: 5rem;

  * {
    margin: 0;
    padding: 0.5rem 0;
  }
  h6 {
    font-size: 2rem;
  }
  p {
    text-decoration: underline;
    color: var(--medium-green);
    &.no-underline {
      text-decoration: none;
      color: var(--dark-gray);
    }
  }
  a {
    font-size: 2rem;
    text-decoration: underline;
    color: var(--medium-green);
  }
`;

const ContactMethod = styled.div``;
