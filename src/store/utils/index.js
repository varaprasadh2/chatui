import { useChannels } from "./useChannels";
import { useActiveChannel } from "./useActiveChannel";
import { useMessages } from "./useMessages";
import { useStore } from "..";

const useCurrentUser = () => {
    const [store, dispatch] = useStore();
    return store.app.user;
};

export {
    useCurrentUser,
    useChannels,
    useActiveChannel,
    useMessages
}
