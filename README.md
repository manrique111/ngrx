# README #

Nota de actualización:

Desde Angular v17, por defecto los proyectos trabajan sin módulos (module-less)

Pero para trabajar de forma tradicional:

```
ng new <nombre de la aplicación> --no-standalone
ng new --no-standalone
```


Es todo, sigamos con el curso.


### CREACION DE COMPONENTS
Anteriormente para la recacion de componente se usaba
```
ng g c nombre/componente --spec=false 
```
Pero el --spec=false cambió y ahora sería
```
ng g c nombre/componente --skipTests 
o
ng g c contador/hijo --skip-tests 
```

## INSTALANDO REDUX
https://ngrx.io/guide/store/install
```
npm install @ngrx/store --save
```

## Docker

- Instalar docker en su equipo
- Los script pueden ser usados en Linux o Mac

ejecutar el archivo deploy.sh de la siguiente manera
./deploy.sh build      -->  Genera la imagen de docker y levanta el conteiner
./deploy               -->  Solo levanta el container

> Entrar a la consola de docker para ejecutar el node
> commando:
> docker exec -it front bash
>
> Una vez dentro del contenedor de docker entra a la carpeta deseada ejemplo <"cd 03-todoapp">
> dentro ejecuta el siguiente comando
> ng serve --host 0.0.0.0 --port 80

Con esto abre tu navegador que mas te guste y en la url pon
http://localhost
Esto debera de ver la aplicacion de prueba