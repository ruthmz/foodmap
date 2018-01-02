$(document).ready(function() {
  $('.search').keyup(function() {
    var nombre = $(this).val();
    console.log(nombre);
  });

  var place = Object.keys(data);
  var place2 = Object.values(data);
  var miraflores = Object.keys(data['Miraflores']);
  var isidro = Object.keys(data['San Isidro']);
  var surco = Object.keys(data['Surco']);

  console.log(miraflores);
  var button = '<p type="button" class="btn btn-primary btn-style" data-toggle="modal" data-target="#miModal">Hola Mundo</p>';
  // Cuando selecciona Miraflores
  $('.miraflores').click(function(event) {
    $('.image-background1').addClass('miraflores-1').html('<p type="button" class="btn btn-primary btn-style" data-toggle="modal" data-target="#miModal" id= "myBtn"></p>');
    $('.btn-style').append(miraflores[0]);
    $('.image-background1').removeClass('isidro-1');
    $('.image-background2').removeClass('isidro-2');
    $('.image-background1').removeClass('surco-1');
    $('.image-background2').removeClass('surco-2');
    $('.image-background2').addClass('miraflores-2').html('<p type="button" class="btn btn-primary btn-style2" data-toggle="modal" data-target="#miModal2" id= "myBtn2"></p>');
    $('.btn-style2').append(miraflores[1]);
    // Agregando modal cuando se seleccione la opción de miraflores
    $('.image-background1').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal');
      $('.modal-title').text(miraflores[0]);
      $('.modal-body').html('Dirección : ' + place2[0]['Pescados Capitales'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[0]['Pescados Capitales'][0]['descripción']);
    }); 
    $('.image-background2').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal2');
      $('.modal-title').text(miraflores[1]);
      $('.modal-body').html('Dirección : ' + place2[0]['El Rocoto'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[0]['El Rocoto'][0]['descripción']);
    });  
  });
  // Cuando selecciona San Isidro
  $('.san-isidro').click(function(event) {
    $('.image-background1').addClass('isidro-1').html('<p type="button" class="btn btn-primary btn-style" data-toggle="modal" data-target="#miModal" id= "myBtn"></p>');
    $('.btn-style').append(isidro[0]);
    $('.image-background1').removeClass('miraflores-1');
    $('.image-background2').removeClass('miraflores-2');
    $('.image-background1').removeClass('surco-1');
    $('.image-background2').removeClass('surco-2');
    $('.image-background2').addClass('isidro-2').html('<p type="button" class="btn btn-primary btn-style2" data-toggle="modal" data-target="#miModal2" id= "myBtn2"></p>');
    $('.btn-style2').append(isidro[1]);
    // Agregando modal cuando se seleccione la opción de San Isidro

    $('.image-background1').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal');
      $('.modal-title').text(isidro[0]);
      $('.modal-body').html('Dirección : ' + place2[1]['Aromas Peruanos'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[1]['Aromas Peruanos'][0]['descripción']);
    });
    $('.image-background2').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal2');
      $('.modal-title').text(isidro[1]);
      $('.modal-body').html('Dirección : ' + place2[1]['Restaurante 300'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[1]['Restaurante 300'][0]['descripción']);
    });  
  });
  // Cuando selecciona Surco
  $('.surco').click(function(event) {
    $('.image-background1').addClass('surco-1').html('<p type="button" class="btn btn-primary btn-style" data-toggle="modal" data-target="#miModal" id= "myBtn"></p>');
    $('.btn-style').append(surco[0]);
    $('.image-background1').removeClass('miraflores-1');
    $('.image-background2').removeClass('miraflores-2');
    $('.image-background1').removeClass('isidro-1');
    $('.image-background2').removeClass('isidro-2');
    $('.image-background2').addClass('surco-2').html('<p type="button" class="btn btn-primary btn-style2" data-toggle="modal" data-target="#miModal2" id= "myBtn2"></p>');
    $('.btn-style2').append(surco[1]);
    // Agregando modal cuando se seleccione la opción de Surco
    $('.image-background1').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal');
      $('.modal-title').text(surco[0]);
      $('.modal-body').html('Dirección : ' + place2[2]['Santo Pez'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[2]['Santo Pez'][0]['descripción']);
    });
    $('.image-background2').on('click', function(event) {
      $('.modal-style').attr('id', 'miModal2');
      $('.modal-title').text(surco[1]);
      $('.modal-body').html('Dirección : ' + place2[2]['Il Monte'][0]['dirección'] + '<br>');
      $('.modal-body').append('<br>' + 'Descripción : ' + '<br>' + place2[2]['Il Monte'][0]['descripción']);
    });  
  });
});
