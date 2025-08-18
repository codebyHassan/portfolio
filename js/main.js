// show menu

const showMenu=(toggleId, navId)=>{
    const toggle=document.getElementById(toggleId),
        nav=document.getElementById(navId)
    if(toggle&&nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle','nav_menu')

// Active & remove active

const navLink =document.querySelectorAll('.nav_link')
navLink.forEach(n=>n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu =document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// service model

const modelViews= document.querySelectorAll('.services_model'),
    modelBtns=document.querySelectorAll('.services__button'),
    modelCloses=document.querySelectorAll('.services_model-close')

let model=function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click',()=>{
        model(i)
    })
})

modelCloses.forEach((modelClose)=>{
    modelClose.addEventListener('click',()=>{
        modelViews.forEach((modelView)=>{
            modelView.classList.remove('active-model')
        })
    })
})

function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,

    };
    
    const serviceID="service_ndlcgvn";
    const templateID="template_rwl964f";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("your message sent successfully")
        }
    )
    .catch(err=>console.log(err));
}