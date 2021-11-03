// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();
//   const image = document.querySelector('#project-img').value.trim();

//   if (name && needed_funding && description && image) {
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({ name, description, image }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create post');
//     }
//   }
// };

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
//   .querySelector('.new-post-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.post-list')
//   .addEventListener('click', delButtonHandler);


let projectTitle;
let projectDesc;
let projectImg;
let saveBtn;
let deleteBtn;

if(window.location.pathname === '/dashboard') {
  projectTitle = document.querySelector('#project-title');
  projectDesc = document.querySelector('#project-desc');
  projectImg = document.querySelector('#project-img');
  saveBtn = document.querySelector('#save-project');
  deleteBtn = document.querySelector('#delete-project');
}

const saveProject = (event) => {
  event.preventDefault();
  let projects = {
    title: projectTitle.value.trim(),
    description: projectDesc.value.trim(),
    image: projectImg.value.trim(),
  }
  fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(projects)
  })
};

const deleteProject = (event) => {
  event.preventDefault();
  fetch(`/api/projects/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'},
  })
};

if(window.location.pathname === '/dashboard') {
  saveBtn.addEventListener('click', saveProject);
  deleteBtn.addEventListener('click', deleteProject);
}