export const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    comments: [
      {
        id: 1,
        content: "Great post!",
        replies: [
          { id: 1, content: "I agree!" },
          { id: 2, content: "Really informative." },
        ],
      },
      { id: 2, content: "Interesting read!" },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
    comments: [],
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
    comments: [
      {
        id: 1,
        content: "Great post!",
        replies: [{ id: 2, content: "Thank you." }],
      },
    ],
  },
];
