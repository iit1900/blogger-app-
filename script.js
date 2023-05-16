// Mock JSON data containing blogs
const blogs = [
    { title: "Blog 1", content: "This is the content of Blog 1." },
    { title: "Blog 2", content: "This is the content of Blog 2." },
    { title: "Blog 3", content: "This is the content of Blog 3." },
    { title: "Blog 4", content: "This is the content of Blog 4." },
    { title: "Blog 5", content: "This is the content of Blog 5." }
];

// Function to shuffle the blogs array
function shuffleBlogs() {
    for (let i = blogs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blogs[i], blogs[j]] = [blogs[j], blogs[i]];
    }
}

// Function to render the blogs on the page
function renderBlogs() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    blogs.forEach(blog => {
        const blogElement = document.createElement("div");
        blogElement.classList.add("blog");

        const titleElement = document.createElement("h2");
        titleElement.textContent = blog.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = blog.content;

        blogElement.appendChild(titleElement);
        blogElement.appendChild(contentElement);

        blogContainer.appendChild(blogElement);
    });
}

// Initial rendering of blogs
renderBlogs();

// Refresh the blogs on page reload
window.addEventListener("load", () => {
    shuffleBlogs();
    renderBlogs();
});
