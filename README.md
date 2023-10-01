# Densyy - Token

1. Instalação
```
pnpm add densyy-token
```

2. Utilização
```
/* ---- Requires ---- */

const helperToken = require('densyy-token')

/* ---- Examples ---- */

const secret = process.env.TOKEN_USUARIO
const data = { idUsuario: '123' }

const token = await helperToken.generateToken(data, secret)
const tokenOk = await helperToken.verifyToken(token, secret)
const dataFromToken = await helperToken.getData(token, secret)
```
