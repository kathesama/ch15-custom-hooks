import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  const { children } = props;
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
