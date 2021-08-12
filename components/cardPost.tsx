import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface CardPostProps {
  title: string;
  body: string;
  id: number;
}

export const CardPost: React.FC<CardPostProps> = ({ title, body, id }) => {
  return (
    <Link href={'/posts/' + id}>
      <Wrapper>
        <h2>{title}</h2>
        <p>{body}</p>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  padding: 26px 32px 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: var(--background-color);
  /* background-color: #CE82FF; */
  border-radius: 15px;
  min-height: 375px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.4rem;
    line-height: 1.25;
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    opacity: 80%;
  }

  ${['#affa00', '#ff9600', '#CE82FF', '#affa00', '#1CB0F6', '#FF4B4B', '#1CB0F6', '#ff9600'].map(
    (el, index) => css`
      &:nth-child(8n-${index}) {
        background-color: ${el};
      }
    `,
  )}
`;
