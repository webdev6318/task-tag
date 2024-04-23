import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  InputContainer,
  Heading,
  InputForm,
  InputItem,
  InputLabel,
  InputTask,
  InputTags,
  InputOption,
  AddButton,
  TaskContainer,
  HeadingTag,
  TagsContainer,
  TagItem,
  TaskList,
  TaskItem,
  TaskName,
  TaskTag,
  NoTaskHeading,
  TagButton,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTab: '',
    inputText: '',
    inputTag: tagsList[0].optionId,
    taskList: [],
  }

  onChangeInput = e => {
    this.setState({inputText: e.target.value})
  }

  onChangeTag = e => {
    this.setState({inputTag: e.target.value})
  }

  onAddTask = e => {
    e.preventDefault()
    const {inputTag, inputText} = this.state
    const taskObj = {id: uuidv4(), name: inputText, tag: inputTag}
    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskObj],
      inputText: '',
      inputTag: tagsList[0].optionId,
    }))
  }

  onClickTab = id => {
    this.setState(prevState => {
      if (prevState.activeTab !== '') {
        if (prevState.activeTab === id) {
          return {activeTab: ''}
        }
        return {activeTab: id}
      }
      return {activeTab: id}
    })
  }

  render() {
    const {taskList, inputText, inputTag, activeTab} = this.state
    const filteredList = taskList.filter(
      item => item.tag.toLowerCase() === activeTab.toLowerCase(),
    )
    const renderList = activeTab === '' ? taskList : filteredList
    return (
      <BgContainer>
        <InputContainer>
          <Heading>Create a Task</Heading>
          <InputForm onSubmit={this.onAddTask}>
            <InputItem>
              <InputLabel htmlFor="task">Task</InputLabel>
              <InputTask
                id="task"
                placeholder="Enter the task here"
                onChange={this.onChangeInput}
                value={inputText}
              />
            </InputItem>
            <InputItem>
              <InputLabel htmlFor="tags">Tags</InputLabel>
              <InputTags id="tags" onChange={this.onChangeTag} value={inputTag}>
                {tagsList.map(tag => (
                  <InputOption value={tag.optionId} key={tag.optionId}>
                    {tag.displayText}
                  </InputOption>
                ))}
              </InputTags>
            </InputItem>
            <AddButton type="submit">Add Task</AddButton>
          </InputForm>
        </InputContainer>
        <TaskContainer>
          <HeadingTag>Tags</HeadingTag>
          <TagsContainer>
            {tagsList.map(tag => (
              <TagItem key={tag.optionId}>
                <TagButton
                  onClick={() => this.onClickTab(tag.optionId)}
                  active={tag.optionId === activeTab}
                >
                  {tag.displayText}
                </TagButton>
              </TagItem>
            ))}
          </TagsContainer>
          <HeadingTag>Tasks</HeadingTag>
          {taskList.length === 0 ? (
            <NoTaskHeading>No Tasks Added Yet</NoTaskHeading>
          ) : (
            <TaskList>
              {renderList.map(item => (
                <TaskItem key={item.id}>
                  <TaskName>{item.name}</TaskName>
                  <TaskTag>{item.tag.toLowerCase()}</TaskTag>
                </TaskItem>
              ))}
            </TaskList>
          )}
        </TaskContainer>
      </BgContainer>
    )
  }
}

export default App
