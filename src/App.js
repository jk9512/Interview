import './App.css';
import BrandSec from './component/brandSec/BrandSec';
import ClientDetail from './component/clientDetail/ClientDetail';
import Compnies from './component/companies/Compnies';
import CompanyDetail from './component/companyDetail/CompanyDetail';
import ContactUs from './component/contactus/ContactUs';
import ExpertArea from './component/expertArea/ExpertArea';
import Footer1 from './component/footer/Footer1';
import Header from './component/header/Header';
import OurMission from './component/ourMission/OurMission';
import Vision from './component/vision/Vision';
import WhatWeDo from './component/whatWeDo/WhatWeDo';

function App() {
  return (
    <>
      <Header />
      <BrandSec />
      <OurMission />
      <Vision />
      <ExpertArea />
      <WhatWeDo />
      <CompanyDetail />
      <ClientDetail />
      <Compnies />
      <ContactUs />
      <Footer1 />
    </>
  );
}

export default App;
