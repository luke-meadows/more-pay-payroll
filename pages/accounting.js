import { PageContainer } from '../styles/GlobalStyles';
import Welcome from '../components/Welcome';
import { accountingBannerOptions } from '../lib/bannerOptions';
import Quote from '../components/Quote';
import WhatsIncluded from '../components/WhatsIncluded';
import GetStarted from '../components/GetStarted';
import OurCustomers from '../components/OurCustomers';
import WeTakeCareOfEverything from '../components/WeTakeCareOfEverything';
import FinancialStatements from '../components/FinancialStatements';
import Page from '../components/Page';

export default function accounting() {
  return (
    <Page>
      <Welcome bannerOptions={accountingBannerOptions} />
      <WhatsIncluded />
      <GetStarted />
      <OurCustomers />
      <WeTakeCareOfEverything />
      <FinancialStatements />
    </Page>
  );
}
