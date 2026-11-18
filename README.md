# Interactive Personal Portfolio Website

A responsive frontend-only personal portfolio made with HTML, CSS, JavaScript, and Bootstrap 5.

## How to run
1. Extract the ZIP file.
2. Open the `interactive-personal-portfolio` folder.
3. Double-click `index.html` to open it in your browser.
4. Internet access is needed to load Bootstrap, Bootstrap Icons, and Google Fonts from their CDNs.

## Project files
- `index.html` - page structure and content
- `assets/css/style.css` - design and responsive styling
- `assets/js/script.js` - typing animation, theme toggle, navigation, scroll button, and form validation
- `assets/images/` - place your own images here

## Customize the website
- Replace every `Your Name` with your preferred display name.
- Update the About Me information, school, course, and interests.
- Change the skills and percentages to match your actual skills.
- Replace the sample projects with your own projects.
- Update the social media links in `index.html`.
- To use a real profile photo, place an image in `assets/images/`, then replace the `.profile-placeholder` div in `index.html` with:
  `<img src="assets/images/profile.jpg" alt="Your profile photo" class="profile-photo">`
  Add this CSS rule to `style.css`:
  `.profile-photo { position: relative; width: 265px; height: 265px; object-fit: cover; border-radius: 50%; border: 10px solid var(--bg); box-shadow: var(--shadow); }`

## Important note about the contact form
The contact form is frontend-only. It checks that the fields are filled in and that the email looks valid, but it does not send messages because there is no backend or form service connected.
