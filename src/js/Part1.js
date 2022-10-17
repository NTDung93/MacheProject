document.querySelector(".vid-cnt").addEventListener("mouseover", event => {
    event.target.classList.add("pointer")    
})



document.querySelector('.fa-bars').addEventListener('click', (e) =>{
 const c = document.querySelector('.list');
 c.classList.contains('list-actived') ?
 c.classList.remove('list-actived'): c.classList.add('list-actived')
})

