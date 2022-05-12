import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SidebarOption from './SidebarOption';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function Sidebar() {
  const user = useSelector(selectUser);

  console.log(user.email);
  const dispatch  = useDispatch();
  
  const shareMeet = () => {
    if(user.emailVerified){
        window.open('https://meet.google.com/getalink?hs=202')
    }
    else {
        alert('Please sign in using google account to access this feature')
        if(window.confirm('Would you like to continue with google account')){
        auth.signOut()
    }
}
}

  return (
    <div className='sidebar'>
        <Button 
          className='sidebar__compose' 
          startIcon={<img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' alt='plus'/>}
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
        <SidebarOption Icon={LabelImportantIcon} title="Important" />
        <SidebarOption Icon={NearMeIcon} title="Sent" />
        <SidebarOption Icon={NoteIcon} title="Drafts" />
        <SidebarOption Icon={ExpandMoreIcon} title="More" />

        <div className="sidebar__footer" >
          <div className='sidebar__footerIcons' >
          <Button 
          className='text' 
          startIcon={<VideoCallIcon />}
          onClick={shareMeet}
        >
          Video Chat
        </Button>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;