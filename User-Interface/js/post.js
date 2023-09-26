// JavaScript code for making POST API requests
const resultElement = document.getElementById("result");
const IdInput = document.getElementById("IdInput");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const cityInput = document.getElementById("cityInput");
const postButton = document.getElementById("postDataButton");

postButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Id = IdInput.value;
  const name = nameInput.value;
  const age = ageInput.value;
  const city = cityInput.value;

  const dataToSend = {
    Id: Id,
    StudentName: name,
    Age: age,
    City: city,
  };
  
  fetch("http://localhost:8000/student-write", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
  .then((response) => {
    if (response.status == 404) {
      resultElement.innerHTML = `Sorry, the Id that you entered already exist`;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then((data) => {
      console.log(data);
      resultElement.innerHTML = ` ${data.data}`;
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
