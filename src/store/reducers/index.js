import { channelReducer } from "./channels";
import { appReducer } from "./app";

export const initialState = {
    app: {
        activeTab: 'Chat',
        user: null,
    },
    channels: {
        activeChannel: null,
        meta: {
            loading : false,
            // TODO: add more info fully loaded 
            hasMore:  false // can be used to fetch more channels 
        },
        data: [
            {
                connection: null,
                id: "unique-channel-id-1",
                type: "direct", // channels can be direct | group 
                displayName: "Fast Postgres", // generated on server  
                last_activity: 1631685676605,
                avatar: "https://i.pravatar.cc/300",
                lastMessage: {
                    user_id: "unique-user-id-1",
                    timestamp: 1631685676605,
                    channel_id: "unique-channel-id-1",
                    message: {
                        type: "text",
                        content: "hello world!",
                    }
                },
                participants: [
                    {
                        user_id: "unique-user-id-1",
                        username: "uniqueu_user",
                        displayName: "Unique User",
                        avatar: "https://i.pravatar.cc/300"
                    },
                    {
                        user_id: "unique-user-id-2",
                        username: "fast_postgres",
                        displayName: "Fast Postgres",
                        avatar: "https://i.pravatar.cc/300"
                    }
                ],
                messages: [
                    {   
                        id: Math.random().toString(),
                        user_id: "unique-user-id-1",
                        author: {
                            user_id: "unique-user-id-1",
                            username: "fast_progress",
                            self: false 
                        },
                        timestamp: 1631685676605,
                        channel_id: "unique-channel-id-1",
                        message: {
                            type: "text",
                            content: "hello world!",
                        }
                    }
                ]
            },
        ]
    }
};


const combineReducers = (reducers)  => (state, action) => {
    const modules = Object.keys(reducers).reduce( (acc, reducerKey)=> {
            return {
                ...acc,
                [reducerKey]: reducers[reducerKey](acc[reducerKey], action)
            }
    },state);
    return modules;
}

export const rootReducer = combineReducers({
    app: appReducer,
    channels: channelReducer,
});



