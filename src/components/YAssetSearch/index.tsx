/**
 * 搜索asset
 */
import { useEffect, useState } from 'react';
import { AutoComplete, Input, Row, Col } from 'antd';
import { apiService } from '@tuya/connector';

import styles from './index.less';
import { useTranslation } from 'react-i18next';

const { searchAssetByName } = apiService;

interface IProps {
  onSelect: (value: string) => void;
}

const SearchAsset = ({ onSelect }: IProps) => {
  const { t } = useTranslation();
  const [searchAssetName, setSearchAssetName] = useState<string>('');
  const [searchSuggestion, setSearchSuggestion] = useState<Array<any>>([]);

  useEffect(() => {}, []);
  return (
    <Row align="middle">
      <Col>
        <label className={styles.ctrlLabel}>{t('search.title')}</label>
      </Col>
      <Col>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{
            width: 300,
          }}
          options={searchSuggestion}
          value={searchAssetName}
          onSelect={(value, options) => {
            onSelect(value);
            setSearchAssetName(options.label as string);
          }}
          onSearch={(value) => {
            searchAssetByName(value).then((res) => {
              const options = res.map((item) => {
                return {
                  label: item.asset_name,
                  value: item.asset_id,
                };
              });

              // if (value === '') {
              //   options.unshift({
              //     label: t('search.all'),
              //     value: '-1',
              //   });
              // }
              setSearchSuggestion(options);
            });
            setSearchAssetName(value);
          }}
        >
          <Input.Search placeholder={t('search.placeholder')} />
        </AutoComplete>
      </Col>
    </Row>
  );
};

export default SearchAsset;
