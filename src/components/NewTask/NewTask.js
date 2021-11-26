import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/DataHandler/use-http';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = {
      id: generatedId,
      text: taskText,
    };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    await fetchTasks(
      {
        url: 'https://react-api-k-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
