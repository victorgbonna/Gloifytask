# Gloifytask

## About The Project
This was a NextJs task project I did and It is just to test my knowledge in JavaScript as the firm asks for. The CSS was styled a little because I had no time to work on it to my fufillment.
#### N/B: The post api routes was not working at all. I do not know if the fault was with me but I was snubbed when I complained via internshala chat, so I had to comment them out in the place there was supposed to be, if it is working. 
#### The functionalities were handled with javascript but no database, so it resets on every refresh.

#### Frameworks, tools and libraries used 

- React(NextJs)
- axios
- Installed dnd but was not used

### Getting started 
#### To get a local copy up and running follow these simple example steps
#### Installation

- Clone the repo
- npm install

### Components
###### This would entail necessary files and it's uses 
- index.js -the main index file.
- taskComp-contains where everything that has to with the task and its functions.
- task -displaying each task in the tasks list variable.
- scroll-this is a wrapper that makes sure the task list div does not overflow vertically 
- form- a form component which can be used for both updating and creating forms. I tweaked it in such a way it can happen because of the simplicity and also to impress the people I intend to also.

### Functionalities
###### This would entail necessary functionalities and it's uses
- searchQuery- for filtering tasks based on search results. accepts the search value as an argument.
- postApiCall- for making post calls. accepting the url and formdata as argument.
- deleteTask- for deleting task, accepting the task id.
- createTask- for creating task, acceoting the form data.
- updateTask- for updating task, accepting the id and the form data as argument.
- getServerProps- api get call for the tasks and users. I wanted to a useEffect instead if the post calls were working.
- setShowCreateForm- for showing and hiding the create form
- setShowInUpdate- for showing and hiding any update task form
- getUserIdval- for quick updating of the assigned to id.

### Contact 
- Email- victorgbonna@gmail.com
- Whatsapp - +234 8072897950
- Linkedln - [https://www.linkedin.com/in/victor-ogbonna-5a3113230](https://www.linkedin.com/in/victor-ogbonna-5a3113230)
-  Project Link: https://github.com/victorgbonna/VouchDigitalTask
