async function editFormHandler(event) {
    event.preventDefault();

    const wine_notes = document.querySelector('input[name="wine-notes"]').value;
    const wine_count = document.querySelector('input[name="wine-count"]').value;


  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            wine_notes, 
            wine_count
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
