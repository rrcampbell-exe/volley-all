async function deleteFormHandler(event) {
  event.preventDefault();

  const id = event.target.id

  const response = await fetch(`/api/games/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".game-delete-btn")
  .addEventListener("click", deleteFormHandler);