import net from "node:net"
const serverTCP = net.createServer()

serverTCP.on("connection", ()=>{
    console.log("Client Connected :)");
})

serverTCP.listen (1234, () =>{
    console.log("server UP");
})