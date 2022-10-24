//********** Search Bar **********/

const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('nav-search-input');
const searchButton = document.getElementById('nav-search-button');

searchBar.addEventListener('mouseover', searchBarExpand);
searchInput.addEventListener('focusin', searchBarExpand);
searchButton.addEventListener('click', searchBarExpand);

searchBar.addEventListener('mouseleave', searchBarCollapse);
searchInput.addEventListener('focusout', searchBarCollapse);

function searchBarExpand() {
    searchInput.classList.add('input-active');
    searchButton.classList.add('button-active');
}

function searchBarCollapse() {
    if(searchInput != document.activeElement) {
        searchInput.classList.remove('input-active');
        searchButton.classList.remove('button-active');
    }
}

searchButton.onclick = function() {
    searchInput.focus();
}


//*********** Menu Bar ************/

const menuButton = document.getElementById('menu-button');
const menuSlider = document.getElementById('side-nav-links');
const menuCloseButton = document.getElementById('menu-close-button');

menuButton.addEventListener('click', menuBarExpand);
menuCloseButton.addEventListener('click', menuBarCollapse);

function menuBarExpand() {
    menuSlider.classList.add('active');
    menuButton.style.display = 'none';
    menuCloseButton.style.display = 'block';
}

function menuBarCollapse() {
    menuSlider.classList.remove('active');
    menuButton.style.display = 'block';
    menuCloseButton.style.display = 'none';
}
