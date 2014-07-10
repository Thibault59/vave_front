    function AddOneRow(){

var newRow = document.getElementById('mytable').insertRow(-1);

var newCell = newRow.insertCell(0);

newCell.innerHTML = '<input type="checkbox">'

var newCell = newRow.insertCell(1);

newCell.innerHTML = '<input type="text" name="firstname" value="" placeholder=" " >';

newCell = newRow.insertCell(2);

newCell.innerHTML = '<input type="text" name="firstname" value="" placeholder=" " >';

newCell = newRow.insertCell(3);

newCell.innerHTML = '<input type="text" name="firstname" value="" placeholder=" " >';

newCell = newRow.insertCell(4);

newCell.innerHTML = 'disconnected';

newCell = newRow.insertCell(5);

newCell.innerHTML = '<button class="btn btn-default" >Connect</button>';

}

     function DeleteOneRow() {
            try {
            var table = document.getElementById('mytable');
            var rowCount = table.rows.length;
 
            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
 
 
            }
            }catch(e) {
                alert(e);
            }
        }

