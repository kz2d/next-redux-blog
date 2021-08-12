import { Dispatch } from 'react';
import {  CombinedState } from 'redux';
import { PostAction, PostActionTypes, PostState } from '../../../types/post/post';
import PostServices from '../../http/postServices';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await PostServices.getPosts();
      dispatch({ type: PostActionTypes.FETCH_POSTS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке post',
      });
    }
  };
};

export const fetchPostById = (id: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await PostServices.getPostById(id);
      dispatch({ type: PostActionTypes.FETCH_POSTS, payload: [response.data] });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке post',
      });
    }
  };
};

export const updateComment = (postId: number, body: string) => {
  return async (
    dispatch: Dispatch<PostAction>,
    getState: () => CombinedState<{
      post: PostState;
    }>,
  ) => {
    try {
      const response = await PostServices.createComment(body, postId);
      const posts = getState().post.posts;
      posts[0].comments.push(response.data);

      dispatch({
        type: PostActionTypes.UPDATE_POSTS,
        payload: posts,
      });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке comment',
      });
    }
  };
};
