// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import { HeaderMenu } from './components/header/HeaderMenu';
import { SimTable } from './components/sim-table/SimTable';
import { Footer } from './components/footer/Footer';
import { WorkflowArea } from './components/workflow-area/WorkflowArea';

const customTheme = createTheme( {
  colors: {
    // Define a new color scheme (e.g., "myCustomColor")
    defaultAmGreen: [
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
      "#006F62",
    ],
  },
});

export default function App() {

  return (
    <MantineProvider theme={customTheme}>
      <HeaderMenu />
      <WorkflowArea />
      <SimTable />
      <Footer />
    </MantineProvider>
    );
}
