import React, { createContext, useState, useContext } from "react";

const defaultList = {
  boards: [
    {
      id: 1,
      name: "자유게시판",
      title: true,
      posts: [
        {
          id: 1,
          time: "11/28 01:00",
          title: "제목1",
          content: "내용1",
          likes: 0,
          comments: [
            {
              id: 1,
              time: "11/28 02:00",
              user_id: 1,
              content: "댓글1",
              likes: 3,
            },
          ],
          stars: 0,
        },
        {
          id: 2,
          time: "11/28 02:00",
          title: "제목2",
          content: "내용2",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 3,
          time: "11/28 03:00",
          title: "제목3",
          content: "내용3",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 4,
          time: "11/28 04:00",
          title: "제목4",
          content: "내용4",
          likes: 0,
          comments: [],
          stars: 0,
        },
      ],
      postNum: 4, // post의 개수
    },
    {
      id: 2,
      name: "비밀게시판",
      title: false,
      posts: [
        {
          id: 1,
          time: "11/28 01:00",
          content: "내용1",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 2,
          time: "11/28 02:00",
          content: "내용2",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 3,
          time: "11/28 03:00",
          content: "내용3",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 4,
          time: "11/28 04:00",
          content: "내용4",
          likes: 0,
          comments: [],
          stars: 0,
        },
      ],
      postNum: 4,
    },
    {
      id: 3,
      name: "졸업생게시판",
      title: false,
      posts: [
        {
          id: 1,
          time: "11/28 01:00",
          content: "내용1",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 2,
          time: "11/28 02:00",
          content: "내용2",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 3,
          time: "11/28 03:00",
          content: "내용3",
          likes: 0,
          comments: [],
          stars: 0,
        },
        {
          id: 4,
          time: "11/28 04:00",
          content: "내용4",
          likes: 0,
          comments: [],
          stars: 0,
        },
      ],
      postNum: 4,
    },
  ],
  boardNum: 2, // board의 개수
  visibleBoards: [
    // Main 페이지에서 보이는 board들
    {
      id: 1,
    },
    {
      id: 2,
    },
  ],
  addPost: () => {},
};

const ListContext = createContext(defaultList);

const ListProvider = (props) => {
  const { children } = props;

  const addPost = ({ boardId, time, title, content }) => {
    setState((state) => {
      const posts = state.boards.find((item) => item.id === +boardId);
      const newPostId = posts.postNum + 1;

      const newPost = {
        id: newPostId,
        time,
        title,
        content,
        likes: 0,
        comments: [],
        stars: 0,
      };

      return {
        ...state,
        boards: state.boards.map((item) => {
          return item.id === +boardId
            ? {
                ...item,
                posts: [...posts, newPost],
                postNum: newPostId,
              }
            : { ...item };
        }),
      };
    });
  };

  const listState = {
    ...defaultList,
    addPost,
  };
  const [state, setState] = useState(listState);

  return <ListContext.Provider value={state}>{children}</ListContext.Provider>;
};

const useListContext = () => useContext(ListContext);
export { useListContext, ListProvider };
