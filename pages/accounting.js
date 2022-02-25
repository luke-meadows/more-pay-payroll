import styled from 'styled-components';
import Welcome from '../components/Welcome';
import { accountingBannerOptions } from '../lib/bannerOptions';
import Quote from '../components/Quote';
import WhatsIncluded from '../components/WhatsIncluded';

export default function accounting() {
  return (
    <div>
      <Welcome bannerOptions={accountingBannerOptions} />
      <Quote size="large" />
      <WhatsIncluded />
    </div>
  );
}
