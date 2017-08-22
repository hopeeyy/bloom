function cityClick() {
  $( "#maps" ).empty();
  var inp = $('.city option:selected').val();
  console.log(inp);
  if (inp =="NY") {
    console.log("heyNY");
      $( "#maps" ).append("<iframe id=\"New York\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96696.79692118427!2d-74.04339649211909!3d40.76697532092729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+nyc!5e0!3m2!1sen!2sus!4v1503077984936\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
}
  if (inp =="Ch") {
     console.log("heyCh");
        $( "#maps" ).append("<iframe id=\"Chicago\"src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d380828.1966213314!2d-87.93078042011169!3d41.78046597526828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+in+chicago!5e0!3m2!1sen!2sus!4v1503080460763\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
      }
   if (inp =="NJ") {
     console.log("heyNJ");
       $( "#maps" ).append("<iframe id=\"Jersey City\" src=\"https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d48386.351502172525!2d-74.03548423114438!3d40.71478102804525!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+in+jersey+city!5e0!3m2!1sen!2sus!4v1503080571927\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
     }
   if (inp =="MI") {
     console.log("heyMI");
       $( "#maps" ).append("<iframe id=\"Miami\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d229889.11386501792!2d-80.41238256505221!3d25.802999889902956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+in+miami!5e0!3m2!1sen!2sus!4v1503080684174\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
     }
   if (inp =="SA"){
     console.log("heySA")
       $( "#maps" ).append("<iframe id=\"Sacramento\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d99835.80465118383!2d-121.52188944301807!3d38.55983433386281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+in+sacramento!5e0!3m2!1sen!2sus!4v1503080748334\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
   }
   if (inp =="SF"){
     console.log("heySF")
       $( "#maps" ).append("<iframe id=\"San Francisco\" src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d99835.80465118383!2d-121.52188944301807!3d38.55983433386281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfree+teen+clinics+in+sacramento!5e0!3m2!1sen!2sus!4v1503080748334\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
   }




}
