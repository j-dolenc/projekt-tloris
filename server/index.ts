const express = require("express");
const app = express();
const cors = require("cors");
const pool1 = require("./db");
const PoolUser = require("pg").Pool;
//middleware
app.use(cors());
app.use(express.json()); //req body

app.get("/users",async(req,res) => {
    try {
        const vseDatoteke= await pool1.query("SELECT * from zaposleni");
        res.json(vseDatoteke.rows);
    } catch (error) {
        console.error(error.message);
    }
})
//password check
// app.get("/users/:password",async(req,res) => {
//     try {
        
//     } catch (error) {
//         console.error(error.message);
//     }
// });


app.get("/users/:username",async(req,res) => {
    
    try {
        // const {password} = req.query;
        const {username} = req.params;
        const pool = new PoolUser({
            user:username,
            password:username,
            host:"192.168.38.164",
            port:5432,
            database:"irgodb"
        })
        const izbraneDatoteke= await pool1.query("SELECT * from zaposleni where $1=username",[username]);

        res.json(izbraneDatoteke.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})
app.post("/users", async (req, res) => {
    //await
    try {
      const newFile = await pool1.query(
        "insert into zaposleni(ime,priimek,email,username,password,oddelek_id) values ('peter','Novak','@si','asdsad',2) returning *"
      );
      res.json(newFile.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  });
  
  app.put("/users/:id",async(req,res) =>{
      try {
        const {id} = req.params;
        let propValue:any;
        let prop:string;
        const body= req.body;
        if(body.hasOwnProperty('ime')){
        prop='ime';
        propValue=body.ime;
        }
        else if(body.hasOwnProperty('priimek')){
            prop='priimek';
            propValue=body.priimek;
        }
        else if(body.hasOwnProperty('email')){
            prop='email';
            propValue=body.email;
        }
        else if(body.hasOwnProperty('username')){
            prop='username';
            propValue=body.username;
        }
        else if(body.hasOwnProperty('oddelek_id')){
            prop='oddelek_id';
            propValue=body.oddelek_id;
        }
        
        const updateFiles = await pool1.query("UPDATE zaposleni set $1 = $2 where id= $3",[prop,propValue,id]);
        res.json("datoteke updejtane");
      } catch (error) {
          console.error(error.message);
      }
  });
  app.delete("/users/:id",async(req,res) =>{
      try {
          const {id} = req.params;
          const deleteFile = await pool1.query("DELETE FROM datoteke where id= $1",[id]);
          res.json("File was deleted.");
      } catch (error) {
          console.error(error.message);
      }
  });
  
  //podatki o vseh projektih
  app.get("/files",async(req,res) => {
      try {
          const vseDatoteke= await pool1.query("SELECT * from datoteke");
          res.json(vseDatoteke.rows);
      } catch (error) {
          console.error(error.message);
      }
  });

  //samo osnovni podatki o vseh projektih
  app.get("/projects",async(req,res) => {
      try {
        const aboutProjekti = await pool1.query("SELECT * from datoteke where nivo=0");
        //res.json("datoteke updejtane");
        res.json(aboutProjekti.rows);
      } catch (error) {

          console.error(error.message);
      }
  });

  
  //podatki o tocno dolocenem projektu
  //TODO: rekurzivno pridobivanje podatkov iz baze --> tree traversal
  app.get("/projects/:id",async(req,res) => {
      try {
        const aboutProjekti = await pool1.query("SELECT * from datoteke where nivo=0");
      } catch (error) {
          console.error(error.message);
      }
  });


  //add project --> dodajanje nivoja 0 in osnovnih podatkov o projektu...
  //to je lahko tudi za dodajanje filovv na splošno, samo nastavit moraš nivo...
  app.post("/projects",async (req,res) => {
      try {
        const {ime} = req.body;
        const {opis} = req.body;
        const {povezava} = req.body;
        const {stars_id}= req.body;
        const {nivo} = req.body;
        const {vidijolahko} = req.body;
        const {urejal} = req.body;
        const {lastnik} = req.body;
        const newProject= await pool1.query(
            "insert into datoteke(ime,opis,povezava,stars_id,nivo,vidijolahko) values($1,$2,$3,$4,$5,$6) returning *",
            [ime,opis,povezava,stars_id,nivo,vidijolahko]);
        res.json(newProject.rows[0]);
        
      } catch (error) {
          console.error(error.message);
      }
  });
  
  //izbrisi datoteko z id id
  
  app.delete("/projects/:id",async (req,res) => {
    try {
        const {id} = req.params;
        const deleteFile = await pool1.query("DELETE FROM datoteke where id= $1",[id]);
        res.json("File was deleted.");
    } catch (error) {
        console.error(error.message);
    }
});

//izbrisi vse datoteke povezane z projektom
//TODO: rekurzivno s esprehodi cez drevo in izbrisi vsak node ki ga ne rabis vec
app.delete("/projects/delete/:id",async (req,res) => {
    try {
        const {id} = req.params;
        //TODO: rekurzivni sprehod... :(
        // const deleteFile = await pool1.query("DELETE FROM datoteke where id= $1",[id]);
        res.json("File was deleted.");
    } catch (error) {
        console.error(error.message);
    }
});

app.put("/projects/:id", async (req,res) =>{
    try {
        const {id} = req.params;
        let props: { prop: string, value:any }[];
        
        const body= req.body;
        if(body.hasOwnProperty('ime')){

            
            props.push({prop:'ime',value:body.ime});
        }
        if(body.hasOwnProperty('opis')){
            props.push({prop:'opis',value:body.opis});
            // prop='opis';
            // propValue=body.priimek;
        }
        if(body.hasOwnProperty('povezava')){
            props.push({prop:'povezava',value:body.povezava});
            // prop='stars_id';
            // propValue=body.email;
        }
        if(body.hasOwnProperty('stars_id')){
            props.push({prop:'stars_id',value:body.stars_id});
            // prop='stars_id';
            // propValue=body.username;
        }
        if(body.hasOwnProperty('spremenjen')){
            props.push({prop:'spremenjen',value:body.spremenjen});
            // prop='spremenjen';
            // propValue=body.oddelek_id;
        }
        if(body.hasOwnProperty('urejal')){
            props.push({prop:'urejal',value:body.urejal});
            // prop='spremenjen';
            // propValue=body.oddelek_id;
        }
        if(body.hasOwnProperty('vidijolahko')){
            props.push({prop:'vidijolahko',value:body.vidijolahko});
            // prop='spremenjen';
            // propValue=body.oddelek_id;
        }
        for(let i= 0;  i <props.length;i++){
            const updateFiles = await pool1.query("UPDATE datoteke set $1 = $2 where id= $3",[props[i].prop,props[i].value,id]);
            res.json("datoteka z id:$1 updejtana",[id]);
        }
        
      } catch (error) {
          console.error(error.message);
      }
});


// app.post("/files", async (req, res) => {
    //   //await
    //   try {
        //     const newFile = await pool1.query(
//       "insert into datoteke(ime, opis, povezava,starts_id,nivo,vidijolahko) values ('prvaDatoteka','gibberish','tam nekje',1,2,'1,2,3') returning *"
//     );
//     res.json(newFile.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// });
// app.get("/files/:id",async(req,res) => {
//     try {
//         const {id} = req.params;
//         const izbraneDatoteke= await pool1.query("SELECT * from datoteke where $1=id",[id]);

//         res.json(izbraneDatoteke.rows[0]);
//         res.json(izbraneDatoteke.rows);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// app.put("/files/:id",async(req,res) =>{
//     try {
//         const {id} = req.params;
//         const {description} = req.body;
//         const updateFiles = await pool1.query("UPDATE datoteke set opis = $1 where id= $2",[description,id]);
//         res.json("datoteke updejtane");
//     } catch (error) {
//         console.error(error.message);
//     }
// });
// app.delete("/files/:id",async(req,res) =>{
//     try {
//         const {id} = req.params;
//         const deleteFile = await pool1.query("DELETE FROM datoteke where id= $1",[id]);
//         res.json("File was deleted.");
//     } catch (error) {
//         console.error(error.message);
//     }
// });


app.listen(5000, () => {
  console.log("server started on port 5000");
});
