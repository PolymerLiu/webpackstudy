document.addEventListener('click',() => {
  import('./click').then(({default: func}) => {
    func()
  })
})