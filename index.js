const imgs = document.querySelectorAll('.header-slider ul img ');
const  prev_btn = document.querySelector('.control_prev');
const next_btn =document.querySelector('.control_next');

let n = 0;

function changeSlide( ){
    for (let i=0;  i< imgs.length; i++){
        imgs[ i ].style.display = 'none' ;
    }
        imgs[n].style.display = 'block' ;
}
   changeSlide( );
      
   prev_btn .addEventListener('click', (e)=>{
    if(n > 0){
          n--;
    }else{
        n=imgs.length - 1;
    }

    changeSlide( );
})


 next_btn .addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
          n++;
    }else{
        n=0;
    }

    changeSlide( );
})




// for search icon
document.querySelector('.nav-country').addEventListener('click', function() {
    document.getElementById('locationModal').style.display = 'block';
});

// document.getElementById('signInButton').addEventListener('click', function() {
//     // Add any action you want to perform when the button is clicked
//     alert('Sign in button clicked');
// });

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('locationModal')) {
        document.getElementById('locationModal').style.display = 'none';
    }
}






