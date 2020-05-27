import http from 'http';
const PORT = 3333;
function listener(req: http.IncomingMessage, res: http.ServerResponse) {}

const server: http.Server = http.createServer(listener);
server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
