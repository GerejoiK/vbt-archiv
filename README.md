# VBT-Archiv

Hier sollen alle VBT-Runden, die jemals erschienen sind, verlinkt werden.  
Alle Daten liegen in den yaml-Dateien, damit die Seite statisch gebaut werden kann.  
Die Daten kommen originär aus dem Internet Archive, sollen aber um redundante Links erweitert werden.  
Manche Daten sind unvollständig oder falsch ausgelesen, weshalb noch manuell verbessert werden muss.

## Datenstamm erweitern

Ich bin dabei etwas auf Hilfe angewiesen, vor allem wenn es darum geht, Runden zu finden und zu verlinken.  
Unten sieht man ein Beispiel für das Schema der yaml-Dateien aus [src/data/vbt2011.yaml](src/data/vbt2011.yaml), das allerdings auch noch erweitert werden kann.  
Den kompletten Aufbau findet man unter [src/lib/schema.json](src/lib/schema.json).  
Das wichtigste sind die eindeutige Id (196), das Teilnehmer-Array und darin wiederum die das Runden-Array und darin wiederum das Objekt, dass auch die Links enthält.  
Bei den Links kann man mehrere angeben, um für Redundanz zu sorgen.

```
"196":
  link: rappers.in/lance-butters-vs-splint
  teilnehmer:
    - name: Lance Butters
      punkte: 6
      runden:
        hr1:
          name: HR1
          links:
            - url: https://youtu.be/IeA5wGhI2H4
              original: true
            - url: https://youtu.be/5V3m_C8MXNk
              notiz: 2 Sekunden fehlen
          beats:
            - name: Gordon Lamour - vbtfotze01
        rr2:
          name: RR2
          links:
            - url: https://youtu.be/xyz
              original: true
    - name: RaPiT 93
      runden:
        hr2:
          name: HR2
          links:
            - url: https://youtu.be/h41ccHnwYtQ
              original: true
      beats:
        - name: Gordon Lamour - vbtfotze01
```

Als Link ist alles erlaubt, so lange man dadurch an die Datei kommt (YouTube, Torrent, Vimeo, ...)  
Wenn nur ein Teil eines Videos oder nur die Audio existiert, kann es trotzdem hinzugefügt werden und kann zur Vollständigkeit in der Notiz erwähnt werden.  
Änderungen (und Vorschläge, Fragen usw.) entweder per Pull-Request, Issue oder Mail an GerejoiK@protonmail.com.
