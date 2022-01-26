async function newWineHandler(event) {
    event.preventDefault();
  
    const wine_name = document.querySelector('input[name="wine-name"]').value;
    const wine_type = document.querySelector('select[name="wine-type"]').value;
    const wine_vintage = document.querySelector('input[name="wine-vintage"]').value;
    //const wine_quanity = document.querySelector('#quantity').value.trim(); 
    const wine_source = document.querySelector('input[name="wine-source"]').value;
    // const notes = document.querySelector('#notes').value.trim();
    // const wine_rating = document.querySelector('#rate-select').value.trim(); 
    //const img_url = document.querySelector('#myimage').value.trim(); 

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          wine_name,
          wine_type,
          wine_vintage,
          //wine_quanity,
          wine_source,
          //notes,
          //wine_rating,
          //img_url
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  
      document.querySelector('.new-wine-form').addEventListener('submit', newWineHandler);
  };
  
  