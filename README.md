# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# my-react-app

my-react-app
Description:
my-react-app is a React-based task management application that allows users to efficiently manage tasks by categorizing them as being in the “Completed" category or in the  “To Do” category. A user can easily navigate from one category to the other through a navigation bar that is found at the top of the page. There a user can find “All Tasks”, “Completed Tasks”, “To Do” and “Add Task”, a feature that lets users add more tasks to their list of tasks if they wish to do so. The application provides a user-friendly interface to add new tasks, view tasks in different categories, and toggle their completion status. Tasks are displayed in a card layout, making it easy to see the title, description, completion status and due date for each task. Each card has a toggle button near the bottom that lets the user either mark the task as “Complete” or “Needs Completing”. This will not only update the written status on the card but it will also move the card to its new designated category page. Newly added tasks will immediately appear in their appropriate category on the "All Tasks" page as a new card.
Features:
	•	Task Categorization: View tasks categorized into "All", "Completed", and “To “Do”.
	•	Task Cards: Each task is displayed in a visually appealing card that shows the task's title, description, status and due date.
	•	Task Addition: Add new tasks with a title, description, and due date, and see them instantly displayed in their appropriate category.
	•	Toggle Completion Status: Easily toggle between completed and needs completing states for each task.

Installation
Prerequisites
Make sure you have the following installed on your system:
	•	Node.js (LTS version recommended)
	•	npm (Node Package Manager)
Steps to Install
	1	Clone this repository:git clone https://github.com/yourusername/my-react-app.git
	2	Navigate to the project directory:
         
         cd my-react-app
 
    3   Install the required dependencies:
             
        npm install
    
    4   Start the development server:

        npm start
        
    5   Open your browser and go to:
	
        http://localhost:3000
	
Usage
      
Once the app is running, you can use the following features:

	•	Task Cards: Tasks are displayed in cards on the main page. Each card includes:
	◦	Task Title: A short, descriptive title for the task.
	◦	Task Details: A description of what the task entails.
	◦	Due Date: When the task is due.
	•	Task Categories: The tasks are divided into categories:
	◦	All Tasks: Displays all tasks regardless of their completion status.
	◦	Completed Tasks: Displays only tasks that have been marked as completed.
	◦	To Do: Displays only tasks that need completion.
	•	Adding a Task: New tasks can be added via the "Add Task" page. After submission, the task appears immediately in its corresponding category as a new card, with the task's title, description, and due date.
	•	Toggle Task Completion: Tasks can be toggled between "Completed" and “Needs Completion” by clicking the button on each card. When toggled, the status of the task will update both in the UI and on the server.

Layout and Card Organization

The app's layout is organized using a grid layout, where tasks are displayed as cards in a responsive grid. Each task card includes:
	•	The task title at the top.
	•	A task description underneath the title.
	•	A due date displayed below the description.
	•	A button that allows users to toggle the task's status (from “Needs Completing" to "Completed" or vice versa).
The cards are visually distinct, with a pink theme, and the app is designed to be responsive, adapting to different screen sizes.

Contributing

Contributions to this project are welcome! To get started, please follow these steps:

            Fork the repository: Click the "Fork" button at the top of the project’s GitHub page.

            Clone your fork: git clone https://github.com/yourusername/my-react-app.git

            Create a new branch for your feature: git checkout -b feature-branch

            Make your changes: Work on the code, making sure to follow the project’s coding style and guidelines.

            Commit your changes: git commit -m 'Add new feature or fix'
            
            Push your changes to your fork: git push origin feature-branch

            Create a pull request: Open a pull request from your feature branch to the main project’s repository.

License
This project is licensed under the MIT License.
