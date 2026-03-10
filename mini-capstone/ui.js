export function createBookmarkElement(bookmark, template) {
    const id = bookmark.id;
    const title = bookmark.title;
    const url = bookmark.url;

    console.log(id, title, url);    

    const clone = template.content.cloneNode(true);

    const li = clone.querySelector("li"); 
    const input = clone.querySelector(".bookmark-title");
    const link = clone.querySelector(".bookmark-link");
    const saveBtn = clone.querySelector(".save");
    
    li.dataset.id = id.toString();

    input.classList.add("hidden");
    saveBtn.classList.add("hidden");

    link.textContent = title;
    link.href = url;

    return li;
}
