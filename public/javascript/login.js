function signupFormHandler(event) {
  event.preventDefault();
  
  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#last-name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const team_code = document.querySelector("#team-code-signup").value.trim();

  fetch("/api/teams/")
    .then((res) => res.json())
    .then((teamData) => {
      console.log(teamData);
      console.log(team_code);
      // compare team_code to all codes

      const foundTeam = teamData.find(function(team, index) {
        if (team.code == team_code) {
          return true;
        }
      })

      console.log(foundTeam)

      if (foundTeam) {
        let team_name = foundTeam.team_name;
        signUpCompletion(first_name, last_name, email, password, team_name);
        return;
      } else {
        alert("We have no team associated with that team code. Please double check your code and try again.")
      }

    });
}

async function signUpCompletion(
  first_name,
  last_name,
  email,
  password,
  team_name
) {

  if (first_name && last_name && email && password && team_name) {
    console.log(team_name);
    const response = await fetch("/api/users/", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        team_name,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

