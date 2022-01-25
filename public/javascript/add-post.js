async function newWineHandler(event) {
    event.preventDefault();
  
    const wine_name = document.querySelector('#wine-name').value.trim();
    const wine_type = document.querySelector('#type-select').value.trim();
    const wine_vintage = document.querySelector('#vintage').value.trim(); 
    const wine_source = document.querySelector('#source').value.trim(); 
    const notes = document.querySelector('#notes').value.trim();
    const img_url = document.querySelector('#myimage').value.trim(); 

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          wine_name,
          wine_type,
          wine_vintage,
          wine_source,
          notes,
          img_url
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
  
  