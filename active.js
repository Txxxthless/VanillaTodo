import { insertRow } from "./insertRow.js";
import { activeTodosStore, archivedTodosStore } from "./store/index.js";

const countActive = () => {
  const result = {
    task: 0,
    randomThought: 0,
    idea: 0,
  };

  for (let todo of activeTodosStore.value) {
    if (todo.category === "Task") {
      result.task++;
    }
    if (todo.category === "Random Thought") {
      result.randomThought++;
    }
    if (todo.category === "Idea") {
      result.idea++;
    }
  }

  return result;
};

const countArchived = () => {
  const result = {
    task: 0,
    randomThought: 0,
    idea: 0,
  };

  for (let todo of archivedTodosStore.getValue() || []) {
    if (todo.category === "Task") {
      result.task++;
    }
    if (todo.category === "Random Thought") {
      result.randomThought++;
    }
    if (todo.category === "Idea") {
      result.idea++;
    }
  }

  return result;
};

export const calculateTotals = () => {
  const activeTasks = document.querySelector("#active-tasks");
  const archivedTasks = document.querySelector("#archived-tasks");
  const activeRandThoughts = document.querySelector("#active-random-thoughts");
  const archivedRandThoughts = document.querySelector(
    "#archived-random-thoughts"
  );
  const activeIdeas = document.querySelector("#active-ideas");
  const archivedIdeas = document.querySelector("#archived-ideas");

  const active = countActive();
  const archived = countArchived();

  activeTasks.innerHTML = active.task;
  activeRandThoughts.innerHTML = active.randomThought;
  activeIdeas.innerHTML = active.idea;

  archivedTasks.innerHTML = archived.task;
  archivedRandThoughts.innerHTML = archived.randomThought;
  archivedIdeas.innerHTML = archived.idea;
};

const onStart = () => {
  for (let todo of activeTodosStore.value) {
    insertRow(todo);
  }

  const createButton = document.querySelector("#create-button");

  createButton.onclick = () => {
    const todo = {
      name: "Doo",
      created: Date.now(),
      category: "Task",
      content: "Bar",
      dates: "",
    };
    activeTodosStore.add(todo);
    insertRow(todo);
  };
};

onStart();
calculateTotals();
