const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const upload = require("./config/multerConfig");
const app = express();
const port = 8082;
app.use(express.json());

app.use(
    express.urlencoded({
      extended: true
    })
  );
  

app.use(cors());
app.use("/auth",authRoutes);
app.use("/product",[upload.array("images")], productRoutes);

const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        const interfaceInfo = interfaces[interfaceName];
        for (const info of interfaceInfo) {
            if (info.family === 'IPv4' && !info.internal) {
                return info.address;
            }
        }
    }
    return null;
};

app.listen(port, async () => {
    try {
        const mongoDBURL ='mongodb+srv://maharjansamyak:Smk01531@cluster0.wpltpkf.mongodb.net/Cluster0?retryWrites=true&w=majority';
        await mongoose.connect(mongoDBURL);
        const localIP = getLocalIP();
        console.log("\n\nServer started on port\n\n\tlocal:",`http://localhost:${port}`);
        if (localIP) {
            console.log("\texternal:",`http://${localIP}:${port}`);
        } else {
            console.log("Local IP not available.");
        }
    } catch (err) {
        console.log(err);
    }
});
