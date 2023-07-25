export const initiateTodos = () => {
  const json = localStorage.getItem("todos");

  if (json) {
    const todos = JSON.parse(json);
    console.log(todos);
    return todos;
  }

  return [
    {
      id: 1,
      name: "Shopping List",
      created: new Date(2023, 7, 24),
      category: "Task",
      content: "Bread",
      dates: "",
    },
    {
      id: 2,
      name: "New Feature",
      created: new Date(2023, 7, 15),
      category: "Task",
      content: "Create new feature",
      dates: "",
    },
    {
      id: 3,
      name: "Doo",
      created: new Date(2023, 5, 10),
      category: "Task",
      content: "Bar",
      dates: "",
    },
    {
      id: 4,
      name: "New Feature",
      created: new Date(2023, 7, 7),
      category: "Task",
      content: "Create new feature",
      dates: "",
    },
    {
      id: 5,
      name: "Doo",
      created: new Date(2023, 5, 3),
      category: "Task",
      content: "Bar",
      dates: "",
    },
    {
      id: 6,
      name: "New Feature",
      created: new Date(2023, 7, 20),
      category: "Task",
      content: "Create new feature",
      dates: "",
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