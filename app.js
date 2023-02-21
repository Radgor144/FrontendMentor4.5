let arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {

        
        title = document.querySelector('.title');
        PreviousText = document.querySelector('.hidden');
        PreviousArrow = document.querySelector('.rotate');
        
        if(PreviousText){

            title.classList.remove('title');
            PreviousText.classList.remove('hidden');
            PreviousArrow.classList.remove('rotate');
            
            arrow.parentElement.nextElementSibling.classList.add('hidden');
            arrow.classList.add('rotate');
            arrow.previousElementSibling.classList.add('title');

        }
        else{
            
            arrow.parentElement.nextElementSibling.classList.add('hidden');
            arrow.classList.add('rotate');
            arrow.previousElementSibling.classList.add('title');

        }
    })
})

