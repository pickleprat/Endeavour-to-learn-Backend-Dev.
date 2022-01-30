function addingEventListeners(identities){
    let division = document.querySelector(`#${identities}`);
    division.addEventListener('mouseenter', function (e){
        division.style.backgroundColor = 'rgb(57, 185, 207)';
        division.style.color = 'black';
    } );
    division.addEventListener('mouseleave', function(e){
        division.style.backgroundColor = 'black';
        division.style.color = 'white';
    })

};

for(let i =1; i<=6; i++){
    addingEventListeners(`class${i}`)
}