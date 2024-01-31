import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppModern/Navbar';
import Banner from 'containers/TestIvacus/Banner';
import Features from 'containers/TestIvacus/Features';
import Footer from 'containers/TestIvacus/Footer';
import GlobalStyle, { AppWrapper, ContentWrapper } from 'containers/AppModern/appModern.style';
import FeatureSlider from 'containers/TestIvacus/FeatureSlider';
import WalletDashboard from 'containers/TestIvacus/WalletDashboard';
import Testimonials from 'containers/TestIvacus/Testimonials';
import Pricing from 'containers/TestIvacus/Pricing';
import CallToAction from 'containers/TestIvacus/CallToAction';

const TestIvacus = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>App Modern | A next js landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta name="keywords" content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing" />
          <link href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap" rel="stylesheet" />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <FeatureSlider />
            <WalletDashboard />
            <Testimonials />
            <Pricing />
            <CallToAction />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default TestIvacus;
