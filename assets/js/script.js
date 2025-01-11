document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.1)');
    img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
  });
  const links = document.querySelectorAll(".event a[data-article]");
  console.log(links)
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const articleKey = link.getAttribute("data-article");
        localStorage.setItem("selectedArticle", articles[articleKey]);
        window.location.href = "article.html";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const articleContent = localStorage.getItem("selectedArticle");
  if (articleContent) {
      document.querySelector(".article").innerHTML = articleContent;
  }
});