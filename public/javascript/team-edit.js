async function editFormHandler(event) {
  event.preventDefault();

  const team_name = document.querySelector("#team-name").value.trim();
  const code = document.querySelector("#team-code").value.trim();
  const wins = document.querySelector("#team-wins").value.trim();
  const losses = document.querySelector("#team-losses").value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/teams/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      team_name,
      code,
      wins, 
      losses,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-team-form")
  .addEventListener("submit", editFormHandler);
