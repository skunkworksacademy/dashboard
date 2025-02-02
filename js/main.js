// Terminal messages
const messages = [
    'SCANNING NETWORK...',
    'UPDATING COURSE MATERIALS...',
    'PROCESSING STUDENT DATA...',
    'OPTIMIZING DATABASE...',
    'RUNNING DIAGNOSTICS...',
    'CHECKING SECURITY PROTOCOLS...'
];

// Terminal functionality
class Terminal {
    constructor() {
        this.terminal = document.querySelector('.terminal');
        this.messageIndex = 0;
        this.initializeTerminal();
    }

    initializeTerminal() {
        setInterval(() => this.addMessage(), 2000);
        this.initializeStats();
    }

    addMessage() {
        if (this.messageIndex < messages.length) {
            const newMessage = document.createElement('p');
            newMessage.textContent = `> ${messages[this.messageIndex]}`;
            this.terminal.insertBefore(newMessage, this.terminal.lastElementChild);
            this.terminal.scrollTop = this.terminal.scrollHeight;
            this.messageIndex++;
        }
    }

    initializeStats() {
        setInterval(() => {
            // Update system stats randomly
            document.getElementById('cpuStatus').textContent = 
                Math.floor(Math.random() * 100);
            document.getElementById('memStatus').textContent = 
                Math.floor(Math.random() * 100);
            document.getElementById('diskStatus').textContent = 
                Math.floor(Math.random() * 100);
        }, 5000);
    }
}

// Initialize the terminal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const terminal = new Terminal();
});
