(() => {
  // Express Base
  interface Request {
    body: any
  }

  // Express JSON
  interface Request {
    json: any
  }

  // Not supported by type aliases
  function handleRequest(request: Request) {
    request.body
    request.json
  }
})()