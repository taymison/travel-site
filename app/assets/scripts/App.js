const $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {

    payTaxes() {
        console.log(this.name + " now ownes $0 in taxes.");
    }
}

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
