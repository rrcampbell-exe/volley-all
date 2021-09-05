const teamDeleteButton = document.querySelectorAll(".team-delete-btn");

Array.prototype.forEach.call(teamDeleteButton, function addClickListener(btn) {
  btn.addEventListener("click", function(event) {
    event.preventDefault();

    const id = event.target.id
  
    const response = fetch(`/api/teams/${id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  })
})

// async function teamDeleteFormHandler(event) {
//   event.preventDefault();

//   const id = event.target.id

//   const response = await fetch(`/api/teams/${id}`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelectorAll(".team-delete-btn")
//   .addEventListener("click", teamDeleteFormHandler);