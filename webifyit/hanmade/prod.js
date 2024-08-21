const produceList = [
    { category: 'vegetables', name: 'Tomatoes', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg', price: 2.5 },
    { category: 'vegetables', name: 'Carrots', image: 'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-105672842/105672842.jpg', price: 1.8 },
    { category: 'fruits', name: 'Apples', image: 'https://img.freepik.com/free-photo/front-view-fresh-red-apples-with-green-plant-dark-background-color-mellow-pear-food-ripe-vitamine-diet-apples_140725-158174.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701475200&semt=ais', price: 3.0 },
    { category: 'grains', name: 'Rice', image: 'https://wallpaperbat.com/img/523058-rice-wallpaper-top-free-rice-background.jpg', price: 2.0 },
    { category: 'grains', name: 'Wheat', image: 'https://img.freepik.com/premium-photo/harvested-wheat-grain-linen-sack_406722-1462.jpg', price: 1.5 },
    { category: 'fruits', name: 'Bananas', image: 'https://static.vecteezy.com/system/resources/previews/030/683/201/large_2x/bananas-high-quality-4k-hdr-free-photo.jpg', price: 2.8 },
];

document.addEventListener('DOMContentLoaded', () => {
    const vegetablesContainer = document.getElementById('vegetables');
    const grainsContainer = document.getElementById('grains');
    const fruitsContainer = document.getElementById('fruits');

    produceList.forEach((produce) => {
        const produceItem = document.createElement('div');
        produceItem.className = 'produce-item';

        const produceImage = document.createElement('img');
        produceImage.src = produce.image;
        produceImage.alt = produce.name;
        produceImage.classList.add('produce-image'); // Add a class for styling

        const produceName = document.createElement('h2');
        produceName.textContent = produce.name;

        const producePrice = document.createElement('p');
        producePrice.textContent = `Price: ${produce.price.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.className = 'buy-button';
        buyButton.textContent = 'Bid Now';
        buyButton.addEventListener('click', () => buyProduce(location.href='bid.html'));

        const produceItemContent = document.createElement('div');
        produceItemContent.className = 'produce-item-content';
        produceItemContent.appendChild(produceName);
        produceItemContent.appendChild(producePrice);
        produceItemContent.appendChild(buyButton);

        produceItem.appendChild(produceImage);
        produceItem.appendChild(produceItemContent);

        switch (produce.category) {
            case 'vegetables':
                vegetablesContainer.appendChild(produceItem);
                break;
            case 'grains':
                grainsContainer.appendChild(produceItem);
                break;
            case 'fruits':
                fruitsContainer.appendChild(produceItem);
                break;
            default:
                console.error(`Unknown category: ${produce.category}`);
        }
    });
});

function buyProduce(produce) {
    const highestBid = 2.9; 
    const confirmation = confirm(`Do you want to buy ${produce.name} for $${produce.price.toFixed(2)}?`);
    if (confirmation) {
      if (produce.price >= highestBid) {

        const notification = document.createElement('div');
        notification.className = 'notification-success';
        notification.textContent = 'Congratulations! You won the bid!';
        document.body.appendChild(notification);
  
        setTimeout(() => {
          notification.remove(); // Dissolve the notification after a delay
        }, 2000); // Adjust the delay as needed
  
        // Implement payment and order processing
        alert('Payment successful! Thank you for your purchase.');
      } else {
        // Display a losing notification
        const notification = document.createElement('div');
        notification.className = 'notification-error';
        notification.textContent = 'Sorry, you have lost the bid.';
        document.body.appendChild(notification);
  
        setTimeout(() => {
          notification.remove();
        }, 2000);
      }
    }
}