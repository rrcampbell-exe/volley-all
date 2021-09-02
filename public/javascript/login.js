async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#last-name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const team_code = document.querySelector("#team-code").value.trim();

  if (firstName && lastName && email && password && teamCode) {
    const response = await fetch("/api/users/", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        team_code,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
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
      alert("response okay!")
      document.location.replace("/dashboard/");
    } else {
      alert("bad job!")
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