# Newsletter Signup Web Application

Welcome to the Newsletter Signup Web Application project! This application allows users to sign up for a newsletter. It is currently live and hosted on [Render](https://joetemesi-newsletter-signup.onrender.com/).

## Getting Started

If you'd like to run this application locally, you'll need to set up Mailchimp API authentication. Here's how to get started:

### Prerequisites

1. Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/joetemesi/Newsletter-Signup.git
cd Newsletter-Signup
```

### Install Dependencies

```bash
npm install
```
### Set Up Mailchimp Authentication
To run this application locally, you'll need to set up your Mailchimp API authentication and URL.

1. Create a Mailchimp account if you don't have one.

2. Obtain your Mailchimp API URL (e.g., https://<dc>.api.mailchimp.com/3.0/lists/<list-id>). You can find this in your Mailchimp account.

3. Obtain your Mailchimp API Key, which will serve as the authentication. Make sure it's in the format username:api-key.

4. Set the environment variables for Mailchimp URL and Auth:
``` bash
export MAILCHIMP_URL="your-mailchimp-api-url"
export MAILCHIMP_AUTH="your-mailchimp-api-key"
```

## Start the Application
``` bash
node app.js
```
The application will run locally at http://localhost:3000

## Usage

1. Access the application by opening your web browser and navigating to http://localhost:3000 if you're running it locally, or visit the live site.

2. Fill out the newsletter signup form with your details.

3. Click the "Subscribe" button to sign up for the newsletter.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Thanks to Mailchimp for providing the newsletter signup API.

Built with Node.js and Express.js.

Hosted on Render.

Happy coding!



