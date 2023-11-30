class broadcastChannelBrowser {
    private channel: any;

    constructor(channel: string) {
        this.channel = new BroadcastChannel(channel);
    }

    pushMessage(message: string): void {
        this.channel.postMessage(message);
    }

    receiveMesage(): string {
        const result = this.channel.onmessage();
        this.closeConection();
        return result;
    }

    closeConection() {
        this.channel.close();
    }
}

export {
    broadcastChannelBrowser
}