document.addEventListener('DOMContentLoaded', function () {
  const signInForm = document.getElementById('signin-form');

  signInForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await Clerk.signIn(email, password);
      console.log('Sign in successful');
      // Redirect or perform other actions upon successful sign-in
    } catch (error) {
      console.error('Sign in failed', error);
      // Handle sign-in failure (display error message, etc.)
    }
  });
});
