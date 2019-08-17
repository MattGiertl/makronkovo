import React from "react";
import NavBar from "../organisms/NavBar/Navbar";
import Card from "../atoms/Card";
import CakesImage from "../../../static/assets/Cakes.png";
import SignImage from "../../../static/assets/Sign.png";

const AboutTemplate = () => {
  return (
    <>
      <NavBar />
      <Card
        cardHeight="347px"
        cardWidth="1010px"
        image={CakesImage}
        imageHeight="267px"
        imageWidth="379px"
        imageName="koláčiky"
        heading="Sme cukrárska manufaktúra MAKRONKOVO a pečieme dezerty, ktoré spôsobujú závislosti."
        paragraph="Sme iní, pretože sa nebojíme kvality, my na nej staviame. Cítiť v dezerte pravú čokoládu, živočíšnu smotanu alebo maslo namiesto margarínu a žiadne stužovače je už celkom rarita. My ale meníme pravidlá hry, koláč má byť totiž za odmenu a nie za trest."
      />
      <Card
        cardHeight="347px"
        cardWidth="1010px"
        image={SignImage}
        imageHeight="267px"
        imageWidth="379px"
        imageName="koláčiky"
        heading="MAKRONKOVO vzniklo v roku 2013 ako súčasť bistra Pigis v Banskej Bystrici. Začínali sme s makronkami a pár dezertami, ktoré sa stali veľmi vyhľadávané a preto sme našu ponuku postupne rozširovali. Bistro sme v júni 2018 zavreli aby sme mohli naplno robiť to, čo nás najviac baví a to sú práve dezerty."
        paragraph="Robíme kvalitu namiesto kvantity a robíme len s tými najlepšími ktorí sa neboja byť iní."
      />
    </>
  );
};

export default AboutTemplate;
