# investomania

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#code-snippet">Code-Snippet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#collaborators">Collaborators</a></li>
    <li><a href="#project-links">Project Links</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="./public/assets/images/webpage.png" alt="investomania Webpage">

For this project, we decided on creating a pre production crowdfunding application that would allow users to see what kind of support they would recieve before crowdfunnding their project/application. Other users can back or donate to support the project of their likings. It tested all of our previous knowledge and we were constantly researching to ensure we had the best product we could deliver to the user!

The websites we used to help create our project are listed below in the <a href="#acknowledgements">acknowledgements</a>.

### Built With

We used <a href="https://code.visualstudio.com/">Visual Studio Code</a> to create the Handlebars, CSS and Javascript from scratch. We had the help of Bootstrap for formatting the Handlebars and Node.js to help with the coding on the Javascript!


<!-- GETTING STARTED -->
## Getting Started

When loading this webpage, you are greeted with several projects from other users. To click on a project, you must be logged in first or sign up. When logging in or signing up, you will greeted to the dashboard where the user can create a new project or view previous projects.


<!-- USAGE EXAMPLES -->
## Code Snippets

We had to create a function where the user could pick a day when to end their crowdfunding campaign. When they chose a day, it needs to be formatted then saved with the rest of the project details.

Below is the first part of the function that when a user selects a date, it will get the value and convert it into a formatted date that can be stringified.
```
var field = document.getElementById('project-datepicker');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString();
        console.log(date.toLocaleDateString());
        
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);
```
<br>

For some reason, we had trouble creating a post method that would gather the users inputted data from creating a project and stringify them into JSON format. After some debugging, we created a new function that would create a post method.

Below is grabbing all the values from the data input and stringifying it into JSON format and storing it session storage.

```
const saveProject = (event) => {
  event.preventDefault();
  let projects = {
    title: projectTitle.value.trim(),
    description: projectDesc.value.trim(),
    image: projectImg.value.trim(),
    contributor: projectCont.value.trim(),
    date_picker: projectDate.value.trim(),
    backing: projectBacking
  }
  fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(projects)
  })
};
```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Collaborators
Sami Khawja: [GitHub](https://github.com/samikhawja)

Mehdi Safari: [GitHub](https://github.com/mehdisafari77)

Umera Malek: [GitHub](https://github.com/umeramalek)


## Project Links
Project Link: [GitHub](https://github.com/samikhawja/investomania)

Live Link: [investomania](https://investomaniap2.herokuapp.com/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [W3Schools](https://www.w3schools.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://get.foundation)
* [PikADay](https://jquery.com/)
* [Handlebars](https://kanye.rest/)
* [Node.js](https://funtranslations.com/api/)
* [Express.js](https://funtranslations.com/api/)
* [npm](https://funtranslations.com/api/)
* [MySql](https://funtranslations.com/api/)
