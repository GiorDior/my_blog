const data = JSON.parse(localStorage.getItem("data")) || [];

//loop over array items, add to HTML
for (i = 0; i < data.length; i++) {
  const blog = data[i];
  //console.log(blog);

  //create wrapper element
  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = blog.Title;
  container.appendChild(title);

  const hr = document.createElement("hr");
  hr.classList.add("hr");
  container.appendChild(hr);

  const content = document.createElement("p");
  content.classList.add("content");
  content.innerText = blog.Content;
  container.appendChild(content);

  const username = document.createElement("p");
  username.classList.add("username");
  username.innerText = blog.Username;
  container.appendChild(username);

  document.querySelector("main").appendChild(container);
}
