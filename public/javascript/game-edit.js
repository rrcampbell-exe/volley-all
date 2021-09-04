async function editFormHandler(event) {
    event.preventDefault();
  
    
    const home_team = document.querySelector("#home-team").value;
    const away_team = document.querySelector("#away-team").value;
    const date = document.querySelector("#game-date").value;
    const time = document.querySelector("#game-time").value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/games/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        home_team,
        away_team,
        date,
        time,
        //id?
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-game-form').addEventListener('submit', editFormHandler);
  