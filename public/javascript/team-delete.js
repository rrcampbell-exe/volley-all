const teamDelBtn = document.querySelectorAll(".team-delete-btn");

async function teamDeleteFormHandler(event) {
  event.preventDefault();

  const id = event.target.id

  const response = await fetch(`/api/teams/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("A team cannot be deleted while it's still scheduled for games. Please remove them from any scheduled games first.");
  }
}

for (let i = 0; i < teamDelBtn.length; i++) {
  teamDelBtn[i].addEventListener("click", teamDeleteFormHandler);
}