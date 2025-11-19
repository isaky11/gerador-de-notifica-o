import { LocalNotifications } from '@capacitor/local-notifications';

document.addEventListener("DOMContentLoaded", async () => {

  // Solicita permissão para notificações no Android (precisa ser feito uma vez)
  async function requestPermission() {
    const result = await LocalNotifications.requestPermissions();
    console.log("Permissão:", result);
    return result;
  }

  // Envia uma notificação local imediatamente
  async function sendNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: Date.now(),  // ID único
          title: "KVN Notificação",
          body: "Esta é uma notificação enviada pelo app!",
          smallIcon: "ic_stat_icon", // opcional, usar ícone nativo se tiver
        }
      ]
    });

    alert("Notificação enviada!");
  }

  // Botões do HTML
  document.getElementById("btnPermissao").addEventListener("click", async () => {
    await requestPermission();
  });

  document.getElementById("btnNotificar").addEventListener("click", async () => {
    await sendNotification();
  });
});
