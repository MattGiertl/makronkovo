import React from 'react';
import NavBar from '../organisms/NavBar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SlideShow from '../atoms/Slideshow';

import MainSlideShowPic1 from '../../../static/img/products-grid1.jpg';
import MainSlideShowPic2 from '../../../static/img/products-grid2.jpg';
import MainSlideShowPic3 from '../../../static/img/products-grid3.jpg';
import styled from '@emotion/styled';
import Polaroid from '../molecules/Polaroid';

import PolaroidDummy from '../../../static/img/jumbotron.jpg';
import {
  laptopQuery,
  desktopQuery,
  mobileQuery,
} from '../../utils/mediaqueries';
import Section from '../organisms/Section';
import theme from '../../utils/theme/theme';
import Button from '../atoms/Button';
import SquarePic from '../atoms/SquarePic';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Footer from '../molecules/Footer';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

const SlideShowWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  [mobileQuery]: {
    width: '100%',
  },

  [laptopQuery]: {
    height: '400px',
    margin: '0 455px',
  },

  [desktopQuery]: {
    height: '400px',
    margin: '0 455px',
  },
});

const MainPageTemplate = () => {
  return (
    <div>
      <NavBar />
      <SlideShowWrapper>
        <SlideShow>
          <img src={MainSlideShowPic1} alt="Pic1" />
          <img src={MainSlideShowPic2} alt="Pic2" />
          <img src={MainSlideShowPic3} alt="Pic3" />
        </SlideShow>
      </SlideShowWrapper>

      <Section
        spaceAround
        background={theme.colors.lightPink}
        heading="PONÚKAME VÁM"
        id="OfferSection"
      >
        <Polaroid img={PolaroidDummy} description="TORTY NA MIERU" />
        <Polaroid img={PolaroidDummy} description="DEZERTY" />
        <Polaroid img={PolaroidDummy} description="CANDY BARY" />
      </Section>

      <Section spaceAround heading="AKCIOVÉ PRODUKTY" id="DiscountedProducts">
        <Polaroid shadowed img={PolaroidDummy} description="TORTY NA MIERU" />
        <Polaroid shadowed img={PolaroidDummy} description="DEZERTY" />
        <Polaroid shadowed img={PolaroidDummy} description="CANDY BARY" />
      </Section>

      <Section heading="INSTAGRAM @MAKRONKOVO" id="InstagramSection">
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
        <SquarePic
          href="https://www.instagram.com/makronkovo/"
          src={PolaroidDummy}
        />
      </Section>

      <Section heading="REFERENCIE OD NAŠICH KLIENTOV" id="ReferenceSection">
        <Polaroid shadowed img={PolaroidDummy} description="TORTY NA MIERU" />
        <Polaroid shadowed img={PolaroidDummy} description="DEZERTY" />
        <Polaroid shadowed img={PolaroidDummy} description="CANDY BARY" />
        <Button onClick={() => alert('NOT IMPLEMENTED YET')}>Viac</Button>
      </Section>

      <Section heading="NEWSLETTER">
        <Paragraph textAlign="center">
          Máte záujem zisťovať novinky o našich dezertoch, tortách a sladkých
          akciách? Cez náš newsletter Vám nič neujde.
        </Paragraph>
        <Input type="text" placeholder="Zadajte Váš e-mail" />
        <Button
          marginTop="20px"
          width="100%"
          onClick={() => alert('NOT IMPLEMENTED YET')}
        >
          Prihlásiť sa k odberu
        </Button>
        {/* TODO: Lukass Anchor */}
        <Paragraph
          fontSize={theme.fontSizes.xs}
          textAlign="center"
          mobileMarginTop="27px"
        >
          Odoslaním registrácie k newsletteru súhlasím, že som si prečítal(a){' '}
          <a href="/">
            Podmienky pre spracovanie osobných údajov pre newsletter
          </a>{' '}
          a súhlasím s nimi.
        </Paragraph>
      </Section>
      <Section heading="NÁŠ TÝM">
        <SquarePic src={PolaroidDummy} />
        <SquarePic src={PolaroidDummy} />
        <SquarePic src={PolaroidDummy} />
        <SquarePic src={PolaroidDummy} />
      </Section>
      <Footer />
    </div>
  );
};

export default MainPageTemplate;
