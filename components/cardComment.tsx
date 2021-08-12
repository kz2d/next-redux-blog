import React from 'react';
import styled, { css } from 'styled-components';

interface CardCommentProps {
  body: string;
  id: number;
}

export const CardComment: React.FC<CardCommentProps> = ({ body, id }) => {
  return (
    <Wrapper>
      <p>{body}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 26px 32px 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 15px;
  min-height: 150px;

  p {
    font-size: 1.2rem;
    font-weight: 300;
    opacity: 80%;
  }

  ${[
    '#FF4B4B',
    '#1CB0F6',
    '#ff9600',
    '#affa00',
    '#1CB0F6',
    '#FF4B4B',
    '#1CB0F6',
    '#ff9600',
    '#affa00',
    '#ff9600',
    '#CE82FF',
  ].map(
    (el, index) => css`
      &:nth-child(11n-${index}) {
        background-color: ${el};
      }
    `,
  )}
`;
