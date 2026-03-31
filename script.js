import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://tchvrcpeqrgnckhfuwyw.supabase.co'
const supabaseKey = 'sb_publishable_ewl4WiPBDD0zqfp4Px0FMQ_VhWVYDmp'

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