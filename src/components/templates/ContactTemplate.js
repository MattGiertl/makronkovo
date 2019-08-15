import React from 'react';
import NavBar from '../organisms/NavBar/Navbar';
import styled from '@emotion/styled';
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import {
  tabletQuery,
  tabletLandscapeQuery,
  mobileQuery,
} from '../../utils/mediaqueries';
import Fountain from '../atoms/Fountain';
import Map from '../atoms/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 29.17%',
  justifyContent: 'center',
  alignItems: 'center',

  [mobileQuery]: {
    margin: '0 43px 0 37px',
  },

  [tabletQuery]: {
    margin: '0 43px 0 37px',
  },

  [tabletLandscapeQuery]: {
    margin: '0 29.17%',
  },
});

const OpeningHours = styled.div({
  display: 'flex',
  marginTop: '61px',
});

const ContactTemplate = () => (
  <>
    <NavBar />
    <ContentWrapper>
      <Heading>Kontakt</Heading>
      <Fountain />
      <Paragraph lineHeight="24px">
        <FontAwesomeIcon icon="map-marker-alt" style={{ marginRight: '4px' }} />
        Zvolenská cesta 85, Banská Bystrica
      </Paragraph>
      <Paragraph lineHeight="24px">
        <FontAwesomeIcon style={{ marginRight: '4px' }} icon="envelope" />
        makronkovo@makronkovo.sk
      </Paragraph>
      <Paragraph lineHeight="24px">
        <FontAwesomeIcon style={{ marginRight: '4px' }} icon="phone-alt" />
        0948 009 800
      </Paragraph>
      <OpeningHours>
        <Paragraph>Otváracia doba:</Paragraph>
        <Paragraph marginLeft="4px">Podľa dohody</Paragraph>
      </OpeningHours>
      <Map />-
    </ContentWrapper>
  </>
);

export default ContactTemplate;
