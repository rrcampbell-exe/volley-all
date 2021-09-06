// $("#modal1 .btn-save").click(function() {
//     editTeamHandler()
// })


// $(document).ready(function(){
// 	$('.modal-btn').click(function(){
//   		$('#modal1').modal('show')
// 	});
// });

// const modalBtn = document.querySelector('.modal-btn')
// const modal = document.querySelector('#modal1')
// modalBtn.click(function() {
//     modal.modal('show');
// });


$('#teamName').click(function(){
    var name = $(this).text();
    $(this).html('');
    $('<input></input>')
        .attr({
            'type': 'text',
            'name': 'fname',
            'id': 'txt_teamName',
            'size': '30',
            'value': name
        })
        .appendTo('#teamName');
    $('#txt_teamName').focus();
});

$(document).on('blur','#txt_teamName', function(){
    var name1 = $(this).parent.id
    const nameArray = name1.toString().split('w');
    const name = nameArray[1];
    $.ajax({
      type: 'put',
      url: 'localhost:3002/api/teams/' + name,
      success: function(){
        $('#fullname').text(name);
      }
    });
});



// $(".list-group").on("click", "td", function()
//           {
//             var text = $(this)
//             .text()
//             .trim();
//             var textInput = $("<textarea>")
//             .addClass("form-control")
//             .val(text);
//             console.log(text);
//             $(this).replaceWith(textInput);
//             textInput.trigger("focus");
// });

// async function editTeamHandler(event) {
//     event.preventDefault();

//     const team_name = $("#team-name").val();
//     const code = $("#code").val();
//     const wins = $("wins").val();
//     const losses = $("losses").val();
   


//     if (team_name && code && wins && losses) {
//       const response = await fetch(`/api/teams/${id}`, {
//         method: "put",
//         body: JSON.stringify({
//           team_name,
//           code,
//           wins,
//           losses
//         }),
//         headers: { "Content-Type": "application/json"},
//       });
  
//       if (response.ok) {
//         window.location.replace("/");
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
 