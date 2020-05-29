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


    const start = data.find(r => r.id === source.droppableId)
    const finish = data.find(r => r.id === destination.droppableId)
    const column = data.find(r => r.id === source.droppableId)
    const taskChange = start.tasks.find(r => r.id === draggableId)

    if (start === finish) {
      let newTaskIds = start.tasks.filter( r => {
        return r.id !== draggableId
      })
      //newTaskIds = 
      newTaskIds.splice(destination.index, 0, taskChange)

      const newData = data.filter( r => {
        if(r.id === column.id){
          r.tasks = newTaskIds
        }
        return r
      })
      console.log('opa')
      setData(newData)

      return;
    }
    
    //Moving from one list to another
    //console.log('column')

    const startTaskIds = start.tasks.filter((r)=> r.id !== draggableId)
    
    const  finishTaskIds = finish.tasks.splice(destination.index, 0, taskChange)

    const newStart = data.filter( r => {
      if(r.id === column.id){
        r.tasks = startTaskIds
      }
      return r
    })
    setData(newStart)
    console.log('task_id', draggableId )
    console.log('column_id', destination.droppableId)
    return
    /*** */

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>

        {data.map(r =>
          <Column key={r.id} id={r.id} title={r.title} tasks={r.tasks} />
        )}

      </Container>
    </DragDropContext>

  )

}

ReactDOM.render(<App />, document.getElementById('root'));

