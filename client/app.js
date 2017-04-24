const add = require("./adder.js");

const ViewManager = () => {
    return {
        connectEventhandlers: function() {
            document.getElementById("form-numbers")
            .addEventListener("submit", this.onSubmit.bind(this));
        },
        onSubmit: function(event) {
            event.preventDefault();

            let num1 = parseInt(document.getElementById("input-num1").value, 10);
            let num2 = parseInt(document.getElementById("input-num2").value, 10);

            const sum = add(Number(num1), Number(num2));
            console.log('hi', num1, num2, sum);
            this.renderSum(sum);
        },
        renderSum: function(number) {
            document.getElementById('sum').textContent = number;
        }
    }
};

const viewManager = ViewManager();
viewManager.connectEventhandlers();