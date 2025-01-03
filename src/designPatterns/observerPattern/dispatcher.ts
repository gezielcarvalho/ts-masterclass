class Dispacther {
  events: any;
  constructor() {
    this.events = {};
    console.log('Dispacther created');
  }
  on(eventName: string, fn: any = () => {}) {
    if (!eventName || typeof eventName !== 'string') {
      throw new Error('Invalid event name');
    }
    if (!fn || typeof fn !== 'function') {
      throw new Error('Invalid callback');
    }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }
  emit(eventName: string, data: any) {
    if (!eventName || typeof eventName !== 'string') {
      throw new Error('Invalid event name');
    }
    if (!this.events[eventName]) {
      throw new Error('Event not found');
    }
    this.events[eventName].forEach((fn: any) => {
      fn(data);
    });
  }
  off(eventName: string, fn: any) {
    if (!eventName || typeof eventName !== 'string') {
      throw new Error('Invalid event name');
    }
    if (!this.events[eventName]) {
      throw new Error('Event not found');
    }
    if (!fn || typeof fn !== 'function') {
      throw new Error('Invalid callback');
    }
    this.events[eventName] = this.events[eventName].filter((eventFn: any) => {
      return fn !== eventFn;
    });
  }
}

const dispatcher = new Dispacther();

export default dispatcher;
