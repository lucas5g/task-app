const initialData = [
   {
      id: 'column-1',
      title: 'To do',
      tasks: [
        {id: 'task-1', content: 'Take out the garbage'},
        {id: 'task-2', content: 'Watch my favorite show'},
        {id: 'task-3', content: 'Charge my phone'},
        {id: 'task-4', content: 'Cook dinner'},  
      ],
    },
    {
      id: 'column-2',
      title: 'In Progress',
      tasks: [
          {id: 'task-5', content: 'Try change column'},  
      ],
    },
    {
      id: 'column-3',
      title: 'Done',
      tasks: [],
    }

  ]

  /*
  tasks:{
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Watch my favorite show'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
    'task-4': {id: 'task-4', content: 'Cook dinner'},    
  },
  columns:{
    'column-1':{
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2':{
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3':{
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    }
  },

  columnOrder:['column-1', 'column-2', 'column-3']
  /** */


export default initialData