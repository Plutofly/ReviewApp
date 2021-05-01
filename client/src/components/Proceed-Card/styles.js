import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    padding: '50px 35px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    minWidth: 275,
  },
  title: {
    fontWeight: '900',
    color: '#2b273c',
    fontSize: '48px',
    lineHeight: '50px',
    fontFamily: 'system-ui',
    marginBottom: '30px',
    height: '150px',
    "@media (max-width: 1280px)": {
      fontSize: '35px',
      height: '200px'
    }
  },
  body: {
    marginBottom: '6px',
    color: '#2b273c',
    lineHeight: '22px',
    font: '400 normal 100%/1.5 Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
    height: '50px'
  },
  actions: {
    paddingTop: '0'
  },
  content: {
    paddingBottom: '5px'
  }
});

