/* eslint-disable prettier/prettier */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Entities,
  Meta,
  Item,
  Image,
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from './styles/style';

const FeatureContext = createContext();

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg}`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="360px" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.Group.propTypes = {
  children: PropTypes.node,
};

Card.Title.propTypes = {
  children: PropTypes.string,
};

Card.SubTitle.propTypes = {
  children: PropTypes.string,
};

Card.Text.propTypes = {
  children: PropTypes.array,
};

Card.Entities.propTypes = {
  children: PropTypes.node,
};

Card.Meta.propTypes = {
  children: PropTypes.node,
};

Card.Item.propTypes = {
  children: PropTypes.array,
  item: PropTypes.object,
};

Card.Feature.propTypes = {
  category: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
