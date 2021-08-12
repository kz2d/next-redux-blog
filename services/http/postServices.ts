import axios, { AxiosResponse } from 'axios';
import { IComments } from '../../types/post/comment';
import { IPost } from '../../types/post/post';

export const baseURL = 'https://simple-blog-api.crew.red';

export default class PostServices {
  static async getPosts(): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>(baseURL + '/posts');
  }

  static async getPostById(id: string): Promise<AxiosResponse<IPost>> {
    return axios.get<IPost>(baseURL + '/posts/' + id + '?_embed=comments');
  }

  static async createPost(title: string, body: string): Promise<AxiosResponse<IPost>> {
    return axios.post<IPost>(baseURL + '/posts', { title, body });
  }

  static async createComment(body: string, postId: number): Promise<AxiosResponse<IComments>> {
    return axios.post<IComments>(baseURL + '/comments', { postId, body });
  }
}
