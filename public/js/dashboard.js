let projectTitle;
let projectDesc;
let projectImg;
let saveBtn;
let projectCont;
let projectDate;

if(window.location.pathname === '/dashboard') {
  projectTitle = document.querySelector('#project-title');
  projectDesc = document.querySelector('#project-desc');
  projectImg = document.querySelector('#project-img');
  saveBtn = document.querySelector('#save-project');
  projectCont = document.querySelector('#project-cont');
  projectDate = document.querySelector('#project-datepicker')

}

const saveProject = (event) => {
  event.preventDefault();
  let projects = {
    title: projectTitle.value.trim(),
    description: projectDesc.value.trim(),
    image: projectImg.value.trim(),
    contributor: projectCont.value.trim(),
    date_picker: projectDate.value.trim(),
  }
  fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(projects)
  })
};

if(window.location.pathname === '/dashboard') 
{
  saveBtn.addEventListener('click', saveProject);
}

// ---------------------------------------------------------

// const newFormHandler = async (event) => {
//   event.preventDefault();

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// document
//   .querySelector('#delete-project')
//   .addEventListener('click', delButtonHandler);
// }


// const deleteProject = (event) => {
//   event.preventDefault();
//   console.log(event)
//   fetch(`/api/projects/${id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json'},
//   })
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const projectID = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${projectID}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

var field = document.getElementById('project-datepicker');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString();
        console.log(date.toLocaleDateString());
        
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);



document
  .querySelector('.delete-project')
  .addEventListener('click', delButtonHandler);
