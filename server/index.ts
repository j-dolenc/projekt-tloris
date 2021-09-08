const express = require("express");
const app = express();
const cors = require("cors");
const pool1 = require("./db");
//middleware
app.use(cors());
app.use(express.json()); //req body

app.post("/files", async (req, res) => {
  //await
  try {
    const newFile = await pool1.query(
      "insert into datoteke(ime, opis, povezava,starts_id,nivo,vidijolahko) values ('prvaDatoteka','gibberish','tam nekje',1,2,'1,2,3') returning *"
    );
    res.json(newFile.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/files",async(req,res) => {
    try {
        const vseDatoteke= await pool1.query("SELECT * from datoteke");
        res.json(vseDatoteke.rows);
    } catch (error) {
        console.error(error.message);
    }
})
app.get("/files/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const izbraneDatoteke= await pool1.query("SELECT * from datoteke where $1=id",[id]);

        res.json(izbraneDatoteke.rows[0]);
        res.json(izbraneDatoteke.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.put("/files/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateFiles = await pool1.query("UPDATE datoteke set opis = $1 where id= $2",[description,id]);
        res.json("datoteke updejtane");
    } catch (error) {
        console.error(error.message);
    }
});
app.delete("/files/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteFile = await pool1.query("DELETE FROM datoteke where id= $1",[id]);
        res.json("File was deleted.");
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(5000, () => {
  console.log("server started on port 5000");
});
