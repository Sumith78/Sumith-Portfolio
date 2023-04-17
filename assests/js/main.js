/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===============  MENU show ===============*/
//validate if constant exist*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
  })
}

/*=============== Menu hidden ===============*/
//validate if constant exist*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
  let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper (".testimonial_container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to validate email format
  return re.test(email);
}

function containsOnlyValidCharacters(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regular expression to validate characters in email address
  return re.test(email);
}

const email = "john@example.com";
if (validateEmail(email) && containsOnlyValidCharacters(email)) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}

const contactForm =document.getElementById('contact-form'),
      contactName =document.getElementById('contact-name'),
      contactEmail =document.getElementById('contact-email'),
      contactProjects =document.getElementById('contact-projects'),
      contactMessage =document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProjects.value ===  ''  ){
      //add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      //show message
      contactMessage.textContent ='Missing Credentials !!!'
  }else{
      // servicesID - templateID - #form - publicKey
      emailjs.sendForm('service_adr5qnp','template_2jlk58s','#contact-form','0DhJ7iqIv4f_baVmr')
          .then(()  =>{
            //Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'

            //Remove message after five seconds
            setTimeout(() => {
              contactMessage.textContent = ''
            }, 5000)
          }, (error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
          })

          //To clear the input field
          contactName.value = ''
          contactEmail.value = ''
          contactProjects.value = ''
  }
}

contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id'),
          sectionClass =document.querySelector('.nav_menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
      }else{
        sectionClass.classList.remove('active-link')
      }

  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'


//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-fill'

//we Validate if the user previously chose a topic 
if(selectedTheme){
  //if the validation is fulfilled we ask what the issue was to know if we activated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


//activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
  //add or remove the dark /icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  //we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', getCurrentTheme)
  localStorage.setItem('selected-icon', getCurrentIcon)
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header textAlign
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     :header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration : 2500,
  delay : 400,
  // reset: true /*Animation repeat */
})

sr.reveal ('.home_data, .project_container, testimonial_container, .footer_container')
sr.reveal('.home_info div' , {delay:600, origin: 'bottom' ,interval:100 })
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)' , {origin: 'left'})
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)' , {origin: 'right'})
sr.reveal('.qualification_content, .services_card', {interval:100})