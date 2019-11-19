**PASSO A PASSO NODEJS**
> Criar pasta (mkdir minicurso_node)
> npm init -y
> npm install --save express
> Explicar package-lock.json (cache) e node_modules (codigo das nossas dependencias (recursivas))
> Criar pasta src
> Criar server.js
> Criar Hello World com `res.send('Hello World')`
> Explicar req e res
> Executar com `node src/server.js`
> Mostrar funcionando
> Enviar um JSON no lugar do send
> Explicar que o node não pega as alterações sem reiniciar
> Instalar o nodemon (npm install nodemon -D)
> Explicar o -D
> Criar Script `"dev": "nodemon src/server.js"`
> Rodar com **npm run dev**
> Explicar express (não reinventar a roda)
> Relembrar os métodos HTTP já explicados anteriormente
> Mostrar que o POST nao funciona no navegador
> Inserir o POSTMAN ou o INSOMNIA
> Testar um POST pelo POSTMAN para /usuarios
> Explicar como passar dados do front para o back
> Query params (ex: ?idade=1) **utilizado pelo GET**
> Ex.: `req.query.idade`
> Route params (ex: /usuarios/1) **utilizado pelo DELETE e PUT**
> Ex.: `req.params.id`
> Body params (ex: /usuarios/) **utilizado pelo POST e PUT**
> Ex.: `req.body`
> Explicar que o express nao entende requisições json
> Usar `app.use(express.json())`

> Criar arquivo routes.js e jogar as rotas lá pra dentro.
> Importar o routes dentro do server.js `const routes = require('./routes')`

> Falar do banco de dados e criá-lo
> Criar um cluster
> Criar um usuário (Database Access)
> Criar network access para qualquer IP

> Instalar dependência mongoose `npm install --save mongoose`
> Explicar o `mongoose`
> Importar o mongoose `const mongoose = require('mongoose');`
> Conectar banco de dados
> `mongoose.connect('mongodb+srv://mini_curso_node:mini_curso_node@minicurso-node-82acq.mongodb.net/test?retryWrites=true&w=majority')`
> Citar os warnings e consertar passando um objeto após a url
> Objeto: `{useNewUrlParser: true, useUnifiedTopology: true}`
> Testar se pode utilizar a porta 27017 `http://portquiz.net:27017/`

> Explicar o MVC
> Criar pasta `models` e `controllers`

> Criar `Usuario.js` dentro da pasta models
> Criar Schema para Usuario

> Explicar sobre o que é um Controller (recebe requisição, trata e dá uma resposta)
> Criar `UsuarioController.js`
> Explicar sobre o padrão `index, show, store, update e destroy`

> Criar rota `store` e questionar sobre o `req.body`
> Criar inicialmente sem regra de negócio
> Explicar sobre o `async e await`
> Chamar o Controller dentro do routes.js
> criar a rota (questionar sobre qual método utilizar) `POST /usuarios` chamando o `UsuarioController.store`
> Testar
> Mudar para não deixar salvar usuário com mesmo email

> Criar rota `index` e adicionar no Controller

> Criar rota `show` e questionar o pq do req.params

> Criar rota `indexByIdade` e questionar sobre o req.query

> Criar rota `destroy` usando req.params

> Criar rota `update` e utilizar a opção `new: true`
> Consertar warning no server.js com `useFindAndModify: false`