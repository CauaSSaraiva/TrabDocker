"# ES2Docker"

# Trabalho de Docker ES2
 
## 🔐 Pré requisitos

<a href="https://www.docker.com/">Docker</a> &nbsp;

## Instalação do Projeto

1°:
```bash
docker-compose down
```
2°:
(**OBS**: tem que esperar o mysql inicializar real, ele fica uns minutos sem "sinal de vida" na 1° vez, mas não iniciou de verdade ainda)

(**Em outro terminal ou enfim, é pra executar o migrate dentro do container**)
```bash
docker exec esdocker-app-1 npx prisma migrate dev
```


## 🤝 Contribuídores

<a href="https://github.com/CauaSSaraiva"><img src="https://github.com/CauaSSaraiva.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/leonardobonato"><img src="https://github.com/leonardobonato.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/GeancarloBastos"><img src="https://github.com/GeancarloBastos.png" width="45" height="45"></a> &nbsp;
