async function teamCreateHandler(event) {
  event.preventDefault();

  const team_name = document.querySelector("#team-name").value.trim();
  const code = document.querySelector("#team-code").value.trim();

  if (team_name && code) {
    const response = await fetch("/api/teams/", {
      method: "post",
      body: JSON.stringify({
        team_name,
        code
      }),
      headers: { "Content-Type": "application/json"},
    });

    if (response.ok) {
      window.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".create-team-form").addEventListener("submit", teamCreateHandler)