$('.test').owlCarousel({
    lazyLoad:true,
    loop:true,
	responsive:{
		0:{
			items:1,
		},
        560:{
            items:2
        },
		720:{
			items:3,
		},
		1000:{
			items:4,
		}
	}
});

var owl = $('.banner-caro');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});


$('.team-caro').owlCarousel({
    rtl:true,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})






// --------- team section ------------

$('.clients').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


            //animate in about
            var words=['Develop','Build','Create']
            let span=document.querySelector('.animate')
                let i=0
                change()
            function change(){
                span.innerHTML=words[i]
                i++
                if(i==words.length){
                    i=0
                }
                setTimeout(change,2000)
            }
        setTimeout(change,2000)



        


