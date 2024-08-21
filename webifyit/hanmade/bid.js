document.addEventListener('DOMContentLoaded', function () {
    let timeLimit = 180; // Time limit in seconds
    let highestBid = 0;
    const marketPrice = 4999; // Initial market price

    // Function to display notifications
    const displayNotification = (message) => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    };

    // Function to update timer and highest bid
    const updateTimerAndHighestBid = () => {
        const minutes = Math.floor(timeLimit / 60);
        const seconds = timeLimit % 60;

        document.getElementById('time').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        document.getElementById('highestBid').textContent = `Highest Bid: ₹${highestBid}`;
    };

    // Function to end the auction
    const endAuction = () => {
        document.getElementById('placeBid').disabled = true;
        document.getElementById('payButton').disabled = false;

        if (highestBid > 0) {
            displayNotification('Congratulations! You have won the bid.');
        } else {
            displayNotification('Sorry, you have lost the bid.');
        }
    };

    // Interval to update timer and check auction end
    setInterval(function () {
        if (timeLimit <= 0) {
            endAuction();
            return;
        }

        updateTimerAndHighestBid();
        timeLimit--;
    }, 1000);

    // Event listener for placing bid
    document.getElementById('placeBid').addEventListener('click', function () {
        const bidAmount = parseFloat(document.getElementById('bidAmount').value);

        if (!isNaN(bidAmount) && bidAmount > 0) {
            if (bidAmount < marketPrice) {
                displayNotification('Bid amount is less than the market price. Please enter a higher bid.');
            } else {
                highestBid = bidAmount; // Update highest bid
                displayNotification(`Your bid of ₹${bidAmount} has been placed successfully!`);
            }
        } else {
            displayNotification('Invalid bid amount. Please enter a valid amount.');
        }
    });

    // Event listener for paying with Razorpay
    document.getElementById('payButton').addEventListener('click', function () {
        if (highestBid > 0) {
            window.location.href = 'https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-Dweb-Core&utm_adgroup=brandsearch_core_exact&utm_content=RPSME-Brand-010223&utm_term=razorpay&utm_gclid=Cj0KCQiAwvKtBhDrARIsAJj-kTii4_yFyvgIa77JMpp9EHqHS4e2CnVVizLL09x5WKBuQX-ZCvvZM6oaAjHhEALw_wcB&utm_campaignID=400139470&utm_adgroupID=27293859910&utm_adID=689518700854&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=9181884&gad_source=1&gclid=Cj0KCQiAwvKtBhDrARIsAJj-kTii4_yFyvgIa77JMpp9EHqHS4e2CnVVizLL09x5WKBuQX-ZCvvZM6oaAjHhEALw_wcB';
        } else {
            displayNotification('You cannot proceed to payment. You are not the highest bidder.');
        }
    });

});
