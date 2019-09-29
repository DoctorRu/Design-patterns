import { Observer } from './interface/observer';
import { EmailTopicSubscriber } from './model/email-topic-subscriber';
import { EmailTopic } from './model/email-topic';

const topic: EmailTopic = new EmailTopic();

// Create observers
const firstObserver: Observer = new EmailTopicSubscriber('First Observer');
const secondObserver: Observer = new EmailTopicSubscriber('Second Observer');
const thirdObserver: Observer = new EmailTopicSubscriber('Third Observer');

topic.register(firstObserver);
topic.register(secondObserver);
topic.register(thirdObserver);

// Subscribe to object
firstObserver.setSubject(topic);
secondObserver.setSubject(topic);
thirdObserver.setSubject(topic);

// Check for update
firstObserver.update();

// Broadcast
topic.postMessage('Hello subscribers!')
firstObserver.update();

topic.postMessage('First wave!')

topic.unregister(thirdObserver); // Pending: Remover item específico e não o último item
topic.postMessage('Second wave!')
