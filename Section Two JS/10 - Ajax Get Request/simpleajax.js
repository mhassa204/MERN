$(function(){
    $("#load").click(sendAjax);
})

function sendAjax(){
    console.log("Sending AJAX request");
    $.get("students.txt",handleresponse)
}

function handleresponse(response){
    console.log("response received");
    $("#result").empty();
    $("#result").append(response);

}