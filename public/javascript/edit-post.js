async function editFormHandler(event) {
    event.preventDefault();

    const wine_name = document.querySelector('input[name="wine-name"]').value;
    const wine_type = document.querySelector('#wine-type option:checked').value;
    const wine_vintage = document.querySelector('input[name="wine-vintage"]').value;
    const wine_source = document.querySelector('input[name="wine-source"]').value;
    const wine_notes = document.querySelector('input[name="wine-notes"]').value
  

  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            wine_name,
            wine_type,
            wine_vintage,
            wine_source,
            wine_notes
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.edit-wine-form').addEventListener('submit', editFormHandler);
