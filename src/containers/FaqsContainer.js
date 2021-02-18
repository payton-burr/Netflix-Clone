import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    </Accordion>
  );
}

export default FaqsContainer;
