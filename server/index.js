var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require("express");
var app = express();
var cors = require("cors");
var pool1 = require("./db");
var PoolUser = require("pg").Pool;
//middleware
app.use(cors());
app.use(express.json()); //req body
app.get("/users", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var vseDatoteke, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("SELECT * from zaposleni")];
            case 1:
                vseDatoteke = _a.sent();
                res.json(vseDatoteke.rows);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//password check
// app.get("/users/:password",async(req,res) => {
//     try {
//     } catch (error) {
//         console.error(error.message);
//     }
// });
app.get("/users/:username", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var username, pool, izbraneDatoteke, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                username = req.params.username;
                pool = new PoolUser({
                    user: username,
                    password: username,
                    host: "192.168.38.164",
                    port: 5432,
                    database: "irgodb"
                });
                return [4 /*yield*/, pool1.query("SELECT * from zaposleni where $1=username", [username])];
            case 1:
                izbraneDatoteke = _a.sent();
                res.json(izbraneDatoteke.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/users", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newFile, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("insert into zaposleni(ime,priimek,email,username,password,oddelek_id) values ('peter','Novak','@si','asdsad',2) returning *")];
            case 1:
                newFile = _a.sent();
                res.json(newFile.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//FIXME:ne dela prav -> poisci drugo resitev...
//zaenkrat se user ne bo spreminjal, tako da tolele lahko stagnira nekaj časa
app.put("/users/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, propValue, prop, body, updateFiles, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                propValue = void 0;
                prop = void 0;
                body = req.body;
                if (body.hasOwnProperty('ime')) {
                    prop = 'ime';
                    propValue = body.ime;
                }
                else if (body.hasOwnProperty('priimek')) {
                    prop = 'priimek';
                    propValue = body.priimek;
                }
                else if (body.hasOwnProperty('email')) {
                    prop = 'email';
                    propValue = body.email;
                }
                else if (body.hasOwnProperty('username')) {
                    prop = 'username';
                    propValue = body.username;
                }
                else if (body.hasOwnProperty('oddelek_id')) {
                    prop = 'oddelek_id';
                    propValue = body.oddelek_id;
                }
                return [4 /*yield*/, pool1.query("UPDATE zaposleni set $1 = $2 where id= $3", [prop, propValue, id])];
            case 1:
                updateFiles = _a.sent();
                res.json("datoteke updejtane");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/users/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, deleteFile, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pool1.query("DELETE FROM datoteke where id= $1", [id])];
            case 1:
                deleteFile = _a.sent();
                res.json("File was deleted.");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//podatki o vseh projektih
app.get("/files", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var vseDatoteke, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("SELECT * from datoteke")];
            case 1:
                vseDatoteke = _a.sent();
                res.json(vseDatoteke.rows);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error(error_6.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//samo osnovni podatki o vseh projektih
app.get("/projects", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var aboutProjekti, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("SELECT * from datoteke where nivo=0")];
            case 1:
                aboutProjekti = _a.sent();
                //res.json("datoteke updejtane");
                res.json(aboutProjekti.rows);
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.error(error_7.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//podatki o tocno dolocenem projektu
// rekurzivno pridobivanje podatkov iz baze --> tree traversal
app.get("/projects/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, aboutProjekti, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pool1.query("WITH recursive dat AS(select * from datoteke where id = $1 union ALL select d.* from dat inner join datoteke d on d.stars_id = dat.id) select * from dat", [id])];
            case 1:
                aboutProjekti = _a.sent();
                res.json(aboutProjekti.rows);
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                console.error(error_8.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//add project --> dodajanje nivoja 0 in osnovnih podatkov o projektu...
//to je lahko tudi za dodajanje filovv na splošno, samo nastavit moraš nivo...
app.post("/projects", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var ime, opis, povezava, stars_id, nivo, vidijolahko, urejal, lastnik, newProject, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ime = req.body.ime;
                opis = req.body.opis;
                povezava = req.body.povezava;
                stars_id = req.body.stars_id;
                nivo = req.body.nivo;
                vidijolahko = req.body.vidijolahko;
                urejal = req.body.urejal;
                lastnik = req.body.lastnik;
                return [4 /*yield*/, pool1.query("insert into datoteke(ime,opis,povezava,stars_id,nivo,vidijolahko) values($1,$2,$3,$4,$5,$6) returning *", [ime, opis, povezava, stars_id, nivo, vidijolahko])];
            case 1:
                newProject = _a.sent();
                res.json(newProject.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.error(error_9.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//izbrisi datoteko z id id
app["delete"]("/file/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, deleteFile, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pool1.query("DELETE FROM datoteke where id= $1", [id])];
            case 1:
                deleteFile = _a.sent();
                res.json("File was deleted.");
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.error(error_10.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//izbrisi vse datoteke povezane z projektom
// rekurzivno s esprehodi cez drevo in izbrisi vsak node ki ga ne rabis vec
app["delete"]("/projects/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, aboutProjekti, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pool1.query("WITH recursive dat AS(select * from datoteke where id = $1 union ALL select d.* from dat inner join datoteke d on d.stars_id = dat.id) delete from datoteke where id in (select id from dat)", [id])];
            case 1:
                aboutProjekti = _a.sent();
                res.json("File was deleted.");
                return [3 /*break*/, 3];
            case 2:
                error_11 = _a.sent();
                console.error(error_11.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//FIXME: narobe
//kako napisat request in query ko neves koliko propertiejv bos spreminjal v vrstici?
app.put("/projects/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, props, body, updateQuery, i, updateFiles, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                props = [];
                body = req.body;
                if (body.hasOwnProperty('ime')) {
                    props.push({ prop: 'ime', value: body.ime });
                }
                if (body.hasOwnProperty('opis')) {
                    props.push({ prop: 'opis', value: body.opis });
                }
                if (body.hasOwnProperty('povezava')) {
                    props.push({ prop: 'povezava', value: body.povezava });
                }
                if (body.hasOwnProperty('stars_id')) {
                    props.push({ prop: 'stars_id', value: body.stars_id });
                }
                if (body.hasOwnProperty('spremenjen')) {
                    props.push({ prop: 'spremenjen', value: body.spremenjen });
                }
                if (body.hasOwnProperty('urejal')) {
                    props.push({ prop: 'urejal', value: body.urejal });
                }
                if (body.hasOwnProperty('vidijolahko')) {
                    props.push({ prop: 'vidijolahko', value: body.vidijolahko });
                }
                updateQuery = "UPDATE datoteke set ";
                for (i = 0; i < props.length; i++) {
                    if (i < props.length - 1) {
                        if (props[i].prop === "stars_id" || props[i].prop === "urejal") {
                            updateQuery = updateQuery.concat(props[i].prop + "=" + props[i].value + ", ");
                        }
                        else {
                            updateQuery = updateQuery.concat(props[i].prop + "='" + props[i].value + "', ");
                        }
                    }
                    else {
                        if (props[i].prop === "stars_id" || props[i].prop === "urejal") {
                            updateQuery = updateQuery.concat(props[i].prop + "=" + props[i].value + " where id =" + id + ";");
                        }
                        else {
                            updateQuery = updateQuery.concat(props[i].prop + "='" + props[i].value + "' where id =" + id + ";");
                        }
                    }
                }
                console.log(updateQuery);
                return [4 /*yield*/, pool1.query(updateQuery)];
            case 1:
                updateFiles = _a.sent();
                res.json("datoteka updejtana");
                return [3 /*break*/, 3];
            case 2:
                error_12 = _a.sent();
                console.error(error_12.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
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
app.listen(5000, function () {
    console.log("server started on port 5000");
});
