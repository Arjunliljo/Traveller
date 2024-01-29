const popup = document.querySelector('.popup');
const bookNow = document.querySelectorAll('.book-now');
const discover = document.querySelector('.discover')




const sectionTours = document.querySelector('#section-tours');

discover.addEventListener('click', () => {

    sectionTours.scrollIntoView({ block: 'center', behavior: "smooth" })
});
