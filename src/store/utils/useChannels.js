import { useEffect, useState } from "react";
import { useStore } from ".."

// useful to add some formatting logics channels
export const useChannels = () => {
    // get the store
    // sort based on last Activity,
    // return the formatted channels
    const [store, dispatch] = useStore();
    const { channels } = store;

    const [ channelsToRender,setChannelsToRender] = useState([]);
    
    useEffect(()=>{
        let _channels = channels.data;
        setChannelsToRender(_channels);
    }, [store.channels]);

    return channelsToRender;

}