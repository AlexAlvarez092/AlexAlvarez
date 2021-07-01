# Website alexalvarez.es

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![license-shield]][license-url]

## About The Project

This is my personal website which I use as a portfolio most of the time. However, sometimes I use it as a kind of testing environment hence if you visit it from time to time, you may find "funny" things.

### Built With

* [Node JS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Vuejs](https://vuejs.org/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* Update npm

   ```sh
   npm install npm@latest -g
   ```

### Run in development

1. Download the branch *development*

   ```sh
   git clone https://github.com/AlexAlvarez092/alexalvarez/tree/development.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Compiles and hot-reloads

   ```sh
   cd client
   npm run serve
   ```

#### Prepare for productino

1. Compiles and minifies for production

   ```bash
   npm run build
   ```

2. Lints and fixes files

   ```bash
   npm run lint
   ```

### Run in production

* Install `ufw` and open ports

   ```sh
   sudo apt install ufw
   ufw enable ssh
   ufw enable https
   ufw status verbose
   ```

* Install `pm2`

   ```sh
   npm install -g pm2
   ```

* Create `deploy.sh`

   ```sh
   #! /bin/sh
 
   pm2 stop all
   pm2 delete all
 
   rm -rf alexalvarez
 
   git clone https://github.com/AlexAlvarez092/alexalvarez.git
 
   mkdir alexalvarez/server/ssl
   cp keys/* alexalvarez/server/ssl/
 
   (cd alexalvarez/server && npm install)
   (cd alexalvarez/server && npm run start)
   ```

## Roadmap

See the [open issues](https://github.com/AlexAlvarez092/alexalvarez/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

See `LICENSE` for more information.

## Contact

* [alexalvarez.es](https://www.alexalvarez.es)

* [alexalvarez@mail.com](mailto:alexalvarez@mail.com)

[contributors-shield]: https://img.shields.io/github/contributors/AlexAlvarez092/alexalvarez.svg?style=for-the-badge
[contributors-url]: https://github.com/AlexAlvarez092/alexalvarez/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/AlexAlvarez092/alexalvarez.svg?style=for-the-badge
[forks-url]: https://github.com/AlexAlvarez092/alexalvarez/network/members

[stars-shield]: https://img.shields.io/github/stars/AlexAlvarez092/alexalvarez.svg?style=for-the-badge
[stars-url]: https://github.com/gAlexAlvarez092/alexalvarez/stargazers

[issues-shield]: https://img.shields.io/github/issues/AlexAlvarez092/alexalvarez.svg?style=for-the-badge
[issues-url]: https://github.com/AlexAlvarez092/alexalvarez/issues

[license-shield]: https://img.shields.io/github/license/AlexAlvarez092/alexalvarez.svg?style=for-the-badge
[license-url]: https://github.com/AlexAlvarez092/alexalvarez/blob/master/LICENSE.txt
