import config from '../../webpack.config';

const themeNames = Object.keys(config.entry)
  .filter(key => /^themes/.test(key))
  .map(name => name.replace('themes/', ''));

const resolveThemeName = (host = '') => {
  const defaultTheme = 'default';
  const theme = host
    ? themeNames.filter(name => host.indexOf(name) > -1)
    : [];

  return theme.length ? theme[0] : defaultTheme;
};

export default resolveThemeName;
