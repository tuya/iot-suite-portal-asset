/**
 * 添加资产
 */
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { apiService } from '@tuya/connector';

import ModalForm from '@/components/BModalForm';
import YAssetCascader from '@/components/YAssetCascader';
import { useTranslation } from 'react-i18next';

const { addAsset } = apiService;

const { Item } = Form;

interface IProps {
  onConfirm: () => void;
}

const AddAssetModal = ({ onConfirm = () => {} }: IProps) => {
  const { t } = useTranslation();
  // addAssetModal state
  const [showAddAssetModal, setShowAddAssetModal] = useState<boolean>(false);

  const configModal = (status = false) => {
    setShowAddAssetModal(status);
  };

  return (
    <>
      <Button
        onClick={() => {
          configModal(true);
        }}
        type="primary"
        icon={<PlusOutlined />}
      >
        {t('addAsset.btn')}
      </Button>
      <ModalForm
        title={t('addAsset.title')}
        modalStatus={showAddAssetModal}
        onConfirm={(values) => {
          const { deviceName, fatherAssetId } = values;
          const id = Array.isArray(fatherAssetId)
            ? fatherAssetId[fatherAssetId.length - 1]
            : '';

          return addAsset(deviceName, id)
            .then(() => {
              configModal();
              onConfirm();
              return true;
            })
            .catch((err) => {
              console.error(err);
              return true;
            });
        }}
        onCancel={() => {
          configModal();
        }}
      >
        <Item
          label={t('addAsset.parentLabel')}
          extra={t('addAsset.extra')}
          name="fatherAssetId"
        >
          <YAssetCascader
            title=""
            maxDeepth={4}
            autoSelectFirst={false}
            autoHoldAssetId={false}
          />
        </Item>
        <Item
          label={t('addAsset.name')}
          name="deviceName"
          rules={[
            { required: true, message: t('addAsset.error.required') },
            {
              max: 20,
              message: t('addAsset.error.max'),
            },
          ]}
        >
          <Input />
        </Item>
      </ModalForm>
    </>
  );
};

export default AddAssetModal;
