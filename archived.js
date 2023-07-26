import { insertRow } from "./insertRow.js";
import { archivedTodosStore } from "./store/index.js";

const onStart = () => {
  for (let todo of archivedTodosStore.value) {
    insertRow(todo, { isArchivedPage: true });
  }
};

onStart();
