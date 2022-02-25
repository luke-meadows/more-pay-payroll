import styled from 'styled-components';
export default function WhatsIncluded() {
  return (
    <Section>
      <h3>What&apos;s included?</h3>
      <p>
        We have developed an accounting service as we ourselves would like it to
        be; smart technology, competent colleagues and decent conditions!
      </p>
      <CardContainer>
        <Card color="var(--peach)">
          <h4>Simple and modern solutions</h4>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Fortnox</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>3rd party systems connected via API</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Own app for easy handling</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Fully cloud based</p>
          </div>
        </Card>

        <Card color="var(--blue)">
          <h4>Personal support</h4>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Senior consultant</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Proactive advice</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Clear reporting</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>A good night sleep</p>
          </div>
        </Card>

        <Card color="var(--peach)">
          <h4>The little extra</h4>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Tailored solutions</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>No fixation</p>
          </div>
          <div>
            <span>
              <i className="icon-ok-circled" />
            </span>
            <p>Complete solution</p>
          </div>
        </Card>
      </CardContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 0rem var(--container-horizontal-padding) 10rem
    var(--container-horizontal-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 6rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
`;

const Card = styled.div`
  background: ${(props) => props.color};
  padding: 2rem 5rem 5rem 5rem;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 2rem;
  }
  p {
    margin: 0;
  }
  i {
    color: var(--orange);
    margin-right: 1rem;
  }
`;
