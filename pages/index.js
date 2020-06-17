import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';

import Page from '../components/page';
import Footer from '../components/footer';

import Intro from '../components/home/intro';
import SocialMeta from '../components/social-meta';
import { ORG_NAME } from '../lib/constants';

export default () => {
  const isAmp = useAmp();

  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url="https://nextjs.org"
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />
      <SkipNavContent />
      <Intro isAmp={isAmp} />
      <Footer />
    </Page>
  );
};

export const config = {
  amp: 'hybrid'
};
