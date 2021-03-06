# todo-app Backend


## Table of Contents

  1. [Set up virtual environment](#Setup-Virtual-Environment)
  2. [Install dependencies](#Install-Dependencies)
  3. [Create config file](#Create-Config)
  4. [Create database](#Create-Database)
  5. [Run the application](#Run-Application)


## Getting started

#### 1. Set up virtual environment

  1. Install virtualenv

  2. From within the server directory, run the following command to create a virtual environment called flask

  ```sh
  $ virtualenv flask
  ```

  3. Enter the newly created flask folder and run the following command to enter the virtual environment

  ```sh
  $ source bin/activate
  ```

#### 2. Install dependencies

  From within the server directory, run the following command to install all dependencies:

  ```sh
  $ pip install -r requirements.txt
  ```

#### 3. Using the config.example.py file as a guide, create your own config.py file

#### 4. From within the server directory, run the following command to create your database

  ```sh
  $ python manage.py createdb
  ```

#### 5. Run the application. From within the server directory, run the following command to start the application:

  ```sh
  $ python manage.py runserver
  ```
