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

### BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

- aggiungo un evento sul click della freccia prev che comporta:
  - rimuove la classe active all'immagine in posizione counterActive
  - se counterActive è > 0(dunque non sono sulla prima immagine)
    - decremento counterActive
  - altrimenti (dunque counterActive è uguale a 0 e devo tornare sull'ultima immagine)
    - counterActive diventa uguale all'indice dell'ultimo elemento della lista di item
  - aggiungo la classe active all'immagine in posizione counterActive
- aggiungo un evento sul click della freccia next che comporta:
  - rimuove la classe active all'immagine in posizione counterActive
  - se counterActive è < del numero degli elementi con classe item - 1 (non sono sull'ultimo elemento)
    - decremento counterActive
  - altrimenti (sono sull'ultimo elemento)
    - counterActive = 0
  - aggiungo la classe active all'immagine in posizione counterActive

### BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

- aggiungo al codice precedente una variabile per selezionare il contenitore delle thumbnails
- modifico il ciclo che scorre l'array delle immagini
- per ogni elemento dell'array
  - se è il primo elemento aggiungo l'elemento thumbnail con la classe selected
  - altrimenti aggiungo l'elemento thumbnail con la classe not-selected
- al click di prev
  - rimuovo all'immagine in posizione counterActive la classe selected
  - aggiungo all'immagine in posizione counterActive la classe not-selected
  - aggiorno il valore di counterActive
  - rimuovo all'immagine in posizione counterActive la classe not-selected
  - aggiungo all'immagine in posizione counterActive la classe selected
- al click di next
  - rimuovo all'immagine in posizione counterActive la classe selected
  - aggiungo all'immagine in posizione counterActive la classe not-selected
  - aggiorno il valore di counterActive
  - rimuovo all'immagine in posizione counterActive la classe not-selected
  - aggiungo all'immagine in posizione counterActive la classe selected
