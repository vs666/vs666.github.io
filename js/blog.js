const posts = [
  "blog/first-post.md",
  "blog/second-post.md"
];

const container = document.getElementById("posts");

posts.forEach(post => {
  fetch(post)
    .then(response => response.text())
    .then(text => {
      const html = marked.parse(text);
      const article = document.createElement("div");
      article.innerHTML = html;
      article.innerHTML += "<hr>";
      container.appendChild(article);
    });
});
