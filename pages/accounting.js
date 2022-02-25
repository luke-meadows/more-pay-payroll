import Welcome from '../components/Welcome';
import { accountingBannerOptions } from '../lib/bannerOptions';
import Quote from '../components/Quote';
import WhatsIncluded from '../components/WhatsIncluded';
import GetStarted from '../components/GetStarted';
import OurCustomers from '../components/OurCustomers';
import WeTakeCareOfEverything from '../components/WeTakeCareOfEverything';
import FinancialStatements from '../components/FinancialStatements';

export default function accounting() {
  return (
    <div>
      <Welcome bannerOptions={accountingBannerOptions} />
      <Quote size="large" />
      <WhatsIncluded />
      <GetStarted />
      <OurCustomers />
      <WeTakeCareOfEverything />
      <FinancialStatements />
    </div>
  );
}
