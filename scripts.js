const SUPABASE_URL = 'https://jaiuhqexudiobqochsei.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphaXVocWV4dWRpb2Jxb2Noc2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyODExNDcsImV4cCI6MjA2NTg1NzE0N30.11oBAt4u-iuIEX1IUyaxyLKsddZYDJ-oz2wihwzI4dg';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
console.log(supabaseClient);
async function obtenerEmpleados() {
    let { data: empleados, error } = await supabaseClient
    .from('empleado')
    .select('*');
    
    if (error) {
    console.error('Error al obtener los empleados:', error.message);
    return;
    }
  
    const container = document.getElementById('tabla-empleados');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(empleados[0]);

    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create body
    const tbody = document.createElement('tbody');
    empleados.forEach(item => {
      const row = document.createElement('tr');
      keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);

}

async function obtenerTareas() {
    let { data: empleados, error } = await supabaseClient
    .from('tarea')
    .select('*');
    
    if (error) {
    console.error('Error al obtener las tareas:', error.message);
    return;
    }
  
    const container = document.getElementById('tabla-tareas');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(empleados[0]);

    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    empleados.forEach(item => {
      const row = document.createElement('tr');
      keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);

}

async function obtenerTiene() {
    let { data: empleados, error } = await supabaseClient
    .from('tiene')
    .select('*');
    
    if (error) {
    console.error('Error al obtener las asignaciones:', error.message);
    return;
    }
  
    const container = document.getElementById('tabla-tiene');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(empleados[0]);

    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    empleados.forEach(item => {
      const row = document.createElement('tr');
      keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);

}

obtenerEmpleados();
obtenerTareas();
obtenerTiene();
