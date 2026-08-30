```

/* ============================================
   MOVIE BOOKING SCRIPT
============================================ */


/* Ticket Count */

let ticketCount = 1;


/* Show Time Selection */

const timeButtons =
    document.querySelectorAll(".time-btn");

const showTimeInput =
    document.getElementById("showTime");


timeButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            timeButtons.forEach(btn => {

                btn.classList.remove(
                    "selected"
                );

            });


            this.classList.add(
                "selected"
            );


            showTimeInput.value =
                this.dataset.time;

        }
    );

});



/* Ticket Counter */

function changeTickets(value) {

    ticketCount += value;


    if (ticketCount < 1) {

        ticketCount = 1;

    }


    if (ticketCount > 10) {

        ticketCount = 10;

    }


    document.getElementById(
        "ticketCount"
    ).innerText =
        ticketCount;


    document.getElementById(
        "ticketsInput"
    ).value =
        ticketCount;


    document.getElementById(
        "summaryTickets"
    ).innerText =
        ticketCount;


    updateCost();

}



/* Cost Calculation */

function updateCost() {

    if (
        typeof basePrice ===
        "undefined"
    ) {

        return;

    }


    let showType =
        document.getElementById(
            "showType"
        ).value;


    let price =
        basePrice;


    if (
        showType ===
        "Premium"
    ) {

        price += 50;

    }


    let total =
        price * ticketCount;


    document.getElementById(
        "price"
    ).innerText =
        "₹" + price;


    document.getElementById(
        "totalCost"
    ).innerText =
        "₹" + total;


    let available =
        48 - ticketCount;


    document.getElementById(
        "availableSeats"
    ).innerText =
        available;

}



/* Show Type */

const showType =
    document.getElementById(
        "showType"
    );


if (showType) {

    showType.addEventListener(
        "change",
        updateCost
    );

}



/* Form Validation */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            const date =
                document.getElementById(
                    "showDate"
                ).value;


            const time =
                document.getElementById(
                    "showTime"
                ).value;


            if (!date) {

                event.preventDefault();

                alert(
                    "Please select a show date."
                );

                return;

            }


            if (!time) {

                event.preventDefault();

                alert(
                    "Please select a show time."
                );

                return;

            }

        }
    );

}```
