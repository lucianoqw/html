//aqui eu tenho comentarios em linha
/*
aqui eu tenho comentariomulti linha 
o codigo abaixo escreve alguma mensagem no davtools */
console.log('bem vindo ao starter')

/*cadeia de caracteres 
"" //aspas duplas
''// aspas simples 
``// template literals ou template strings

number
  * números
 33// inteiros 
 12,5// reais-floot
 NaN// Not a number
 Infinity// infinito
      
  boolean
   * somente 2 valores 
  true// verdadeiro 
  false// falso

  undefined
   *indefinido
 null
  *nulo 
  *objeto que nao possui nada dentro 


  Object
    *objeto
    *propriedades/atributos
    *funcionalidades / métodos
    {propriedade: "valor"}

    array( vetores)
    * uma lista 
    *agrupamento de dado
    ["luciano", 36]*/


/*
 #tipos de dados
 conforme o ecmascript standard temos 9 tipos dedados:
 * data types
  primitive/ primitive value
  * strutural
  * strutural primitive
# primitivos
* string
* number
* boolean
* undeined
* symbol
* bigtnt
#Estruturais
* object
 * Array
 * map
 * set
 * date
 * ...
# function
# primitivo estutural / strutural root primitive
* null */

/*# VARIÁVEIS

*Nomes simbólicos para receberalgum valor
*Atalhos de código
*Identificadores
* 3 palavras reservadas para criar uma variável
 * var
 * let
 * const*/

/*var é global e, tambem local
console.log(>existe x antes do bloco)
{
  var x =0

}
funcioa tanto dentro quanto fora das chaves 
*/

/* const e let sao locais e só funcionam no escopo onde 
foi criado 

let y=0
console.log('>existe y antes' ,y)




## Para criar nomes 
*js é case-sensitive (sensível ao caso)
*js aceita a cadeia de caracteres unicode
- Posso
 * Iniciar com esses caracteres especiais $ _
 * Iniciar com letras 
 * colocar acentos
 * letras maísculas e minúsculas fazem diferença 
- nao posso:
 * Iniciar com números 
 * colocar espaços vazios no nome 
- ideal:
 *criar nomes que fazem sentido 
 * que explique o que a variável e ou faz 
 * camelcase
 * snake_case
 * Escrever em inglês