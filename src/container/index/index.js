document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')
  const email = document.getElementById('email')
  //   const username = document.getElementById('username')

  if (form.reportValidity()) {
    form.submit()
  } else {
    form.reset()
  }

  //   Перевірка на заповнення інпута (username)
  //   if (username.checkValidity()) {
  //     form.submit()
  //   }

  console.log(email.checkValidity())

  // Перевірка на заповнення інпута (email) з кастомним повідомленням про помилку

  if (!email.checkValidity()) {
    if (email.value.length === 0) {
      email.setCustomValidity('Помилка. Введіть значення')
    }
    if (email.value.length > 10) {
      email.setCustomValidity(
        'Помилка. Введіть менше 10 символів',
      )
    }
    email.reportValidity()
  }
}

document
  .querySelectorAll('.form__button-add')
  .forEach((element) => {
    element.onclick = () => {
      if (element.getAttribute('operator') === '+') {
        return age.stepUp(
          Number(element.getAttribute('value')),
        )
      }

      if (element.getAttribute('operator') === '-') {
        return age.stepDown(
          Number(element.getAttribute('value')),
        )
      }
    }
  })

document.querySelector('.form__button-save').onclick =
  () => {
    const value = document.getElementById('username').value

    if (value.length === 0) alert('Даних нема')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Дані зберегли'))
  }
