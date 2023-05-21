<template>
    <div class="shop-container">
        <h2 class="shop-title">Tickets zum Verkauf</h2>
        <div class="ticket-grid">
            <div v-for="ticket in tickets" :key="ticket.id" class="ticket-item">
                <div class="ticket-image">
                    <img :src="ticket.image" :alt="ticket.name" />
                </div>
                <div class="ticket-details">
                    <h3 class="ticket-name">{{ ticket.name }}</h3>
                    <p class="ticket-price">{{ ticket.price }} €</p>
                    <button class="buy-button" @click="buyTicket(ticket)">
                        Jetzt kaufen
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [
                {
                    id: 1,
                    name: 'Travis Scott',
                    price: 49,
                    image: '/img/konzertTicket1.jpeg',
                },
                {
                    id: 2,
                    name: 'Feel Festival',
                    price: 179,
                    image: '/img/Ticket2.jpg',
                },
                {
                    id: 3,
                    name: 'Drake',
                    price: 12,
                    image: '/img/Ticket3.gif',
                },
                {
                    id: 4,
                    name: 'Coldplay',
                    price: 89,
                    image: '/img/Ticket4.jpg', // aktualisiere den Pfad zu deinem Bild
                },
                {
                    id: 5,
                    name: 'Lady Gaga',
                    price: 99,
                    image: '/img/Ticket5.jpg', // aktualisiere den Pfad zu deinem Bild
                },
                {
                    id: 6,
                    name: 'Eminem',
                    price: 69,
                    image: '/img/Ticket6.jpg', // aktualisiere den Pfad zu deinem Bild
                },
                // Weitere Tickets hier hinzufügen

                // Weitere Tickets hier hinzufügen
            ],
        };
    },
    methods: {
        buyTicket(ticket) {
            // Logik für den Kauf eines Tickets
            console.log('Ticket gekauft:', ticket);
        },
    },
};
</script>

<style scoped>
body {
    background-color: #ffffff;
    color: #fff;
    font-family: Arial, sans-serif;
}

.shop-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.shop-title {
    margin-bottom: 20px;
    color: #ffffff;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
}

.ticket-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
}

.ticket-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #282828;
    padding: 20px;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.ticket-item:hover {
    transform: scale(1.05);
}

.ticket-image {
    margin-bottom: 10px;
    width: 100%;
    object-fit: cover;
}

.ticket-details {
    text-align: center;
}

.ticket-name {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.ticket-price {
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #f44336;
}

.buy-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1em;
}
.buy-button:hover {
    background-color: #0056b3;
}
</style>
