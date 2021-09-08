async function gameCreateHandler(event) {
  event.preventDefault();

  const home_team = document.querySelector("#home-team").value;
  const away_team = document.querySelector("#away-team").value;
  const date = document.querySelector("#game-date").value;
  const time = document.querySelector("#game-time").value;

  if (home_team && away_team && date && time) {
    const response = await fetch("/api/games/", {
      method: "post",
      body: JSON.stringify({
        home_team,
        away_team,
        date,
        time
      }),
      headers: { "Content-Type": "application/json"},
    });

    if (response.ok) {
      window.location.replace("/#schedule");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".create-game-form").addEventListener("submit", gameCreateHandler)