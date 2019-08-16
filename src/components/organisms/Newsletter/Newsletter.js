import React from 'react';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import theme from '../../../utils/theme/theme';
import Input from '../../atoms/Input';
import InputWrapper from './InputWrapper';

const Newsletter = () => (
  <>
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
    <Paragraph
      fontSize={theme.fontSizes.xs}
      textAlign="center"
      mobileMarginTop="27px"
    >
      Odoslaním registrácie k newsletteru súhlasím, že som si prečítal(a){' '}
      <a href="/">Podmienky pre spracovanie osobných údajov pre newsletter</a> a
      súhlasím s nimi.
    </Paragraph>
  </>
);

export default Newsletter;
