const zh = {
  translation: {
    title: '资产管理',
    table: {
      column: {
        name: '资产名称',
        id: '资产ID',
        childrenAssetCount: '子资产数量',
        childrenDeviceCount: '设备数量',
        opt: '操作',
      },
      row: {
        edit: '编辑',
        remove: '删除',
      },
    },
    search: {
      title: '资产搜索',
      placeholder: '输入资产名称模糊搜索',
      all: '全部',
    },
    addAsset: {
      btn: '创建资产',
      title: '创建资产',
      parentLabel: '父级资产',
      extra: '若无父级资产，当前资产将成为一级资产',
      name: '资产名称',
      error: {
        fetch: '操作失败!',
        max: '资产名称最多输入20个字符',
        required: '必填项',
      },
    },
    editAsset: {
      title: '编辑资产',
      name: '资产名称',
      error: {
        fetch: '操作失败!',
        max: '资产名称最多输入20个字符',
        required: '必填项',
      },
    },
    removeAsset: {
      title: '操作确认',
      content:
        '当前资产及所有子资产下没有设备，删除当前资产会同时删除资产下的所有子资产，确定要删除资产吗？',
      ok: '确认删除',
      cancel: '取消',
      hint: '提示',
      errorContent: '当前资产（或子资产）下有设备未移除，无法删除资产',
      ok2: '知道了',
    },
    assetCascader: {
      title: '资产筛选',
      placeholder: '资产选择',
    },
  },
};

export default zh;
