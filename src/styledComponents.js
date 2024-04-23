import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #131213;
  display: flex;
  gap: 15px;
  padding: 10px;
  min-height: 100vh;
`
export const InputContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  background-color: #1a171d;
`
export const Heading = styled.h1`
  color: #f3aa4e;
  margin: 20px 0;
`

export const InputForm = styled.form`
  width: 70%;
`

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
export const InputLabel = styled.label`
  color: #f1f5f9;
  margin-bottom: 5px;
`
export const InputTask = styled.input`
  width: 100%;
  padding: 10px;
  :focus {
    outline: none;
  }
`
export const InputTags = styled.select`
  width: 100%;
  padding: 10px;
  :focus {
    outline: none;
  }
`
export const InputOption = styled.option`
  color: #323f4b;
`

export const AddButton = styled.button`
  outline: none;
  border: none;
  background-color: #f3aa4e;
  color: #f1f5f9;
  padding: 10px 20px;
  border-radius: 5px;
`
export const TaskContainer = styled.div``

export const HeadingTag = styled.h1`
  color: #f8f8f8;
  margin: 20px 0;
`

export const TagsContainer = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;
`

export const TagItem = styled.li`
  list-style-type: none;
`

export const TagButton = styled.button`
  color: #ffffff;
  background-color: ${props => (props.active ? '#f3aa4e' : 'transparent')};
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #ffffff;
  cursor: pointer;
`

export const TaskList = styled.ul`
  padding: 0;
`
export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a171d;
  margin-bottom: 20px;
  padding: 0 10px;
`
export const TaskName = styled.p`
  color: #ffffff;
`

export const TaskTag = styled.p`
  color: #323f4b;
  background-color: #f3aa4e;
  border-radius: 30px;
  padding: 10px 25px;
  text-transform: capitalize;
`
export const NoTaskHeading = styled.p`
  color: #ffffff;
  margin-left: 25%;
  margin-top: 20%;
  font-size: 30px;
`
