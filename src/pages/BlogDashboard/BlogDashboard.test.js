import { render, screen } from "@testing-library/react";
import axios from 'axios'; // import axios library

import BlogDashboard from './BlogDashboard';

// mock API response
const mockPosts = [
  {
    id: 1,
    title: 'First post',
    content: 'This is my first post.',
    author: 'John Doe',
    date: '2022-01-01',
  },
  {
    id: 2,
    title: 'Second post',
    content: 'This is my second post.',
    author: 'Jane Smith',
    date: '2022-01-02',
  },
];

// mock axios.get method to return the mock posts data
jest.mock('axios');
axios.get.mockResolvedValue({ data: mockPosts });

test('renders a list of posts with author and date', async () => {
  render(<BlogDashboard />);

  // wait for API call to complete
  await screen.findByText('First post');

  // check if post titles are displayed
  const post1Title = screen.getByText('First post');
  const post2Title = screen.getByText('Second post');
  expect(post1Title).toBeInTheDocument();
  expect(post2Title).toBeInTheDocument();

  // check if author and date information is displayed for each post
  const post1Author = screen.getByText('John Doe');
  const post1Date = screen.getByText('January 1, 2022');
  const post2Author = screen.getByText('Jane Smith');
  const post2Date = screen.getByText('January 2, 2022');
  expect(post1Author).toBeInTheDocument();
  expect(post1Date).toBeInTheDocument();
  expect(post2Author).toBeInTheDocument();
  expect(post2Date).toBeInTheDocument();
});