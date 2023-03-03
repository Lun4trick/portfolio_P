import { Card } from '../types/Card';

const projectCards: Card[] = [
  { 
    title: 'PokerProject',
    type: 'Builded from scratch',
    description: 'I created this from scratch,\n' + 
    'you can play with a poker bot. Its making its own decisions,\n' + 
    'not the strongest opponent, but plays at least\n',
    url: 'https://lun4trick.github.io/poker-project/'
  },
  { 
    title: 'RouterProject',
    type: 'Used React Router',
    description: 'I Used React Router in this task,\n' + 
    'you can check how i use this library,\n',
    url: 'https://lun4trick.github.io/react_people-table-advanced/'
  },
  { 
    title: 'ReduxProject',
    type: 'Used Redux',
    description: 'This one is focusing on Redux.\n' + 
    'it can be a common Todo list for any company.\n' + 
    'The users, and the Todo-s are loaded from a common API.\n',
    url: 'https://lun4trick.github.io/react_redux-list-of-todos/'
  },
  { 
    title: 'ReactHooks',
    type: 'Focusing on Hooks, and API',
    description: 'This is a Todo app, where you can save\n' + 
    'your todos to the API using your e-mail address\n',
    url: 'https://lun4trick.github.io/react_todo-app-with-api/'
  }
]

export default projectCards;