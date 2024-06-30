# Frontend Mentor - Base Apparel coming soon page solution

![Coming soon page](./assets/video/sample.gif)

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

🔳 [The challenge](#the-challenge-muscle)

🔳 [Screenshots](#screenshots-camera)

🔳 [Links](#links-link)

🔳 [Built with](#built-with-hammer_and_pick)

🔳 [What I learned](#what-i-learned-nerd_face)

🔳 [Useful resources](#useful-resources-memo)

🔳 [Author](#author-beginner)


## *The challenge* :muscle:

Users should be able to:

🎯 View the optimal layout for the site depending on their device's screen size.

🎯 See hover states for all interactive elements on the page.

🎯 Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## *Screenshots* :camera:

![Mobile](./assets/screenshots/mobile.avif)

![Desktop](./assets/screenshots/desktop.avif)

![Desktop active](./assets/screenshots/desktop-active.avif)

## *Links* :link:

[Live site URL](https://mendezpvi.github.io/fem-comming-soon-page/) 👀

[Challenges overcome](https://github.com/mendezpvi/frontend-mentor-challenges) 👀

## *Built with* :hammer_and_pick:

✅ Semantic HTML5 markup

✅ CSS custom properties

✅ CSS Grid

✅ Mobile-first workflow

✅ Vanilla JavaScript

## *What I learned* :nerd_face:

☑️ The `validate` function checks if the string provided as input is a valid e-mail address according to the specified pattern. If it is valid, it returns `true`; otherwise, it returns `false`. 
```js
function validate(input) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(input)
}
```

- `^`: Represents the beginning of the string.
- `[a-zA-Z0-Z0-9._-]+`: Searches for one or more alphanumeric characters, periods, underscores or hyphens.
- `@`: Searches for the literal "@" symbol.
- `[a-zA-Z0-9.--Z0-9.-]+`: Searches for one or more alphanumeric characters, periods or hyphens.
- Searches for the literal period (must be escaped with `` because the period has a special meaning in regular expressions).
- `[a-zA-Z]{2,6}`: Searches for 2 to 6 alphabetic characters (for example, domains such as ".com" or ".io").
- `$`: Represents the end of the string.

- The `.test(input)` method checks if the string `input` matches the regular expression.
- If the string matches the pattern (it is a valid e-mail address), it returns `true`. Otherwise, it returns `false`.

☑️ The `showError` function displays the error icon and error message. After 3 seconds, it clears the value of the input field, hides the icon and the error message.

```js
function showError() {
  errorIcon.style.display = 'block'
  errorHint.style.display = 'block'
  setTimeout(() => {
    emailInput.value = ''
    errorIcon.style.display = 'none'
    errorHint.style.display = 'none'
    document.querySelector('.submit-btn').blur()
  }, 3000);
}
```

☑️ This function is used to clear the email input field and remove the focus of the submit button from the form.
```js
function showWelcome() {
  emailInput.value = ''
  document.querySelector('.submit-btn').blur()
}
```

## *Useful resources* :memo:

🎁 [desarrolloweb.com](https://desarrolloweb.com/articulos/validar-email-javascript) - Validate an email with Javascript by Miguel Angel Alvarez.

## *Author* :beginner:

✨ Frontend Mentor - [@mendezpvi](https://www.frontendmentor.io/profile/mendezpvi)
