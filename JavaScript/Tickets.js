console.log("Tickets Page Loaded!")
document.addEventListener('alpine:init', () => {
   Alpine.data('tickets', () => ({
       date: null,
       ticketTypes: [
           {
               name: 'Sri Lankan Adult',
               peak: 100,
               offPeak: 50,
               count: 0,
               total: 0
           },
           {
               name: 'Sri Lankan Child',
               peak: 50,
               offPeak: 25,
               count: 0,
               total: 0
           },
           {
               name: 'Foreign Adult',
               peak: 200,
               offPeak: 150,
               count: 0,
               total: 0
           },
           {
               name: 'Foreign Child',
               peak: 150,
               offPeak: 100,
               count: 0,
               total: 0
           },
           {
               name: 'Infant',
               peak: 0,
               offPeak: 0,
               count: 0,
               total: 0
           },
       ],
       openTimes: [
           {
               title: '7AM to 8AM',
               isPeak: false
           },
           {
               title: '8AM to 9AM',
               isPeak: false
           },
           {
               title: '9AM to 10AM',
               isPeak: false
           },
           {
               title: '10AM to 11AM',
               isPeak: true
           },
           {
               title: '11AM to 12PM',
               isPeak: true
           },
           {
               title: '12PM to 1PM',
               isPeak: true
           },
           {
               title: '1PM to 2PM',
               isPeak: false
           },
           {
               title: '2PM to 3PM',
               isPeak: false
           },
           {
               title: '3PM to 4PM',
               isPeak: true
           },
           {
               title: '4PM to 5PM',
               isPeak: true
           },
           {
               title: '5PM to 6PM',
               isPeak: true
           },
       ],

       selectedTimeSlots: [],

       showTimes: false,
       //------- Functions -------

       selectTimeSlot(index) {
        // Check if the index is already in the array
        if (this.selectedTimeSlots.includes(index)) {
            // Time slot already chosen, show an alert
            alert('Time slot already chosen.');
        } else {
            // Todo - you should be able to select time slots in the past !!!
            
            // add the index to the array
            this.selectedTimeSlots.push(index);
        }
        
        // sort the array
        this.selectedTimeSlots = this.selectedTimeSlots.sort();
        
        console.log(this.selectedTimeSlots);
    },
    
    
      

       calculate(ticketType) {

           let total = 0;

           for(const ticketType of ticketTypes){
            total += ticketType.total;
           }
       this.totalPayable=total;
       return total;
       },

       gotoCheckout(){
           // store the data in the local storage
           localStorage.setItem('savedDate', JSON.stringify(this.date));
           localStorage.setItem('savedDate', JSON.stringify(this.selectedTimeSlot));
           localStorage.setItem('ticketTypes', JSON.stringify(this.ticketTypes));
           localStorage.setItem('ticketTypes', JSON.stringify(this.totalPayable));


           // redirect to the checkout page
           window.location.href = 'Turtle-hachery-website\Details.html';
       }

   }));
})
