<a name="readme-top"></a>

# Portfolio

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
threejs-portfolio/
  |- public/
    |-- assets/
    |-- models/
    |-- textures/
    |-- apple-icon.png
    |-- favicon.ico
    |-- favicon1.png
    |-- favicon2.png
  |- src/
    |-- components/
        |--- Button.tsx
        |--- CanvasLoader.tsx
        |--- Cube.tsx
        |--- DemoComputer.tsx
        |--- Developer.tsx
        |--- HackerRoom.tsx
        |--- HeroCamera.tsx
        |--- ReactLogo.tsx
        |--- Rings.tsx
        |--- Target.tsx
    |-- constants/
        |--- index.ts
    |-- lib/
        |--- utils.ts
    |-- sections/
        |--- About.tsx
        |--- Clients.tsx
        |--- Contact.tsx
        |--- Experience.tsx
        |--- Footer.tsx
        |--- Hero.tsx
        |--- Navbar.tsx
        |--- Projects.tsx
    |-- App.tsx
    |-- index.css
    |-- main.tsx
    |-- vite-env.d.ts
  |- .env.local.example
  |- .env.local.local
  |- .gitignore
  |- .prettierrc
  |- bun.lockb
  |- eslint-config.js
  |- index.html
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.app.json
  |- tsconfig.json
  |- tsconfig.node.json
  |- vite.config.ts
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# emailjs configuration
VITE_APP_SERVICE_ID=service_xxxxxxxxxx
VITE_APP_TEMPLATE_ID=template_xxxxxxxxxx
VITE_APP_EMAIL=<your-email-here>
VITE_APP_PUBLIC_KEY=xxxxxxxxxxxxxx
```

### 5. Service ID (Replace VITE_APP_SERVICE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up with new account.
- Navigate to the API keys or services section.
- Find and copy the Service ID associated with your account.

### 6. Template ID (Replace VITE_APP_TEMPLATE_ID):

- Access the section for email templates or integration.
- Locate the template you want to use or create a new one and copy its Template ID.

### 7. EmailJS Public Key (Replace VITE_APP_PUBLIC_KEY):

- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

### 8. EmailJS Receiver (Replace VITE_APP_EMAIL):

- Enter the email address where you want to receive emails.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps` or `bun install --legacy-peer-deps` to install dependencies.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` or `bun dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Threejs portfolio.

- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser): ^4.4.1
- [@gsap/react](https://www.npmjs.com/package/@gsap/react): ^2.1.1
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^9.113.0
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^8.17.8
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [gsap](https://www.npmjs.com/package/gsap): ^3.12.5
- [leva](https://www.npmjs.com/package/leva): ^0.9.35
- [maath](https://www.npmjs.com/package/maath): ^0.10.8
- [react](https://www.npmjs.com/package/react): ^18.3.1
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.3.1
- [react-globe.gl](https://www.npmjs.com/package/react-globe.gl): ^2.27.2
- [react-responsive](https://www.npmjs.com/package/react-responsive): ^10.0.0
- [sonner](https://www.npmjs.com/package/sonner): ^1.5.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.5.2
- [three](https://www.npmjs.com/package/three): ^0.168.0
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^9.9.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^18.3.3
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.3.0
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^4.3.1
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.20
- [eslint](https://www.npmjs.com/package/eslint): ^9.9.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.36.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^5.1.0-rc.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.9
- [globals](https://www.npmjs.com/package/globals): ^15.9.0
- [postcss](https://www.npmjs.com/package/postcss): ^8.4.47
- [prettier](https://www.npmjs.com/package/prettier): ^3.3.3
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss): ^0.6.8
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.4.13
- [typescript](https://www.npmjs.com/package/typescript): ^5.5.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): ^8.0.1
- [vite](https://www.npmjs.com/package/vite): ^5.4.1

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
