import React from 'react';
import { Dialog, Button } from '@blueprintjs/core';

const CreateNurseryDialog = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Button>Create</Button> <Button>Close</Button>
    </Dialog>
  );
};

export default CreateNurseryDialog;
