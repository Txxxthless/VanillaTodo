import { archivedTodosStore } from "./store/index.js";

const createElement = (tag, className, innerHtml, style, value) => {
  const element = document.createElement(tag);
  element.className = className || "";
  element.innerHTML = innerHtml;

  if (style) {
    element.style.display = style;
  }

  if (value) {
    element.value = value;
  }
  return element;
};

export const insertRow = (todo, options) => {
  let countTotals = () => {};

  if (!options || !options.isArchivedPage) {
    import("./active.js").then(({ calculateTotals }) => {
      countTotals = calculateTotals;
    });
  }

  const table = document.querySelector("table");
  const row = table.insertRow();

  const name = row.insertCell(0);
  const nameInput = createElement("input", "form-control", "", "none");
  const nameText = createElement("p", "", todo.name);
  name.append(nameInput, nameText);

  const created = row.insertCell(1);
  const date =
    todo.create instanceof Date
      ? todo.created.toDateString()
      : new Date(todo.created).toDateString();
  created.innerHTML = date;

  const category = row.insertCell(2);
  const categorySelect = createElement("select", "form-control", "", "none");
  const firstOption = createElement("option", "", "Task", "", "Task");
  const secondOption = createElement(
    "option",
    "",
    "Random Thought",
    "",
    "Random Thought"
  );
  const thirdOption = createElement("option", "", "Idea", "", "Idea");
  categorySelect.append(firstOption, secondOption, thirdOption);
  const categoryText = createElement("p", "", todo.category);
  category.append(categorySelect, categoryText);

  const content = row.insertCell(3);
  const contentInput = createElement("input", "form-control", "", "none");
  const contentText = createElement("p", "", todo.content);
  content.append(contentInput, contentText);

  const dates = row.insertCell(4);
  const datesInput = createElement("input", "form-control", "", "none");
  const datesText = createElement("p", "", todo.dates);
  dates.append(datesInput, datesText);

  const actions = row.insertCell();

  const archiveButton = createElement(
    "button",
    "btn btn-outline-warning",
    "Archive"
  );
  archiveButton.onclick = () => {
    archivedTodosStore.add(todo);
    todo.category = null;
    row.parentNode.removeChild(row);
    countTotals();
  };

  const deleteButton = createElement(
    "button",
    "btn btn-outline-danger",
    "Delete"
  );
  deleteButton.onclick = () => {
    row.parentNode.removeChild(row);
    if (options && options.isArchivedPage) {
      archivedTodosStore.remove(todo);
    } else {
      todo.category = null;
    }
    countTotals();
  };

  const editButton = createElement("button", "btn btn-outline-primary", "Edit");

  editButton.onclick = () => {
    if (nameInput.style.display === "none") {
      nameInput.style.display = "block";
      nameText.style.display = "none";

      categorySelect.style.display = "block";
      categoryText.style.display = "none";

      contentInput.style.display = "block";
      contentText.style.display = "none";

      datesInput.style.display = "block";
      datesText.style.display = "none";
    } else {
      todo.name = nameInput.value;
      nameText.innerHTML = nameInput.value;

      todo.category = categorySelect.value;
      categoryText.innerHTML = categorySelect.value;

      todo.content = contentInput.value;
      contentText.innerHTML = contentInput.value;

      todo.dates = datesInput.value;
      datesText.innerHTML = datesInput.value;

      nameInput.style.display = "none";
      nameText.style.display = "block";

      categorySelect.style.display = "none";
      categoryText.style.display = "block";

      contentInput.style.display = "none";
      contentText.style.display = "block";

      datesInput.style.display = "none";
      datesText.style.display = "block";

      if (options && options.isArchivedPage) {
        archivedTodosStore.edit(todo);
      }
      countTotals();
    }
  };

  if (!options || !options.isArchivedPage) {
    actions.append(archiveButton, editButton, deleteButton);
  } else {
    actions.append(editButton, deleteButton);
  }
};
