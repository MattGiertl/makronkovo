import React from 'react';
import NavBar from '../../organisms/NavBar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import theme from '../../../utils/theme/theme';

import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';

import MainSlideShowPic1 from '../../../../static/img/products-grid1.jpg';
import MainSlideShowPic2 from '../../../../static/img/products-grid2.jpg';
import MainSlideShowPic3 from '../../../../static/img/products-grid3.jpg';

import PolaroidDummy from '../../../../static/img/jumbotron.jpg';

import SlideShow from '../../atoms/Slideshow';
import Button from '../../atoms/Button';
import SquarePic from '../../atoms/SquarePic';
import Input from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../molecules/Footer';
import Polaroid from '../../molecules/Polaroid';
import Section from '../../organisms/Section';

import SlideShowWrapper from './SlideShowWrapper';
import InputWrapper from './InputWrapper';
import LabeledSquarePic from '../../molecules/LabeledSquarePic';

library.add(
  fab,
  faInstagram,
  faTimes,
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
);

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
        <Polaroid img={PolaroidDummy} heading="TORTY NA MIERU" />
        <Polaroid img={PolaroidDummy} heading="DEZERTY" />
        <Polaroid img={PolaroidDummy} heading="CANDY BARY" />
      </Section>

      <Section
        spaceAround
        heading="ZĽAVNENÉ PRODUKTY"
        price="20"
        oldPrice="22"
        id="DiscountedProducts"
      >
        <Polaroid
          price="20"
          oldPrice="22"
          shadowed
          img={PolaroidDummy}
          description="Vanilkovo-citrónový cheescake"
        />
        <Polaroid
          price="20"
          oldPrice="22"
          shadowed
          img={PolaroidDummy}
          description="Vanilkovo-citrónový cheescake"
        />
        <Polaroid
          price="20"
          oldPrice="22"
          shadowed
          img={PolaroidDummy}
          description="Vanilkovo-citrónový cheescake"
        />
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

      <Section
        spaceAround
        heading="REFERENCIE OD NAŠICH KLIENTOV"
        id="ReferenceSection"
      >
        <Polaroid
          shadowed
          img={PolaroidDummy}
          description="@angiesdiary_"
          descriptionText="Ďakujem za najkrajšiu a najchutnejšiu tortu akú som mala 💗"
        />
        <Polaroid
          shadowed
          img={PolaroidDummy}
          description="@angiesdiary_"
          descriptionText="Ďakujem za najkrajšiu a najchutnejšiu tortu akú som mala 💗"
        />
        <Polaroid
          shadowed
          img={PolaroidDummy}
          description="@angiesdiary_"
          descriptionText="Ďakujem za najkrajšiu a najchutnejšiu tortu akú som mala 💗"
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <Button onClick={() => alert('NOT IMPLEMENTED YET')}>Viac</Button>
        </div>
      </Section>

      <Section heading="NEWSLETTER">
        <Paragraph
          textAlign="center"
          laptopWidth="100%"
          desktopWidth="100%"
          laptopMargin="0 200px"
          desktopMargin="0 200px"
        >
          Máte záujem zisťovať novinky o našich dezertoch, tortách a sladkých
          akciách? Cez náš newsletter Vám nič neujde.
        </Paragraph>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Zadajte Váš e-mail"
            mobileMarginTop="50px"
          />
          <Button
            width="380px"
            marginLeft="40px"
            onClick={() => alert('NOT IMPLEMENTED YET')}
          >
            Prihlásiť sa k odberu
          </Button>
        </InputWrapper>
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
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
        <LabeledSquarePic
          src={PolaroidDummy}
          heading="Darinka"
          description="Šéfka"
        />
      </Section>
      <Footer />
    </div>
  );
};

export default MainPageTemplate;
