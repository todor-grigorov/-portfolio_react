import React from 'react';
import { Navbar } from '../components';
import { About, Footer, Header, Skills, Testimonial, Work } from './index';

interface ParentProps {
  isLoading: boolean;
}

type Props = ParentProps;
const AppLanding: React.FC<Props> = ({ isLoading }: Props): JSX.Element => {
  return (
    <div style={{ display: `${isLoading ? 'none' : 'block'}` }}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default AppLanding;
