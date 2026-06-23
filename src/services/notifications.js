import * as Notifications from "expo-notifications";

export const notify = async (title, body) => {
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: { seconds: 5 }
  });
};