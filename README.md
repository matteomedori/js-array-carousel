# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, il programma crea un carosello che consente di cambiare immagine.

## MILESTONE 1

Dato l'array di immagini si devono inserire una ad una all'interno dell'html.

- si consideri l'array di immagini
- seleziono elemento html in cui poi inserire le immagini
- tramite un ciclo viene scorso l'array di immagini
- per ogni elemento dell'array
  - se è il primo elemento aggiungo anche la classe active
  - altrimenti concateno tramite template literal quello che voglio aggiungere all'html

## MILESTONE 2

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

- seleziono l'elemento html per la freccia prev
- seleziono l'elemento html per la freccia next
- seleziono tutti gli elementi con la classe item
- creo una variabile counterActive che indica quale immagine in questo momento ha la classe active (inizialmente la prima immagine)
- aggiungo un evento sul click della freccia prev che comporta:
  - se counterActive > 0 (altrimenti non posso andare sull'immagine precedente)
    - rimuove la classe active all'immagine in posizione counterActive
    - decremento la variabile counterActive
    - aggiungo la classe active all'immagine in posizione counterActive
- aggiungo un evento sul click della freccia next che comporta:
  - se counterActive è < del numero degli elementi con classe item - 1 (posso fare next fino al penultimo elemento)
    - rimuove la classe active all'immagine in posizione counterActive
    - incremento la variabile counterActive
    - aggiungo la classe active all'immagine in posizione counterActive
