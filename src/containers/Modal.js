import React, { useState } from 'react';

import { Modal, Button } from 'antd';

import FormTransaction from './Form';

const ModalView = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

    return (
      <div>
        <Button type="primary" onClick={showModal}>
         Add More Transactions
        </Button>
        <Modal
          title="Add new Transactions"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <FormTransaction />
        </Modal>
      </div>
    );
}

export default ModalView;