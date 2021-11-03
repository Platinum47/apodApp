const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
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
  .addEventListener('click', delButtonHandler);


  let getPictureBtn = $('#getPicture');




  function getApi(queryURL) {
  
  
     
     var queryURL = 'https://api.nasa.gov/planetary/apod?api_key=YQSZHJGbaiFnYwaFG5MGZ56sOcBbhn9OcDMeaVzc';
     
     fetch(queryURL) 
     .then(response => response.json()) 
     .then(data =>{
  
      // let image = data['hdurl'];
  
  
  
      
      
      
  
  
  
       console.log(data);
  
  
     //  var queryURL2 = 'https://apod.nasa.gov/apod/image/2110/GS_20210917_Handol_5651_Pan.jpg';
  
     //  return fetch(queryURL2)
  
  
     })
  
     // .then(response => response.json())
     //    .then(data =>{
  
     //       console.log(data)
     //    })
     
     
     
     }
  
  
     
     getPictureBtn.on('click', getApi);
