# task-management-api

This is a simple RESTful API for managing tasks. It allows users to create, read, update, and delete (CRUD) tasks

### Features

-  Create new task
-  Get a list of tasks
-  Update task details
-  Delete tasks
-  MongoDB for database

### Installation Guide
* Clone this repository [here](https://github.com/soworona/task-management-api.git).
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage
* Run npm run dev to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/tasks/ | To get all tasks |
| POST | /api/tasks |  To create a new task |
| GET | /api/tasks/{id} | To ge get a task by id |
| PUT | /api/tasks/{id} | To update an existing task |
| DELETE | /api/tasks/{id} | To delete a task |
| PATCH | /api/tasks/{id}/status | To change the status of a existing task |

Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.

