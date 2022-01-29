async function upcountClickHandler(event) {
    event.preventDefault();
  
    console.log(event.target.element);

    const response = await fetch('/api/posts/quantity', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: event.target.element
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.upcount-btn').addEventListener('click', upcountClickHandler);