Vue.config.devtools = true;

var app = new Vue({
    el:"#root",
    data: {
        userOwner: {
            name: "Luigi Fiscella",
            avatar: "_2"
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_io',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        searchContact: "",
        contactsVisible: [],
        writeMessage: "",
        userIndex: 0,
    },
    methods: { 
        setActiveChat(index) {
            this.userIndex = index;
        },
        researchContact() {
            this.contacts.forEach((contact) => {
                if(contact.name.indexOf(this.searchContact) == -1) {
                    contact.visible = false;
                }
            });
            
            this.searchContact = "";
        },
        resetContactList() {
            this.contacts.forEach(contact => contact.visible = true);
        },
        getActiveChatClass(index) {
            if(this.userIndex === index) 
                return "focus-gray";
        },
        getMessageClass(index) {
            let messageClass = this.contacts[this.userIndex].messages[index].status;
            return messageClass
        },
        sendMessage () {
            let thiscontact = this.contacts[this.userIndex];
            //salvo messaggio
            thiscontact.messages.push(
                {
                    message: this.writeMessage,
                    date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                    status: 'sent'
                }
            );

            //svuoto la memoria
            this.writeMessage = '';

            //risposta autonoma
            setTimeout(() => {
                thiscontact.messages.push(
                    {
                        message: 'Ok',
                        date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                        status: 'received'
                    } 
                )
            },1000);
        },
    }
});
