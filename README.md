## 1.Init
```
npm install
```

## 2.Globally install prisma
```
yarn global add prisma
```

## 3.Start Database-to-GraphQL Server Docker
```
cd server
docker-compose up -d 
```

## 4.部署 prisma
```
prisma deploy
```

## 5.產生 prisma-client
```
prisma generate
```

## 6.start graphQL Server
```
cd..
npm start
```

## 7. Browse in localhost:4000
```
http://localhost:4000/
```

