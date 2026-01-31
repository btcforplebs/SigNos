import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

export async function requestNotificationPermission(): Promise<boolean> {
    if (!Capacitor.isNativePlatform()) return false;

    const status = await LocalNotifications.requestPermissions();
    return status.display === 'granted';
}

export async function showNotification(title: string, body: string, data?: any) {
    if (!Capacitor.isNativePlatform()) {
        // Fallback to browser notifications if available
        if (Notification.permission === 'granted') {
            new Notification(title, { body });
        }
        return;
    }

    await LocalNotifications.schedule({
        notifications: [
            {
                title,
                body,
                id: Math.floor(Math.random() * 1000000),
                extra: data,
                // smallIcon: 'ic_notification', // Removed to use default app icon
                actionTypeId: 'SIGN_REQUEST'
            }
        ]
    });
}

export async function clearNotifications() {
    if (!Capacitor.isNativePlatform()) return;
    await LocalNotifications.removeAllDeliveredNotifications();
}
