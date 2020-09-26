# API

## Códigos de respostas
### Códigos de respostas
```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity 
50X: Server Error
```
### Códigos de respostas de erro
```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```

## Cliente
**Você envia:**  Dados do cliente

**Obter todos os clientes:**
```json
GET /cliente HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Obter cliente específico:**
```json
GET /cliente/:cpf HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Salvar cliente:**
```json
POST /cliente HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"name": "Teste123",
	"cpf": "40404040405",
	"address": "rua xyz"
}
```

**Atualizar cliente:**
```json
PUT /cliente/:cpf HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"name": "Teste123",
	"cpf": "40404040405",
	"address": "rua xyz"
}
```

**Deletar cliente:**
```json
DELETE /cliente/:cpf HTTP/1.1
Accept: application/json
Content-Type: application/json
```


## Veículo
**Você envia:**  Dados do veículo

**Obter todos os veículos:**
```json
GET /veiculo HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Obter veículo específico:**
```json
GET /veiculo/:licensePlate HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Salvar veículo:**
```json
POST /veiculo HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"license_plate": "1234",
	"model": "modelo123",
	"year": "1998",
	"color": "red",
	"price_daily": 19.99
}
```

**Atualizar veiculo:**
```json
PUT /veiculo/:licensePlate HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"model": "modelo123",
	"year": "1998",
	"color": "red",
	"price_daily": 19.99
}
```

**Deletar veículo:**
```json
DELETE /veiculo/:licensePlate HTTP/1.1
Accept: application/json
Content-Type: application/json
```

## Locação
**Você envia:**  Dados da locação

**Obter todos as locações:**
```json
GET /locacao HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Obter locação específica:**
```json
GET /locacao/:code HTTP/1.1
Accept: application/json
Content-Type: application/json
```

**Salvar locação:**
```json
POST /locacao HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"code": "1233",
	"init_date": "02-03-2020",
	"finish_date": "03-03-2020",
	"total_price": 999.99,
	"rental_status": "alugado"
}
```

**Atualizar locação:**
```json
PUT /locacao/:code HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"init_date": "02-03-2020",
	"finish_date": "03-03-2020",
	"total_price": 999.99,
	"rental_status": "livre"
}
```

**Deletar locação:**
```json
DELETE /locacao/:code HTTP/1.1
Accept: application/json
Content-Type: application/json
```
## CONEXÃO COM O BANCO DE DADOS
*Command Terminal: yarn sequelize db:migrate
````