const categories = { tag1: [{ url: `/posts/jekyll-markdown/`, date: `10 Apr 2025`, title: `article number 1`},],tag2: [{ url: `/posts/jekyll-markdown/`, date: `10 Apr 2025`, title: `article number 1`},],first_post: [{ url: `/posts/jekyll-markdown/`, date: `10 Apr 2025`, title: `article number 1`},],fiction: [{ url: `/posts/the-purpose-of-education/`, date: `11 Apr 2025`, title: `서울시장 “도시 균형발전 위해 3기 행정구역 개편 검토”(예시)`},],jekyll: [{ url: `/posts/the-purpose-of-education/`, date: `11 Apr 2025`, title: `서울시장 “도시 균형발전 위해 3기 행정구역 개편 검토”(예시)`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};