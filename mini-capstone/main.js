import { loadBookmarks, saveBookmarks } from "./storage.js";
import { addBookmark, removeBookmark, updateBookmark } from "./bookmarks.js";
import { createBookmarkElement } from "./ui.js";

const list = document.querySelector("ul");
const template = document.querySelector("#bookmark-template");
const warning = document.querySelector(".warning");

let bookmarks = loadBookmarks();

bookmarks.forEach(b => {
    const element = createBookmarkElement(b, template);
    list.appendChild(element);
});

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    const titleInput = document.querySelector("#bookmark-title");
    const urlInput = document.querySelector("#bookmark-url");
    
    const title = titleInput.value;
    const url = urlInput.value;
    if (title === "" || url === ""){
        warning.textContent = "Please fill all the fields.";
        return;
    }

    if (!isValidUrl(url)){
        warning.textContent = "Entered url is not vaid.";
        return;
    }

    const bookmark = addBookmark(bookmarks, title, url);
    saveBookmarks(bookmarks);
    
    const li = createBookmarkElement(bookmark, template);
    list.appendChild(li);

    titleInput.value = "";
    urlInput.value = "";
    warning.textContent = "";
});

list.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches("button")) return;

    const li = target.closest("li");
    const id = Number(li.dataset.id);
    
    const titleInput = li.querySelector(".bookmark-title");
    const link = li.querySelector(".bookmark-link");
    const saveBtn = li.querySelector(".save");
    const editBtn = li.querySelector(".edit");

    if (target.classList.contains("edit")) {
        editBtn.classList.add("hidden");
        saveBtn.classList.remove("hidden");
        
        link.classList.add("hidden")
        titleInput.classList.remove("hidden");
        
        titleInput.value = link.textContent;
    }
    
    if (target.classList.contains("save")) {
        saveBtn.classList.add("hidden");
        editBtn.classList.remove("hidden");
        
        link.classList.remove("hidden")
        titleInput.classList.add("hidden");
        
        link.textContent = titleInput.value;
        
        updateBookmark(bookmarks, id, titleInput.value);
        saveBookmarks(bookmarks);
    }

    if (target.classList.contains("remove")) {
        bookmarks = removeBookmark(bookmarks, id);
        saveBookmarks(bookmarks);
        li.remove();
    }
});