import {templates, select, settings, classNames} from './../settings.js';
import utils from './../utils.js';
import AmountWidget from './../components/AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';


class Booking {
  constructor(widgetWrapper) {
    const thisBooking = this;

    thisBooking.starters = [];

    thisBooking.render(widgetWrapper);
    thisBooking.initWidgets();
    thisBooking.getData();
    thisBooking.initActions();
    thisBooking.sendOrder();

  }

  getData() {
    const thisBooking = this;

    const startDayParam = settings.db.dateStartParamKey + '=' + utils.dateToStr(thisBooking.datePicker.minDate);
    const endDayParam = settings.db.dateEndParamKey + '=' + utils.dateToStr(thisBooking.datePicker.maxDate);

    const params = {
      booking: [
        startDayParam,
        endDayParam,
      ],
      eventsCurrent: [
        settings.db.notRepeatParam,
        startDayParam,
        endDayParam,
      ],
      eventsRepeat: [
        settings.db.repeatParam,
        endDayParam,
      ],
    };

    const urls = {
      booking: settings.db.url + '/' + settings.db.booking + '?' + params.booking.join('&'),
      eventsCurrent: settings.db.url + '/' + settings.db.event + '?' + params.eventsCurrent.join('&'),
      eventsRepeat: settings.db.url + '/' + settings.db.event + '?' + params.eventsRepeat.join('&'),
    };

    Promise.all([
      fetch(urls.booking),
      fetch(urls.eventsCurrent),
      fetch(urls.eventsRepeat),
    ])
      .then(function(allResponses) {
        const bookingsResponse = allResponses[0];
        const eventsCurrentResponse = allResponses[1];
        const eventsRepeatResponse = allResponses[2];
        return Promise.all([
          bookingsResponse.json(),
          eventsCurrentResponse.json(),
          eventsRepeatResponse.json(),
        ]);
      })
      .then(function([bookings, eventsCurrent, eventsRepeat]) {
        thisBooking.parseData(bookings, eventsCurrent, eventsRepeat);
      });

  }

  parseData(bookings, eventsCurrent, eventsRepeat) {
    const thisBooking = this;

    thisBooking.booked = {};

    for (let item of bookings) {
      thisBooking.makeBooked(item.date, item.hour, item.duration, item.table);
    }
    for (let item of eventsCurrent) {
      thisBooking.makeBooked(item.date, item.hour, item.duration, item.table);
    }

    const minDate = thisBooking.datePicker.minDate;
    const maxDate = thisBooking.datePicker.maxDate;

    for (let item of eventsRepeat) {
      if (item.repeat == 'daily') {
        for (let loopDate = minDate; loopDate <= maxDate; loopDate = utils.addDays(loopDate, 1)) {
          thisBooking.makeBooked(utils.dateToStr(loopDate), item.hour, item.duration, item.table);
        }
      }
    }
    thisBooking.updateDOM();
  }

  makeBooked(date, hour, duration, table) {
    const thisBooking = this;

    if (typeof thisBooking.booked[date] == 'undefined') {
      thisBooking.booked[date] = {};
    }
    const startHour = utils.hourToNumber(hour);

    for (let hourBlock = startHour; hourBlock < startHour + duration; hourBlock += 0.5) {

      if (typeof thisBooking.booked[date][hourBlock] == 'undefined') {
        thisBooking.booked[date][hourBlock] = [];
      }
      thisBooking.booked[date][hourBlock].push(table);
    }
  }

  updateDOM() {
    const thisBooking = this;

    thisBooking.date = thisBooking.datePicker.value;
    thisBooking.hour = utils.hourToNumber(thisBooking.hourPicker.value);

    let allAvailable = false;

    if (
      typeof thisBooking.booked[thisBooking.date] == 'undefined' ||
      typeof thisBooking.booked[thisBooking.date][thisBooking.hour] == 'undefined'
    ) {
      allAvailable = true;
    }

    for (let table of thisBooking.dom.tables) {
      let tableId = table.getAttribute(settings.booking.tableIdAttribute);
      if (!isNaN(tableId)) {
        tableId = parseInt(tableId);
      }

      if (
        !allAvailable &&
        thisBooking.booked[thisBooking.date][thisBooking.hour].includes(tableId)
      ) {
        table.classList.add(classNames.booking.tableBooked);
      } else {
        table.classList.remove(classNames.booking.tableBooked);

      }
      thisBooking.sliderColor();
    }
  }

