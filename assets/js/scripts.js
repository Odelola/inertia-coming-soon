const inputEmail = document.getElementById('notifyForm_email');
const submitEmail = document.getElementById('notifyForm_submit');
const validatingText = document.getElementById('validateText');
const form = document.getElementById('notifyForm');
// const animationTimeline =  anime.timeline({
//     easing: 'easeOutExpo',
// });
// animationTimeline
// .add({
//     targets: "#navigation",
//     opacity: [0, 1],
//     // translateX: [100, 250], // from 100 to 250
//     // direction: 'alternate',
//     // loop: true,
//     duration: 2000,
// })

// // anime({
// //     targets: ".nav-link",
// //     translateX: 1000,
// //     delay: anime.stagger(100)
// // })
// anime({
//     targets: '.nav-inner',
//     opacity: 1,
//     translateX: [100, 250], // from 100 to 250
//   delay: 500,
//   direction: 'alternate',
//   loop: true
// })

const animationTimeline = gsap.timeline({ defaults: { ease: Power3.easeOut, duration: 2 } });
animationTimeline
    .from("#navigation, .nav-logo", {
        opacity: 0,
        y: "-1000%",
        stagger: .5,
        duration: .5,
    })
    .to(".nav-link, .nav-link_divider", {
        opacity: 1,
        x: "50%",
        stagger: .5,
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
    })
    .to(".nav-button_appStore", {
        duration: .5,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, "3")
    .to(".hero-heading, .hero-heading + p, #notifyForm", {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: .4,
        opacity: 1,
        y: 0
    }, "3.2")
    .from(".footerCredits p, .footer_socials-link, .footer_socials-link_divider", {
        opacity: 0,
        y: "1000%",
        stagger: .5,
    }, "3.3")
    
submitEmail.setAttribute("disabled", true);
inputEmail.addEventListener("keyup", function (e) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regex
    if (!this.value) {
        return false;
    }
    if (this.value.match(emailPattern)) {
        validatingText.innerText = "This is a valid email";
        validatingText.style.color = 'green';
        submitEmail.removeAttribute("disabled");
        submitEmail.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you very much, your email has been acknowledged by the browser but not submitted per se. Thank you for submitting though")
            form.reset();
            validatingText.innerText = "";
        })
        return true;
    }
    else {
        validatingText.style.display = 'block';
        validatingText.innerText = "That is not a valid Email";
        validatingText.style.color = 'red';
        submitEmail.setAttribute("disabled", "disabled");
        return false;
    }
});
