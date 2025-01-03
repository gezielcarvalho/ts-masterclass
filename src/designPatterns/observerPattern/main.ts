import dispatcher from './dispatcher';
dispatcher.on('event', (data: any) => {
  console.log('Event received', data);
});
dispatcher.emit('event', {
  message: 'Hello',
});
dispatcher.off('event', () => {
  console.log('Event received');
});
