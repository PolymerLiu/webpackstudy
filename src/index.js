document.addEventListener('click',() => {
  import(/* webpackPrefetch: true */ './click').then(({default: func}) => {
    func()
  })
})