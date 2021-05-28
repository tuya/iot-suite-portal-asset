const en = {
  translation: {
    title: 'Asset Management',
    table: {
      column: {
        name: 'Asset name',
        id: 'Asset ID',
        childrenAssetCount: 'Number of child assets',
        childrenDeviceCount: 'Number of devices',
        opt: 'Operation',
      },
      row: {
        edit: 'Edit',
        remove: 'Delete',
      },
    },
    search: {
      title: 'Search for Asset',
      placeholder: 'Enter asset name for a fuzzy search',
      all: 'All',
    },
    addAsset: {
      btn: 'Create asset',
      title: 'Create asset',
      parentLabel: 'Parent Asset',
      extra:
        'If there is no parent asset, the current asset will become a primary asset',
      name: 'Asset name',
      error: {
        fetch: 'Operation failed!',
        max: 'Asset name support up to 20 characters',
        required: 'Required',
      },
    },
    editAsset: {
      title: 'Edit Asset',
      name: 'Asset name',
      error: {
        fetch: 'Operation failed!',
        max: 'Asset name support up to 20 characters',
        required: 'Required',
      },
    },
    removeAsset: {
      title: 'Operation Confirm',
      content:
        'There is no device under the current asset and all sub-assets. Deleting the current asset will also delete all the related sub-assets. Are you sure you want to delete the asset? ',
      ok: 'Confirm to delete',
      cancel: 'Cancel',
      hint: 'Note',
      errorContent:
        'There is a device under the current asset (or one of the sub-assets) that has not been removed, so the asset cannot be deleted',
      ok2: 'Got it',
    },
    assetCascader: {
      title: 'Asset Filter',
      placeholder: 'Select an asset',
    },
  },
};

export default en;
