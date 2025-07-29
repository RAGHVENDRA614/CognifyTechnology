const container = document.getElementById('posts-container');
const loader = document.getElementById('loader');

// Show loader while fetching
loader.style.display = 'block';

Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=9').then(res => res.json()),
  fetch('https://randomuser.me/api/?results=9').then(res => res.json())
])
.then(([posts, users]) => {
  loader.style.display = 'none';

  posts.forEach((post, index) => {
    const user = users.results[index];
    const photo = user.picture.medium;
    const name = `${user.name.first} ${user.name.last}`;

    const card = document.createElement('div');
    card.className = 'post-card';

    card.innerHTML = `
      <span class="badge">#${post.id}</span>
      <img src="${photo}" alt="User Photo" />
      <h2>${name}</h2>
      <p><strong>${post.title.slice(0, 40)}</strong></p>
      <p>${post.body.slice(0, 80)}...</p>
    `;

    container.appendChild(card);
  });
})
.catch(err => {
  loader.style.display = 'none';
  container.innerHTML = `<p style="text-align:center;color:red;">Failed to fetch data 😔</p>`;
  console.error(err);
});
