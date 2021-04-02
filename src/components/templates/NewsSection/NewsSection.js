import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'components/atoms/Button/Button';

import { NewsSectionHeader, Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';

const API_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;

export const query = `
          {
            allArticles {
              id
              title,
              category
              content
              image {
                url
              }
            }
          }
        `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => {
        setError('Sorry, we couldn`t load articles for you');
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length ? (
        articles.map(({ id, title, category, content, image }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article whatever" /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading ...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
