import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
import { AltCard, AltCardContainer, AltImageSection } from './GetStarted';
import Image from 'next/image';
import Started from '../public/imgs/started.jpg';
import Clock from '../public/imgs/clock.jpg';
import Tablet from '../public/imgs/tablet.jpg';
export default function HowDoesItWork() {
  const [element, controls] = useScroll(0.5);
  const [element2, controls2] = useScroll(0.5);
  const [element3, controls3] = useScroll(0.5);
  const [element4, controls4] = useScroll(0.5);
  const [element5, controls5] = useScroll(0.5);
  return (
    <AltImageSection>
      <motion.div
        variants={containerVariant}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h3 variants={elementVariant}>How does it work?</motion.h3>
      </motion.div>
      <AltCardContainer>
        <motion.div
          variants={containerVariant}
          ref={element2}
          animate={controls2}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <ImageContainer>
              <Image src={Started} layout="responsive" objectFit="cover" />
            </ImageContainer>
            <Text>
              <p>01.</p>
              <h4>Start up</h4>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  Fill in contact information and we will contact you to be able
                  to give you a quote.
                </p>
              </div>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  Feedback to agree on the first salary payment month via Your
                  Pay and we will sign the agreement, digitally.
                </p>
              </div>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  The start-up is gaining momentum. Your Pay's start-up
                  consultant will contact you.
                </p>
              </div>
              <p className="bottom-p">Now our collaboration is underway!</p>
            </Text>
          </AltCard>
        </motion.div>
        <motion.div
          variants={containerVariant}
          ref={element3}
          animate={controls3}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <Text>
              <p>02.</p>
              <h4>Ongoing financial Advice</h4>
              <p>
                <div>
                  <span>
                    <i className="icon-ok-circled" />
                  </span>
                  <p>
                    Your contact person leaves us a salary basis, which can
                    refer to time and deviation reporting, new employees, salary
                    changes, completed, travel invoices etc. according to the
                    agreed deadline for documentation.
                  </p>
                </div>
                <div>
                  <span>
                    <i className="icon-ok-circled" />
                  </span>
                  <p>
                    Of course, our payroll system supports integration with most
                    early retirement systems in terms of both time registrations
                    and expenses.
                  </p>
                </div>
                <div>
                  <span>
                    <i className="icon-ok-circled" />
                  </span>
                  <p>
                    We handle the payroll preparation and ensure that deviations
                    and other things are handled correctly.
                  </p>
                </div>
              </p>
            </Text>
            <ImageContainer>
              <Image src={Tablet} layout="responsive" objectFit="cover" />
            </ImageContainer>
          </AltCard>
        </motion.div>
        <motion.div
          variants={containerVariant}
          ref={element4}
          animate={controls4}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <ImageContainer>
              <Image src={Clock} layout="responsive" objectFit="cover" />
            </ImageContainer>
            <Text>
              <p>03.</p>
              <h4>Ongoing payroll support</h4>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  We produce a bank file and deliver it to you as a customer or
                  if we also have the accounts for your company, our accounting
                  consultants upload the bank file for your final approval at
                  the bank.
                </p>
              </div>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  We send out the salary specifications to the employees, who
                  get access via the app
                </p>
              </div>
              <div>
                <span>
                  <i className="icon-ok-circled" />
                </span>
                <p>
                  We give you or our accounting consultants access to the report
                  package for the month which contains, AGI - Main task,
                  Individual task and file to read in at the Swedish Tax Agency,
                  Accounting orders, Holiday debt, Salary specifications.
                </p>
              </div>
            </Text>
          </AltCard>
        </motion.div>
      </AltCardContainer>
    </AltImageSection>
  );
}

const ImageContainer = styled.div`
  width: 46%;
  img {
    border-radius: 0.3rem;
  }
`;
const Text = styled.div`
  width: 46%;
  text-align: left;
  margin-bottom: 1rem;
  * {
    margin: 1rem 1rem 1rem 0;
  }
  div {
    display: flex;
    /* align-items: center; */
    i {
      margin: 0rem 0rem 0rem 0;
      color: var(--orange);
      font-size: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  .bottom-p {
    margin-top: 3rem;
    font-weight: 500;
  }
`;
