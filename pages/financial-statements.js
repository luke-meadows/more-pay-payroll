import styled from 'styled-components';
import Welcome from '../components/Welcome';
import FixedPrices from '../components/FixedPrices';
import FinancialStatements from '../components/FinancialStatements';
import { financialStatementsBannerOptions } from '../lib/bannerOptions';
export default function financialStatements() {
  return (
    <div>
      <Welcome bannerOptions={financialStatementsBannerOptions} />
      <FixedPrices />
      <FinancialStatements />
    </div>
  );
}
