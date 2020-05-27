import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './column'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const App = () => {
  const [data, setData] = useState(initialData)

  const onDragEnd = result => {
    //document.body.style.color = 'inherit'

    const { destination, source, draggableId } = result

    if (!destination)
      return

    if (destination.draggableId === source.droppableId && destination.index === source.index)
      return

    //const column = data.columns[source.droppableId]
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) {
      const newTaksIds = Array.from(start.taskIds)
      newTaksIds.splice(source.index, 1)
      newTaksIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaksIds
      }

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }

      setData(newData)
    }
    
    //Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    
    const newStart = {
      ...start, 
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newData = {
      ...data,
      columns:{
        ...data.columns,
        [newStart.id]:newStart,
        [newFinish.id]:newFinish
      }
    }

    setData(newData)



  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {console.log(data)}
        {data.map(r => 
          <Column key={r.id} />
        )}
        {/*data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })*/}
      </Container>
    </DragDropContext>

  )

}

ReactDOM.render(<App />, document.getElementById('root'));

