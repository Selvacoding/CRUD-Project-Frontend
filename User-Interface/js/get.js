// JavaScript code for making GET API requests
const resultElement = document.getElementById("result");
const IdInput = document.getElementById("IdInput");
const getButton = document.getElementById("getDataButton");

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Id = IdInput.value;
  
  fetch(`http://localhost:8000/student/${Id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 404) {
        resultElement.innerHTML = `No data found for the given student Id`;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const details = JSON.parse(data.data); //to convert string to object
      resultElement.innerHTML = `Your details are:</br> 
        <ul>
        <li>Id= ${details.Id}</li> 
        <li>StudentName= ${details.StudentName}</li>
        <li>Age= ${details.Age}</li>
        <li>City= ${details.City}</li>
        </ul>`;
        IdInput.value="";
       
      // Handle the data as needed, e.g., populate resultElement with data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
