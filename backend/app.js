import fs from "node:fs/promises";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// CORS settings
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// File path for the JSON file
const filePath = "./data/user-places.json";

app.post("/user-places", async (req, res) => {
  const newUserData = req.body;

  try {
    // Read the current contents of the JSON file
    const fileContent = await fs.readFile("./data/user-places.json", "utf-8");
    const userPlacesData = JSON.parse(fileContent);

    // Add the new user data to the existing data
    userPlacesData.push(newUserData);

    // Write the updated data back to the JSON file
    await fs.writeFile(
      "./data/user-places.json",
      JSON.stringify(userPlacesData, null, 2)
    );

    // Respond with the updated data
    res.status(200).json({
      message: "User data added successfully",
      userPlaces: userPlacesData,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to save data", error: err });
  }
});

// GET request: Retrieve all data from the file
app.get("/user-places", async (req, res) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContent);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve data", error });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
