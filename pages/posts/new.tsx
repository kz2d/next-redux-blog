import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import PostServices from '../../services/http/postServices';
import { Container } from '../../components/container';
import { MainLayout } from '../../components/mainLayout';
import styled from 'styled-components';

const NewPost: NextPage = () => {
  const [Title, setTitle] = useState('');
  const [Body, setBody] = useState('');
  const router = useRouter();

  const SubmitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await PostServices.createPost(Title, Body);
    router.push('/');
  };
  return (
    <MainLayout>
      <TopWrapper>
        <Container>
          <form>
            <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={Body} onChange={(e) => setBody(e.target.value)} />
            <input type="submit" onClick={(e) => SubmitForm(e as React.MouseEvent<HTMLButtonElement>)} />
          </form>
        </Container>
      </TopWrapper>
    </MainLayout>
  );
};

const TopWrapper = styled.div`
  background-color: var(--primary);
  padding: 40px 0;
  margin-bottom: 50px;
  h1 {
    font-size: 1.8rem;
    margin: 0 0 20px 0;
  }
  p {
    font-size: 1rem;
    margin: 0 0 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    input[type='text'] {
      font-size: 1.8rem;
      font-weight: bold;
      border: 1px solid #0000001f;
      background-color: transparent;
      resize: none;
      width: 500px;
      margin-bottom: 20px;
      &:focus-visible {
        outline: none;
      }
    }
    textarea {
      border: 1px solid #0000001f;
      background-color: transparent;
      resize: none;
      width: 500px;
      height: 100px;
      font-size: 1rem;
      color: #ffffff99;
      &:focus-visible {
        outline: none;
      }
    }
    input[type='submit'] {
      width: 190px;
      margin-top: 40px;
      font-size: 1.6rem;
      padding: 7px 15px 7px 16px;
      border-radius: 8px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      font-weight: 700;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export default NewPost;
