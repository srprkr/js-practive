const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  return await response.json();
};

const render = (users) => {
  return users.map(({ name, email }) => `<li>${name} (${email})</li>`).join('');
};

(async () => {
  const loadingElem = document.querySelector('#loading');
  loadingElem.innerHTML = "Loading..."
  // Simulate loading delay
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);

  try {
    const users = await getUsers();
    document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;

  } catch (err) {
    document.querySelector('#message').textContent = err.message;
  } finally {
    loadingElem.innerHTML = '';
  }
})();