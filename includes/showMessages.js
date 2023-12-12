export function showMessages(messages, type='success') {
  if(type === 'success'){
    Swal.fire({
      text: messages,
      icon: type,
      timer: 1500,
      position: 'bottom-start',
      showConfirmButton: false,
    })
  } else {
    Swal.fire({
      text: messages,
      icon: type,
      timer: 1500,
      position: 'bottom-end',
      showConfirmButton: false,
    })
    return
  }
}