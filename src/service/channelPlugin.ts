class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log)('ChannelIO script included twice.');
    }
    const ch: {c: any; q?: any[]} = function () {
      // eslint-disable-next-line prefer-rest-params
      ch.c(arguments);
    };
    ch.c = function (args: any) {
      if (ch.q) {
        ch.q.push(args);
      }
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      const x = document.getElementsByTagName('script')[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  }

  boot(settings: any) {
    window.ChannelIO('boot', settings);
  }

  shutdown() {
    window.ChannelIO('shutdown');
  }
}

export default new ChannelService();
