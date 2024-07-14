# Descrição
Aplicado CleanCode em Código de Jogo da Forca


## Prints do Dockerfile e docker-compose

Dockerfile

<img src="https://i.imgur.com/5k9yfKh.png" width="680" height="410">

docker-compose

<img src="https://i.imgur.com/U5sQX4b.png" width="540" height="540">



## Descrição da imagem docker criada

Foi criado uma imagem docker para executar um container que rodará uma API básica como exemplo
No projeto dessa simples API é usado Prisma, Typescript, Express, MySql...

Foi necessário algumas coisas específicas por conta de incompatibilidades da forma que a ORM Prisma funciona
como imagem node e  imagem mysql específicas (o mysql por conta de sha256), ou o "RUN apt-get update -y && apt-get install -y openssl"
no dockerfile por conta de dependências do prisma...


## Forma de configuração e instalação
Na pasta raíz do projeto, executar:
```bash
docker-compose up --build

```
(isso vai construir e iniciar as imagens/containers)

Em seguída, na primeira vez que a imagem e container são inicializados, essa versão específica do mysql (ao menos na máquina testada),
demora bastante para "inicializar" de fato, onde o container está rodando já, porém fica um tempo sem sinal de vida até estar de fato pronto
para comandos como o "prisma migrate dev..."

Então após inicializar tudo de fato, pode ser rodado o migrate pra converter o schema do prisma em tabelas de fato no DB:
```bash
docker exec esdocker-app-1 npx prisma migrate dev
```





