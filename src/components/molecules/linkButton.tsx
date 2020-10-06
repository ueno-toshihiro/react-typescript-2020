import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    borderColor: '#ad55c5',
    color: '#ad55c5',
    margin: '0 8px'
  }
}));

interface LinkButtonProps {
  children: React.ReactNode;
  path: string;
}

const LinkButton: FC<LinkButtonProps> = ({ children, path }): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPage = (): boolean => {
    const currentRoute = location.pathname;

    return currentRoute ===path;
  }

  return (
    <Button
      className={classes.root}
      variant="outlined"
      onClick={() => navigate(path)}
      disabled={isCurrentPage()}
    >
      { children }
    </Button>
  )
}

export default LinkButton;
