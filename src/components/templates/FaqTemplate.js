import React from "react";
import { Link } from "gatsby";
import Heading from "../atoms/Heading";
import Fontain from "../atoms/Fontain";
import FontainImg from "../../../static/assets/Fontain.png";
import FaqPair from "../molecules/FaqPair";
import styled from "@emotion/styled";

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0 29.17%"
});

const FaqTemplate = () => (
  <div>
    <Link to="/">Go Back</Link>
    <ContentContainer>
      <Heading>Časté otázky</Heading>
      <Fontain src={FontainImg} alt="fontain" />
      <FaqPair
        question="Aké množstvo dezertov mám objednať?"
        answer="Na osobu odporúčame 3 ks dezertov."
      />
      <FaqPair
        question="Prečo nemôžem na jeden set vybrať rôzne plnky?"
        answer="Pretože plnky robíme vždy čerstvé a 12 ks je minimálne množstvo pre ktoré sa aj nám oplatí ich pripraviť."
      />
      <FaqPair
        question="Akú trvanlivosť majú Vaše dezerty??"
        answer="Naše torty majú pri správnom uskladnení trvanlivosť 5 dní, musia však byť uskladňované 
        pri teplote do 8 stupňov Celzia a pri ich prevoze 420 g 16 ks musí byť tiež dodržaná táto teplota. 
        V prípade, že stanovené teploty nie ste schopní dodržať, odporúčame tortu skonzumovať do 2 dní. 
        Trvanlivosť tartaletiek a makroniek je 5 dní, Pavlove tortičky a dezerty z odpaľovaného cesta odporúčame 
        skonzumovať do dvoch dní pretože ich plnka môže rozmočiť."
      />
      <FaqPair
        question="Musia byť dezerty uskladnené v chladničke?"
        answer="Áno, dezerty musia byť uskladnené v chladničke s teplotou 8 stupňov Celzia. Pred konzumáciou nechajte 
        dezerty zmäknúť aspoň pol hodinu pri vonkajšej teplote. Pri uskladňovaní dezertov v chladničke pri nesprávnej 
        teplote môže nastať zvlhnutie niektorých dekorácií, napríklad cukrových pusiniek a makroniek."
      />
      <FaqPair
        question="Môžem odoberať od vás dezerty do mojej kaviarne/reštaurácie?"
        answer="Áno, v tomto prípade nás prosím priamo kontaktujte."
      />
      <FaqPair
        question="Robíte aj bezlaktózové dezerty?"
        answer="Áno, vieme pripraviť aj bezlaktózové dezerty. Ich nacenenie je individuálne."
      />
    </ContentContainer>
  </div>
);

export default FaqTemplate;
