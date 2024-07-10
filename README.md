# My Portfolio

## Description
This is my personal portfolio website built with Angular. It showcases my projects, skills, and experiences. The site is designed with Tailwind CSS, enhanced with PrimeNG components and PrimeIcons, and includes fun animations. It is hosted as a static web app on Azure with a custom domain and a CI/CD deployment pipeline.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [CI/CD Pipeline](#cicd-pipeline)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Features
- Showcase of projects, skills, and experiences.
- Responsive design for optimal viewing on various devices.
- Styled using Tailwind CSS for modern UI design.
- Enhanced UI components with PrimeNG and icons with PrimeIcons.
- Fun animations to make the user experience engaging.
- Hosted on Azure with a custom domain.
- CI/CD pipeline for seamless deployment.

## Installation

### Prerequisites
- Node.js (>=18.x)
- Angular CLI (>=18.x)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
2. Change directory
   ```bash
   cd pamela-portfolio
4. Install node modules
   ```bash
   npm install
6. Start the application server
   ```bash
   ng serve

## Usage
### Development Server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Configuration
### Environment Variables
Set up any necessary environment variables in the src/environments/environment.ts file. For this portfolio, you might need variables for analytics, APIs, etc.

### Prettier and ESLint
This project uses Prettier and ESLint for code formatting and linting. To use these tools:

1. Ensure you have the necessary configuration files (.prettierrc, .eslintrc.json, etc.) in the project directory.
2. Run Prettier to format your code:
   ```bash
   npm run prettier
4. Run ESLint to lint your code:
   ```bash
   ng lint

## CI/CD Pipeline
This project is set up with a CI/CD pipeline on Azure to ensure seamless deployments. Follow these steps to set up the pipeline:

1. Create an Azure Static Web App: Follow the Azure documentation to create a Static Web App and link it to your GitHub repository.
2. Configure GitHub Actions: Ensure your repository has a GitHub Actions workflow file (e.g., azure-static-web-apps.yml) configured to build and deploy your Angular application whenever changes are pushed to the main branch.

## Technologies Used
- Angular
- Tailwind CSS
- PrimeNG
- PrimeIcons
- Azure Static Web Apps
- Azure devops
- Azure deployment pipelines
- TypeScript
- HTML5 & CSS3
- Prettier
- ESLint
