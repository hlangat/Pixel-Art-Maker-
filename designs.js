$(function () {

// Select input
let height = $('#inputHeight');
let width = $('#inputWidth');

// Select color 
let colorPicker = $('#colorPicker');

// Select canvas
const canvas = $('#pixelCanvas');

// Make Grid when user inputs sizes
function makeGrid() {
canvas.find('tbody').remove();

// Submits the user's inputs to make the Grid
let gridHeight = $('#inputHeight').val();
let gridWidth = $('#inputWidth').val();

// Adds the rows and columns 
canvas.append('<tbody></tbody>');

let canvasBody = canvas.find('tbody');

// Draw rows
for (let x = 0; x < gridWidth; x++) {
    canvasBody.append('<tr></tr>');
}

// Draw columns
for (y = 0; y < gridHeight; y++) {
    canvas.find('tr').append('<td></td>');
}
}

cell = canvas.find('td');

/**cell.click(function() {
    var color = $('#colorPicker').val();
    $(this).attr('background-color', color);
});**/

// The color to be shown when the user selects
canvas.on('click', "td", function(){
    var color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
});


$(document).ready(function () {
// Click the submit button to make the Grid
$('button[type="button"]').on('click', function (e) {
e.preventDefault();
    makeGrid();
});

});

/**let addEvent = function(cell){
    cell.addEventListener('click', function(){
        cell.style.bgcolor = color.val();
    });
}**/
$("td").click(function() {
    $(this).css("bgcolor", color.val());
  });
});

//Animation
$('#pixelArtMaker').addClass('animated infinite shake');
$('#pixelArtTop').addClass('animated bounceInDown');
$('#pixelArtDown').addClass('animated bounceInUp')
