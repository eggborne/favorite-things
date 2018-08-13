var inputIDs=["#some-input1", "#some-input2", "#some-input3", "#some-input4", "#some-input5"];

$(document).ready(function(){
  $("#faves-button").click(function(){
    var result=[];
    inputIDs.forEach(function(id){
      console.log("pushing " + id + " into " + result)
      result.push($(id).val())
    })

    // result.push($("#some-input1").val())
    // result.push($("#some-input2").val())
    // result.push($("#some-input3").val())
    // result.push($("#some-input4").val())
    // result.push($("#some-input5").val())
    var results2= [];
    for (var i=0;i<3;i++) {
      console.log("i is now " + i)
      console.log("pushing " + result[i] + " into results2")
      results2.push(result[i]);
    }
    // results2.push(result[0]);
    // results2.push(result[1]);
    // results2.push(result[2]);
    $("#display").append('<ul id="list"></ul>');
    results2.forEach(function(result){
      console.log("appending " + result + " to list div")
      $('#list').append('<li>'+result+'</li>');
    })
    // $("#list").append('<li>'+results2[0]+'</li>')
    // $("#list").append('<li>'+results2[1]+'</li>')
    // $("#list").append('<li>'+results2[2]+'</li>')
  });
  inputIDs.forEach(function(id){
    console.log("RAN")
    id=id.slice(1, id.length)
    console.log("changed id to " + id)
    $("#user-form").append(`<label for="some-input">Type Here!</label>
    <input id="`+id+`" type="text">`);
  })
})
