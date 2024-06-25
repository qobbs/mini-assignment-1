$( document ).ready(function() {

    let num = Math.random() * (3 + 1) + 1;

    $('#fact button').click(function() {
    
    if(num = 1){
        window.alert("Did you know that sea butterflies are hermaphrodites, meaning they are both male and female?");
    }

    else if(num = 2){
        window.alert("Though they seem exotic, they are very common and a vital resource for food and carbon consumption.");
    }

    else{
    window.alert("They are known as 'the potato chip of the sea' because they are a vital sea source to many sea creatures.");
    }
    
    });//end of click function
});