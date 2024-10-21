import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import classes from './Dialog.module.css';

export function Dialog() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="File-Menu" centered>
        {"File Menu Content"}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}