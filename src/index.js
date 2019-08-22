document.addEventListener('click',() => {
  import(/* webpackPrefetch: true */ './click').then(({default: func}) => {
    func()
  })
})


if ('serviceWorker' in navigator) {
  window.addEventListener('load',() => {
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('================worker is registered');
    }).catch((err) => {
      console.log('================err',err);
    })
  })
}