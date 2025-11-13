Build & packaging (Android APK and iOS) — passos rápidos

Este projeto agora contém arquivos mínimos para transformar a página web em um aplicativo usando Capacitor (PWA como web assets).

IMPORTANTE: Android pode ser gerado em qualquer SO com Android Studio instalado; iOS requer macOS + Xcode para compilar.

Passos gerais (recomendado):

1) Instalar Node.js (14+) e npm.

2) Instalar dependências do Capacitor (localmente):

```bash
# a partir da raiz do projeto
npm install --save-dev @capacitor/cli @capacitor/core

# preparar pasta web com os arquivos atuais
npm run prepare-web
```

3) Inicializar Capacitor (se ainda não fez):

```bash
npx cap init com.isaky.kvn "KVN Notificações" --web-dir=www
```

4) Adicionar plataformas

Android (no Linux/Windows):
```bash
npx cap add android
npx cap copy
npx cap open android   # abre no Android Studio
```

IOS (no macOS):
```bash
npx cap add ios
npx cap copy
npx cap open ios   # abre no Xcode
```

5) No Android Studio: escolha Build → Build Bundle(s) / APK(s) → Build APK(s)

6) No Xcode (macOS): selecione target e faça Archive → Export para gerar .ipa

Notas e dicas
- Se fizer alterações no web (HTML/CSS/JS), rode `npm run prepare-web` e depois `npx cap copy` para atualizar assets nas plataformas.
- Teste a PWA primeiro abrindo `www/index.html` via um servidor HTTP (ex: `npx http-server www -p 8080`) e veja se o app se instala no Android (Add to Home Screen) e se as notificações funcionam enquanto a página está aberta.
- Para publicar no Google Play você precisa gerar um signing key e assinar o APK/AAB.

Se quiser eu posso:
- gerar os ícones `icon-192.png` e `icon-512.png` automaticamente a partir do arquivo `img/logo.png` (se ele existir);
- adicionar um script que automatiza `npm run prepare-web && npx cap copy`;
- ou criar um projeto Electron em vez de mobile (caso mude de ideia).
