import Page from '../components/Page';
import Welcome from '../components/Welcome';
import Quote from '../components/Quote';
import { payrollAdministrationBannerOptions } from '../lib/bannerOptions';
import HelpWithSalaries from '../components/HelpWithSalaries';

export default function payrollAdministration() {
  return (
    <Page>
      <Welcome bannerOptions={payrollAdministrationBannerOptions} />
      <Quote size="large" />
      <HelpWithSalaries />
    </Page>
  );
}
