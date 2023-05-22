export const themeCheck = () => {
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
  }
  return userTheme || systemTheme ? 'dark' : 'light';
};

export const setDarkMode = (mode = '') => {
  if (mode === 'light') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    localStorage.theme = 'light';
  } else if (mode === 'dark') {
    document.documentElement.classList.add('dark');

    localStorage.setItem('theme', 'dark');
    localStorage.theme = 'dark';
  }
};
