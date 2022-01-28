var resp = document.getElementById('res')
function calcular(){
    var opcao = prompt('Deseja calcular a médias dos alunos?')
    while(opcao == 'sim'){
        
        var nome = prompt('Digite o nome do aluno')
        
        
        var n1 = Number(prompt('Digite a primeira nota'))
        var n2 = Number(prompt('Digite a segunda nota'))
        var n3 = Number(prompt('Digite a terceira nota'))
        var n4 = Number(prompt('Digite a quarta nota'))

        var media = (n1 + n2 + n3 + n4)/4;
        resp.innerText = media

        if(media >5){
            resp.innerText = `O aluno ${nome} passou com a media ${media}`
        }else{
            `Você reprovou com a média ${media}`
        }

          
        
        opcao = prompt('Deseja continuar')
        
    }
    
}