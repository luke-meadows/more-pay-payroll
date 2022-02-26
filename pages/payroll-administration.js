import Page from '../components/Page';
import Welcome from '../components/Welcome';
import Quote from '../components/Quote';
import { payrollAdministrationBannerOptions } from '../lib/bannerOptions';
import HelpWithSalaries from '../components/HelpWithSalaries';
import HowDoesItWork from '../components/HowDoesItWork';

export default function payrollAdministration() {
  return (
    <Page>
      <Welcome bannerOptions={payrollAdministrationBannerOptions} />
      <Quote size="large" />
      <HelpWithSalaries />
      <HowDoesItWork />
    </Page>
  );
}
