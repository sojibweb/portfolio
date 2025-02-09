//------------------ Navbar Scroll Start------------------ 
const NavEl = document.querySelector('.navbar');
const GoTop = document.querySelector('.back_to_top_btn')

window.addEventListener('scroll', () => {
    if (window.scrollY >=56) {
        NavEl.classList.add('navbar-scrolled');

    } else if(window.scrollY <56) {
        NavEl.classList.remove('navbar-scrolled');

    }
});
//------------------ Navbar Scroll End------------------ 
//------------------ Portfolio Strat-------------------- 
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}
//------------------ Portfolio End-------------------- 

$(function(){
    // Back to top 
      $('.btn_btn_primary').click(function(){
        $('html,body').animate({
          scrollTop: 0,
        })
        });
    
        // Window scroll ...
        $(window).scroll(function(){
            var scrollingpoint = $(this).scrollTop();
            if(scrollingpoint > 450) {
                
              $('.btn_btn_primary').fadeIn(500);
      
            } else{
    
              $('.btn_btn_primary').fadeOut(500);
    
            }
          })
    
    // Loding animatino
      $(window).on("load", function(){
        $(".preloder_main").delay(2000).fadeOut(2000);
      })
      
    });
    