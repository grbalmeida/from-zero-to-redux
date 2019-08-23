export const loadState = () => {
  try {
    const localStorageState = localStorage.getItem('list')

    if (localStorageState) {
      return JSON.parse(localStorageState)
    }
  } catch (error) {
    console.error('Unable to retrieve state', error)
  }
}

export const saveState = state => {
  try {
    const localStorageState = JSON.stringify(state)
    localStorage.setItem('list', localStorageState)
  } catch (error) {
    console.error('Could not save state', error)
  }
}
