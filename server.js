import net from "node:net"
import dotenv from "dotenv"
dotenv.config()
const serverTCP = net.createServer()

const PORT = process.env.PORT; // 65656

serverTCP.on("connection", ()=>{
    console.log("Client Connected :)");
})

serverTCP.listen (PORT, () =>{
    console.log("server UP");
})
