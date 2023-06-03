import {useEffect} from 'react';
import ChannelService from './service/channelPlugin';

export default function useChannelPluginEffect() {
  useEffect(() => {
    ChannelService.boot({
      pluginKey: process.env.REACT_APP_CHANNEL_PLUGIN, //please fill with your plugin key
    });

    // Boot Channel as a registered user
    ChannelService.boot({
      pluginKey: process.env.REACT_APP_CHANNEL_PLUGIN, //please fill with your plugin key
    });
    return () => {
      ChannelService.shutdown();
    };
  }, []);
}
