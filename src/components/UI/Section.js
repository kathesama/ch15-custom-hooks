import classes from './Section.module.css';

const Section = (props) => {
  const { children } = props;
  return <section className={classes.section}>{children}</section>;
};

export default Section;
