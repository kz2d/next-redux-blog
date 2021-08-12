import { NextPage } from 'next';
import styled from 'styled-components';
import { CardPost } from '../components/cardPost';
import { Container } from '../components/container';
import { Grid } from '../components/grid';
import { MainLayout } from '../components/mainLayout';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../services/reduxStore';
import { fetchPosts } from '../services/reduxStore/action/postAction';

const Home: NextPage = () => {
  const { posts, error } = useTypedSelector((store) => store.post);

  if (error) return <div>{error}</div>;

  return (
    <MainLayout>
      <Container>
        <TopPadding>
          <Grid>
            {posts.map((post) => (
              <CardPost {...post} />
            ))}
          </Grid>
        </TopPadding>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(fetchPosts());
});

const TopPadding = styled.div`
  padding: 45px 0;
`;

export default Home;
