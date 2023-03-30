$(function() {
    $("#addBtn").click(loadRecipies)
  });
  function loadRecipies() {
    $.ajax({
      url: "https://gorest.co.in/public/v2/users",
      method: "GET",
      success: function(response) {
        const list = $('<ul></ul>')
        $.each(response, function(key, value){
          const item = $('<li></li>').text(value);
          list.append(list);
        })
        $("#recipes").empty();
        $("#recipes").append(list);
        console.log(list)


        // console.log(JSON.stringify(response));
        // var recipes = $("#recipes");
        // recipes.empty();
        // for (var i = 0; i < response.length; i++) {
          // var rec = response[i];
          //recipes.append(
           // `<div class="recipes"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button> ${rec.body}</p></div>`
         // );
          //recipes.append("<div><h3>" + JSON.stringify(response)+ "</h3></div>");
        }
      }
    );
  }