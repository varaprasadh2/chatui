import { useEffect, useState } from "react";
import { useStore } from ".."

export const useActiveChannel = () => {
   // todo
   const [ channelInfo, setChannelInfo ] = useState();
   const [store, _] = useStore();

   useEffect(()=>{
      const activeChannelId = store.channels.activeChannel;

      const channel = store.channels.data.find(channel => channel.id === activeChannelId);

      setChannelInfo(channel);

   }, [store.channels.activeChannel]);

   return channelInfo;

}