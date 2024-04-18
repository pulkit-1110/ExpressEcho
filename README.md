# Express Echo

Express Echo is a responsive blogging website built with React, allowing users to create, edit, and view blog posts. It provides a simple and intuitive interface for users to share their thoughts and ideas through written content and images.

## Getting Started

To get started with Express Echo, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/pulkit-1110/ExpressEcho.git
   ```

2. Navigate to the project directory and Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and initialize the required variables. You can use the provided `.env.sample` file as a template.

4. Start the development server:

   ```
   npm run dev
   ```

5. Access the application in your web browser at `http://localhost:xxxx`.

## Appwrite Integration

Express Echo uses [Appwrite](https://appwrite.io/) as a backend service. Follow these steps to integrate your Appwrite project:

1. Create an account on Appwrite and start a new project.

2. In the Appwrite dashboard, go to Integrations and add a Web platform. Enter your project name and domain.

3. Enable Email/Password authentication in Appwrite.

4. Create a database named `blog` in Appwrite and add a collection named `articles` with attributes: `title`, `status`, `featuredImage`, `userId`, and `content`.

5. Create a storage bucket named `images` in Appwrite for storing images.

6. Retrieve the following information from your Appwrite project:

   - API endpoint
   - Project ID
   - Database ID
   - Collection ID
   - Bucket ID

7. Update the corresponding variables in your `.env` file.

## TinyMCE Integration

Express Echo utilizes [TinyMCE](https://www.tiny.cloud/) as a real-time text editor. To integrate TinyMCE:

1. Create an account on TinyMCE and obtain an API key.

2. Add your domain to the approved domains list in your TinyMCE account settings.

3. Update the `VITE_TINYMCE_API_KEY` variable in your `.env` file with your API key.

## Usage

- Register an account on Express Echo using your email address and password.
- Log in to your account to access the dashboard.
- View other users' blog posts and create your own posts.
- Edit or delete your posts as needed.
- Add a title, image, and content to your blog posts.
- The slug for each post is automatically generated from the title.

## Screenshots

### Home Page

<p align="center">
  <img src="https://drive.usercontent.google.com/download?id=1A12VuqyWUEimVhuejIoXm8YVjozv6iZo&authuser=0" height="400" width="500" alt="Home Page"/>
  <img src="https://drive.usercontent.google.com/download?id=1kue3troL_kwXh5xHWrccIHn9KQhUkiWk&authuser=0" height="400" width="200" alt="Home Page (Mobile Version)"/>
</p>


### Explore Your Posts Page

<p align="center">
  <img src="https://drive.usercontent.google.com/download?id=1XhzdsrYx3dxpBns41r-zrBHUAmmap-lV&authuser=0" height="400" width="500" alt="Explore Yours Posts Page"/>
  <img src="https://drive.usercontent.google.com/download?id=1kHv7szYXk-ro8yljJJ9eX2DNNv14g8il&authuser=0" height="400" width="200" alt="Explore Yours Posts Page (Mobile Version)"/>
</p>


### Post Page

<p align="center">
  <img src="https://drive.usercontent.google.com/download?id=1JOCWgkATiKTNGTMLkZrkZeEyW1Eu1MkB&authuser=0" height="400" width="500" alt="Post Page"/>
  <img src="https://drive.usercontent.google.com/download?id=1kpzW7vsx50Gk8enj4kiHf7piiSE1st9P&authuser=0" height="400" width="200" alt="Post Page (Mobile Version)"/>
</p>


### Edit Post Page

<p align="center">
  <img src="https://drive.usercontent.google.com/download?id=1OiXlCPC1h9To-S_HH6UTzvJcSdG4a1CX&authuser=0" height="400" width="500" alt="Edit Post Page"/>
  <img src="https://drive.usercontent.google.com/download?id=1kd_HonUGjNAjPHpC40mna2tJj1H7onWj&authuser=0" height="400" width="200" alt="Edit Post Page (Mobile Version)"/>
</p>


### Add Post Page

<p align="center">
  <img src="https://drive.usercontent.google.com/download?id=1nbsjl69bC7vb4PiyL_U8F2bwPeVJq_sy&authuser=0" height="400" width="500" alt="Edit Post Page"/>
  <img src="https://drive.usercontent.google.com/download?id=1kOMM6TdPUduxc7mriearHmv_z47-aXFD&authuser=0" height="400" width="200" alt="Edit Post Page (Mobile Version)"/>
</p>


## Contributing

Contributions to Express Echo are welcome! If you encounter any bugs, have feature requests, or want to contribute code, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or support, please contact [Pulkit Uppal](mailto:pulkituppal90@.com).
