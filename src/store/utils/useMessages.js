import { useActiveChannel } from ".";
import { useStore } from "..";

// TODO: return messages for the selected channel
export const useMessages = () => {
    const channel = useActiveChannel();

    return (channel || {} )?.messages || [] ;

}