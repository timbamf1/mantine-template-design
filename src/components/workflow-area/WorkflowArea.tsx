import { Dialog } from "../dialog/Dialog";
import { ExpandBox } from "../expand-box/ExpandBox";
import { RunSimsButton } from "../run-sims-button/RunSimsButton";
import { RunSimsButton2 } from "../run-sims-button2/RunSimsButton2";
import classes from './WorkflowArea.module.css';

export function WorkflowArea() {
  return (
    <div className={classes.workflowArea}>
      <ExpandBox />
      <RunSimsButton />
      <RunSimsButton2 />
    </div>
  );
}