import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Store } from 'redux';
import styled from 'styled-components';
import { CardComment } from '../../components/cardComment';
import { Container } from '../../components/container';
import { Grid } from '../../components/grid';
import { MainLayout } from '../../components/mainLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../services/reduxStore';
import { fetchPostById, updateComment } from '../../services/reduxStore/action/postAction';

const PostId: NextPage = () => {
  const { posts, error } = useTypedSelector((store) => store.post);
  const [CommentBody, setCommentBody] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const post = posts[0];

  const SubmitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(updateComment(+(router.query.postId as string), CommentBody));
    setCommentBody('');
  };

  if (error) return <div>{error}</div>;

  return (
    <MainLayout>
      <TopWrapper>
        <Container>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <form>
            <textarea value={CommentBody} onChange={(e) => setCommentBody(e.target.value)} />
            <input type="submit" onClick={(e) => SubmitForm(e as React.MouseEvent<HTMLButtonElement>)} />
          </form>
        </Container>
      </TopWrapper>
      <Container>
        <Grid>
          {post.comments?.map((comment) => (
            <CardComment {...comment} />
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query, res }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchPostById(query.postId as string));
  console.log((store as Store).getState().post);

  if (!(store as Store).getState().post.posts.length) {
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
  }
});

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
    textarea {
      border: 1px solid #0000001f;
      background-color: transparent;
      resize: none;
      width: 500px;
      height: 100px;
      font-size: 1.3rem;
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

export default PostId;
