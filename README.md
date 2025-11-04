# MeStuTa App/Website

Dies ist der Quellcode für die Informations-App/Website der MeStuTa an der HFU in 2026.
Es nutzt Tauri+Typescript+NextJS.

# Entwickeln/Exportieren
Es enthält eine nix devshell welche sich um die vollständige Bereitstellung aller benötigten Bibliotheken, Werkzeuge und auch der Android SDK/NDK kümmert.
Um diese devshell zu betreten sollte man zuerst den nix Dämon auf seinem Betriebssystem installieren.
Anschließend begibt man sich über ein Terminal in die heruntergeladene Repository und führt folgendes aus:
```nix develop```

Nun kann man das Projekt mit folgendem Befehl entwickeln:
```bun tauri dev```

Um das Projekt für Desktop zu bauen, führe folgendes aus:
```bun tauri build```

Um das Projekt für Android zu bauen, führe folgendes aus:
```bun tauri android build```

Man kann die APK/AAB auch für eine spezielle Architektur exportieren:

```bun tauri android build -t aarch64 #moderne Architektur, beispielsweise ARMv8```

# iOS
Tauri unterstützt zwar iOS, jedoch benötigt man dafür eine Apple Developer License und einen Macintosh (beides habe ich nicht).
Hier sind jedoch instruktionen zum entwickeln und exportieren der App für iOS:
https://v2.tauri.app/distribute/app-store/
