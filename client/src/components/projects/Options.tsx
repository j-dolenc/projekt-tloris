import { Fragment } from "react";
import classes from "./Options.module.css";

const Options = () => {
  return (
    <Fragment>
      <div className={classes.options}>
        <h2>Options for {'{CURRENT PROJECT}'}</h2>
        <div>
          <button className={classes.btn}>Add file</button>
          </div>
          <div>
          <button className={classes.btn}>Remove file</button>
        </div>
        <div>
          <button className={classes.btn}>Save Current State</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Options;
