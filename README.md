# Starwar Demo

[This project] (https://starwars1-nxcgqyorha-oa.a.run.app/) was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Overview
The Angular Starship Management System with Image Upload is an enhanced version of the original application, offering additional features such as image upload functionality, card-based display of starships, and Firebase integration for storing images. It provides a comprehensive solution for managing and viewing starships from the Star Wars universe, along with user authentication for personalized experiences.

## Features
Image Upload: Users can upload images for each starship, which are stored in Firebase Storage. The uploaded images are associated with their respective starships and displayed in the application.

Card-Based Display: Starships are displayed in a visually appealing card format, showcasing key information such as name, model, crew size, and an image thumbnail.

CRUD Operations: Users can perform CRUD (Create, Read, Update, Delete) operations on starships, including adding new starships, updating existing starships, and deleting starships.

User Authentication: The application supports user authentication using Firebase Authentication, allowing users to register, login, and logout for personalized experiences and data management.

Search and Filter: Starships can be searched and filtered based on various criteria, providing users with easy access to specific starships of interest.

Responsive Design: The application is built with a responsive design, ensuring compatibility with various devices and screen sizes.

## Components
Starships Component: Displays starships in a card-based layout and provides options for searching, filtering, and managing starships.

Starship Component: Displays detailed information about a specific starship, including attributes like name, model, crew size, and an image thumbnail.

User Authentication Component: Provides user authentication functionalities such as registration, login, and logout using Firebase Authentication.

## Services
Starwar Service: Handles CRUD operations for starships, including fetching data from Firebase Realtime Database, uploading images to Firebase Storage, and managing starship details.

Auth Service: Handles user authentication functionalities such as registration, login, logout, and session management using Firebase Authentication.

Image Upload Service: Handles image upload operations, including selecting images from the user's device, uploading images to Firebase Storage, and associating images with starships.

## Dependencies
In addition to the dependencies mentioned in the previous version of the application, the enhanced version includes:

Firebase SDK: Used for integrating Firebase services such as Authentication, Realtime Database, and Storage.
Angular Material: Used for UI components such as cards, buttons, and forms to enhance the user experience.
Getting Started
Clone the repository to your local machine.
Install dependencies using npm install.
Set up Firebase project and configure Firebase services (Authentication, Realtime Database, and Storage).
Update Firebase configuration in the Angular application.
Run the application using ng serve.
Access the application in your web browser at http://localhost:4200.


## Contributing
Contributions are welcome! If you would like to contribute to the project, feel free to submit a pull request or open an issue with any suggestions or improvements.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
