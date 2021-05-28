/**
 * 资产列表
 */
import { useEffect, useState } from 'react';
import { Table, Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { apiService, AssetDeep } from '@tuya/connector';

import AddAssetModal from '@/components/YAddAssetModal';
import EditAssetModal from '@/components/YEditAssetModal';
import delAssetFlow from '@/components/YDelAssetModal';
import SearchAsset from '@/components/YAssetSearch';

import styles from './index.less';

const { getSubTree } = apiService;

const formatTableData = (data: AssetDeep[]) => {
  const result: any[] = [];
  data.forEach((item) => {
    if (Array.isArray(item.subAssets) && item.subAssets.length) {
      result.push({
        ...item,
        children: formatTableData(item.subAssets),
      });
      return;
    }
    result.push({
      ...item,
    });
  });

  return result;
};

const AssetList = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTableData = (assetId: string = '-1') => {
    setLoading(true);
    getSubTree(assetId)
      .then((res) => {
        setLoading(false);

        let tempList: AssetDeep[] = [];
        if (assetId !== '-1' && res.asset_id) {
          tempList = [res];
        } else {
          tempList = res.subAssets;
        }
        setList(formatTableData(tempList));
        setTotalCount(tempList.length);
      })
      .catch(() => {
        // message.error('获取资产失败!');
        setLoading(false);
        setList([]);
        setTotalCount(0);
      });
  };

  // assetId state
  const [assetId, setAssetId] = useState<string>('-1');

  // editAssetModal state
  const [showEditAssetModal, setShowEditAssetModal] = useState<boolean>(false);
  const [editAssetName, setEditAssetName] = useState<string>('');
  const [editAssetId, setEditAssetId] = useState<string>('');

  const configEditAsset = (
    showEditAssetModal = false,
    assetName = '',
    assetId = '',
  ) => {
    setShowEditAssetModal(showEditAssetModal);
    setEditAssetName(assetName);
    setEditAssetId(assetId);
  };

  // fresh table list state
  const [tableFresh, setTableFresh] = useState(0);

  const freshTable = () => {
    setTableFresh((state) => {
      return state + 1;
    });
  };

  useEffect(() => {
    fetchTableData(assetId);
  }, [tableFresh, assetId]);

  const columns: Array<any> = [
    {
      title: t('table.column.name'),
      dataIndex: 'asset_name',
      width: '20%',
      className: styles.tableCell,
    },
    {
      key: 'asset_id',
      title: t('table.column.id'),
      dataIndex: 'asset_id',
      className: styles.tableCell,
    },
    {
      title: t('table.column.childrenAssetCount'),
      dataIndex: 'child_asset_count',
      className: styles.tableCell,
    },
    {
      title: t('table.column.childrenDeviceCount'),
      dataIndex: 'child_device_count',
      className: styles.tableCell,
    },
    {
      title: t('table.column.opt'),
      dataIndex: 'opt',
      width: '20%',
      align: 'center',
      render: (text: any, record: any) => {
        return (
          <Space>
            <span
              onClick={() => {
                configEditAsset(true, record.asset_name, record.asset_id);
              }}
              className={styles.textBlue}
            >
              {t('table.row.edit')}
            </span>
            <span
              onClick={() => {
                return delAssetFlow(
                  record,
                  t,
                ).then((res) => {
                  res && freshTable();
                });
              }}
              className={styles.textRed}
            >
              {t('table.row.remove')}
            </span>
          </Space>
        );
      },
    },
  ];

  return (
    <div className={styles.background}>
      <Row justify="space-between" className={styles.ctrlWrapper}>
        <Col>
          <SearchAsset
            onSelect={(value) => {
              setAssetId(value);
            }}
          />
        </Col>
        <Col>
          <AddAssetModal
            onConfirm={() => {
              freshTable();
            }}
          />
        </Col>
      </Row>
      <Table
        loading={loading}
        columns={columns}
        rowKey={(record: any) => record.asset_id}
        dataSource={list}
        pagination={{
          current: page,
          defaultPageSize: pageSize,
          pageSize,
          total: totalCount,
          onChange: (pageNumber) => {
            setPage(pageNumber);
          },
          onShowSizeChange: (currentSize, nextPageSize) => {
            setPageSize(nextPageSize);
          },
        }}
      />
      <EditAssetModal
        isEdit
        modalStatus={showEditAssetModal}
        name={editAssetName}
        assetId={editAssetId}
        onConfirm={(needFresh) => {
          configEditAsset();
          needFresh && freshTable();
        }}
      />
    </div>
  );
};

export default AssetList;
