self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "🔔 Promemoria", {
      body: data.body || "",
      icon: data.icon || "/nurseshift/icon.svg",
      badge: "/nurseshift/icon.svg",
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/nurseshift/"));
});
