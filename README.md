Firebase Node.js CRUD Project This is a basic Node.js and Firebase
Firestore project that demonstrates CRUD (Create, Read, Update, Delete)
operations on a \"Users\" collection. It uses Express.js for setting up
a RESTful API and Firebase as the backend database. The project provides
various endpoints to create a new user, get all users, get a user by ID,
update a user, and delete users.

Features Create User: Add a new user to the database. Read Users:
Retrieve all users or a specific user by ID. Update User: Modify details
of an existing user. Delete User: Remove a user by ID or delete all
users. Express.js: A lightweight framework to build RESTful services.
Firebase Firestore: A NoSQL cloud database for storing and syncing data
in real time. Prerequisites Node.js installed on your local machine
Firebase account with a Firestore project set up Basic knowledge of
JavaScript and REST APIs Getting Started Follow these instructions to
set up the project and run it on your local machine.

1\. Clone the Repository bash Copy code git clone
https://github.com/14babarali/firebase-nodejs-crud.git cd
firebase-nodejs-crud 2. Install Dependencies Make sure you have Node.js
installed, then install the project dependencies:

bash Copy code npm install 3. Configure Firebase Create a Firebase
project and Firestore database in the Firebase Console.

Replace the Firebase configuration in config.js with your own Firebase
project\'s configuration:

javascript Copy code // config.js const firebase =
require(\"firebase\"); const firebaseConfig = { apiKey:
\"YOUR_API_KEY\", authDomain: \"YOUR_AUTH_DOMAIN\", projectId:
\"YOUR_PROJECT_ID\", storageBucket: \"YOUR_STORAGE_BUCKET\",
messagingSenderId: \"YOUR_MESSAGING_SENDER_ID\", appId: \"YOUR_APP_ID\",
measurementId: \"YOUR_MEASUREMENT_ID\" };

firebase.initializeApp(firebaseConfig); const db = firebase.firestore();
const User = db.collection(\"Users\");

module.exports = User; 4. Running the Server Start the Node.js server:

bash Copy code npm start The server will run on http://localhost:8080.

API Endpoints Here are the available API endpoints for the CRUD
operations:

Create User

POST /addUser Request Body: JSON containing the user data Example: json
Copy code { \"name\": \"John Doe\", \"email\": \"john@example.com\" }
Get All Users

GET /getUsers Returns a list of all users. Get User by ID

GET /getUser/:id Returns the user with the specified ID. Update User

PUT /updateUser/:id Request Body: JSON containing the updated user data
Example: json Copy code { \"name\": \"Jane Doe\", \"email\":
\"jane@example.com\" } Delete User by ID

DELETE /deleteUser/:id Deletes the user with the specified ID. Delete
All Users

DELETE /deleteAllUsers Deletes all users from the database. Project
Structure bash Copy code firebase-nodejs-crud/ ├── config.js \# Firebase
configuration ├── index.js \# Main server file ├── package.json \#
Node.js dependencies and scripts └── README.md \# Project documentation
Dependencies express: Fast, unopinionated, minimalist web framework for
Node.js firebase: Firebase SDK for accessing Firestore cors: Middleware
for enabling CORS (Cross-Origin Resource Sharing) nodemon: Utility for
automatically restarting the server during development License This
project is licensed under the MIT License. See the LICENSE file for
details.

Contributing Contributions are welcome! Feel free to open a pull request
or submit an issue.

Contact If you have any questions or suggestions, please feel free to
contact me at \[your-email@example.com\].
