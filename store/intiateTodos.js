export const initiateTodos = () => {
  return [
    {
      id: 1,
      name: "Shopping List",
      created: new Date(2023, 7, 24),
      category: "Task",
      content: "Bread",
      dates: "2023-07-27 2023-07-29",
    },
    {
      id: 2,
      name: "New Feature",
      created: new Date(2023, 7, 15),
      category: "Random Thought",
      content: "Create new feature",
      dates: "",
    },
    {
      id: 3,
      name: "Doo",
      created: new Date(2023, 5, 10),
      category: "Task",
      content: "Bar",
      dates: "2023-08-12 2023-08-20",
    },
    {
      id: 4,
      name: "New Feature",
      created: new Date(2023, 7, 7),
      category: "Idea",
      content: "Create new feature",
      dates: "2023-08-12",
    },
    {
      id: 5,
      name: "Doo",
      created: new Date(2023, 5, 3),
      category: "Idea",
      content: "Bar",
      dates: "",
    },
    {
      id: 6,
      name: "New Feature",
      created: new Date(2023, 7, 20),
      category: "Task",
      content: "Create new feature",
      dates: "2023-07-20 2023-07-23",
    },
    {
      id: 7,
      name: "Doo",
      created: new Date(2023, 5, 8),
      category: "Task",
      content: "Bar",
      dates: "",
    },
  ];
};

export const initiateArchivedTodos = () => {
  const json = localStorage.getItem("archivedTodos");
  if (json) {
    return JSON.parse(json);
  }
  return [];
};
