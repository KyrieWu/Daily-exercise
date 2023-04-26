const header = document.getElementById('page-header')
const intercept = document.createElement('div')

intercept.setAttribute("data-observer-intercept", '')
header.before(intercept)

const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle('avtive', !entry.isIntersecting)
})
observer.observe(intercept)