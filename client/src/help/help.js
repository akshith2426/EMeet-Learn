import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import useStyles from './styles';
import { Typography,Button, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import Speech from 'react-speech';

const Help = () => {
    
    const classes = useStyles();
    const { currentUser } = useAuth();
    const [users, setUsers] = useState([]);

    //FETCHING USERS DATA FROM DATABASE
    useEffect(() => {
        db.collection(`users`).onSnapshot(snapshot => {
            setUsers(snapshot.docs.map(doc => doc.data()))
        });
    }, [])

    //TEXT FOR VOICE ASSISTANT 
    const text = "Hello user!Welcome to Teams!You can use teams to create groups, meetings and chat with the community, you can even manage your daily tasks and todos and can also view your activities in this app! Thank you!";

    return (
        <div className={classes.root}>
            <Typography
                variant='h4'
                className={classes.title}
            >
                Help & Support
            </Typography>
            <Typography
                className={classes.title}
            >
                Welcome to E-Meet & Learn ! Here's a quick guide for you!
            </Typography>
            <Speech 
                textAsButton={true} 
                displayText="Click to listen" 
                text={text}
                voice="Google UK English Male"
                rate="0.90"
            />

            <List className={classes.listRoot}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <NotificationsIcon  />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">Activity</Typography>} secondary="You can view all your activities" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <MessageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">Community Chat</Typography>} secondary="You can communicate with all users of this app" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">All Channels</Typography>} secondary="You can create teams, start or join meetings and even send messages" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <AssignmentIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">Tasks</Typography>} secondary="You can manage all your tasks and todos" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <DateRangeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">Calendar</Typography>} secondary="You can keep a track of all the scheduled meetings" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#F75F4A" }}>
                            <HelpIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="h6">Help</Typography>} secondary="You can use it as a guide" />
                </ListItem>
            </List>
        </div>
    )
}

export default Help;