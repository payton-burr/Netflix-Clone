import React from 'react';
import jumbotronData from '../fixtures/jumbo.json';
import Jumbotron from '../components/Jumbotron/Jumbotron';

function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
