import React from 'react';
import styled from '@emotion/styled';
import theme from '../utils/theme/theme';
import FountainHeading from '../components/molecules/FountainHeading';
import Paragraph from '../components/atoms/Paragraph';
import DownloadImage from '../../static/assets/Download.svg';
import Layout from '../components/organisms/Layout/Layout';
import { Link } from 'gatsby';

const PlacehoderWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContentWrapper = styled.div({
  display: 'flex',
  maxWidth: '670px',
  flexDirection: 'column',
  justifyContent: 'center',
});

const StyledLink = styled(Link)({
  fontFamily: theme.fontFamilies.dinPro.bold,
  fontSize: theme.fontSizes.medium,
  color: theme.colors.mediumGold,
  marginLeft: '5px',
});

const Pic = styled.div(
  {
    textDecoration: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '50px',
    width: '48px',
    margin: '0 auto',
    cursor: 'pointer',
  },
  props => ({
    backgroundImage: `url(${props.backgroundImage})`,
  }),
);

const ImageWithAnchor = Pic.withComponent('a');

const Picture = ({ src, href }) => <ImageWithAnchor backgroundImage={src} href={href} />;

const PlaceholderTemplate = ({ pageContext }) => {
  const { header, upperText, lowerText, anchorText, anchorTo, link } = pageContext;
  return (
    <Layout>
      <FountainHeading>{header}</FountainHeading>
      <PlacehoderWrapper>
        <ContentWrapper>
          <Paragraph
            textAlign="center"
            margin="25px auto 35px"
            mobileMargin="25px 40px 35px"
            fontFamily={theme.fontFamilies.dinPro.regular}
            fontSize={theme.fontSizes.medium}
          >
            {upperText}
          </Paragraph>
          <Picture src={DownloadImage} href={link} />
          <Paragraph
            textAlign="center"
            margin="37px"
            fontFamily={theme.fontFamilies.dinPro.bold}
            fontSize={theme.fontSizes.medium}
          >
            {lowerText}
            {anchorTo && (
              <StyledLink to={anchorTo} target="_blank">
                {anchorText}
              </StyledLink>
            )}
          </Paragraph>
        </ContentWrapper>
      </PlacehoderWrapper>
    </Layout>
  );
};

export default PlaceholderTemplate;
