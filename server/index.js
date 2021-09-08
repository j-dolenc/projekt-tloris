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
//middleware
app.use(cors());
app.use(express.json()); //req body
app.post("/files", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newFile, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("insert into datoteke(ime, opis, povezava,starts_id,nivo,vidijolahko) values ('prvaDatoteka','gibberish','tam nekje',1,2,'1,2,3') returning *")];
            case 1:
                newFile = _a.sent();
                res.json(newFile.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/files", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var vseDatoteke, error_2;
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
                error_2 = _a.sent();
                console.error(error_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/files/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, izbraneDatoteke, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pool1.query("SELECT * from datoteke where $1=id", [id])];
            case 1:
                izbraneDatoteke = _a.sent();
                res.json(izbraneDatoteke.rows[0]);
                res.json(izbraneDatoteke.rows);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put("/files/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, description, updateFiles, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                description = req.body.description;
                return [4 /*yield*/, pool1.query("UPDATE datoteke set opis = $1 where id= $2", [description, id])];
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
app["delete"]("/files/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
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
app.post("/users", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newFile, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pool1.query("insert into datoteke(ime, opis, povezava,starts_id,nivo,vidijolahko) values ('prvaDatoteka','gibberish','tam nekje',1,2,'1,2,3') returning *")];
            case 1:
                newFile = _a.sent();
                res.json(newFile.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error(error_6.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/users", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var vseDatoteke, error_7;
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
                error_7 = _a.sent();
                console.error(error_7.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/users/:username", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var username, izbraneDatoteke, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                username = req.params.username;
                return [4 /*yield*/, pool1.query("SELECT * from zaposleni where $1=username", [username])];
            case 1:
                izbraneDatoteke = _a.sent();
                res.json(izbraneDatoteke.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                console.error(error_8.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put("/users/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, description, updateFiles, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                description = req.body.description;
                return [4 /*yield*/, pool1.query("UPDATE datoteke set opis = $1 where id= $2", [description, id])];
            case 1:
                updateFiles = _a.sent();
                res.json("datoteke updejtane");
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.error(error_9.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/users/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
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
app.listen(5000, function () {
    console.log("server started on port 5000");
});
