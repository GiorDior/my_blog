//Create DOMs for form submission
const form = document.querySelector("#submit");

function validateForm() {
  if (username === "" || title === "" || content === "") {
    alert("Please complete all fields in the form.");
    return false;
  }
  return true;
}

//Create a submit form listener
form.addEventListener("click", function (event) {
  event.preventDefault(); //prevent the default from submissions

  //get form input values
  const username = document.querySelector("#username").value;
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  console.log(username);

  if (username === "" || title === "" || content === "") {
    alert("Please complete all fields in the form.");
    console.log("please enter info");
    return false;
  } else {
    const data = JSON.parse(localStorage.getItem("data")) || [];

    const formData = {
      Username: username,
      Title: title,
      Content: content,
    };
    console.log(formData);
    data.push(formData);
    //convert data to JSON sting
    const formDataJSON = JSON.stringify(data);

    //Store the JSON string in local storage
    localStorage.setItem("data", formDataJSON);
    window.location.href = "./blog.html";
  }
});
