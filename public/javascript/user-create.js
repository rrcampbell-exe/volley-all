async function userCreateHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#last-name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const team_code = document.querySelector("#team-code-signup").value.trim();

  // TODO:
  // need to fetch data from api/teams and compare team_code to all codes
  // then, once match found, let team_id = that team's id
  // team_id is then passed into JSON for new user as part of below if statement

  if (first_name && last_name && email && password && team_id) {
    const response = await fetch("/api/users/", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        team_id
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

document.querySelector(".signup-form").addEventListener("submit", userCreateHandler)