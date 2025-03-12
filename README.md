Maxchat Cypress Testing
This repository contains Cypress test cases for the Maxchat application. The tests cover functionality, UI, and performance aspects to ensure a smooth user experience.

1.	Installation 
Follow these steps to set up the project on your local machine:
i.	Clone the repository:   
git clone https://github.com/Samra-Hameed/Maxchat-.git
ii.	Navigate to the project directory: 
cd cypresstesting
iii.	Install dependencies: 
npm install


2.	Run Tests
To run Cypress tests, use the following command: 
npx cypress open
or run in headless mode: 
npx cypress run


4.	Folder Structure
📂 cypresstesting
 ┣ 📂 cypress
 ┃ ┣ 📂 integration    (Test cases)
 ┃ ┣ 📂 fixtures      (Test data)
 ┃ ┣ 📂 plugins       (Custom Cypress plugins)
 ┃ ┣ 📂 support       (Reusable commands & utilities)
 ┣ 📜 README.md       (Project documentation)
 ┣ 📜 package.json     (Dependencies and scripts)
 ┣ 📜 cypress.json     (Cypress configuration)


5.	Contributing Guidelines
Please follow these steps:
i.	Fork the repository
ii.	Create a new branch: “git checkout -b feature-branch-name”
iii.	Commit your changes: “git commit -m ‘Your message’”
iv.	Push to your branch: “git push origin feature-branch-name”
v.	Create a Pull Request
