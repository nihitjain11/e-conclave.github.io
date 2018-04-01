$(function(){
  var participant = [
    { value: 'Anurag Pandey | anurag.pandey_cs15@gla.ac.in', data: '<a href="certi/50v/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Sagar Agrwal | sagar.agrwal_cs15@gla.ac.in', data: '<a href="certi/50v/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Priyasha Ahuja | priyashaahuja11@gmail.com', data: '<a href="certi/50v/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Harsh Mishra | harsh.mishra_cs17@gla.ac.in', data: '<a href="certi/50v/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Kaushal Kishor Sharma | sharmakaushal917@gmail.com', data: '<a href="certi/50v/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Vinay Sharma | sharmavinay838@gmail.com', data: '<a href="certi/50v/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Gaurangi Agrawal | gaurangi.agrawal@gmail.com', data: '<a href="certi/50v/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Priya Agrawal | priyakv1998@gmail.com', data: '<a href="certi/50v/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Pinki Kumari | ps30poniya@gmail.com', data: '<a href="certi/50v/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Anand Dikshit | anand.dikshit_ec17@gla.ac.in', data: '<a href="certi/50v/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Divyanshu Pandey | divyanshu.pnd166@gmail.com', data: '<a href="certi/50v/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Kanishk Verma | kanishkverma1509@gmail.com', data: '<a href="certi/50v/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Chirag Jain | chirag.jain_cs14@gla.ac.in', data: '<a href="certi/50v/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Sakshi Verma | shikha.verma_bsc17@gla.ac.in', data: '<a href="certi/50v/14.pdf" target="_blank" download="14.pdf">Download</a>'},
    { value: 'Rohan Kumar Gupta | rohangpt70@gmail.com', data: '<a href="certi/50v/15.pdf" target="_blank" download="15.pdf">Download</a>'},
    { value: 'Rishab Khandelwal | rishab.khandalwal_bba17@gla.ac.in', data: '<a href="certi/50v/16.pdf" target="_blank" download="16.pdf">Download</a>'},
    { value: 'Sakshi Jain | jainsakshi900@gmail.com', data: '<a href="certi/50v/17.pdf" target="_blank" download="17.pdf">Download</a>'},
    { value: 'Rashi Jain | rashijainsjs@gmail.com', data: '<a href="certi/50v/18.pdf" target="_blank" download="18.pdf">Download</a>'},
    { value: 'Rahul Kumar Paswan | rahulpaswan175@gmail.com', data: '<a href="certi/50v/19.pdf" target="_blank" download="19.pdf">Download</a>'},
    { value: 'Shivam Sharma | shivamkatara25@gmail.com', data: '<a href="certi/50v/20.pdf" target="_blank" download="20.pdf">Download</a>'},
    { value: 'Aditya Chaturvedi | aditya.chaturvedi_bba16@gla.ac.in', data: '<a href="certi/50v/21.pdf" target="_blank" download="21.pdf">Download</a>'},
    { value: 'Vanshika | vanshikashivani@gmail.com', data: '<a href="certi/50v/22.pdf" target="_blank" download="22.pdf">Download</a>'},
    { value: 'Nishtha Gupta | gnishtha1714@gmail.com', data: '<a href="certi/50v/23.pdf" target="_blank" download="23.pdf">Download</a>'},
    { value: 'Mohit Sharma | mohit.sharma_bba17@gla.ac.in', data: '<a href="certi/50v/24.pdf" target="_blank" download="24.pdf">Download</a>'},
    { value: 'Arunabh Raghuvanshi | arunabh.raghuvanshi_eed17@gla.ac.in', data: '<a href="certi/50v/25.pdf" target="_blank" download="25.pdf">Download</a>'},
    { value: 'Anubhav Srivastava | anubhav.srivastava_ced17@gla.ac.in', data: '<a href="certi/50v/26.pdf" target="_blank" download="26.pdf">Download</a>'},
    { value: 'Muzahid Islam | muzahidislam300@gmail.com', data: '<a href="certi/50v/27.pdf" target="_blank" download="27.pdf">Download</a>'},
    { value: 'Sudhish Goswami | suddirock2@gmail.com', data: '<a href="certi/50v/28.pdf" target="_blank" download="28.pdf">Download</a>'},
    { value: 'Shubham Sharma | ss791313@gmail.com', data: '<a href="certi/50v/29.pdf" target="_blank" download="29.pdf">Download</a>'},
    { value: 'Kartikey Singh | kartikey.singh_bba17@gla.ac.in', data: '<a href="certi/50v/30.pdf" target="_blank" download="30.pdf">Download</a>'},
    { value: 'Ishan Rathi | Ishurathi19@gmail.com', data: '<a href="certi/50v/31.pdf" target="_blank" download="31.pdf">Download</a>'},
    { value: 'Nitin Shrivastav | srivastavanitin039@gmail.com', data: '<a href="certi/50v/32.pdf" target="_blank" download="32.pdf">Download</a>'},
    { value: 'Shashank Kumar | shashank.kumar_cs17@gla.ac.in', data: '<a href="certi/50v/33.pdf" target="_blank" download="33.pdf">Download</a>'},
    { value: 'Ishita Gupta | ishita.gupta_bbafb17@gla.ac.in', data: '<a href="certi/50v/34.pdf" target="_blank" download="34.pdf">Download</a>'},
    { value: 'Kajal Kaushik | kajal.kaushik_bbafb17@gla.ac.in', data: '<a href="certi/50v/35.pdf" target="_blank" download="35.pdf">Download</a>'},
    { value: 'Jay Otwani | jay.otwani_bbafb17@gla.ac.in', data: '<a href="certi/50v/36.pdf" target="_blank" download="36.pdf">Download</a>'},
    { value: 'Megha Varshney | devanshagrawal099@gmail.com', data: '<a href="certi/50v/37.pdf" target="_blank" download="37.pdf">Download</a>'},
    { value: 'Anuj Pathak | anuj.pathak_bca16@gla.ac.in', data: '<a href="certi/50v/38.pdf" target="_blank" download="38.pdf">Download</a>'},
    { value: 'Aman Verma | aman.verma_bca16@gla.ac.in', data: '<a href="certi/50v/39.pdf" target="_blank" download="39.pdf">Download</a>'},
    { value: 'Somya Gupta | NA', data: '<a href="certi/50v/40.pdf" target="_blank" download="40.pdf">Download</a>'},
    { value: 'Keshavi Agrawal | NA', data: '<a href="certi/50v/41.pdf" target="_blank" download="41.pdf">Download</a>'},
    { value: 'Anil Kumar | NA', data: '<a href="certi/50v/42.pdf" target="_blank" download="42.pdf">Download</a>'},
    { value: 'Shubham Garg | NA', data: '<a href="certi/50v/43.pdf" target="_blank" download="43.pdf">Download</a>'},
    { value: 'Puneet Shailza | NA', data: '<a href="certi/50v/44.pdf" target="_blank" download="44.pdf">Download</a>'},
    { value: 'Gaurangi Agrawal | NA', data: '<a href="certi/50v/45.pdf" target="_blank" download="45.pdf">Download</a>'},
    { value: 'Vinay Sharma | NA', data: '<a href="certi/50v/46.pdf" target="_blank" download="46.pdf">Download</a>'},
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name | e-mail :</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});