const submitBtn = document.querySelector('#submitBtn2')


submitBtn.addEventListener('click', (e)=>{
    console.log('me clickeaste')
    Swal.fire(
        'Compra Realizada',
        'Gracias por su compra',
        'success'
      )
})