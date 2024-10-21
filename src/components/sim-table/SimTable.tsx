import { Table, TableData } from '@mantine/core';
import classes from './SimTable.module.css';
import { v4 as uuidv4 } from 'uuid';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Sim ID', 'Sim Type', 'User', 'Submit time', 'Study ID', 'Status'],
  body: [
    [uuidv4(), 'Sim Type 1', 'User 1', '2021-09-01 12:00:00', 'Study ID 1', 'Success'],
    [uuidv4(), 'Sim Type 2', 'User 2', '2021-09-02 12:00:00', 'Study ID 2', 'Success'],
    [uuidv4(), 'Sim Type 3', 'User 3', '2021-09-03 12:00:00', 'Study ID 3', 'Success'],
    [uuidv4(), 'Sim Type 4', 'User 4', '2021-09-04 12:00:00', 'Study ID 4', 'Success'],
    [uuidv4(), 'Sim Type 5', 'User 5', '2021-09-05 12:00:00', 'Study ID 5', 'Success'],
  ],
};

export function SimTable() {
  return (
  <div className={classes.tableContainer}>
    <Table data={tableData} striped highlightOnHover withTableBorder withColumnBorders />
  </div>
  );
}