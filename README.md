# Personal Blog Web Application

Welcome to the Personal Blog Web Application repository! This project is part of the Web APIs Challenge, where you'll showcase your skills in web development by creating a two-page blog site. This application allows users to input and view blog posts, implement light/dark mode toggle, and seamlessly navigate between pages.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## User Story
As a marketing student, I want a personal blog so that I can showcase my thoughts and experiences.

## Acceptance Criteria
- When the app is loaded, users are presented with a landing page containing a form with labels and inputs for username, blog title, and blog content.
- Upon submitting the form, blog post data is stored in localStorage, and users are redirected to the posts page.
- If a form is submitted without a username, title, or content, a message prompts users to complete the form.
- The posts page includes a header with a light mode/dark mode toggle and a "Back" button.
- Clicking the light mode/dark mode toggle updates the page content's styles accordingly.
- Clicking the "Back" button redirects users to the landing page for inputting more blog entries.
- The main content on the posts page presents a list of blog posts pulled from localStorage.
- localStorage contains a JSON array of blog post objects, each including the post author's username, title, and content.
- Each blog entry in the list displays the title, content, and author of the post.
- The footer includes a link to the developer's portfolio.

## Features
- Landing page with a form for inputting blog posts
- localStorage storage for persisting blog post data
- Posts page with a header, light/dark mode toggle, and "Back" button
- Dynamic rendering of blog posts from localStorage
- Responsive design for an optimal viewing experience on various devices

## Usage
1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.
3. Input your blog entries on the landing page.
4. Explore your blog posts on the posts page with light/dark mode options.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- localStorage

## Contributing
Feel free to contribute to the development of this project. Fork the repository, make your changes, and submit a pull request. Your input is valuable!

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.
