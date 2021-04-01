import React from 'react';

import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper } from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <h2>News feed section</h2>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>Dolor sit ament</p>
        <Button>Click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>Dolor sit ament</p>
        <Button>Click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>Dolor sit ament</p>
        <Button>Click me</Button>
      </ViewWrapper>
    </Wrapper>
  );
};

export default NewsSection;
