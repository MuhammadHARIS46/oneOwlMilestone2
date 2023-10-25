
export const DarkMode = () => {

    const setDarkMode = (data) => {
        localStorage.setItem("darkMode", JSON.stringify(data));
    }
    const getDarkMode = () => {
        const savedData = JSON.parse(localStorage.getItem("darkMode"));
        return savedData
    }

  return { setDarkMode, getDarkMode}
}
