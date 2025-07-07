export class ApiNetwork {
  /* User */
  static user = '/users';
  static userById = (id: string) => `/users/${id}`;

  /* Post */
  static post = '/posts';
  static postById = (id: string) => `/posts/${id}`;
  static comment = (id: string) => `${this.postById(id)}/comments`;

  /* Album */
  static album = '/albums';
  static albumById = (id: string) => `/albums/${id}`;

  /* Photo */
  static photo = '/photos';
  static photoById = (id: string) => `/photos/${id}`;

  /* Todo */
  static todo = '/todos';
  static todoById = (id: string) => `/todos/${id}`;
}