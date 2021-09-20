import Channel from "../components/Channel";


export default {
    title: 'chat ui guide/ChatThreadItem',
    component: Channel,
    argTypes: {
        displayName : { control: "text" },
        message : { control: "text" },
        unreadCount : { control: "number" },
        presence : { control : 'text' }
    },
  };

const Template = (args) => <Channel {...args} />;

export const ChatThreadItemOnline = Template.bind({});
export const ChatThreadItemOffline = Template.bind({});
export const ChatThreadItemAway= Template.bind({});
export const ChatThreadItemWithNoUnreadMessages= Template.bind({});
export const WithNoActions= Template.bind({});


const actions = [
    {
        label : "Open",
        handler : () => {}
    },
    {
        label : "Profile",
        handler : () => {}
    },
    {
        label : "Add to archive",
        handler : () => {}
    },
    {
        label : "Delete",
        handler : () => {}
    },
]

ChatThreadItemOnline.args = {
    displayName : "john doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium vulputate felis. Nam nec leo quis tortor accumsan",
    unreadCount : 121,
    presence : 'online',
    actions : actions
}
ChatThreadItemOffline.args = {
    displayName : "john doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium vulputate felis. Nam nec leo quis tortor accumsan",
    unreadCount : 99,
    presence : 'offline',
    actions : actions
}

ChatThreadItemAway.args = {
    displayName : "john doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium vulputate felis. Nam nec leo quis tortor accumsan",
    unreadCount : 10,
    presence : 'away',
    actions : actions
}

ChatThreadItemWithNoUnreadMessages.args = {
    displayName : "john doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium vulputate felis. Nam nec leo quis tortor accumsan",
    presence : 'online',
    actions : actions
}

WithNoActions.args = {
    displayName : "john doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium vulputate felis. Nam nec leo quis tortor accumsan",
    presence : 'online'
}
