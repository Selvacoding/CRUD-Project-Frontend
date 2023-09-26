// JavaScript code for making PUT API requests to update data
const resultElement = document.getElementById("result");
const IdInput = document.getElementById("IdInput");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const cityInput = document.getElementById("cityInput");
const putButton = document.getElementById("putDataButton");

putButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Id = IdInput.value;
  const name = nameInput.value;
  const age = ageInput.value;
  const city = cityInput.value;

  const dataToUpdate = {
    Id: Id,
    StudentName: name,
    Age: age,
    City: city,
  };
  
  fetch(`http://localhost:8000/student/update/${Id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToUpdate),
  })
  .then((response) => {
    if (response.status == 404) {
      resultElement.innerHTML = `Sorry, the Id that you ebntered doesn't exist`;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const details = data.data;
      resultElement.innerHTML = `Your updated Details:</br> 
      <ul>
      <li>ID= ${details.Id}</li> 
      <li>StudentName= ${details.StudentName}</li> 
      <li>Age= ${details.Age}</li>
      <li>City= ${details.City}</li>
      </ul>`;
      IdInput.value = "";
      nameInput.value = "";
      ageInput.value = "";
      cityInput.value = "";
      
      // Handle the response data as needed, e.g., display a success message
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
