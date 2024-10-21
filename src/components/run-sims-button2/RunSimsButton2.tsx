import { Button } from '@mantine/core';
import classes from './RunSimsButton2.module.css'
import { useDisclosure } from '@mantine/hooks';

export function RunSimsButton2() {
  return (
    <button className={classes.pushable}>
      <span className={classes.front}>Run Simulations</span>
    </button>
  );
}

// export function RunSimsButton2() {
//   const [loading, handlers] = useDisclosure();

//   return (
//     <Button className={classes.pushable} loading={loading}>
//       <span className={classes.front}>Run Sims</span>
//     </Button>
//   );
// }