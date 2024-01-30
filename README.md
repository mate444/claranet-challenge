# Youtube Video & Playlists App

### Funzionalità

1. **Ricerca e Aggiunta di Video:**
   - Gli utenti possono cercare video di YouTube.
   - I video possono essere aggiunti a playlist personalizzate create dall'utente.

2. **Playlist Persistenti:**
   - Le playlist create dall'utente sono conservate anche se l'utente esce dalla pagina.
   - Le playlist sono accessibili sia su desktop che su dispositivi mobili.

### Tecnologie Utilizzate

- **React:** La libreria principale per la creazione dell'interfaccia utente.
- **Recoil:** Una libreria di gestione dello stato per gestire lo stato globale dell'applicazione, in particolare le playlist dell'utente.
- **React-Router 6:** Una libreria di routing per navigare tra diverse viste all'interno della SPA.
- **ChakraUI:** Una libreria di componenti per la creazione di componenti UI responsive e visivamente accattivanti.

### Istruzioni per l'Esecuzione in Locale

Per eseguire il progetto in locale, segui questi passaggi:

1. Crea un file `.env` nella cartella principale (fuori da `src`).
2. Ottieni una chiave API dalla Google Cloud Platform.
3. All'interno del file `.env`, crea la seguente variabile:
   ```
   VITE_API_KEY=tuaapikey
   ```
4. Esegui il seguente comando nel terminale:
   ```
   npm run dev
   ```
   Questo avvierà il server di sviluppo.
5. Sei pronto per iniziare! controlla il terminale per ottenere l'indirizzo.

Sentiti libero di esplorare l'applicazione, cercare video, creare playlist e sperimentare la funzionalità fornita dalle tecnologie menzionate sopra.