  initActions() {
    const thisBooking = this;

    for (let table of thisBooking.dom.tables) {
      table.addEventListener('click', function() {

        table.classList.add(classNames.booking.tableBooked);

        let tableId = table.getAttribute(settings.booking.tableIdAttribute);
        thisBooking.selectedTable = tableId;
      });
    }
  }

  sendOrder() {
    const thisBooking = this;

    const url = settings.db.url + '/' + settings.db.booking;

    const payload = {
      date: thisBooking.datePicker.value,
      hour: thisBooking.hourPicker.value,
      duration: thisBooking.hoursAmount.value,
      ppl: thisBooking.peopleAmount.value,
      table: parseInt(thisBooking.selectedTable),
      starters: [],
      phone: thisBooking.dom.phone.value,
      address: thisBooking.dom.address.value,
    };

    for (let starter of thisBooking.dom.selectedStarter) {
      if (starter.checked == true) {
        payload.starters.push(starter.value);
      }
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        thisBooking.getData();
      });

  }

  render(widgetWrapper) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = widgetWrapper;

    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);

    thisBooking.dom.tables = thisBooking.dom.wrapper.querySelectorAll(select.booking.tables);

    thisBooking.dom.selectedStarter = thisBooking.dom.wrapper.querySelectorAll(select.booking.selectedStarter);

    thisBooking.dom.phone = thisBooking.dom.wrapper.querySelector(select.cart.phone);
    thisBooking.dom.address = thisBooking.dom.wrapper.querySelector(select.cart.address);

    thisBooking.dom.form = thisBooking.dom.wrapper.querySelector(select.booking.form);

  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);

    thisBooking.dom.wrapper.addEventListener('updated', function() {
      thisBooking.updateDOM();
    });
    thisBooking.dom.form.addEventListener('submit', function() {
      event.preventDefault();
      thisBooking.sendOrder();
    });
  }

  sliderColor() {
    const thisBooking = this;

    const bookedHours = thisBooking.booked[thisBooking.date]; //godziny od 12 do 19.30 potem undefined
    const colorArray = [];
    const slider = document.querySelector('.rangeSlider');

    const openHour = settings.hours.open; //12
    const closeHour = settings.hours.close; //24
    const step = 0.5; // 30min
    //przyk??ad pol na pol: linear-gradient(to right, color 50%, color 50%)

    for (let bookedHour in bookedHours) {
      //Oblicz poczatkowy procent (bedzie 0 na poczatku (wybrana godzina - czas otwarcia *100% / 12(bo czas otwarcia restauracji)) )
      const firstValue = ((bookedHour - openHour) * 100) / (closeHour - openHour);
      //dodaj do tego 30 min
      const secondValue = (((bookedHour - openHour) + step) * 100) / (closeHour - openHour);

      if (bookedHours[bookedHour].length === 3) {
        /*brak miejsc, kolor czerowny, array.push()*/
        colorArray.push('/*' + bookedHour + '*/red ' + firstValue + '%, red ' + secondValue + '%');
      } else if (bookedHours[bookedHour].length === 2) {
        colorArray.push('/*' + bookedHour + '*/orange ' + firstValue + '%, orange ' + secondValue + '%');
      } else {
        colorArray.push('/*' + bookedHour + '*/green ' + firstValue + '%, green ' + secondValue + '%');
      }
    }

    const gradientColor = colorArray.sort(); //jak join to jest blurry
    slider.style.background = 'linear-gradient(to right, ' + gradientColor + ')'; //bo linear-gradient(to right, color 50%, color 50%)
  }
}

export default Booking;
