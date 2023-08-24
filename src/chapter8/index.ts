import { FirebaseNotification } from "./FirebaseNotification";
import { SystemNotification } from "./SystemNotification";

const notif1 = new FirebaseNotification();
const notif2 = new SystemNotification();

notif1.sendNotification();
notif2.sendNotification();