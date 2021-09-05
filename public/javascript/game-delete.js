async function gameDeleteFormHandler(event) {
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
  .querySelectorAll(".game-delete-btn")
  .addEventListener("click", gameDeleteFormHandler);