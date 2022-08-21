document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const handleDelete = (e) => {
    e.target.parentNode.remove();
  }

  const buildToDo = (task) => {
    console.log(task);
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.textContent = ' X ';
    btn.addEventListener("click", handleDelete);
    p.textContent = `${task} `;
    p.appendChild(btn);
    console.log(p);
    const ul = document.getElementById("tasks");
    ul.appendChild(p);
  }

  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.getElementById("new-task-description");
    buildToDo(e.target[0].value);
    form.reset();
  })
});
