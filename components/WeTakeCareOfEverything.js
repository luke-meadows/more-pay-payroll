import styled from 'styled-components';
export default function WeTakeCareOfEverything() {
  return (
    <Section>
      <h3>Accounting - we take care of everything</h3>
      <p>
        Managing the current accounting yourself can be both time-consuming,
        cumbersome and expensive - especially if you do not have full control of
        how the work is to be handled. Errors easily creep in that can be costly
        to correct and if you miss important dates and payments to the Swedish
        Tax Agency, you will receive unnecessary reminder fees as a result. As a
        customer of Bokoredo, you can let go of everything that has to do with
        finances and know that you are in safe hands.
      </p>
      <h4>We offer:</h4>
      <ServiceContainer>
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
          <i className="icon-ok-circled" />{' '}
          <p> VAT management inside and outside the EU</p>
        </div>
        <div>
          <i className="icon-ok-circled" /> <p> Consolidation</p>
        </div>
        <div>
          <i className="icon-ok-circled" /> <p> Plant register</p>
        </div>
      </ServiceContainer>
      <p>
        As a customer of Bokoredo, you can safely hand over the responsibility
        for everything related to the current accounting, accounting and payroll
        administration to us. We make sure the work is done efficiently and that
        no mistakes are made. You send the current accounting to us digitally
        via your mobile or regular email. Of course, you can also rearrange the
        mail and avoid all mail handling if you wish. We then post all material
        and send easy-to-understand period reports back to you with all the
        information you need. These can also be adapted to your specific needs
        if there is something you want extra control over.
      </p>
      <p>
        In addition to current accounting, Bokoredo can also handle the
        company's salaries. Onepayroll administratorfrom Bokoredo makes it
        easier so you avoid the hassle of knowing how, for example, holidays and
        illness should be booked. As a customer, you therefore only simply
        report salary-based information to us online. Then we fix the rest.
      </p>
      <p>
        By having read access to our customers' bank accounts, we always keep
        track of the company's accounts payable and accounts receivable. This
        means that we always know if someone has not paid an invoice you issued,
        or if you yourself failed to pay an invoice. In this way, the company's
        liquidity can be maximized and unnecessary reminder fees avoided.
      </p>
      <p>
        As a customer of Bokoredo, you choose how you want to invoice. Either we
        put you in our simple online-based system, or you keep the solution you
        have today. Regardless of which solution you choose, Bokoredo will help
        you. For customers who themselves want to send out invoice reminders, a
        customer ledger is included in the period report as support. For
        customers who want help sending out invoice reminders, Bokoredo is happy
        to help with that as well. And you, if you want, we will of course also
        handle the payments for you.
      </p>
      <p>
        Ps. It is also worth mentioning that digital accounting is green
        accounting. By avoiding deforestation and environmentally impacting
        emissions from printers, we can also save resources in the form of
        money, which also benefits our customers. Unlike many other agencies,
        our environmental work leads to reduced costs for our customers.
      </p>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem var(--container-horizontal-padding) 10rem
    var(--container-horizontal-padding);
  width: 70%;
  margin: 0 auto;
`;

const ServiceContainer = styled.div`
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