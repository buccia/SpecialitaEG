Ext.setup({
  tabletStartupScreen: 'tablet_startup.png',
  phoneStartupScreen: 'phone_startup.png',
  icon: 'icon.png',
  name: 'Specialità',
  glossOnIcon: false,
  onReady: function() {
    
    var panel;
    var activeItems = [];
    
    Ext.regModel('Specialita', {
      fields: [
        {name: 'name',          type: 'string'},
        {name: 'slug',          type: 'string'},
        {name: 'description',   type: 'string'}
      ]
    });
    
    var imagePanel = new Ext.Panel({
      cls: 'image-panel',
      margin: 5,
      flex: 1,
      tpl: '<div class="patacchino" style="background-image: url(resources/patacchini/{slug}.jpg);"></div>'
    });
    
    var descriptionPanel = new Ext.Panel({
      cls: 'description',
      scroll: 'vertical',
      flex: 2,
      tpl: '{description}'
    });
    
    var toolbar = new Ext.Toolbar({
      items: [{
        iconCls: 'home',
        iconMask: true,
        handler: function() {
          panel.setActiveItem(wrapper, {type: 'slide', direction: 'right' });
        }
      }]
    });
    
    var credits = new Ext.Toolbar({
      ui: 'dark',
      dock: 'bottom',
      cls: 'footer',
      html: '<p>Testi tratti da <a target="_blank" href="http://it.scoutwiki.org/">scoutwiki.org</a> coperti da licenza <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a></p>',
    });
    
    var sheet = new Ext.Panel({
      layout: {
        type: "vbox",
        align: "stretch"
      },
      cls: 'sheet',
      items: [imagePanel, descriptionPanel],
      dockedItems: [toolbar, credits]
    });
    
//     var store = new Ext.data.Store({
//       model: 'Specialita',
//       proxy: {
//         type: 'ajax',
//         url : 'http://presenze.agescire.it/media/specialitaEG/resources/specialita.json',
//         reader: {
//           type: 'json',
//           root: 'items'
//         }
//       },
//       sorters: 'name',
//       getGroupString : function(record) {
//         return record.get('name')[0];
//       },
//       autoLoad: true
//     });
    
    var store = new Ext.data.Store({
      model: 'Specialita',
      sorters: 'name',
      getGroupString : function(record) {
        return record.get('name')[0];
      },
      data: [
        {
          name: "Allevatore",
          slug: "allevatore",
          description: "<p>L’<b>allevatore</b>:</p><ul><li>Ama veder crescere gli animali</li><li>Conosce le peculiarità dell’animale che alleva e l’alimentazione più adatta per la sua crescita.</li><li>Sa curare la progettazione o manutenzione del luogo dove vive</li><li>Sa somministrare prodotti per la cura degli animali.</li><li>E' in grado di compilare una scheda sanitaria degli animali che alleva e conosce le prescrizioni dell’ufficio veterinario del Comune.</li></ul>"
        },{
          name: "Alpinista",
          slug: "alpinista",
          description: "<p>L’<b>alpinista</b>:</p><ul><li>Sa muoversi con sicurezza nell’ambiente montano, sapendosi orientare.</li><li>Deve sapere i principali nodi e manovre di corda, le attrezzature e i materiali utilizzati in montagna.</li><li>Ha nozioni di topografia, geologia, meteorologia e primo soccorso.</li><li>Sa valutare il tempo necessario per compiere un determinato percorso e sa evitare o fronteggiare i principali pericoli delle attività in montagna</li><li>Sa equipaggiare se stesso e gli altri in modo adeguato per un’uscita in montagna.</li></ul>"
        },{
          name: "Amico degli animali",
          slug: "amico_degli_animali",
          description: "<p>L’<b>amico degli animali</b>:</p><ul><li>È un appassionato della vita degli animali: li ama, e ne cura uno in particolare.</li><li>Conosce:</li></ul><dl><dd><ul><li>le principali caratteristiche dell’animale prescelto</li><li>la struttura delle più importanti associazioni di tutela degli animali</li><li>l’indirizzo dell’ufficio veterinario più vicino del Comune in cui vive</li><li>dove si trovano i principali parchi regionali e nazionali.</li></ul></dd></dl><ul><li>Dimostra attenzione e rispetto per l’ambiente degli animali nella vita di tutti i giorni e durante le attività scout.</li></ul>"
        },{
          name: "Amico del quartiere",
          slug: "amico_del_quartiere",
          description: "<p>L'<b>amico del quartiere</b></p><ul><li>Nutre curiosità e interesse per la zona in cui abita.</li><li>Conosce notizie sulla composizione della popolazione, la mappa dei servizi pubblici o esercizi commerciali presenti e le difficoltà che devono affrontare i cittadini.</li><li>Riesce ad orientarsi nella zona</li><li>Sa spiegare chiaramente come raggiungere un determinato luogo a piedi, con l’automobile o con l’autobus</li><li>Sa a chi rivolgersi in caso di necessità.</li></ul>"
        },{
          name: "Archeologo",
          slug: "archeologo",
          description: "<p>L'<b>archeologo</b>:</p><ul><li>Si occupa della ricerca delle tracce dei popoli e degli eventi del passato.</li><li>Conosce le origini del posto dove abita e, almeno a grandi linee, la storia dei popoli antichi che hanno vissuto nella regione di appartenenza.</li><li>Sa progettare un’osservazione o una ricerca.</li><li>Sa diffondere in vari modi le scoperte compiute.</li></ul>"
        },{
          name: "Artigiano",
          slug: "artigiano",
          description: "<p>L'<b>artigiano</b> conosce i metodi di realizzazione di oggetti artigianali, come canestri e oggetti in legno, e sa applicarli per realizzare oggetti che gli possono essere utili.</p>"
        },{
          name: "Artista di strada",
          slug: "artista_di_strada",
          description: "<p>L'<b>artista di strada</b> conosce l'arte della giocoleria e sa eseguire alcuni esercizi circensi.</p>"
        },{
          name: "Astronomo",
          slug: "astronomo",
          description: "<p>L’<b>astronomo</b>:</p><ul><li>È appassionato del cielo stellato e di tutti i fenomeni celesti;</li><li>Possiede attrezzature e supporti tecnici per realizzare ottime ed efficaci osservazioni;</li><li>Conosce il sistema solare, le costellazioni, la luna e ogni altro corpo celeste;</li><li>Sa i movimenti della sfera celeste, le coordinate utilizzate in astronomia, i meccanismi che stanno alla base del succedersi delle stagioni, del giorno e della notte e delle maree;</li><li>Sa organizzare una veglia alle stelle;</li><li>Conosce come si utilizzino i telescopi, come fotografare corpi celesti, come utilizzare software specifico per osservazioni stellari, come costruire meridiane, un astrolabio o un altro strumento di osservazione del cielo;</li><li>Sa utilizzare con competenza allineamenti e carte stellari;</li><li>Riesce a riconoscere un certo numero di costellazioni;</li><li>Sa orientarsi con il cielo stellato;</li><li>Riesce a disegnare costellazioni e la superficie lunare nelle varie fasi.</li></ul>"
        },{
          name: "Atleta",
          slug: "atleta",
          description: "<p>L'<b>atleta</b>:</p><ul><li>Pratica con assiduità uno sport.</li><li>Conosce:</li></ul><dl><dd><ul><li>Le origini, le caratteristiche, il regolamento tecnico e di gioco dello sport praticato.</li><li>Gli effetti che l’attività fisica determina sullo sviluppo fisico e motorio.</li><li>Le qualità che occorre sviluppare attraverso l’allenamento.</li><li>I principi dell’alimentazione.</li></ul></dd></dl><ul><li>Sa realizzare gesti tecnici corretti.</li><li>Ha appreso i fondamentali individuali dello sport praticato.</li><li>All’occorrenza sa:</li></ul><dl><dd><ul><li>Organizzare tornei.</li><li>Arbitrare partite nello sport praticato.</li></ul></dd></dl><ul><li>Favorisce il gioco di squadra della sua squadriglia.</li></ul>"
        },{
          name: "Attore",
          slug: "attore",
          description: "<p>L’<b>attore</b>:</p><ul><li>Sa esprimersi con diverse tecniche, davanti agli altri, comunicando un messaggio o delle sensazioni.</li><li>Conosce le principali tecniche espressive, i vari tipi di fuochi scout, i principali canoni e canti scout, i vari tipi di trucco e travestimento, elementari nozioni di storia del teatro e di scenografia.</li><li>Sa recitare una parte teatrale complessa e gestire con disinvoltura un piccolo spettacolo e un fuoco serale.</li><li>Sa predisporre adeguatamente l’area del fuoco e sa disporre i partecipanti secondo il tipo di evento.</li><li>Sa preparare un programma per l’animazione espressiva al campo estivo e realizzare una cassa di espressione di squadriglia o di reparto.</li><li>Sa preparare costumi e travestimenti con l’utilizzo di poco materiale.</li><li>Possiede una buona dizione e capacità di improvvisazione davanti al pubblico.</li></ul>"
        },{
          name: "Battelliere",
          slug: "battelliere",
          description: "<p>Il <b>battelliere</b> è lo specialista delle imbarcazioni che non vanno a vela: barca a remi e canoe.</p><ul><li>Conoscere i termini marinareschi relativi alle imbarcazioni a remi e gli ordini di voga</li><li>Saper come eseguirli a seconda dei diversi ruoli sulla barca (timoniere, prodiere e vogatore)</li><li>Conoscere le dotazioni di sicurezza di un’imbarcazione a remi.</li><li>Saper manovrare una piccola imbarcazione a remi puntando, sciando e vogando.</li><li>Saper accostare e scostare da riva, da un pontile e da un’altra imbarcazione.</li><li>Sa eseguire i più comuni nodi marinari e lanciare bene una sagola e una ciambella di salvataggio.</li><li>Sa dare e prendere rimorchio.</li><li>Sa nuotare.</li></ul>"
        },{
          name: "Boscaiolo",
          slug: "boscaiolo",
          description: "<p>Il <b>boscaiolo</b>:</p><ul><li>Conosce l’ambiente boschivo dopo averlo approfondito in teoria su libri e manuali e in pratica, anche grazie all’aiuto di persone competenti</li><li>Conosce i diversi tipi di bosco, il funzionamento del loro ecosistema, le specie vegetali e animali presenti; le principali norme di comportamento e di tutela dei boschi; i diversi tipi di legno adatti per le costruzioni; la distinzione tra un albero malato e sano; l’epoca più adatta per il taglio delle piante.</li><li>Sa abbattere un albero a regola d’arte e in sicurezza.</li><li>Sa realizzare un erbario dedicato ad alberi ed arbusti.</li><li>Partecipare a esercitazioni antincendio.</li><li>Sa realizzare una xiloteca.</li></ul>"
        },{
          name: "Botanico",
          slug: "botanico",
          description: "<p>Il <b>botanico</b>:</p><ul><li>E' colui che esplora le zone verdi vicino a casa e approfondisce la propria conoscenza nel campo di fiori, arbusti e alberi.</li><li>Conosce la funzione clorofilliana, la riproduzione delle piante, l’importanza ecologica delle specie vegetali nella catena alimentare, le associazioni vegetali, i periodi di fioritura.</li><li>Sa riconoscere le principali specie di erbe, fiori, arbusti e alberi presenti nella provincia in cui abita. Sa utilizzare le varie piante sulla base delle loro proprietà commestibili o medicinali.</li><li>Sa realizzare indagini sulla flora della zona in cui abita.</li><li>Partecipa a iniziative per la salvaguardia del patrimonio boschivo.</li><li>Possiede un erbario personale con almeno una cinquantina di specie diverse.</li><li>Sa prelevare campioni botanici senza danneggiare piante e ambienti.</li><li>Sa redarre una carta botanica utilizzando la simbologia professionale.</li><li>Approfondisce le conoscenze botaniche sugli arbusti e alberi della propria regione.</li></ul>"
        },{
          name: "Campeggiatore",
          slug: "campeggiatore",
          description: "<p>Un buon <b>campeggiatore</b> deve</p><ul><li>Usare correttamente gli strumenti, curarne la manutenzione e provvedere alle eventuali riparazioni</li><li>Costruire un riparo di 'fortuna' per la squadriglia</li><li>Riconoscere un luogo dove poter accendere un fuoco anche in condizioni meteorologiche avverse</li><li>Realizzare le costruzioni di squadriglia e di reparto</li><li>Saper eseguire correttamente degli incastri</li><li>Sapersi equipaggiare correttamente da solo per un campo di più giorni</li><li>Saper realizzare correttamente tutti i nodi e le legature necessarie</li><li>Conoscere i segni naturali che consentono di prevedere il tempo</li><li>Aver cucinato, almeno una volta, un pasto completo alla trappeur</li></ul>"
        },{
          name: "Canoista",
          slug: "canoista",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008."
        },{
          name: "Cantante",
          slug: "cantante",
          description: "<p>Un buon <b>cantante</b> deve:</p><ul><li>Insegnare a lanciare un canto</li><li>Insegnare al reparto alcuni semplici canti</li><li>Curare la formazione nel reparto di un repertorio di base di canti</li><li>Realizzare un canzoniere di reparto o di squadriglia e tenerlo aggiornato</li><li>Approfondire le origini di alcuni canti scout</li><li>Intonare e guidare la squadriglia o il reparto nei canti</li></ul>"
        },{
          name: "Carpentiere navale",
          slug: "carpentiere_navale",
          description: "<p>Il <b>carpentiere navale</b> è colui che sa compiere le più comuni riparazioni alle imbarcazioni del reparto e, all’occorrenza, è capace di costruire un piccolo natante.</p><ul><li>Conoscere gli elementi costitutivi di un’imbarcazione di legno e i materiali per le costruzioni marine; i più comuni attrezzi di carpenteria (trapano, viti, sega, ascia e carta vetrata); le norme di sicurezza nell’uso di utensili elettrici.</li><li>Saper svolgere alcuni lavori di riparazione e rimessa in armamento di uno scafo, con l’utilizzo di vari materiali, tra cui corda e pece per calafatare e vetroresina.</li><li>Saper costruire un kayak o una piccola imbarcazione.</li></ul>"
        },{
          name: "Ciclista",
          slug: "ciclista",
          description: "<p>Il <b>ciclista</b> è colui che utilizza la bicicletta in percorsi su strada o su pista, per cicloturismo o in fuoristrada.</p><ul><li>Conoscere le origini storiche del ciclismo, i sistemi per mantenere in efficienza la bicicletta, la corretta posizione sulla bicicletta, l’alimentazione prima, durante e dopo un’uscita in bicicletta.</li><li>Saper come equipaggiarsi e come equipaggiare la bicicletta per percorsi di più giorni e come allenarsi.</li><li>Saper dimostrare padronanza della bicicletta ed equilibrio, resistenza su una lunga distanza, velocità su una breve distanza.</li><li>Saper effettuare anche in uscita le principali riparazioni.</li><li>Saper organizzare una gimcana ciclistica e un'uscita in bicicletta.</li><li>Leggere correttamente le carte topografiche e stradali.</li></ul>"
        },{
          name: "Collezionista",
          slug: "collezionista",
          description: "<p>Questa sostituisce le specialità di Filatelista e Numismatico</p><p>Il <b>filatelista</b> è un collezionista che, oltre a raccogliere tutti i francobolli possibili, li ordina e cerca di conoscerne gli aspetti legati.</p><ul><li>Conoscere:<ul><li>i diversi tipi di dentelli, filigrana, stampa, gomma e carta utilizzata per realizzare i francobolli</li><li>la distinzione tra un timbro filatelico e uno usato per spedire una lettera o una cartolina per posta</li><li>le buste primo giorno e cartoline maximum, libretti o foglietti</li><li>il modo di procurarsi, al più basso costo possibile, “oggetti postali” usati in occasioni o in condizioni particolari</li><li>la storia della filatelia scout</li></ul></li><li>Saper utilizzare un catalogo di francobolli e capire perché e quando un francobollo è stato emesso, da quali paesi contemporaneamente, in quali condizioni e per commemorare quali avvenimenti.</li><li>Sapere allestire una piccola mostra filatelica.</li></ul><p>Il <b>numismatico</b> è un raccoglitore, un collezionista, ma ancor di più un conoscitore del valore culturale e comunicativo della moneta.</p><ul><li>Un buon numismatico non si riconosce dal possedere monete costose: inizialmente può essere ugualmente valido raccogliere il calco delle monete più costose o rare.</li><li>Conoscere:<ul><li>i paesi che hanno emesso le monete che raccoglie,</li><li>i relativi periodi e circostanze storico-geografiche di emissione,</li><li>il potere di acquisto del tempo;</li></ul></li><li>Saper:<ul><li>utilizzare un catalogo per il riconoscimento e la classificazione delle monete,</li><li>allestire una mostra numismatica.</li></ul></li></ul>"
        },{
          name: "Coltivatore",
          slug: "coltivatore",
          description: "<p>Il <b>coltivatore</b> è colui che riesce a gestisce un piccolo orto in campagna o nel giardino di casa.</p><ul><li>E' interessato a tutto ciò che riguarda la vita dei campi;</li><li>Conosce le principali lavorazioni durante l'anno, le più importanti avversità delle piante, la rotazione delle colture;</li><li>Sa quali sono gli elementi che caratterizzano l’agricoltura biologica;</li><li>Sa usare i principali attrezzi presenti in un’azienda agricola</li><li>Sa coltivare le principali piante da orto nelle varie stagioni;</li><li>Conoscere:<ul><li>il calendario delle semine dell’orto,</li><li>le principali piante da orto e i terreni adatti per la loro crescita,</li><li>elementari conoscenze sulle irrigazioni,</li><li>alcune nozioni sulla concimazione;</li></ul></li><li>Saper:<ul><li>preparare un letto di semina,</li><li>seminare e successivamente trapiantare ogni pianta da orto,</li><li>usare i più comuni attrezzi da orto,</li><li>realizzare una piccola serra, con legno, plastica, ferro o altri materiali,</li><li>valutare la più idonea qualità del seme e la concimazione giusta per ogni coltura</li><li>curare le varie malattie delle piante da orto.</li></ul></li></ul>"
        },{
          name: "Corrispondente",
          slug: "corrispondente",
          description: "<p>Un buon <b>corrispondente</b>:</p><ul><li>E' colui che è aperto alla conoscenza e alla comunicazione con altre persone, ed è sempre disponibile a rispondere a tutti.</li><li>Conosce correttamente la lingua in cui corrisponde e il maggior numero possibile di mezzi di scrittura e comunicazione esistenti e il loro uso.</li><li>Sa tenere una corrispondenza prolungata e regolare con un numero consistente di persone.</li><li>Conserva uno schedario aggiornato con i dati di ogni amico di penna e uno scadenziario per organizzare le risposte alle lettere.</li><li>Raccoglie notizie sul folclore, le tradizioni, le bellezze artistiche e paesaggistiche dei luoghi dove risiedono i propri amici di penna.</li></ul>"
        },{
          name: "Corrispondente radio",
          slug: "corrispondente_radio",
          description: "<p>Un buon <b>corrispondente radio</b>:</p><ul><li>E' colui che conosce la natura delle onde radio, la loro diffusione e l’importanza delle comunicazioni senza fili.</li><li>Conosce le autorizzazioni rilasciate dal Ministero delle comunicazioni per apparati CB e 43 MHz</li><li>Conosce almeno due tipi di ricetrasmettitori, il linguaggio usato dai radioamatori, alcuni tipi di antenna e i cavi di alimentazione e la struttura di una maglia radio per l'emergenza.</li></ul>"
        },{
          name: "Cuoco",
          slug: "cuoco",
          description: "<p>Il <b>cuoco</b> è colui che riesce a unire la buona tavola con i principi della sana nutrizione e nello stesso tempo non fa saltare il bilancio della squadriglia.</p><ul><li>Conoscere i principali prodotti base della nostra cucina, le combinazioni migliori e le eventuali incompatibilità alimentari.</li><li>Sapere i tempi e modi di cottura dei prodotti, le loro diverse capacità nutritive, le dosi necessarie per persona, nonché i prezzi dei prodotti principali e la resa calorica dei vari tipi di legname.</li><li>Essere in grado di accendere un fuoco e preparare un pasto caldo con qualsiasi tempo.</li><li>Aver cura del materiale di cucina della propria squadriglia.</li></ul>"
        },{
          name: "Danzatore",
          slug: "danzatore",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008."
        },{
          name: "Disegnatore",
          slug: "disegnatore",
          description: "<p>Il <b>disegnatore</b> è colui che, avendo una particolare abilità nel disegno e nelle arti grafiche, dà la sua disponibilità ogni volta sia necessario produrre cartelloni e tutte quelle attività che hanno a che fare con i colori.</p><ul><li>Conoscere le tecniche del disegno dal vero</li><li>Sapere l’uso corretto dei materiali per disegno e la loro resa.</li><li>Saper riprodurre con buona fedeltà la realtà</li><li>Saper miscelare i tre colori primari per ottenere gli altri</li><li>Saper diluire i colori per ottenere la giusta consistenza.</li></ul>"
        },{
          name: "Elettricista",
          slug: "elettricista",
          description: "<p>Un buon <b>elettricista</b> deve:</p><ul><li>conoscere le leggi fisiche che regolano la corrente elettrica e tutti i fenomeni collegati a essa</li><li>sapere i pericoli connessi all'utilizzo della corrente e le principali norme di prevenzione.</li><li>saper eseguire piccoli lavori di manutenzione elettrica.</li><li>riuscire a realizzare semplici circuiti elettrici e dimensionare una linea elettrica in base all’assorbimento degli utilizzatori.</li></ul>"
        },{
          name: "Elettronico",
          slug: "elettronico",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008."
        },{
          name: "Esperto del computer",
          slug: "esperto_del_computer",
          description: "<p>L’<b>esperto del computer</b> è colui che sa utilizzare un personal computer</p><ul><li>Conoscere:<ul><li>l’utilizzo dei principali componenti di un computer</li><li>i componenti principali del sistema operativo in uso</li><li>il significato di file, cartelle, collegamenti, dischi</li><li>i principali tipi di file generali e quelli specifici per il sistema operativo utilizzato</li><li>un programma di editoria elettronica e almeno un altro programma d’impiego specifico</li><li>l’uso delle principali periferiche di un computer</li></ul></li><li>Sapere:<ul><li>mantenere in efficienza un computer con manutenzione hardware e software.</li><li>installare, utilizzare e tenere aggiornato almeno un programma antivirus.</li><li>comprimere e decomprimere un archivio.</li><li>gestire le principali operazioni sulle e-mail e usare un browser.</li><li>utilizzare un programma di elaborazione testi o editoria elettronica per realizzare una relazione per un’impresa o un giornalino</li><li>utilizzare un programma di database per gestire piccoli archivi</li><li>utilizzare e-mail/newsletter/forum per tenere i contatti con scout di altri reparti e nazioni ed eseguire una ricerca sul web per degli argomenti utili ad un’attività scout</li></ul></li></ul>"
        },{
          name: "Europeista",
          slug: "europeista",
          description: "<p>L’<b>europeista</b> è interessato alla storia e alla cultura europea.</p><ul><li>Conoscere le linee generali della storia europea, in particolare la geopolitica delle nazioni europee</li><li>Comprendere le tradizioni e le culture più importanti, le strutture politiche e organizzative dell’Europa</li><li>Conoscere una lingua straniera europea.</li><li>Tenere una corrispondenza con persone di un altro stato europeo</li><li>Essere in grado di preparare mostre o attività che presentino la cultura europea, un fuoco a tema o una pubblicazione che parli di una nazione europea.</li></ul>"
        },{
          name: "Fa tutto",
          slug: "fa_tutto",
          description: "<p>Il <b>fa tutto</b>, noto anche come <b>OMNIA</b> è uno specialista del “fai da te”:</p><ul><li>Se la sa cavare nel risolvere piccole difficoltà in sede, in casa o al campo</li><li>Conosce:<ul><li>l’uso dei più comuni attrezzi che possono servire nelle lavorazioni e riparazioni in sede e in casa</li><li>le principali tecniche di primo soccorso in caso di incidenti domestici.</li></ul></li><li>Sa dove sono i principali artigiani e negozi vari nei pressi di casa e della sede.</li><li>Riesce a risolvere i problemi che sorgono</li><li>E' in grado di:<ul><li>fare piccoli lavori di carpenteria</li><li>ripulire il sifone di un lavandino</li><li>montare un fornello a gas con tubo e attacco per la bombola</li><li>cambiare la serratura di una porta</li><li>sostituire una tapparella</li><li>sostituire una lampadina</li><li>mantenere in ordine ed efficienza gli strumenti utilizzati</li><li>verniciare correttamente una porta o altro oggetto casalingo</li><li>imbiancare una parete</li><li>sostituire un vetro rotto</li><li>costruire elementi dell’arredo dell’angolo di squadriglia della sede di reparto</li></ul></li></ul>"
        },{
          name: "Falegname",
          slug: "falegname",
          description: "<p>Il <b>falegname</b>:</p><ul><li>Sa utilizzare il legno come materia prima per costruire oggetti</li><li>Conosce:<ul><li>I vari tipi di legno e il loro corretto utilizzo</li><li>I tempi di stagionatura necessari</li><li>I modi per conservare correttamente il legname</li><li>I tipi diversi di colla e procedure utilizzate nell’incollaggio del legno</li><li>I principali strumenti di lavoro portatili e fissi</li><li>Il modo corretto di tagliare, forare, piegare il legno</li><li>La corretta verniciatura del legno e la preservazione dall’attacco di agenti esterni</li></ul></li><li>Sa realizzare un progetto rispettando le giuste proporzioni in funzione del suo utilizzo</li><li>E’ in grado di:<ul><li>Segare, levigare, forare, intagliare correttamente i diversi tipi di legno</li><li>Affilare uno scalpello e una pialla</li><li>Praticare incastri solidi e ben fatti.</li><li>Avvitare, incollare due pezzi di legno.</li><li>Realizzare un semplice mobile di uso comune.</li><li>Mantenere in ordine ed efficienza gli strumenti utilizzati.</li></ul></li></ul>"
        },{
          name: "Folclorista",
          slug: "folclorista",
          description: "<p>Il <b>folclorista</b> si interessa delle tradizioni in particolare dei luoghi in cui vive, ma anche di altre località.</p><ul><li>Conoscere:<ul><li>i concetti di tradizione, usanza, cultura</li><li>la storia locale della sua regione e dell’Italia</li><li>le principali ricorrenze e festività, con il loro significato e la loro storia</li><li>i principali canti e danze tradizionali</li><li>le nozioni di base di dialetti e lingue, oltre alle diverse culture ed etnie, del territorio in cui ha sede il gruppo.</li></ul></li><li>Saper spiegare e raccontare le tradizioni più significative del luogo in cui ha sede il gruppo, anche attraverso manifesti, piccole pubblicazioni, attività espressive.</li><li>Riesce a prendere contatto con gli organi e le associazioni che preservano le realtà culturali del territorio</li><li>Saper cantare e insegnare canti tradizionali popolari e una danza tradizionale.</li></ul>"
        },{
          name: "Fotografo",
          slug: "fotografo",
          description: "<p>Un buon <b>fotografo</b>:</p><ul><li>conosce:<ul><li>i principi della fotografia e documenta fotograficamente i momenti importanti della vita di squadriglia, del reparto o del gruppo</li><li>gli elementi di tecnica fotografica, di inquadratura e di ripresa</li><li>le tipologie della fotografia</li><li>la scelta e l’uso di pellicole fotografiche</li><li>la diaproiezione</li><li>lo sviluppo fotografico.</li></ul></li><li>sa tenere un album o un archivio delle foto.</li><li>organizza una mostra fotografica, una diaproiezione, un reportage.</li></ul>"
        },{
          name: "Giardiniere",
          slug: "giardiniere",
          description: "<p>Il <b>giardiniere</b> ama coltivare fiori, arbusti e piante per l’ornamento delle case e dei giardini e segue con grande precisione il ciclo vitale delle varie piante.</p><ul><li>Conoscere:<ul><li>un discreto numero di fiori o piante decorative</li><li>le principali malattie delle piante da fiore e i rimedi per curarle</li><li>almeno due tipi di innesto e la pratica delle principali potature</li><li>i più comuni concimi da giardinaggio presenti sul mercato.</li></ul></li><li>Saper:<ul><li>piantare semi e bulbi.</li><li>distinguere la riproduzione di piante per talea, propaggine e margotta.</li><li>coltivare e potare le rose,</li><li>miscelare i prodotti antiparassitari che comunemente vengono usati nei giardini.</li><li>creare una piccola biblioteca con testi di giardinaggio e riviste del settore.</li></ul></li></ul>"
        },{
          name: "Giocattolaio",
          slug: "giocattolaio",
          description: "<p>Il <b>giocattolaio</b> è chi sa costruire giocattoli utilizzando vari materiali, anche di recupero.</p><ul><li>Conoscere:<ul><li>nozioni sulla storia del giocattolo, tradizioni e giocattoli locali</li><li>elementi di base sui materiali e sugli attrezzi utilizzati per costruire giocattoli</li></ul></li><li>Saper costruire giocattoli con i materiali più comuni o con materiali di recupero</li><li>Compiere piccole riparazioni di giocattoli rotti</li></ul>"
        },{
          name: "Grafico",
          slug: "grafico",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008."
        },{
          name: "Guida",
          slug: "guida",
          description: "<p><b>Guida</b> è chi sa “guidare” bene gli altri nei luoghi in cui vive, in autonomia, e conducendovi con sicurezza piccoli gruppi.</p><ul><li>Conoscere:<ul><li>le caratteristiche del luogo in cui vivi e dintorni, dei servizi, dei trasporti</li><li>i principali collegamenti con i centri vicini.</li></ul></li><li>Saper leggere le carte della zona e della città.</li><li>Orientarsi rispetto ai principali punti di riferimento dei luoghi nei quali ti trovi, e realizzarne una mappa.</li><li>Rendersi utile offrendo indicazioni a chi arriva dall’esterno e, all’occorrenza, risolvendone le difficoltà.</li><li>Organizzare un percorso di visita per piccoli gruppi, sia all’interno del centro abitato sia nei dintorni.</li></ul>"
        },{
          name: "Guida marina",
          slug: "guida_marina",
          description: "<p>La <b>guida marina</b> è l’esperto della propria costa, la persona a cui può rivolgersi chiunque navighi per avere tutte le informazioni utili del luogo.</p><ul><li>Conoscere:<ul><li>la costa della località in cui vive: gli approdi, porti e servizi</li><li>la fauna e la flora della zona costiera e i rischi che corre</li><li>le fonti delle informazioni meteorologiche locali</li><li>le persone a cui rivolgersi in caso di emergenza in acqua</li></ul></li><li>Saper rendersi utile qualora ce ne fosse bisogno, offrendo ogni di tipo di informazione a chi naviga nella zona</li><li>Saper leggere una carta nautica e interpretare la profondità dei fondali, fari e fanali, punti di approdo, tratti in cui non si può navigare e ogni altra indicazione utile</li><li>Saper individuare le coordinate di un punto al largo con l’uso della carta, e fornire indicazioni per raggiungerlo.</li><li>Essere in grado di usare una barca a remi e conoscere l’uso di una radio Vhf e le norme per comunicare.</li></ul>"
        },{
          name: "Hebertista",
          slug: "hebertista",
          description: "<p>L’<b>hebertista</b>:</p><ul><li>segue un metodo naturale di educazione fisica per lo sviluppo completo delle qualità motorie della persona, attraverso l’utilizzo dei gesti tipici della specie umana</li><li>non ricerca però lo sviluppo fisico fine a se stesso, ma la preparazione di persone che si mettano al servizio degli altri in quanto robuste e preparate</li></ul><p>Il motto dell’hebertismo è «essere forti per essere utili», in linea con il motto scout «siate preparati».</p><ul><li>conosce:<ul><li>chi era Georges Hébert</li><li>le dieci “famiglie” e la conduzione di un plateau</li><li>nozioni di igiene e corretta alimentazione</li></ul></li><li>si sente responsabile della sua salute</li><li>si allena quotidianamente cercando di sviluppare le sue capacità e abilità</li><li>conduce sane e corrette abitudini igieniche e alimentari</li><li>sa realizzare la propria scheda antropometrica che aggiorna periodicamente</li><li>sa organizzare un percorso Hébert in natura sfruttando le risorse che l’ambiente offre</li><li>organizza le campiadi e giochi scout.</li></ul>"
        },{
          name: "Idraulico",
          slug: "idraulico",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008"
        },{
          name: "Infermiere",
          slug: "infermiere",
          description: "<p>L’<b>infermiere</b> si occupa del primo soccorso, in reparto e dovunque sia necessario.</p><ul><li>Avere nozioni di:<ul><li>Anatomia e del funzionamento dei principali organi del corpo umano.</li><li>Igiene di prevenzione delle malattie.</li></ul></li><li>Saper praticare le attività di base del primo soccorso e in particolare:<ul><li>Il controllo della situazione di salute con la rilevazione dei parametri vitali</li><li>Le prime cure nelle situazioni di bisogno più comuni</li><li>Il comportamento corretto in caso di incidente traumatico, asfissia o avvelenamento</li><li>Qualora la situazione lo richieda, trasportare i feriti e se necessario costruire una barella d'emergenza</li></ul></li><li>Conoscere e saper adoperare i più comuni medicinali di automedicazione.</li><li>Custodire e mantenere la cassetta di pronto soccorso personale e quella di squadriglia.</li><li>Controllare la situazione igienica dell'angolo di squadriglia in sede e al campo estivo.</li></ul>"
        },{
          name: "Interprete",
          slug: "interprete",
          description: "<p>L’<b>interprete</b> è colui che è interessato alla comunicazione e alla linguistica.</p><ul><li>Conoscere:<ul><li>una lingua straniera e si mette a disposizione per contatti con persone che parlano questa lingua</li><li>la grammatica, un buon vocabolario e la corretta pronuncia di una lingua estera</li><li>la storia e la cultura del paese o dei paesi in cui si parla questa lingua</li></ul></li><li>Saper:<ul><li>parlare e leggere correntemente la lingua prescelta.</li><li>tradurre testi da questa lingua all’italiano e viceversa.</li><li>intrattenere una conversazione con persone che parlano questa lingua.</li></ul></li><li>Organizzare una mostra, una pubblicazione o un’attività riguardante i paesi della lingua prescelta.</li><li>Promuovere occasioni d’incontro con cittadini dei paesi dove si parla questa lingua.</li></ul>"
        },{
          name: "Lavoratore in cuoio",
          slug: "lavoratore_in_cuoio",
          description: "<p>Il <b>lavoratore in cuoio</b> è colui che sa utilizzare il cuoio per la realizzazione di oggetti.</p><ul><li>Conoscere:<ul><li>le principali regole di conceria e della lavorazione del cuoio</li><li>la cucitura, il taglio e la tintura del cuoio, utilizzando gli strumenti per la lavorazione</li></ul></li><li>Saper disegnare e incidere il cuoio a scopo ornamentale</li></ul>"
        },{
          name: "Maestro dei giochi",
          slug: "maestro_dei_giochi",
          description: "<p>Il <b>maestro dei giochi</b> è chi conosce e sa organizzare, animare e arbitrare giochi.</p><ul><li>Conoscere:<ul><li>come si organizza, si anima e si gestisce un gioco</li><li>lo scopo del gioco</li><li>la storia e il significato di alcuni tra i giochi più comuni, popolari o sportivi</li><li>le regole di un numero significativo di giochi, in particolare di grandi giochi e giochi scout.</li></ul></li><li>Saper:<ul><li>tenere e aggiornare un quaderno di giochi con regole, modalità organizzative e necessità logistiche</li><li>organizzare e gestire un grande gioco di reparto, in occasione di un’uscita, San Giorgio, campo estivo, campo invernale.</li><li>organizzare, spiegare e arbitrare i tradizionali giochi scout</li></ul></li><li>Proporre e animare giochi in squadriglia e nel reparto.</li><li>Essere in grado di dimostrare in più occasioni di saper far giocare “di squadra” la propria squadriglia.</li><li>Inventare almeno un nuovo gioco ed utilizzarlo con la squadriglia o con il reparto.</li></ul>"
        },{
          name: "Maestro dei nodi",
          slug: "maestro_dei_nodi",
          description: "<p>Il <b>maestro dei nodi</b> è chi si occupa di cime (corde e funi per i non nautici), nodi e manutenzione delle vele.</p><ul><li>Conosce la fattura e i materiali con cui si costruiscono le cime e le caratteristiche tecniche delle diverse cime, in quali occasioni e per quali nodi è preferibile l’uso di un materiale o di un tipo di lavorazione piuttosto che un altro.</li><li>Sa come addugliare e riporre in ordine le cime in modo che chiunque le possa utilizzare senza faticare troppo a sciogliere nodi e nodini</li><li>Sa realizzare una discreta quantità di nodi, la legatura quadra, a croce e a testa di capra e l’impiombatura di una cima.</li><li>Sa costruire una rete, un’amaca o una scala di corde</li><li>Riesce a riparare una vela o una tenda strappata.</li></ul>"
        },{
          name: "Meccanico",
          slug: "meccanico",
          description: "<p>Il <b>meccanico</b> è colui che:</p><ul><li>riesce a far ripartire e riparare qualsiasi motore o pompa dell’acqua o generatore di energia;</li><li>conosce:<ul><li>le regole fondamentali dei principi fisici della meccanica,</li><li>i principi di funzionamento di un motore,</li><li>i guasti a cui sono maggiormente soggetti motori a scoppio,</li><li>i vari tipi di chiavi e attrezzi che usano i meccanici;</li></ul></li><li>sa eseguire piccole riparazioni su motori a scoppio e piccoli lavori con ferro e altri materiali ferrosi;</li><li>riesce a riparare piccoli attrezzi;</li><li>segue la manutenzione di motori o organi in movimento.</li></ul>"
        },{
          name: "Modellista",
          slug: "modellista",
          description: "<p>Questa sostituisce le specialità di Aereomodellista e Modellista Navale</p><p>L'<b>aeromodellista</b>:</p><ul><li>Sa riprodurre le caratteristiche e i dettagli di diversi tipi di velivolo.</li><li>Conosce la storia del volo umano e dell'aeronautica, i vari tipi e modelli di velivolo.</li><li>Conosce le nozioni fondamentali dell’aerodinamica.</li><li>Sa costruire e far volare almeno un modello di aereo.</li><li>Riconoscere in volo i tipi più noti di aerei</li></ul><p>Il <b>modellista navale</b> è appassionato di navi e imbarcazioni in miniatura.</p><ul><li>Conoscere le varie tecniche di esecuzione dei modelli di navi e imbarcazioni e la relativa terminologia;</li><li>Sapere l’evoluzione della tecnica costruttiva delle navi nel corso dei secoli e i principi elementari della costruzione delle navi;</li><li>Essere in grado di costruire un modello statico “per ordinate” o “a pane e burro”, rifinito in tutti i suoi particolari.</li></ul>"
        },{
          name: "Muratore",
          slug: "muratore",
          description: "<p>Il <b>muratore</b> è chi sa realizzare semplici opere in muratura e piccole riparazioni edilizie.</p><ul><li>Conoscere:<ul><li>i diversi tipi di materiali,</li><li>la loro origine e la loro composizione,</li><li>l’uso e la manutenzione degli attrezzi,</li><li>le norme di sicurezza da osservare durante questa attività;</li></ul></li><li>Saper impastare il cemento a mano e con la betoniera e fare una piccola gettata;</li><li>Compiere piccole riparazioni quali la sostituzione di piastrelle, il rifacimento di un intonaco, la sistemazione di tegole etc.&nbsp;;</li><li>Allestire un piccolo ponteggio;</li><li>Realizzare una semplice parete in muratura;</li><li>Saper tamponare correttamente un foro o un vano nel muro.</li></ul>"
        },{
          name: "Musicista",
          slug: "musicista",
          description: "<p>Un <b>musicista</b> deve:</p><ul><li>Leggere il pentagramma, avendo almeno nozioni basilari di solfeggio parlato e cantato</li><li>Scrivere su rigo musicale una successione ritmica ascoltata</li><li>Suonare almeno uno strumento e utilizzarlo, per quanto possibile, durante le attività</li><li>Realizzare piccole composizioni, canoni, canti, ecc...</li><li>Organizzare e dirigere un piccolo coro; un piccolo gruppo strumentaleper accompagnare i canti e le danze</li><li>Costruire un piccolo strumento musicale</li></ul>"
        },{
          name: "Naturalista",
          slug: "naturalista",
          description: "<p>Il <b>naturalista</b> è un esploratore di boschi, prati, spiagge e stagni, sempre alla ricerca di nuove scoperte. Ama il creato in ogni sua creatura o manifestazione.</p><ul><li>Conoscere:<ul><li>le regole che governano il mondo naturale,</li><li>l’ecologia,</li><li>le piante e gli animali,</li><li>le formazioni geologiche e le aree fossilifere,</li><li>la vita nell’acqua,</li><li>l’alternarsi delle stagioni,</li><li>il calendario dei cicli biologici;</li></ul></li><li>Saper realizzare carte tematiche di aree che ha esplorato;</li><li>Valutare la catena alimentare di un territorio e saperne individuare i componenti;</li><li>Condurre analisi sulle presenze vegetali in una data area;</li><li>Scoprire la presenza animale utilizzando tracce, impronte e canti/versi;</li><li>Saper programmare ricerche in ogni stagione</li><li>Conoscere l’importanza della salvaguardia dell’ambiente.</li><li>Essere in grado di scoprire, registrare e denunciare i casi di degrado ambientale.</li></ul>"
        },{
          name: "Nuotatore",
          slug: "nuotatore",
          description: "<p>Un <b>nuotatore</b> è chi ha una buone conoscenze e pratica del nuoto e del salvamento e sa metterle a disposizione attraverso attività di prevenzione degli infortuni in acqua ed è preparato a intervenire in caso di necessità.</p><ul><li>Conoscere:<ul><li>le origini del nuoto,</li><li>alcuni stili,</li><li>la correzione degli errori più comuni in riferimento ai diversi stili,</li><li>gli effetti del movimento in acqua, il modo di alimentarsi, di allenarsi,</li><li>i pericoli in acqua, la prevenzione dei malori che possono capitare nuotando e le principali tecniche di liberazione dalle prese di un annegando e di trasporto fino a riva,</li><li>nozioni di primo soccorso in caso di annegamento;</li></ul></li><li>Saper:<ul><li>nuotare almeno in due stili e con sufficiente resistenza,</li><li>tuffarsi e recuperare un oggetto ad alcuni metri di profondità,</li><li>lanciare con precisazione una ciambella di salvataggio,</li><li>trasportare, in caso di necessità, un annegando,</li><li>curare le eventuali dotazioni di sicurezza in acqua del reparto.</li></ul></li></ul>"
        },{
          name: "Osservatore",
          slug: "osservatore",
          description: "<p>L' <b>osservatore</b> è colui che ha occhi e orecchie sempre aperti, attento al luogo in cui si trova, a ciò che vi è intorno.</p><ul><li>Conoscere i principali ambienti:<ul><li>urbano (piccolo, medio e grande centro)</li><li>rurale (campagna coltivata o abbandonata)</li><li>montano (turistico, protetto, naturale)</li><li>lacustre e marino.</li></ul></li><li>Riconoscere i segni meteorologici fondamentali (tipi di nuvole, venti principali).</li><li>Esercitare con costanza i cinque sensi</li><li>Dimostrare di essere abituato a notare i piccoli dettagli delle situazioni.</li></ul>"
        },{
          name: "Osservatore meteo",
          slug: "osservatore_meteo",
          description: "<p>L' <b>osservatore meteo</b> è chi osserva ogni fenomeno atmosferico e possiede una minima strumentazione per eseguire l’analisidel tempo sullo stato del mare.</p><ul><li>Sa riconoscere la forza del vento dai suoi effetti a terra e in mare, oltre ai segni che avvertono l’avvicinarsi di un’area depressionaria.</li><li>Conosce i principi fisici, le origini e le cause dei vari dei fenomeni atmosferici e il funzionamento degli strumenti meteo (che sa allestire).</li><li>Sa fornire previsioni del tempo sulla base delle osservazioni strumentali e dirette.</li><li>Ha conoscenza dei principali siti e numeri telefonici delle stazioni di rilevamento nivo-meteorologico e sa interpretare bollettini forniti da questi servizi.</li><li>Può tenere un taccuino con annotazioni sulle condizioni meteo della sua zona.</li></ul>"
        },{
          name: "Pescatore",
          slug: "pescatore",
          description: "<p>Il <b>pescatore</b> è chi riesce a catturare pesci di cui può cibarsi, attraverso l’utilizzo di tecniche riconosciute.</p><ul><li>Possedere nozioni di base su:<ul><li>Idrologia e biologia acquatica (marina e fluviale),</li><li>Esche</li><li>Specie ittiche</li><li>Il modo corretto per utilizzare l’attrezzatura da pesca</li><li>Le abitudini dei pesci che vuoi catturare</li><li>Il funzionamento di base delle principali tecniche di pesca e di gruppo approfonderne e specializzarsi almeno in una</li><li>Come si conservano, preparano e cucinano i vari tipi di pesce.</li></ul></li><li>Possedere e conservare in modo corretto un’attrezzatura personale da pesca.</li><li>Saper fare i nodi e armare la canna da pesca, il bolentino, il palamito o l’attrezzatura di pesca che intendi approntare, sia essa nassa, rete, o altro.</li><li>Saper praticare la pesca in acqua dolce o in mare.</li><li>Pulire e preparare i pesci per cucinarli.</li></ul>"
        },{
          name: "Pompiere",
          slug: "pompiere",
          description: "<p>Il <b>pompiere</b> è chi sa come prevenire le situazioni di pericolo, e interviene quando vi è pericolo per se stesso, per gli altri e per l’ambiente.</p><p>Il pompiere è un esperto di acqua e di fuoco:</p><ul><li>Conosce le modalità di intervento per circoscrivere un principio d’incendio in qualsiasi luogo, *Sa le tecniche e gli strumenti per spegnere gli incendi e le cause di scatenamento di un incendio e di sviluppo del fumo.</li><li>Conosce quali sono le condizioni più favorevoli per l’accensione di un incendio e come prevenirle, i pericoli dell’acqua, ma anche la sua importanza e utilità, i modi per aiutare gli altri a scoprire i pericoli ed essere attenti ai rischi che possono nascere dalla cose comuni.</li><li>Sa effettuare le varie tecniche di salvataggio e di trasporto dei feriti, salire in maniera corretta i vari tipi di scale, utilizzare i vari tipi di estintori, manichette e lance.</li><li>Sa effettuare un imbracatura con la corda e riuscire a fissarla in modo sicuro.</li></ul>"
        },{
          name: "Redattore",
          slug: "redattore",
          description: "<p>Un <b>redattore</b>:</p><ul><li>E' colui che raccoglie informazioni e notizie, tiene memoria storica dei fatti ed è in grado di raccontarli.</li><li>Non possiede solo il talento della scrittura, ma anche della comunicazione:</li></ul><dl><dd><ul><li>Sa scrivere in maniera semplice per essere capito.</li><li>Conosce le basi della teoria delle comunicazioni, le varie tipologie di media e le loro differenti modalità comunicative; le parti in cui è suddiviso il giornale; i ruoli che ci sono nella redazione; le fasi di lavorazione del giornale; le tecniche giornalistiche.</li><li>Sa scrivere un articolo, condurre un'intervista, impostare un'inchiesta è in grado di valutare criticamente una notizia, confrontandone le versioni date da vari media.</li></ul></dd></dl>"
        },{
          name: "Regista",
          slug: "regista",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008"
        },{
          name: "Sarto",
          slug: "sarto",
          description: "<p>Il <b>sarto</b>:</p><ul><li>Sa rimediare agli strappi e trasforma un pezzo di stoffa in un costume per il fuoco di bivacco o abiti.</li><li>Conosce i vari punti e il loro utilizzo; il giusto tipo di stoffa a seconda della riparazione da eseguire.</li><li>Porta sempre con se una busta con il necessario per cucire.</li><li>Sa attaccare i bottoni e fare gli orli.</li><li>Mette le sue abilità a disposizione del reparto e della squadriglia.</li><li>Sa utilizzare la macchina per cucire.</li></ul>"
        },{
          name: "Scenografo",
          slug: "scenografo",
          description: "Questa specialità viene inserita nell'elenco delle specialità AGESCI dopo il Consiglio Generale del 2008"
        },{
          name: "Segnalatore",
          slug: "segnalatore",
          description: "<p>Un <b>segnalatore</b> è chi si interessa a tutto ciò che riguarda le comunicazioni e in particolare a tutti i tipi di segnalazioni.</p><ul><li>Posseddere un'ottima vista e una memoria ferrea.</li><li>Conoscere tutti i modi esistenti di segnalare</li><li>Sapere almeno un’altra lingua.</li><li>Praticare almeno tre modi diversi di segnalazione.</li><li>Trasmettere e ricevere con buona velocità.</li><li>Riuscire in caso di necessità a realizzare dei mezzi di segnalazione visibili a distanza.</li><li>Sviluppare una buona resistenza fisica.</li></ul>"
        },{
          name: "Servizio della Parola",
          slug: "servizio_della_parola",
          description: "<p>Chi vuole prendere la specialità di <b>Servizio della Parola</b>:</p><ul><li>Nella celebrazione della messa, proclama le letture e, nella vita di reparto, si impegna a far conoscere a tutti la Parola di Dio.</li><li>Conosce la struttura della Bibbia e il modo per ricercare con facilità libri e citazioni, i personaggi e gli avvenimenti più importanti dell’Antico e del Nuovo Testamento e il sistema dei cicli delle letture per le domeniche.</li><li>Sa leggere anche senza microfono, rispettando le regole della dizione e della punteggiatura.</li><li>Si esercita per proclamare la Parola di Dio, sapendosi preparare anche spiritualmente.</li><li>Prepara il Lezionario per la messa.</li><li>Compone e propone le preghiere dei fedeli più adatte alle varie circostanze.</li><li>Appunta sul quaderno di caccia tutte le citazioni e i brani utili su vari argomenti, e propone momenti di preghiera collettivi basati sulla Scrittura.</li><li>Guida la sua squadriglia nella preparazione a celebrazioni liturgiche, preghiere, veglie ecc.</li></ul>"
        },{
          name: "Servizio liturgico",
          slug: "servizio_liturgico",
          description: "<p>Chi vuole prendere la specialità di <b>Servizio liturgico</b></p><ul><li>Accompagna e serve il sacerdote durante le celebrazioni.</li><li>È attento alla maggior comprensione della messa, di cui conosce le parti e sa servire all’altare.</li><li>Conosce i vasi sacri e gli abiti del sacerdote, per poterli preparare per la messa, l’anno liturgico, l’uso e il simbolismo di gesti e oggetti liturgici ed i momenti liturgici, per prepararli con l’aiuto dell’assistente.</li><li>Sa trovare i canti adatti alle varie parti della messa e ai diversi periodi liturgici.</li><li>Conosce e spiegare i movimenti e i gesti del sacerdote e dell’assemblea durante la messa.</li><li>Guida la sua squadriglia nella preparazione a celebrazioni liturgiche, preghiere, veglie ecc.</li><li>Insegna ad altri a servire la messa.</li></ul>"
        },{
          name: "Servizio missionario",
          slug: "servizio_missionario",
          description: "<p>Chi compie il <b>servizio missionario</b>:</p><ul><li>Considera la diffusione del Vangelo come un compito primario della comunità ecclesiale, e si impegna a far conoscere questa realtà.</li><li>Conosce le azioni missionarie delle prime comunità cristiane raccontate negli Atti degli apostoli e le principali congregazioni e ordini missionari.</li><li>Segue l’attività missionaria su riviste o in altro modo.</li><li>Avvia contatti e corrispondenza in maniera costante con una zona di missione, che studi, conosci e sai presentare al reparto.</li><li>Sensibilizza il reparto sul problema delle missioni e propone iniziative di solidarietà.</li></ul>"
        },{
          name: "Topografo",
          slug: "topografo",
          description: "<p>Il <b>topografo</b>:</p><ul><li>Conosce:</li></ul><dl><dd><ul><li>I principi elementari del magnetismo terrestre</li><li>La meccanica e la fisica della bussola</li><li>Le coordinate terrestri</li><li>I principi di costruzione delle carte geografiche e topografiche</li><li>I segni convenzionali utilizzati nella cartografia terrestre</li><li>La misurazione di angoli, metodi di valutazione di altezze e distanze.</li><li>Sa usare correttamente bussola e carte topografiche e stradali, con bussola e cordino metrico.</li><li>Eseguire rilievi topografici di percorsi e aree.</li></ul></dd></dl><ul><li>Sa impiegare le scale di proporzione utilizzate sulle carte per valutare le reali distanze piane e verticali sul terreno.</li><li>Sa valutare i tempi di percorrenza di un percorso, partendo dalla rappresentazione sulla carta.</li><li>Sa utilizzare la bussola e la carta topografica con grande competenza e senza incertezze.</li><li>Sa eseguire percorsi di orientamento e marce all’azimut e saperne organizzare per la squadriglia o il reparto.</li></ul>"
        },{
          name: "Velista",
          slug: "velista",
          description: "<p>Il <b>nocchiere</b> è lo specialista della barca a vela, colui che ha una buona dimestichezza con il navigare a vela anche se non è ancora in grado di assumere stabilmente il comando di un’imbarcazione per un’attività intera.</p><ul><li>Conoscere:<ul><li>l’uso delle vele, le andature, i venti e gli ordini di manovra,</li><li>le norme di precedenza in mare e le dotazioni di sicurezza di una barca a vela,</li><li>nozioni di meteorologia, carteggio e orientamento con le stelle</li><li>la rilevazione del punto nave con la bussola per seguire una rotta assegnata;</li></ul></li><li>Saper:<ul><li>eseguire gli ordini di manovra in tutti i ruoli della barca a vela e collaborare alle manovre di recupero di uomo in mare,</li><li>dare e prendere rimorchio, ancoraggio, ormeggio e partenza da pontile/molo, spiaggia, gavitello/boa,</li><li>raddrizzare la barca dopo la scuffia,</li><li>lanciare una ciambella di salvataggio e issare a bordo il recuperato.</li></ul></li></ul>"
        }
      ]
    });
    
    var textList = new Ext.List({
      store: store,
      itemTpl : '<div style="padding-left: 30px; background: url(resources/patacchini/{slug}.jpg) 0 center no-repeat; background-size: contain;">{name}</div>',
      grouped: true,
      indexBar: true,
      title:'Specialità E/G',
      onItemDisclosure: function(record) {
        toolbar.setTitle(record.data['name']);
        descriptionPanel.update(record.data);
        imagePanel.update(record.data);
        panel.setActiveItem(sheet);
      }
    });
    
    var wrapper = new Ext.Panel({
      layout: 'fit',
      items: [textList],
      dockedItems: [{
        xtype: 'toolbar',
        title: 'Specialità'
      }]
    });
    
    var panel = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      cardSwitchAnimation: 'slide',
      items: [wrapper, sheet]
    });
    
    
  }
});
