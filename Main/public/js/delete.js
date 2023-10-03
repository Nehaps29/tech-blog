const delBtn = document.querySelector('#del-blog');
const blogId = document.querySelector('input[name="blog-id"]').value;
/*const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);*/

const delButtonHandler = async () => {
    const response = await fetch(`/api/blog/${blogId}`, {
        method: 'DELETE'
    });
    
    if (response.ok){
        document.location.replace('/dashboard');
    } 
    else {
        alert('Failed to delete the blog')
    }
} ;

delBtn.addEventListener('click', delButtonHandler);