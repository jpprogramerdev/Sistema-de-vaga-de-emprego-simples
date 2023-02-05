function sistema(){    
    let opcao  = 0
    const vagas = []

    function menu(){
        let escolha = Number(prompt(
            "Bem vindo ao sistema de vaga de emprego\n" + 
            "1 - Vagas disponíveis\n" + 
            "2 - Criar nova vaga\n" + 
            "3 - Visualizar vaga\n" + 
            "4 - Inscrever candidato a uma vaga\n" + 
            "5 - Excluir vaga\n" + 
            "6 - Sair" 
                ))
        return escolha  
        }

    /*Verificação de menu*/ 
    do {
        opcao = menu()
            
        switch (opcao) {
            case 1:
                vagaDisponivel()
            break

            case 2:
                novaVaga()
            break

            case 3:
                exibirVaga()
            break

            case 4:
                inscreverCandidato()
            break

            case 5:
                excluirVaga()
            break

            case 6:
                alert("Saindo do sistema")
            break

            default:
                alert("Opção inválida")
            break;
            }
        } while (opcao !=6);

    /*Funções menun*/    
    function vagaDisponivel(){
        let msg = ""
        if(vagas.length === 0){
            alert("Sem vagas disponiveis, volte mais tarde.")
        }else{
            for(let i = 0; i < vagas.length; i++){//pegar cada vaga e colocar numa msg
                msg += `${i + 1})Nome da vaga: ${vagas[i].nomeVaga}\n` +
                        `Identificação da vaga: ${i}\n` + 
                        `Descrição da vaga: ${vagas[i].descriçãoVaga}\n` +
                        `Data da vaga: ${vagas[i].dataVaga}\n` +
                        `Quantidade de candidatos inscrito: ${vagas[i].inscritosVaga.length}\n\n\n` 
            }
            alert(msg)
        }
    }

    function novaVaga(){
        do{
            vagas.push(detalhe = {
                nomeVaga: prompt("Qual o nome da vaga"),
                descriçãoVaga: prompt("De uma breve descrição sobre a vaga"),
                dataVaga: prompt("Qual a data limite da vaga"),
                inscritosVaga: []
            })

            const confirmacao = (confirm(
                "As informçãoes está corretas?\n"+
                "Nome da vaga: " + detalhe.nomeVaga + "\n" +
                "Descrição da vaga: " + detalhe.descriçãoVaga + "\n" +
                "Data da vaga: " + detalhe.dataVaga 
                ))
        }while(confirmacao)

    }

    function exibirVaga(){
        let idVaga = Number(prompt("Qual o id da vaga que deseja pesquisar"))
        const vaga = vagas[idVaga]//para facilitar a manipulação do array, em vez de modificar no array inteiro, copio a vaga que está em um certo indice e aplico em uma variavel
        const listaCandidatos = vaga.inscritosVaga.reduce((textoFinal, candidato) =>textoFinal + "\n - " + candidato, "")
        alert(`Nome da vaga: ${vaga.nomeVaga}\n` +
        `Descrição da vaga: ${vaga.descriçãoVaga}\n` +
        `Data da vaga: ${vaga.dataVaga}\n` +
        `Quantidade de candidatos inscrito: ${vaga.inscritosVaga.length}\n`+
        `Candidatos inscritos: ${listaCandidatos}` )

    }

    function inscreverCandidato(){
        if(vagas.length === 0){
            alert("Sem vagas disponiveis, volte mais tarde.")
        }else{
            let nome = (prompt("Qual o nome do candidato?"))
            let idVaga = Number(prompt("Para qual vaga deseja inscrever esse candidato?"))
            const vaga = vagas[idVaga]
            const confirmacao = confirm(`Adicionar ${nome} para a vaga?\n` +
                    `Nome da vaga: ${vagas[idVaga].nomeVaga}\n` +
                    `Descrição da vaga: ${vagas[idVaga].descriçãoVaga}\n` +
                    `Data da vaga: ${vagas[idVaga].dataVaga}\n`
                )
            if(confirmacao){//se os dados tiverem corretos, irá fazer isso, caso contrario, irá voltar para o menu
                vaga.inscritosVaga.push(nome)
                alert(`Candidato ${nome} cadastrado`)   
                }
        }
    }

    function excluirVaga() {
        const indice = prompt("Informe o índice da vaga que deseja excluir:")
        const vaga = vagas[indice]
      
        const confirmacao = confirm(`Excluir vaga?\n` +
        `Nome da vaga: ${vaga.nomeVaga}\n` +
        `Descrição da vaga: ${vaga.descriçãoVaga}\n` +
        `Data da vaga: ${vaga.dataVaga}\n`)
      
        if(confirmacao){//se os dados tiverem corretos, irá fazer isso, caso contrario, irá voltar para o menu
          vagas.splice(indice, 1)
          alert("Vaga excluída.")
        }
      }

}