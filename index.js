const express = require('express');
const cors = require('cors');
const Users = require('./config'); // Assuming 'Users' is the collection reference from Firebase
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const snapshot = await Users.get();
        const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
        res.send(list);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/create", async (req, res) => {
    try {
        const data = req.body;
        console.log("Data of Users ", data);
        await Users.add(data); // Adding data to Firestore 'Users' collection
        res.status(200).json({ msg: "User added successfully" });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Failed to add user" });
    }
});

app.post("/update", async (req, res) => {
    try {
        const { id, ...dataToUpdate } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing 'id' in request body" });
        }

        await Users.doc(id).update(dataToUpdate);
        
        res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ error: "Failed to update data" });
    }
});

app.post("/delete", async (req, res) => {
    try {
        const {id} = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing 'id' in request body" });
        }

        await Users.doc(id).delete();
        
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        console.error("Error deleting:", error);
        res.status(500).json({ error: "Failed to delete data" });
    }
});





app.listen(4000, () => console.log("Server is running on port 4000"));
