**Projet Ecf_Studi Garage Vparrot**

# Présentation du projet #
Dans le cadre de ma formation de dévelopeur web full stack et mobile flutter.
J'ai du créer un site pour un garage automobile qui s'appel V.Parrot.
Le projet à été initialisé par [AdoniJs](https://adonisjs.com/) et la base de données est géré via 
MYSQL/MariaDb


## Technoloigie utilisé ##

* AdonisJs
* TailwindCss
* Mysql/Mariadb

# Installer le Projet #

```
git clone https://github.com/demacedius/Garage_ecf.git
cd Garage_ecf
npm install

```

installer le module d'autentification d'adonijs ainsi que le module de db

```
npm i @adonisjs/lucid
node ace configure @adonisjs/lucid
#puis choisissez les variable d'environnement de mysql#
npm i @adonisjs/auth
```

**__Une fois dans le projet vous devez dabord créer une base de donnée__**

```
mysql -u root -p
``` 
mettez votre mot de passe root de mysql

__ensuite créez votre base de donées__

```
CREATE DATABASE nom_de_la_base de donnée

```

**__Allez dans l'arborescence de votre projet  __**

dans le fichier .env qui vient d'ètre créer copiez les variables
suivantes du fichier .env.example

```
PORT=
HOST=
NODE_ENV=
APP_KEY=
DRIVE_DISK=
SESSION_DRIVER=
CACHE_VIEWS=
```

**__Dernière étape__**

lancez les deux commande suivantes 

```
node ace migration:run
node ace db:seed
```

cette dernière inserrera dans la base de donnée l'utilisateur 
vincent parrot dont les identifiant sont:
email: vparrrot@vparrot.com
mot de passe: vincentP