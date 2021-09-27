function Cadastrar () {
  var nome = document.getElementById('idNome');
  var cpf = document.getElementById('idCpf');
  var uf = document.getElementById('uf');
  var cidade = document.getElementById('idCidade');
  var rua = document.getElementById('idRua');
  var celular = document.getElementById('idCelular');
  var nu = document.getElementById('idNu');
  

  if(nome.value.length < 7){
      alert('Obrigatório informar o nome completo!!');
      nome.focus();
      return false;
  }
  
  else if(cpf.value.length < 11) {
      alert('Obrigatório informar o CPF!!');
      cpf.focus();
      return false;
  }

  else if(uf.selectedIndex == 0){
      alert('Obrigatório informar o Estado!!');
      uf.focus();
      return false;
  }

  else if(cidade.value.length < 2) {
      alert('Obrigatório informar a Cidade!!');
      cidade.focus();
      return false;
  }

  else if(rua.value.length < 2) {
      alert('Obrigatório informar o nome da rua!!');
      rua.focus();
      return false;
  }

  else if(nu.value.length < 1) {
      alert('Obrigatório informar o número da residência!!');
      nu.focus();
      return false;
  }

  else if(celular.value.length < 14) {
      alert('Obrigatório informar o número do celular!!');
      celular.focus();
      return false;
  }
}
 
function funcao1()
{
var x;
var r=confirm("Antes de confirmar, verifique se o formulário foi corretamente preenchido!");
if (r==true)
  {
  x="Seu cadastro foi efetuado com sucesso!";
  }
else
  {
  x="Corrija seu cadastro e tente novamente!";
  }
document.getElementById("demo").innerHTML=x;
}
