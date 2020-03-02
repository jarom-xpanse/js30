window.onload = init; // only run commands when the window is fully loaded


function init() {
    listItem = document.querySelectorAll('#js30-activities li');
    // Assign background image for each JS30 activity
    listItem.forEach((li, index) => {
        li.style.backgroundImage = `url('https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small${index}.jpg')`
    })
    
    // display number on mouseover
    var numDisplayed = false;

    listItem.forEach((li, index) => {
        let timer;
        li.addEventListener('mouseover', ()=> {
            if(numDisplayed == true) return;
            numDisplayed = true;
            let p = document.createElement('p');
            p.innerHTML = index + 1;
            p.classList.add('numbering');
            li.appendChild(p);

            // Highlight JS activity when hovered for a few seconds

            timer = setTimeout(()=> {
                li.style.height = '290px';
            setTimeout(runMasonry, 200);
            }, 500);
            

        });
        li.addEventListener('mouseleave', ()=> {
            numDisplayed=false;
            let p = li.querySelector('p');
            li.removeChild(p);

            // Unhighlight JS activity

            li.style.height = '140px';
            setTimeout(runMasonry, 200)

            clearTimeout(timer);
        })
    })

    
    // make the list item clickable
    listItem.forEach((li, index)=> {
        li.addEventListener('click', (e)=> {
            e.preventDefault(); // prevent the Anchor tag to open in the same window
            src = li.childNodes[0].href;
            window.open(src, '_blank')
        }, true)
    })
}