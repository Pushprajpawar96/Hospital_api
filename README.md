 Coding Ninjas Skill Test Assignment
 


## About The Project
Design the server side for a Hospital-API.
Tech Stack: Node.js &amp; Mongo DB



* ### Required Routes :
  - /doctors/register → with username and password
  - /doctors/login → returns the JWT to be used
  - /patients/register
  - /patients/:id/create_report
  - /patients/:id/all_reports → List all the reports of a patient oldest to latest
  - /reports/:status → List all the reports of all the patients filtered by a specific status

### Built With
Here is the Technology Stack of this Application. which I have used to Built this Application.
* MongoDB
* Express
* NodeJS




  
## Directory Structure and flow of The Code

    Hospital-API
        |------ config
        |         └--- mongoose.js
        |------ controller
        |         └--- doctorController.js
        |         └--- patientController.js
        |         └--- reportController.js
        |------ middleware
        |         └--- authMiddleware.js
        |------ models
        |         └--- doctor.js
        |         └--- patient.js
        |         └--- report.js
        |------ routes
        |         └--- doctor.js
        |         └--- patient.js
        |         └--- report.js
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md










