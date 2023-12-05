document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')

  //   const username = document.getElementById('username')
  const email = document.getElementById('email')

  //   if (form.reportValidity()) {
  //     form.submit()
  //   } else {
  //     form.reset()
  //   }

  //   Перевірка на заповнення інпута (username)
  //   if (username.checkValidity()) {
  //     form.submit()
  //   }

  // Перевірка на заповнення інпута (email) з кастомним повідомленням про помилку

  if (!email.checkValidity()) {
    if (email.value.lenght === 0) {
      email.setCustomValiditi('Помилка. Введіть значення')
    }

    if (email.value.lenght > 10) {
      email.setCustomValiditi(
        'Помилка. Введіть меньше 10  символів',
      )
    }
    email.reportValidity()
  }
}
