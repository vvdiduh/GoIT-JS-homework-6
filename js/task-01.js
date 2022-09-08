const qauntTitleEl = document.querySelectorAll('.item');
console.log('Number of categories:', qauntTitleEl.length);
console.log("----");

for (const item of qauntTitleEl) {
    // console.log(item);
    const titleEl = item.querySelector('h2');
    console.log("Category:", titleEl.textContent);
    const listEl = item.querySelectorAll('li');
    console.log("Elements:",listEl.length);
    console.log("----");
}
