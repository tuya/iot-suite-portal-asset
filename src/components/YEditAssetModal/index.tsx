/**
 * 编辑资产
 */
import { Form, Input } from 'antd';
import { apiService } from '@tuya/connector';
import { useTranslation } from 'react-i18next';
import ModalForm from '@/components/BModalForm';

const { editAsset } = apiService;

const { Item } = Form;

interface IProps {
  isEdit: boolean;
  modalStatus: boolean;
  assetId: string;
  name: string;
  onConfirm: (needFresh: boolean) => void;
}

const EditAssetModal = ({
  modalStatus = false,
  onConfirm = () => {},
  assetId,
  name,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <ModalForm
      title={t('editAsset.title')}
      modalStatus={modalStatus}
      onConfirm={(values) => {
        const { assetName } = values;
        return editAsset(assetId, assetName)
          .then(() => {
            onConfirm(true);
            return true;
          })
          .catch((err) => {
            // message.error(___.assets.editAsset.error.fetch);
            console.error(err);
            return true;
          });
      }}
      onCancel={() => {
        onConfirm(false);
      }}
    >
      <Item
        initialValue={name}
        label={t('editAsset.name')}
        name="assetName"
        rules={[
          {
            required: true,
            message: t('editAsset.error.required'),
          },
          {
            max: 20,
            message: t('editAsset.error.max'),
          },
        ]}
      >
        <Input />
      </Item>
    </ModalForm>
  );
};

export default EditAssetModal;
