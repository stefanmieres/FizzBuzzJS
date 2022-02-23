//obtener nombre


function GetValue()
{
    let numberOne = document.getElementById("userNumberOne").value;
    let numberTwo = document.getElementById("userNumberTwo").value;
   DivideThree(numberOne,numberTwo);
};

//dividir nombreOne and numberTwo entre 3 y 5
function DivideThree(numberOne,numberTwo)
{
let FizzBuzz =[];
    for (let index = 1; index <= 100; index++)
    {

        if  (index % numberOne == 0 && index % numberTwo ==0)
        {
            FizzBuzz.push("FizzBuzz");
        }
        else if (index % numberOne==0)
            {
                FizzBuzz.push("Fizz");
        
            }
        else if(index % numberTwo == 0)
        {

            FizzBuzz.push("Buzz");
        }
        else
        {
            FizzBuzz.push(index);
        }


        
          
    }
    return DisplayArray(FizzBuzz);
     
}

function DisplayArray(fizzbuzz)
{
    let arreglo =fizzbuzz; 
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");
 
    tableBody.innerHTML = "";

    for (let index = 0; index < fizzbuzz.length; index+=5) 
    {
        
        let tableRow = document.importNode(templateRow.content,true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzbuzz[index]);
        rowCols[0].textContent = fizzbuzz[index];

        rowCols[1].classList.add(fizzbuzz[index+1]);
        rowCols[1].textContent = fizzbuzz[index+1];

        rowCols[2].classList.add(fizzbuzz[index+2]);
        rowCols[2].textContent = fizzbuzz[index+2];

        rowCols[3].classList.add(fizzbuzz[index+3]);
        rowCols[3].textContent = fizzbuzz[index+3];

        rowCols[4].classList.add(fizzbuzz[index+4]);
        rowCols[4].textContent = fizzbuzz[index+4];

        tableBody.appendChild(tableRow);
    }


}