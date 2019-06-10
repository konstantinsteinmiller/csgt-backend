const enums = {
  permissions: {
    CREATE_PROJECT: 'CREATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
    CREATE_USER: 'CREATE_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_USER: 'UPDATE_USER',
    CREATE_DIALOG: 'CREATE_DIALOG',
    DELETE_DIALOG: 'DELETE_DIALOG',
    UPDATE_DIALOG: 'UPDATE_DIALOG',
    UPDATE_TRANSLATION: 'UPDATE_TRANSLATION'
  }
}
const permissionsArray = Object.values(enums.permissions)
export { enums as default, permissionsArray }
