function redAlert(){
    
    document.querySelector("#alert").innerHTML =`<div id="alert" class="alert alert-danger" role="alert">
    Some fields are missing
  </div>` 
}

function colorInput(){
    var items = document.querySelectorAll('input');
    for( var i = 0; i < items.length;  i++)
    {
        if(items[i].value==""){items[i].classList.add("bg-danger","bg-opacity-25")
        redAlert()}
        
        
    }
}
function colorTextarea(){
    var items2 = document.querySelectorAll('textarea');
    for( var i = 0; i < items2.length;  i++)
    {
        if(items2[i].value==""){items2[i].classList.add("bg-danger","bg-opacity-25")
        redAlert()}
       
    }
}

function colorSelect(){
    var items3 = document.querySelectorAll('select');
    for( var i = 0; i < items3.length;  i++)
    {
        if(items3[i].value=="Pick a state"){items3[i].classList.add("bg-danger","bg-opacity-25")
        redAlert()}
    }
}

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let { card, cvc, amount, name, lastName, city, state, postal, textarea } = form;
    let variables = {};


    variables.card = card.value;
    variables.cvc = cvc.value;
    variables.amount = amount.value;
    variables.name = name.value;
    variables.lastName = lastName.value;
    variables.city = city.value;
    variables.state = state.value;
    variables.postal = postal.value;
    variables.textarea = textarea.value;
    

    console.log(variables);

    console.log(form.cvc.value);
    console.log(form.card.value);
    colorInput()
    colorSelect()
    colorTextarea()
})