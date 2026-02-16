# Gestor Solar - Sistema de Gestão de Instalações Solares

## 📋 Descrição do Projeto

O **Gestor Solar é um sistema web completo** desenvolvido para gerir instalações de painéis solares e monitorizar a produção e consumo de energia solar. Este projeto permite a gestão eficiente de instalações solares, desde o registo inicial até à monitorização contínua do desempenho energético.

## 🎯 Tema

O tema central deste projeto é a **gestão e monitorização de instalações de painéis solares**, incluindo:

- Registo e validação de novas instalações
- Monitorização de produção e consumo de energia
- Gestão de créditos energéticos
- Visualização de dados históricos através de gráficos
- Comunicação com clientes via email

## Para que serve?

Este sistema serve para:

1. **Clientes**: Registar as suas instalações de painéis solares e acompanhar o seu desempenho
2. **Técnicos**: Pesquisar e validar instalações existentes
3. **Gestores de Operações**: Monitorizar todos os clientes, visualizar dados de produção/consumo, enviar resumos mensais por email e analisar históricos através de gráficos

## 🛠️ Tecnologias e Linguagens Utilizadas

### Frontend
- **HTML5**: Estrutura das páginas web
- **CSS3**: Estilização e design responsivo
- **JavaScript (Vanilla)**: Lógica do lado do cliente e interatividade
- **Chart.js**: Biblioteca para criação de gráficos e visualizações

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express.js**: Framework web para criação da API REST
- **MongoDB**: Base de dados NoSQL para armazenamento de dados
- **Mongoose**: ODM (Object Data Modeling) para MongoDB

### Segurança e Autenticação
- **JWT (JSON Web Tokens)**: Sistema de autenticação e autorização
- **bcryptjs**: Encriptação de passwords

### Funcionalidades Adicionais
- **Multer**: Upload e gestão de ficheiros (certificados de instalação)
- **Nodemailer**: Envio de emails automáticos com resumos mensais
- **Axios**: Cliente HTTP para requisições (usado no mock de leituras)
- **CORS**: Configuração de políticas de acesso entre origens


## 🔐 Sistema de Autenticação

O sistema implementa um sistema de autenticação baseado em roles:

- **Cliente**: Acesso à página de registo de instalações
- **Técnico**: Acesso à página de pesquisa de instalações
- **Gestor Operações**: Acesso à página de monitorização completa


## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Iniciar o servidor MongoDB

3. Iniciar o servidor backend:
```bash
node backend/server.js
```


