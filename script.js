import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://tchvrcpeqrgnckhfuwyw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaHZyY3BlcXJnbmNraGZ1d3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzUzMzEsImV4cCI6MjA5MDU1MTMzMX0.8zjyWNv13BhUHxyuAoEud4mTYncBJa4OIa9Vj19RURw'

const supabase = createClient(supabaseUrl, supabaseKey)

document.getElementById('formPaciente').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;

  if (!nome) {
    alert("Nome é obrigatório!");
    return;
  }

  const { error } = await supabase
    .from('pacientes')
    .insert([{ nome, celular, email }]);

  if (error) {
    alert('Erro ao cadastrar!');
  } else {
    alert('Paciente cadastrado com sucesso!');
    document.getElementById('formPaciente').reset();
  }
});