export function addBookmark(bookmarks, title, url) {
    const newBookmark = {
        id: Date.now(),
        title,
        url
    };
    bookmarks.push(newBookmark);

    return newBookmark;
}

export function updateBookmark(bookmarks, id, newTitle) {
    const index = bookmarks.findIndex((b) => b.id === id);
    if (index !== -1) {
        bookmarks[index].title = newTitle;
    }
}

export function removeBookmark(bookmarks, id) {
    return bookmarks.filter(b => b.id !== id);
}