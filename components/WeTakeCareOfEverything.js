import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
export default function WeTakeCareOfEverything() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll(0.2);
  return (
    <Section>
      <motion.div
        variants={containerVariant}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h3 variants={elementVariant}>
          Accounting - we take care of everything
        </motion.h3>
        <motion.p variants={elementVariant}>
          Managing the current accounting yourself can be both time-consuming,
          cumbersome and expensive - especially if you do not have full control
          of how the work is to be handled. Errors easily creep in that can be
          costly to correct and if you miss important dates and payments to the
          Swedish Tax Agency, you will receive unnecessary reminder fees as a
          result. As a customer of Your Pay, you can let go of everything that
          has to do with finances and know that you are in safe hands.
        </motion.p>
        <motion.h4 variants={elementVariant}>We offer:</motion.h4>
        <ServiceContainer variants={elementVariant}>
          <div>
            <i className="icon-ok-circled" /> <p> Current accounting</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Payroll administration</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Accounts receivable</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Accounts payable</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Payment files</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Invoice reminders</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Billing</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Periodic compilation</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Graphic reports</p>
          </div>
          <div>
            <i className="icon-ok-circled" />
            <p> VAT management inside and outside the EU</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Consolidation</p>
          </div>
          <div>
            <i className="icon-ok-circled" /> <p> Plant register</p>
          </div>
        </ServiceContainer>
      </motion.div>
      <motion.div
        variants={containerVariant}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <motion.p variants={elementVariant}>
          As a customer of Your Pay, you can safely hand over the responsibility
          for everything related to the current accounting, accounting and
          payroll administration to us. We make sure the work is done
          efficiently and that no mistakes are made. You send the current
          accounting to us digitally via your mobile or regular email. Of
          course, you can also rearrange the mail and avoid all mail handling if
          you wish. We then post all material and send easy-to-understand period
          reports back to you with all the information you need. These can also
          be adapted to your specific needs if there is something you want extra
          control over.
        </motion.p>
        <motion.p variants={elementVariant}>
          In addition to current accounting, Your Pay can also handle the
          company's salaries. Onepayroll administratorfrom Your Pay makes it
          easier so you avoid the hassle of knowing how, for example, holidays
          and illness should be booked. As a customer, you therefore only simply
          report salary-based information to us online. Then we fix the rest.
        </motion.p>
        <motion.p variants={elementVariant}>
          By having read access to our customers' bank accounts, we always keep
          track of the company's accounts payable and accounts receivable. This
          means that we always know if someone has not paid an invoice you
          issued, or if you yourself failed to pay an invoice. In this way, the
          company's liquidity can be maximized and unnecessary reminder fees
          avoided.
        </motion.p>
        <motion.p variants={elementVariant}>
          As a customer of Your Pay, you choose how you want to invoice. Either
          we put you in our simple online-based system, or you keep the solution
          you have today. Regardless of which solution you choose, Your Pay will
          help you. For customers who themselves want to send out invoice
          reminders, a customer ledger is included in the period report as
          support. For customers who want help sending out invoice reminders,
          Your Pay is happy to help with that as well. And you, if you want, we
          will of course also handle the payments for you.
        </motion.p>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem var(--container-horizontal-padding) 10rem
    var(--container-horizontal-padding);
  width: 70%;
  margin: 0 auto;
`;

const ServiceContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  div {
    display: flex;
    align-items: center;
    * {
      margin: 0.5rem 0;
    }
    i {
      margin-right: 1rem;
      color: var(--orange);
    }
  }
`;
