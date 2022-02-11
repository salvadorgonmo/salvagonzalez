import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import './FolderList.scss'

interface FolderListItemProps {
  imageSrc: string;
  primary: string;
  secondary: string;
}

interface FolderListProps {
  items: FolderListItemProps[]
}

export const FolderList = ({
  items = []
}: FolderListProps) => {

  if (items.length <= 0) {
    return null
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map(item => (
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'white' }}>
              <img src={item.imageSrc} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
}

export default FolderList