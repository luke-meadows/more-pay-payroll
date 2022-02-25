import styled from 'styled-components';
import { Button } from './Header';
export default function FixedPrices() {
  return (
    <Section>
      <h3>We work with fixed prices</h3>
      <p>
        We have decent and transparent prices for our year-end work. That way,
        you always know what it will cost you as a customer. We have divided our
        year-end offer into different packages, depending on how large a company
        you have. The packages are from Small to Extra Large. If you are not a
        customer with us with your current accounting, we can still help you
        according to capacity, contact us for more information.
      </p>

      <CardContainer>
        <Card>
          <h5>Financial statements Small</h5>
          <div>
            <ul>
              <li> No salaries</li>
              <li> 10 verifications per year</li>
              <li> No activity</li>
              <li> No accountant</li>
            </ul>
            <Customer>
              <span>
                <i className="icon-ok-circled" />
              </span>
              Current Customer
            </Customer>
          </div>
          <Price>
            <span>From</span>£434
          </Price>
          <CardButton>I am interested</CardButton>
        </Card>

        <Card>
          <h5>Financial statements Medium</h5>
          <div>
            <ul>
              <li> Up to 5 salaries</li>
              <li> 600 verifications per year</li>
              <li> No accountant</li>
              <li> K2</li>
            </ul>
            <Customer>
              <span>
                <i className="icon-ok-circled" />
              </span>
              Current Customer
            </Customer>
          </div>
          <Price>
            <span>From</span>£657
          </Price>
          <CardButton>I am interested</CardButton>
        </Card>
        <Card>
          <h5>Financial statements Large</h5>
          <div>
            <ul>
              <li> Up to 10 salaries</li>
              <li> 1,000 verifications per year</li>
              <li> Auditor</li>
              <li> K2</li>
            </ul>
            <Customer>
              <span>
                <i className="icon-ok-circled" />
              </span>
              Current Customer
            </Customer>
          </div>
          <Price>
            <span>From</span>£700
          </Price>
          <CardButton>I am interested</CardButton>
        </Card>
        <Card>
          <h5>Financial statements XL</h5>
          <div>
            <ul>
              <li> K3</li>
              <li> Consolidated financial statements</li>
            </ul>
            <Customer>
              <span>
                <i className="icon-ok-circled" />
              </span>
              Current Customer
            </Customer>
          </div>
          <Price>
            <span>From</span>£434
          </Price>
          <CardButton>I am interested</CardButton>
        </Card>
        <Card>
          <h5>Individual company</h5>
          <div>
            <ul>
              <li> Turnover up to 1 million</li>
              <li> No employees</li>
            </ul>
            <Customer>
              <span>
                <i className="icon-ok-circled" />
              </span>
              Current Customer
            </Customer>
          </div>
          <Price>
            <span>From</span>£3000
          </Price>
          <CardButton>I am interested</CardButton>
        </Card>
      </CardContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem var(--container-horizontal-padding);
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5rem;
  row-gap: 5rem;
  margin-top: 6rem;
`;
const Card = styled.div`
  border-radius: 0.3rem;
  box-shadow: var(--bs);
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    width: 100%;
  }
  h5 {
    border-radius: 0.3rem;
    background: var(--green);
    margin: 0;
    padding: 2rem;
    font-size: 2.5rem;
  }
  ul {
    margin: 3rem 0;
  }
  div {
    i {
      color: var(--medium-green);
    }
  }
`;

const Customer = styled.p`
  margin: 3rem 2rem;
`;

const Price = styled.p`
  padding: 0 2rem;
  font-size: 2.5rem;
  color: var(--dark-green);
  font-weight: 500;
  margin-bottom: 6rem;
  span {
    color: var(--dark-gray);
    font-size: 1.5rem;
    margin-right: 0.5rem;
    font-weight: 300;
  }
`;

const CardButton = styled(Button)`
  width: 80%;
  background: var(--medium-green);
  color: white;
`;
