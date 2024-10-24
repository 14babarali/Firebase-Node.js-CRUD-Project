// index.js
const express = require('express');
const cors = require('cors');
const { addDoc,getDocs,updateDoc ,deleteDoc , doc  } = require('firebase/firestore');
const User = require('./config'); // Import the User collection reference

const app = express();

app.use(express.json());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to add a user
app.post('/addUser', async (req, res) => {                                                  
    const data = req.body;
    try {
        // Add a new document to the 'Users' collection
        await addDoc(User, data);
        res.send({ msg: "User added" });
    } catch (error) {
        console.error("Error adding user: ", error);
        res.status(500).send({ msg: "Error adding user" });
    }
});


// Route to get all users
app.get('/getUsers', async (req, res) => {
    try {
        const snapshot = await getDocs(User); // Fetch all documents from the 'Users' collection
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map documents to an array of user data
        res.send(users); // Send the array of users as a response
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send({ msg: "Error getting users" });
    }
});


// Route to update a user
app.put('/updateUser/:id', async (req, res) => {
    const userId = req.params.id; // Get the user ID from the URL parameter
    const newData = req.body;     // Get the new data from the request body

    try {
        // Reference to the specific document in the 'Users' collection
        const userDoc = doc(User, userId);
        // Update the document with the new data
        await updateDoc(userDoc, newData);
        res.send({ msg: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user: ", error);
        res.status(500).send({ msg: "Error updating user" });
    }
});



// Route to delete a user by ID
app.delete('/deleteUser/:id', async (req, res) => {
    const userId = req.params.id; // Get the user ID from the URL parameter

    try {
        // Reference to the specific document in the 'Users' collection
        const userDoc = doc(User, userId);
        // Delete the document
        await deleteDoc(userDoc);
        res.send({ msg: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user: ", error);
        res.status(500).send({ msg: "Error deleting user" });
    }
});

// Route to delete all users
app.delete('/deleteAllUsers', async (req, res) => {
    try {
        const snapshot = await getDocs(User); // Get all documents in the 'Users' collection
        const batch = firebase.firestore().batch(); // Start a batch operation

        snapshot.docs.forEach(doc => {
            batch.delete(doc.ref); // Delete each document in the batch
        });

        await batch.commit(); // Commit the batch deletion
        res.send({ msg: "All users deleted successfully" });
    } catch (error) {
        console.error("Error deleting all users: ", error);
        res.status(500).send({ msg: "Error deleting all users" });
    }
});


// Start the server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
