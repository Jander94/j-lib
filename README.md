# J-lib

J-lib é uma biblioteca de componentes reutilizáveis em React para facilitar o desenvolvimento de interfaces de usuário. Ela oferece uma série de componentes configuráveis para simplificar a criação de interfaces flexíveis e acessíveis.

## Instalação

Para adicionar J-lib ao seu projeto, execute o seguinte comando no terminal:

```bash
npm install @janderdev/j-lib
# ou
yarn add @janderdev/j-lib
```
## Componentes

### J_input
O J_input é um campo de entrada altamente configurável com diversos adornos à esquerda e à direita, além de várias opções de personalização.

## Uso
Aqui está um exemplo de como usar o componente J_input da biblioteca:

```tsx
import React, { useState } from "react";
import { J_Input } from "@janderdev/j-lib";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: string) => {
    setInputValue(e);
  };

  const changeRightAdornment = () => {
    alert("Pesquisando por: " + inputValue);
  };

  return (
    <div>
      <J_Input
        label="Pesquisar"
        value={inputValue}
        rightAdornment
        rightAdornmentText="🔎"
        change={handleChange}
        rightAdornmentClick={changeRightAdornment}
        rightAdornmentStyleProps={{ backgroundColor: "lightgray" }}
      />
    </div>
  );
}
```

| Nome do Parâmetro    | Tipo                | Descrição                                                                 |
|----------------------|---------------------|---------------------------------------------------------------------------|
| `label`              | `string`            | O texto exibido como rótulo do input.                                     |
| `required`           | `boolean`           | Exibe um * se o campo é obrigatório.                                      |
| `value`              | `string`            | O valor atual do input.                                                   |
| `change`             | `function`          | Função de callback chamada quando o valor do input é alterado.            |
| `placeholder`        | `string`            | Texto exibido quando o input está vazio.                                  |
| `widthInput`         | `number`            | Largura do input.                                                         |
| `disabled`           | `boolean`           | Define se o input está desabilitado.                                      |
| `leftAdornment`      | `boolean`           | Exibe um adorno à esquerda do input.                                      |
| `rightAdornment`     | `boolean`           | Exibe um adorno à direita do input.                                       |
| `leftAdornmentText`  | `string`            | Texto exibido no adorno esquerdo.                                         |
| `rightAdornmentText` | `string`            | Texto exibido no adorno direito.                                          |
| `leftAdornmentIcon`  | `ReactNode`         | Ícone exibido no adorno esquerdo.                                         |
| `rightAdornmentIcon` | `ReactNode`         | Ícone exibido no adorno direito.                                          |
| `leftAdornmentClick` | `function`          | Função de callback chamada ao clicar no adorno esquerdo.                  |
| `rightAdornmentClick`| `function`          | Função de callback chamada ao clicar no adorno direito.                   |
| `min`                | `number`            | Valor mínimo do input.                                                    |
| `max`                | `number`            | Valor máximo do input.                                                    |
| `minLength`          | `number`            | Comprimento mínimo do valor inserido.                                     |
| `maxLength`          | `number`            | Comprimento máximo do valor inserido.                                     |
| `multiline`          | `boolean`           | Define se o input é multilinha (texto).                                   |
| `center`             | `boolean`           | Define se o texto no input deve ser centralizado.                         |
| `inputStyleProps`    | `React.CSSProperties`| Estilos adicionais para o input.                                         |
| `labelStyleProps`    | `React.CSSProperties`| Estilos adicionais para a label.                                         |
| `leftAdornmentStyleProps` | `React.CSSProperties`| Estilos adicionais para o adorno esquerdo.                          |
| `rightAdornmentStyleProps`| `React.CSSProperties`| Estilos adicionais para o adorno direito.                           |
| `mask`                    | `string`             | Define a máscara de formatação do campo. Utilize `#` para representar dígitos numéricos. Exemplo: `(##) #####-####` para um número de telefone.                                                |
