/**
 * 删除弹窗
 */
import { Modal } from 'antd';
import { AssetDeep, removeAsset } from '@tuya/connector/dist/lib/apis';
import styles from './index.less';

export const showDelAssetConfirmModal = (t: any, onOk: () => void) => {
  Modal.confirm({
    icon: null,
    title: t('removeAsset.title'),
    content: <span className={styles['modal-content']}>{ t('removeAsset.content')}</span>,
    okText: t('removeAsset.ok'),
    cancelText: t('removeAsset.cancel'),
    onOk,
  });
};

export const showDelAssetCheckFail = (t: any) => {
  Modal.info({
    title: t('removeAsset.hint'),
    content: (
      <span className={styles['modal-content']}>
        {t('removeAsset.errorContent')}
      </span>
    ),
    okText: t('removeAsset.ok2'),
  });
};

const hasDevice = (asset: AssetDeep) => {
  const currentDeviceCount = asset.child_device_count;
  if (currentDeviceCount > 0) {
    return true;
  }
  if (asset.subAssets?.length) {
    const results = asset.subAssets.filter((item) => {
      return hasDevice(item);
    });
    if (results.length) {
      return true;
    }
  }
  return false;
}

/**
 * 删除资产流程
 */
export const delAssetFlow = (asset: AssetDeep, t: any) => {
  return new Promise((resolve) => {
    if (hasDevice(asset)) {
      showDelAssetCheckFail(t);
      resolve(false);
      return;
    }
    showDelAssetConfirmModal(t, () => {
      return removeAsset(asset.asset_id).then(() => {
        resolve(true);
      });
    });
  });
};

export default delAssetFlow;
