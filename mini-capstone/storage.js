export function saveBookmarks(bookmarks){
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

export function loadBookmarks(){
    if (localStorage.getItem("bookmarks"))
        return JSON.parse(localStorage.getItem("bookmarks"));
    
    return [];
}
