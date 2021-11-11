const sections = document.querySelectorAll('section')

sections.forEach((section) => {
  const button = section.querySelector('.button')

  const container = section.querySelector('.section__container')

  button.addEventListener('click', () => {
    section.classList.add('active')
    section.scrollLeft = section.offsetWidth
  })

  const images = section.querySelectorAll('.gallery img')

  images.forEach((image, index) => {

    image.addEventListener('click', () => {

      if(image.classList.contains('active')){
        section.scrollLeft = section.offsetWidth
        setTimeout(() => {
          image.classList.remove('active')
        }, 500)

      } else {
        image.classList.add('active')
        setTimeout(() => {
          section.scrollLeft = image.offsetLeft
        }, 250)
      }
    })
  })
})