import React from "react";
import GDRPTemplate from "../components/templates/GDPRTemplate";
import Paragraph from "../components/atoms/Paragraph";
import GDRPText from "../data/gdrp.json";

const renderGDRPText = GDRPText.rules.map(text => {
  const { rule } = text;
  return <Paragraph marginBottom="34px">{rule}</Paragraph>;
});

const GDPR = () => <GDRPTemplate gdprText={renderGDRPText} />;

export default GDPR;
