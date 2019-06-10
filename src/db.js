const users = [
  {
    id: '1',
    name: 'Konstantin',
    email: 'konstantinsteinmiller@gmail.com',
    age: 31
  },
  {
    id: '2',
    name: 'Eduard',
    email: 'ed.miller@gmail.com',
    age: 33
  },
  {
    id: '3',
    name: 'Stephan',
    email: 'stephansteinmiller@gmail.com',
    age: 16
  },
  {
    id: '4',
    name: 'Sophie',
    email: 'sophiliasus@gmail.com'
  }
]
const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is an beginners course',
    published: false,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an an intermediate course',
    published: true,
    author: '2'
  },
  {
    id: '12',
    title: 'GraphQL 301',
    body: 'This is an advanced course',
    published: true,
    author: '3'
  }
]
const comments = [
  {
    id: '1',
    text: 'The challenges where a little bit to hard',
    author: '2',
    post: '11'
  },
  {
    id: '2',
    text: 'nice course, loving it!',
    author: '3',
    post: '11'
  },
  {
    id: '3',
    text: 'best course so far',
    author: '1',
    post: '11'
  },
  {
    id: '4',
    text: 'forgot to thank you',
    author: '1',
    post: '10'
  }
]

const db = {
  users,
  posts,
  comments
}
export { db as default }
