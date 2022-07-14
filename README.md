<h1 align="center">Fokus</h1>

<p align="center">A one stop shop for film photography and vintage film camera enthusiasts.</p> 
<p> Fokus is a full stack application that provides registered users the ability to sell and buy film cameras as well as engage in reviewing each other's products. </p>


**Live Link**: https://fokus-app.herokuapp.com/
<br>

## Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## Building the App
1. Clone the main repository

   ```bash
   git clone https://fokus-app.herokuapp.com/
   ```

2. Install the dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

### Application Architecture

Fokus is built with Flask (backend), React and Redux (frontend), and PostgresSQL (database).

<br>

### Future Features
As of now, there are a handful of features waiting to be integrated into Fokus, making it a fully immersive, intuitive, and interactive app. Search feature as well as Wishlist are fully underway.  

<br>

### Contact the Developer!
* Uki:  <a href="https://www.linkedin.com/in/ukipavlovic/">Linkedin</a> | <a href="https://github.com/ukiukica/">Github</a> 
