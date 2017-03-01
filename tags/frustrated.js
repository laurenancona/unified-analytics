/* Frustrated.js by Isis Anchalee @isisAnchalee
   https://github.com/isisAnchalee/Frustrated.js */

<script async='true'>
  (function () {
    var eventsArr = [];

    document.addEventListener("click", function(even) {
      eventsArr.push(new Date());

      // Dispatch an event if a user clicks more than 5 times in >800ms
      if (eventsArr.length > 5){
        for (var i= eventsArr.length-5; i<=eventsArr.length-2; i++){
          if ((eventsArr[i+1]-eventsArr[i])/3+(eventsArr[i+2]-eventsArr[i+1])/3+(eventsArr[i+3]-eventsArr[i+2])/3 <= 800){

          /* Uncomment below to test if frustrated.js is loading on desired pages
             An alert will appear if any element is clicked more tha 5x in >800ms */

            // var customerFrustratedEvent = new CustomEvent(
            //   "customerFrustrated",
            //   {
            //     detail: {
            //       message: "Customer is frustrated!",
            //       time: new Date()
            //     },
            //     bubbles: true,
            //     cancelable: true
            //   }
            // );

            eventsArr = [];
            document.dispatchEvent(customerFrustratedEvent);
          }
        }
      }
    });
  })();
</script>

/* Listen for frustrated user event and push it to the data layer
Create a Tag Manager trigger that listens for a custom event "frustratedEvent"
and use it to fire Custom Google Analytics Event Tag */

<script type="text/javascript">
  document.addEventListener("customerFrustrated", function(e){
    dataLayer.push({ 'event': 'frustratedEvent' });
    }, false);
</script>
