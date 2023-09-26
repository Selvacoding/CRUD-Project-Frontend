// JavaScript code for making DELETE API requests
const resultElement = document.getElementById("result");
const IdInput = document.getElementById("IdInput");
const deleteButton = document.getElementById("deleteDataButton");

deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  const Id = IdInput.value;
  fetch(`http://localhost:8000/student/delete/${Id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
      console.log(data);
      resultElement.innerHTML = ` ${data.data}`;
      IdInput.value = "";
    
      // Handle the response data as needed, e.g., display a success message
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
