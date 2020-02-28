window.onload = init; // only run commands when the window is fully loaded


function init() {
    // Assign background image for each JS30 activity
    listItem = document.querySelectorAll('#js30-activities li');
    listItem.forEach((li, index) => {
        li.style.backgroundImage = `url('https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small${index}.jpg')`
    })
    
    // display number on mouseover
    

    
    // make the list item clickable
    listItem.forEach((li, index)=> {
        li.addEventListener('click', (e)=> {
            e.preventDefault(); // prevent the Anchor tag to open in the same window
            src = li.childNodes[0].href;
            console.log(src);
            window.open(src, '_blank')
        }, true)
    })
}