import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);

    expect(postsService.find(newPost.id)).toEqual({
      text: newPost.text,
      id: newPost.id,
      date: newPost.date,
    });
  });

  it('should find a post', () => {
    const foundPost = postsService.find('1');

    expect(foundPost).toEqual({
      text: 'Some pre-existing post',
      id: '1',
      date: expect.any(String),
    });
  });
});