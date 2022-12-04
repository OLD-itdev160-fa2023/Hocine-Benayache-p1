// get user informations
function getinfo(){






}

// check genre

let radioBtns = document.querySelectorAll("input[name='Genre']");
const result1 = document.getElementById('Genre');
radioBtns.forEach(radioBtn => { radioBtn.addEventListener("change",findSelected);})

function findSelected () {
    let selected = document.querySelector("input[name='Genre']:checked").value;
    result1.innerHTML = 'Genre : ' + selected;
}

// function to calculate BMI
function getbmi(){

let button = document.getElementById('btn');

button.addEventListener('click', () =>{

    const fname = document.getElementById("first-name").value;
    const result2 = document.getElementById('fname');
    const lname = document.getElementById("last-name").value;
    const result3 = document.getElementById('lname');
    const age = document.getElementById("age").value;
    const result4 = document.getElementById('age');
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('bmi');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0))
    {document.getElementById('height-error').innerHTML = 'Please provide a valid height';}
    else
    {document.getElementById('height-error').innerHTML = '';
    height_status = true;}

    if (weight === '' || isNaN(weight) || (weight <= 0))
    {document.getElementById('weight-error').innerHTML = 'Please provide a valid weight';}
    else
    {document.getElementById('weight-error').innerHTML = '';
    weight_status=true;}

    if(height_status && weight_status)
    {  const bmi = (weight/(height*height/10000)).toFixed(2); 

        if ( bmi< 18.6 ) 
        {result.innerHTML = 'BMI: Under weight ('+bmi+')';
        result2.innerHTML = 'First name : ' + fname;
        result3.innerHTML = 'Last name : ' + lname;
        result4.innerHTML = 'Age : ' + age;}

        else if (bmi >= 18.6 && bmi < 24.9)
        {result.innerHTML = 'BMI: Normal ('+bmi+')';
        result2.innerHTML = 'First name : ' + fname;
        result3.innerHTML = 'Last name : ' + lname;
        result4.innerHTML = 'Age : ' + age;}

        else if (bmi >= 24.9 && bmi < 30)
        {result.innerHTML = 'BMI: Over weight ('+bmi+')';
        result2.innerHTML = 'First name : ' + fname;
        result3.innerHTML = 'Last name : ' + lname;
        result4.innerHTML = 'Age : ' + age;}

        else 
        {result.innerHTML = 'BMI: Obese ('+bmi+')';
        result2.innerHTML = 'First name : ' + fname;
        result3.innerHTML = 'Last name : ' + lname;
        result4.innerHTML = 'Age : ' + age;}
    }else{ 
        alert('The form has errors');
        result.innerHTML ='';
    }
})}

function init () {
    getbmi();
    

}

init();











