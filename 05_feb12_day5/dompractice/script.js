function myFunction(){
    var storyDiv = document.getElementById("story");
    var noun = document.getElementById('noun').value;
    var adjective = document.getElementById('adjective').value;
    var person = document.getElementById('person').value;
        storyDiv.innerHTML = person + " really likes " + adjective + " " + noun;
}

//with an event listener
var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', myFunction);