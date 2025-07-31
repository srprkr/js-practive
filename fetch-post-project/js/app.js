async function create(blogPost) {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const headers = {
      'Content-type': 'application/json',
    };

    const body = JSON.stringify({
      title: blogPost.title,
      body: blogPost.body,
      userId: blogPost.userId,
    });

    const response = await fetch(url, { method: 'POST', headers, body });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data)
  } catch (error) {
    console.error('Error:', error);
  }
}

create({
  title: 'Test Post',
  body: 'This is a test post',
  userId: 1,
});