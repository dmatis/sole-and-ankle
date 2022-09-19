import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;


const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;

export default ShoeGrid;
