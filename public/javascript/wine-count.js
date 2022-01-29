async function upcountClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const parsedId = parseInt(id);
    const response = await fetch('/api/posts/quantity', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: parsedId,
        count:2
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      //document.location.reload();
      console.log(response)
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.upcount-btn').addEventListener('click', upcountClickHandler);