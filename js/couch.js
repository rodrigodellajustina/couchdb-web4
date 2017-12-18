const const_url      		 = "http://localhost:5984"
const const_colecao_servico  = "csservico"
const const_colecao_veiculo  = "csveiculo"
var i=0;

function f_create_veiculo(){

    //função responsável por cadastrar veiculo

    alert("Função para armazenar o veiculo");

    // atribuindo valores as variáveis
    cDescricaoVeiculo = document.getElementById("desc_veiculo").value;
    cPlacaVeiculo     = document.getElementById("placa_veiculo").value;
    cCidadeVeiculo    = document.getElementById("sel_cidade").value;
    cAnoFabricacao    = document.getElementById("ano_fabricacao").value;
	cAnoModelo        = document.getElementById("ano_modelo").value;

    //Código 01
    //Esse código pode ser removido, apenas para mostrar a comunicação entre front
    //e back-end
    alert("Descrição do veículo ("+cDescricaoVeiculo+")");
    alert("Placa do veículo ("+cPlacaVeiculo+")");
    alert("Cidade do veículo ("+cCidadeVeiculo+")");
    alert("Ano fabricação ("+cAnoFabricacao+")");
	alert("Ano modelo ("+cAnoModelo+")");

    //Código 02
    //Desenvolver Código para armazenar usando REST no CouchDB.
    //Desenvolver aqui o código para avaliação.




    //Se tudo ocorrer ok exibir a seguinte mensagem
    alert("Veículo registrado com sucesso");
    
    //limpa os campos
	document.getElementById("desc_veiculo").value = "";
    document.getElementById("placa_veiculo").value = "";
    document.getElementById("sel_cidade").value = "";
    document.getElementById("ano_fabricacao").value = "";
	document.getElementById("ano_modelo").value = "";
}

function f_create_servico(){

    //função responsável por cadastrar serviço

    alert("Função para armazenar o serviço");

    // atribuindo valores as variáveis
    cDescricaoServico = document.getElementById("desc_service").value;
    cPrecoServico     = document.getElementById("preco_servico").value;
	cTipoServico 	  = document.getElementById("tipo_servico").value;


    //Código 01
    //Esse código pode ser removido, apenas para mostrar a comunicação entre front
    //e back-end
    alert("Descrição do Serviço ("+cDescricaoServico+")");
    alert("Preço do Serviço ("+cPrecoServico+")");
    alert("Tipo do Serviço ("+cTipoServico+")");
    
    //Código 02
    //Desenvolver Código para armazenar usando REST no CouchDB.
    //Desenvolver aqui o código para avaliação.




    //Se tudo ocorrer ok exibir a seguinte mensagem
    alert("Serviço registrado com sucesso");
    
    //limpa os campos
	document.getElementById("desc_service").value = "";
    document.getElementById("preco_servico").value = "0";
    document.getElementById("tipo_servico").value = "";
    
}


function f_listar_veiculos(){

    alert("Acessou a função de listar veiculos");

    // Função responsável ler todos os veiculos cadastrados

      //EXEMPLO
      $('#addr'+i).html("<td><input name='veiculo"+i+"' type='text' placeholder='veiculo'  value='"+"FORD DOCUS (EXEMPLO)"+"'     class='form-control input-md' readonly/> </td>" + 
      "<td><input name='placa"  +i+"' type='text' placeholder='placa' value='"+"AAK-2882"+"' class='form-control input-md' readonly></td> " +
      "<td><input name='cidade"  +i+"' type='text' placeholder='cidade' value='"+"Francisco Beltrão"+"' class='form-control input-md' readonly></td> " + 
      "<td><input name='ano_fab"  +i+"' type='text' placeholder='ano_fab' value='"+"2017"+"' class='form-control input-md' readonly></td> ");

      $('#tab_veculos').append('<tr id="addr'+(i+1)+'"></tr>');
      i++;


}


function f_listar_servicos(){

    alert("Acessou a função de listar servicos");

    // Função responsável ler todos os serviços cadastrados

      //EXEMPLO SERVICO
      $('#addr'+i).html("<td><input name='servico"+i+"' type='text' placeholder='servico'  value='"+"REPARAR VALVULA X (EXEMPLO)"+"'     class='form-control input-md' readonly/> </td>" + 
      "<td><input name='preco"  +i+"' type='number' placeholder='preco' value='"+"10.23"+"' class='form-control input-md' readonly></td> " +
      "<td><input name='tipo_servico"  +i+"' type='text' placeholder='tipo_servico' value='"+"Reparo"+"' class='form-control input-md' readonly></td>");

      $('#tab_veculos').append('<tr id="addr'+(i+1)+'"></tr>');
      i++;


}