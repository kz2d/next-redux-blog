import { IComments } from './comment';

export interface IPost {
  id: number;
  title: string;
  body: string;
  comments: IComments[];
}

export interface PostState {
  posts: IPost[];
  error: string;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  UPDATE_POSTS = 'UPDATE_POSTS',
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
  payload: IPost[];
}

interface UpdatePostsAction {
  type: PostActionTypes.UPDATE_POSTS;
  payload: IPost[];
}

interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostAction = FetchPostsAction | FetchPostsErrorAction | UpdatePostsAction;
