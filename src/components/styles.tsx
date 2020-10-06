import { makeStyles } from '@material-ui/core/styles';

const baseTextColor = '#686868';
const white = '#fff';
const purple = '#ad55c5';
const lightPurple = '#d9b0e4';
const lightGray = '#f3f3f3';

export const useStyles = makeStyles((theme) => ({
  contents: {
    padding: theme.spacing(2, 2),
  },
  textHeaderSpace: {
    padding: theme.spacing(2, 2),
  },
  spaceLR1: {
    padding: theme.spacing(0, 1, 0),
  },
  h2: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '10rem',
    fontWeight: 'bold',
    padding: theme.spacing(3, 0, 1),
    textAlign: 'center',
    width: '100%',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
  },
  listHeader: {
    color: white,
    backgroundColor: lightPurple,
    padding: theme.spacing(2, 0),
    margin: theme.spacing(2, 0, 0),
    textAlign: 'center',
  },
  paragraph: {
    color: baseTextColor,
    fontSize: '1.2rem',
    margin: theme.spacing(2, 0),
  },
  listBorder: {
    borderTop: `1px solid ${lightGray}`,
  },
  textP8: {
    color: baseTextColor,
    fontSize: '0.8rem',
  },
  textP10: {
    color: baseTextColor,
    fontSize: '1rem',
  },
  textP12: {
    color: baseTextColor,
    fontSize: '1.2rem',
  },
  textP14: {
    color: baseTextColor,
    fontSize: '1.4rem',
  },
  textLink: {
    cursor: 'pointer',
    fontSize: '1rem',
    margin: theme.spacing(4, 2)
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    color: purple,
    flex: 1,
    fontWeight: 'bold',
  },
  toolbarPrimary: {
    justifyContent: 'center',
    overflowX: 'auto',
  },
  toolbarSecondary: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    overflowX: 'auto',
  },
}));
