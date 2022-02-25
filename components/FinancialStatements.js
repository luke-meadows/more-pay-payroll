import styled from 'styled-components';
export default function FinancialStatements() {
  return (
    <Section>
      <h3>Financial statements - This is included for you as a customer</h3>
      <p>
        When it's time for the annual year-end work, we first like to sit down
        with our customers and go through this year's events. We care about
        having a personal relationship with you as a customer and a
        reconciliation at the end of the year gives us the same picture of how
        the year-end work should be done for the past financial year.
      </p>
      <h6>We offer:</h6>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Annual report
      </p>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Annual reconciliation
      </p>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Year-end transactions
      </p>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Accruals
      </p>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Depreciation
      </p>
      <p>
        <span>
          <i className="icon-ok-circled"></i>
        </span>
        Year-end appropriations
      </p>
      <div>
        <p>
          The result of the year-end work, the annual report, is the summary
          report on how the business has proceeded during the past financial
          year. By law, all limited companies must prepare an annual report each
          year and submit it toThe Swedish Companies Registration Office.
          Bokoredo will of course help you with that work. Thanks to this year's
          accounting, the books are already in good condition when we start. But
          there is still a lot of work to be done with the annual report. For
          example, there are probably some year-end transactions that should be
          arranged. Maybe the cost of that company car should be depreciated
          over five years or the revenue from the sale should be accrued so that
          it matches the associated costs? Or should part of the result be
          placed in an accrual fund to reduce the tax for the year? Thanks to
          the year-end work, it is determined how much money should be
          distributed to the company's owners, and special tax advice is needed
          in connection with the year-end financial statements, Bokoredo also
          assists with this.
        </p>
        <p>
          A well-prepared and elaborated annual report is a requirement for an
          authorized public accountant to approve it. If the accounting and the
          annual report are to be audited, that is. If the company is small
          enough, there has been no requirement for an audit to be performed for
          a couple of years. If you can therefore opt out of an auditor due to
          the company's size, it is often a good idea that saves many thousands
          of kroner. Of course, we also help with this if it is relevant for
          your company. If an audit is required due to the company's size,
          Bokoredo also has good contacts with auditing firms and handles all
          necessary dialogue with the auditor.
        </p>
        <p>
          All in all, it can be said that the year-end work means that the
          current accounting is checked, and smart adjustments are made to
          create a more accurate picture of the company's past years. When all
          work with the annual accounts has been completed and the annual report
          has been signed, Bokoredo finally handles all reporting toThe Swedish
          Tax Agency. It could not be easier.
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem var(--container-horizontal-padding);
  width: 1200px;
  margin: 0 auto;
  h6 {
    font-size: 2rem;
    margin-bottom: 0;
  }
  i {
    color: var(--orange);
    margin-right: 1rem;
  }
  div {
    margin-top: 4rem;
  }
`;
