window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;
    if(scroll<64){
        document.getElementById('settings').style.display = "none";
    }

    if(scroll>64){
        document.getElementById('settings').style.display = "block";
    }
});

function destroy_sidebar(){
    document.getElementById('s').style.left='-100%';
    document.getElementById("settings").checked = false;
}

function spawn_sidebar(){
    document.getElementById('s').style.left='0';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show' );
        }
    });  
});      
    
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
    
     
    