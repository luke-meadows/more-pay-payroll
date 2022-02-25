import { PageContainer } from '../styles/GlobalStyles';
import Welcome from '../components/Welcome';
import FixedPrices from '../components/FixedPrices';
import FinancialStatements from '../components/FinancialStatements';
import { financialStatementsBannerOptions } from '../lib/bannerOptions';
import Page from '../components/Page';
export default function financialStatements() {
  return (
    <Page>
      <Welcome bannerOptions={financialStatementsBannerOptions} />
      <FixedPrices />
      <FinancialStatements />
    </Page>
  );
}
